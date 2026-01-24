import { useState } from "react"
import { useCart } from "../context/CartContext"

export default function Cart() {
    const { cart,removeFromCart ,updateQty ,total} = useCart()
 
    return (
        <div className="container">
            <h2 className="mb-3">Your Cart</h2>
            {cart.length === 0 && <>
                <div className="alert alert-info">No items added</div>
            </>}

            {cart.length > 0 && <>
                <table className="table table-bordered align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>    
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            return (

                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>Rs {item.price}</td>
                                    <td style={{ width: "100px" }}>
                                        <input
                                            className="form-control text-center"
                                            min="1"
                                            type="number"
                                            value={item.qty}
                                            onChange={(e)=>updateQty(item.id, Number(e.target.value) )}
                                        />
                                    </td>
                                    <td>Rs {item.price * item.qty}</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm" onClick={()=>removeFromCart(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>        
                </table>
                <div className="text-end fw-bold fs-5">Total: Rs {total.toFixed(2)}</div>
              <button className="btn btn-primary offset-11 mt-4">Buy Now</button>
            </>}
        </div>
    )
}