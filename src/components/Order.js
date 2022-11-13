import React from 'react'
import './Order.css'
import StatusLabel from './StatusLabel'

function Order(props) {
    const data = props.data;
    function DateToString(myDate) {
        const yyyy = myDate.getFullYear();
        let mm = myDate.getMonth() + 1; // Months start at 0!
        let dd = myDate.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedDate = dd + '/' + mm + '/' + yyyy;
        return formattedDate;
    }

    return (
        <div className='Order'>
            <span className='order-col c1'>{DateToString(data.orderDate)}</span>
            <div className='order-col c2 product-container'>
                <img className='product-img' src={data.productImg}/>
                <span className='product-name'>{data.productName}</span>
            </div>
            <span className='order-col c3'>{data.count}</span>
            <span className='order-col c4'>{data.total} VNĐ</span>
            <span className='order-col c5'>
                <StatusLabel type={data.status} />
            </span>
        </div>
    )
}

export default Order