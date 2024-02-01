import { createContext, useContext, useReducer } from 'react';

const LivrosContext = createContext(null);

const LivrosDespachoContext = createContext(null);

export function LivrosProvider({ children }) {
    const [livros, despacho] = useReducer(
        livrosReducer,
        inicialLivros, 
        // firstLivros
      );

      return (
    <LivrosContext.Provider value={livros}>
      <LivrosDespachoContext.Provider value={despacho}>
        {/* <AddContext.Provider value={funcs}> */}

        {children}
        {/* </AddContext.Provider> */}
         </LivrosDespachoContext.Provider>
    </LivrosContext.Provider>
      );
}

export function useLivros() {
    return useContext(LivrosContext);
}

export function useLivrosDespacho() {
    return useContext(LivrosDespachoContext);
}

function livrosReducer(livros, action) {
    switch (action.type) {
      case 'added': {
        return [...livros, {
          id: action.id,
          text: action.text,
          done: false
        }];
      }
      case 'changed': {
        return livros.map(t => {
          if (t.id === action.livro.id) {
            return action.livro;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return livros.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Ação não encontrada: ' + action.type);
      }
    }
  }
  
  const inicialLivrosOld = [
    { id: 0, autor: 'Nietzsche', text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];
  
  const inicialLivros = [
    {
        id: 0,
        titulo: 'Assim Falou Zaratustra',
        text:  'Nietzsche',
        autor: 'Nietzsche',
        done: false,
        capa: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/mp_876063f00aab1a83dff09370e03736ec.jpg'
      },
    {
        id: 1,
        titulo: 'O lado feio do amor',
        text: 'Collen Hoover',
        autor: 'Collen Hoover',
        done: false,
        capa: 'https://d38h3sy5jr28pf.cloudfront.net/capas-livros/9788501112514-colleen-hoover-priscila-catao-e-assim-que-acaba-2709596205.jpg'
    },
    {
        id: 2,
        titulo: 'Dicionário Árabe',
        text: 'Autor Árabe',
        autor: 'Autor Árabe',
        done: false,
        capa: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fedipro.com.br%2Fwp-content%2Fuploads%2F2020%2F07%2Fdicionario-portugues-arabe-arabe-portugues.jpg&tbnid=eiSfMLBZX20LIM&vet=12ahUKEwjZseD2uvuDAxWyNbkGHYxRD6UQMygCegQIARBK..i&imgrefurl=https%3A%2F%2Fedipro.com.br%2Flivro%2Fdicionario-portugues-arabe-arabe-portugues%2F&docid=ITE3Ibeflrw2MM&w=700&h=1096&q=dicionario%20arabe&ved=2ahUKEwjZseD2uvuDAxWyNbkGHYxRD6UQMygCegQIARBK'
    },
    {
        id: 3,
        titulo: 'Verity',
        text: 'Collen Hoover',
        autor: 'Collen Hoover',
        done: false,
        capa: 'https://i0.wp.com/www.thenerddaily.com/wp-content/uploads/2019/01/Verity-by-Colleen-Hoover.jpg'
    }
  ]
