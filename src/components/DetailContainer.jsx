import Detail from './Detail';
// importar los metodos para acceder a los documentos de la base de datos
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';

const DetailContainer = ({ id }) => {
    // necesitamos darle un estado a la info de la db
    const [item, setItem] = useState(null)

    useEffect(() => {
        // crear la instancia de base de datos
        const db = getFirestore();
        // obtener referencia del doc, se debe agregar la instancia de db, la coleccion ("products")
        // y el documento al q se trata de ingresar por su hash
        const itemRef = doc(db, "products", id)
        // obtener el doc a traves de su referencia, es una promesa!
        getDoc(itemRef)
            .then((snapshot) => setItem({
                id: snapshot.id,
                ...snapshot.data()
            }))
            .catch((err) => console.log(err))

    }, [])
    return <div>
        {
            item !== null &&
            <Detail item={item} />
        }
    </div>
}

export default DetailContainer;