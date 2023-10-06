import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return <>
        <h3>Lista</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {
                items.map(item => {
                    return <div key={item.id} style={{ border: "1px solid green", width: "fit-content", padding: "1rem 2rem" }}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button><Link to={`/details/${item.id}`}>Ver mas</Link></button>
                    </div>
                })
            }
        </div>
    </>
}

export default ItemList;