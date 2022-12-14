const express = require("express");
const paypal = require("paypal-rest-sdk");
const fetch = require("node-fetch");
const router = express.Router();

paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
        "AVzq3CdL5rEqb-2lrJgU4Go3kR8yL64bJvkuPxRvdTMQ23qMk7jOzTecdvYTBJtvU1I-l1GGWviPg7A0",
    client_secret:
        "EMJGiioQ8O6YD4ILdl6RHF04RyWD6lluTPDBc9WfKvLGJqe51GREVh7FP4iKbdK_1IQhvXOS0M-sK5Jk",
});

async function changeVNDtoUSD(price) {
    var myHeaders = new fetch.Headers();
    myHeaders.append("apikey", "QtLDzaVstKqVq0HF4BUoR4AU9huLBF0q");

    var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
    };

    let re = 0;
    await fetch(
        "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=VND&amount=" +
            price,
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => (re = JSON.parse(result).result))
        .catch((error) => console.log("error", error));
    return re;
}

// ///////TEST////////
// const items [
//   // items
//   {
//      "name": "item1",
//      "sku": "001",
//      "currency": "USD",
//      "price": "1",
//      "quantity": "1",
//   },
// ]

///////////////////

changeVNDtoUSD(20000);
router.post("/pay", async function (req, res) {
    const { items } = req.body;
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        console.log("items: ", items[i]);
        if (items[i].price > 0)
            items[i].price = (await changeVNDtoUSD(items[i].price)).toFixed();
        else
            items[i].price =
                -1 * (await changeVNDtoUSD(Math.abs(items[i].price))).toFixed();
        totalPrice += items[i].price * items[i].quantity;
    }
    console.log(items);
    // const newPrice = await changeVNDtoUSD(price);
    var create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal",
        },
        redirect_urls: {
            return_url: "http://localhost:3000/order-paypal-completed",
            // cancel_url: "http://localhost:5000/api/payment_paypal/fail",
            cancel_url: "http://localhost:5300/login",
        },
        transactions: [
            {
                item_list: {
                    items: items,
                },
                amount: {
                    currency: "USD",
                    total: totalPrice,
                },
                description: "This is the payment description.",
            },
        ],
    };
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === "approval_url") {
                    //res.redirect(payment.links[i].href);
                    res.json({ link: payment.links[i].href });
                }
            }
        }
    });
});

router.get("/success", function (req, res) {
    console.log("SUCCESS");
    payerID = req.query.PayerID;
    var execute_payment_json = {
        payer_id: payerID,
        transactions: [
            {
                amount: {
                    currency: "USD",
                    total: 1,
                },
            },
        ],
    };

    var paymentId = req.query.paymentId;

    paypal.payment.execute(
        paymentId,
        execute_payment_json,
        function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log("Get Payment Response");
                console.log(JSON.stringify(payment));
            }
        }
    );
});
router.get("/fail", function (req, res) {});

module.exports = router;
