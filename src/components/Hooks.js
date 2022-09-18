import { useState, useEffect } from 'react'

function Hooks (){
  
    let idade = 30

    const [ novaIdade, setNovaIdade] =useState(40)
    const changeAge =() =>{
        idade = 31
        console.log(idade)
    }
    const changeNewAge= ()=>{
        setNovaIdade(22)
    }


    useEffect(()=>{
        console.log('Testendo o useEfeet')

    })
    return(
        <>
        <p>Idade : {idade}</p>
        <button onClick={changeAge}> Mudar idade</button>

        <p>Idade : {novaIdade}</p>
        <button onClick={changeNewAge}> Mudar nova idade</button>
        </>
    )

}

export default Hooks