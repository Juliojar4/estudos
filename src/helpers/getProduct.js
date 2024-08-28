import { firestore } from "../db/firebase";
import { collection, getDocs } from "firebase/firestore";


const fetchProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'produto'));
        
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        return products;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
};

export default fetchProducts;