import { useCart } from "../context/CartContext"

export default function ProductCard(props) {
     return (
        <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">${props.price}</p>
                <button className="btn btn-primary" >Add to Cart</button>
            </div>
        </div>
    )
}