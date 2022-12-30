import React, { useEffect, useState } from "react";
import "./SelectTypeDialog.css";
import axios from "axios";

const SelectTypeDialog = ({ productId, closeFunction }) => {
    console.log("productId: ", productId);
    // productId = "63ae92e236aeb06002c3b800";

    const [selectedType, setSelectedType] = useState("");
    const [typeData, setTypeData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/colors", {
                params: {
                    productId: productId,
                },
            })
            .then((res) => {
                setTypeData(res.data.colors);
                if (res.data.colors.length > 0)
                    setSelectedType(res.data.colors[0].name);
            })
            .catch((err) => console.log("type error", err));
    }, []);

    return (
        <div className="SelectypeDialog">
            <div className="select-type-container">
                <span>Vui lòng chọn phân loại hàng:</span>
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    {typeData?.map((item) => (
                        <option value={item.name}>{item.name}</option>
                    ))}
                </select>
                <div className="buttons">
                    <button className="yes-button" onClick={() => {}}>
                        Đồng ý
                    </button>
                    <button className="no-button" onClick={closeFunction}>
                        Huỷ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectTypeDialog;
