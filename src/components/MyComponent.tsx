import { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <h1>{text}</h1>
     
      <button onClick={() =>
         setText('Estamos usando context api')
         }>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;