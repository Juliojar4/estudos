import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ajuste o caminho conforme necessário

const adicionarDocumento = async () => {
  try {
    const docRef = await addDoc(collection(db, 'nome_projeto'), {
      nome: 'Exemplo',
    });
    console.log('Documento adicionado com ID:', docRef.id);
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
  }
};

export default adicionarDocumento