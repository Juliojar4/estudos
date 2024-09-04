import { firestore } from "../db/firebase"; 
import { collection, addDoc } from "firebase/firestore";

const PostInToDb = (table, keyOfTable, value) => {
    console.log(table);
    const sendToDb = async () => {
        try {
            await addDoc(collection(firestore, table), { [table] : value });
        } catch (error) {
            console.error('Erro ao adicionar documento:', error);
        }
    }
    sendToDb()

} 

export default PostInToDb;
