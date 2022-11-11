import React from 'react'
import './Order.css'
import StatusLabel from './StatusLabel'

function Order(props) {
    const data = props.data;
    return (
        <div className='Order'>
            <span className='order-col c1'>{data.orderDate}</span>
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