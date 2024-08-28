import { firestore } from "../db/firebase"; 
import { collection, addDoc } from "firebase/firestore";

const PostInToDb = (table, keyOfTable, value) => {

    const sendToDb = async () => {
        try {
            await addDoc(collection(firestore, table), { [keyOfTable] : value });
        } catch (error) {
            console.error('Erro ao adicionar documento:', error);
        }
    }
    sendToDb()

} 

export default PostInToDb