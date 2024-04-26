import { useState } from 'react';
import './Contador.css'

function Contador() {
  // let valor: number = 0;

  const[valor, setValor] = useState(0);

  function somarMaisUm (){
    setValor(valor+1);
  }

  function somar(){
    setValor(valor+valor);
  }

  return (
    <div className="contador">

      <p>O valor é: {valor}</p>
      <button onClick={somarMaisUm}>Adicionar +1</button>


      <button className='cont2' onClick={somar}>Adicionar valor em {valor} </button>

    </div>
  )
}

export default Contador