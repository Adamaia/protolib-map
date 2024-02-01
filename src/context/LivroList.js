import { useState } from 'react';
import { useLivros, useLivrosDespacho } from './LivrosContext'

export default function LivroList() {
  const livros = useLivros();

  return (
    <ul>
      {livros.map(livro => (
        <li key={livro.id}>
          <Livro livro={livro} />
        </li>
      ))}
    </ul>
  );
}

function Livro({ livro }) {
  const [isEditing, setIsEditing] = useState(false);
  const despacho = useLivrosDespacho();
  let livroContent;
  if (isEditing) {
    livroContent = (
      <>
        <input
          value={livro.text}
          onChange={e => {
            despacho({
              type: 'changed',
              livro: {
                ...livro,
                text: e.target.value
              }
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          Salvar
        </button>
      </>
    );
  } else {
    livroContent = (
      <>
        {livro.text}
        <button onClick={() => setIsEditing(true)}>
          Edite
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={livro.done}
        onChange={e => {
          despacho({
            type: 'changed',
            livro: {
              ...livro,
              done: e.target.value
            }
          });
        }}
    />
      {livroContent}
      <button onClick={() => {
        despacho({
        type: 'deleted',
        id: livro.id
        });
      }}>
      Delete
      </button>
    </label>
  );
}
