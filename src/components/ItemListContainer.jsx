import { useEffect, useState } from "react";
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const ItemColl = collection(db, "products");
        // para filtrar se puede usar query y where() y luego en getDocs en vez de pasarle la referencia de la
        // collecion, se para la query
        const q = query(ItemColl, where("price", "<", 40))

        // Ref de la coleccion (ItemColl) || query (q)
        getDocs(ItemColl)
            .then((snapshot) => {
                const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }));
                setItems(allData)
            })
            .catch(err => console.log(err))
    }, [])

    return <div>
        <h2>ola</h2>
        {
            items.length > 0 &&
            <ItemList items={items} />
        }

    </div>
}

export default ItemListContainer;