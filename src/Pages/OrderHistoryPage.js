import React from 'react'
import { Footer } from '../Footer'
import * as localStorageProxy from '../Util/LocalStorageProxy'
import './OrderHistoryPage.scss'

export const OrderHistoryPage = () => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    const orders = localStorageProxy.getOrders()
    let total = 0
    if (orders) {
        total = orders.map(i=> i.total).reduce((a,b)=> a+b, 0)
    }

    return (
        <div className = "OrderHistoryPage">
            <div className = "OrderHistoryPage_Header">
                Order History
            </div>
            <div className="OrderHistoryPage_Content">
                Grand Total: {formatter.format(total)} <br />
                Total Number of Orders: {orders && orders.length}
            </div>
            <div className="OrderHistoryPage_Content">
            {   
                orders && 
                orders.map(i => {
                    return <div key={i.id}>Order: {i.id} <br /> Date: {i.date} <br /> Total: {formatter.format(i.total)}
                        <br/>
                        {
                            i.items.map(k => {
                                return <div key={k.item}>&nbsp;&nbsp;&nbsp;{k.item} {k.qty} {formatter.format(k.price)} {formatter.format(k.subTotal)}</div>
                            })
                        }
                        <hr />
                    </div>
                })
            }
            </div>
            <br />
            <Footer />
        </div>
    )
}