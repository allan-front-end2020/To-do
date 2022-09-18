function AnotherComponent (){

  const handleClick = () => {

    console.log('clicou no buttan')

  }


    return(
    <div>
      <p>Segundo componente</p>
      <button onClick={handleClick}> evento de click</button>
      <hr />
      <button onClick={()=>console.log('evento dentro do elemento') }>2 evento</button>

    </div>
    )
}


export default AnotherComponent 