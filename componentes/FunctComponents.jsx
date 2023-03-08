import React, { useState } from 'react'

const FunctComponents = () => {
   const [estudiante, setEstudiante] = useState ({
    name:"Anabella" ,
    country: "Argentina"
   })
   const changeName =() =>{
    if (estudiante.name === "Anabella") setEstudiante ({...estudiante,name:"Julieta" })
    else setEstudiante ({...estudiante,name: "Anabella"})
        
    }

   
  return (
    <div>
       {/* 1- la condicion ? 2- se va ejucutar si es true : 3 - se va ejecutar si es false*/ }
    <h2>{estudiante.name}</h2>
    <button onClick={changeName}> Cambiar nombre</button>
    { estudiante.name === "Anabella"
    ?
    <h3> {estudiante.name}! Veo que eres buena en FrontEnd</h3>
    :
    <h4>{estudiante.name}! Buenisimo esos estilos css</h4>
    }
    </div>
  )
}

  
export default FunctComponents