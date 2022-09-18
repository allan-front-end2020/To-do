function RenderComponente (){


  const x = 10


    return(
        <>
        {x > 9 && <p> O numero é maior que 10</p>}
        <p> If else em React</p>
        {x > 9 ? <p>x é um número alto</p> : <p> x não é um numero alto</p>}
        </>
    )
}

export default RenderComponente
