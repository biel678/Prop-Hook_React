import { Fragment } from "react"
import Card from "./components/Card/Card"
import Contador from "./components/Contador/Contador"
import Task from "./components/Task/Task"

function App() {
  return (
    <Fragment>
    
    <Card titulo="React" descricao="Biblioteca com JS"/>
    <Card titulo="Spring" descricao="Framework de Java"/> 
   
    <Contador />

    <Task/>

    </Fragment>
  )
}

export default App
