import { useState } from "react";

function Home() {
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <Contador />
    </div>
  );
}

function Contador() {
  let [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}

export default Home;
