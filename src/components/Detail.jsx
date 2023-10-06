const Details = ({ item }) => {
    return <div style={{ border: "1px solid green", width: "fit-content", padding: "1rem 2rem" }}>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
    </div>
}

export default Details;