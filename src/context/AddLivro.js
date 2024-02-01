import { useState } from 'react';
import { useLivrosDespacho } from './LivrosContext';


import { createContext, useContext, useReducer } from 'react';

const AddContext = createContext(null);

export default function AddLivro() {
  const [text, setText] = useState('');
  const despacho = useLivrosDespacho();
  return (
    <div>
      <input
        placeholder="Add livro"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        despacho({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Adicionar</button>
    </div>
  )
}

let nextId = 3