import { useContext } from 'react';
import Produto from './components/Produto';
import {context} from './context';

function App() {
  const {produto, setProduto} = useContext(context)

  function handleChangeProduct() {
    setProduto({...produto, 
      name: 'Geladeira', 
      preco: 3000, 
      descricao: 'Otimo produto'
    });
  }

  return (
    <div>
      <button onClick={handleChangeProduct}>Atualiza Produto</button>
      <Produto />
    </div>
  )
}

export default App;
