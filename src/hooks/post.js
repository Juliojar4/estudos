// src/hooks/usePostInToDb.js
import { useDispatch } from 'react-redux';
import { sendMensage } from '../features/successInput/successInput';
import { firestore } from '../db/firebase';
import { collection, addDoc } from 'firebase/firestore';

const usePostInToDb = () => {
  const dispatch = useDispatch();

  const postInToDb = async (table, value) => {
    try {
      await addDoc(collection(firestore, table), { [table]: value });
      dispatch(sendMensage());
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
  };

  return postInToDb;
};

export default usePostInToDb;
