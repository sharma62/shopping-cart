import ProductCard from "./ProductCard"
const product = [
    { id: 1, name: "laptop", price: 800 },
    { id: 2, name: "Headphone", price: 700 },
    { id: 3, name: "Earburds", price: 500 },
    { id: 4, name: "Earburds wireless", price: 300 },
    { id: 5, name: "television", price: 3100 },
    { id: 6, name: "iron", price: 300 },
]
export default function ProductList() {
    return (
        <div className="row">
            {product.map((p) => (

                <div key={p.id} className="col-md-3 mb-4">
                    <ProductCard product={p} />
                </div>
            ))}
        </div>

    )
}