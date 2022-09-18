 function List (){

 const itens =[ 
    
    {
    id:1,
     name: "allan"
    },

    {
        id:2,
         name: "Jose"
    },
    {
        id:3,
         name: "Rose"
    },
    {
        id:4,
         name: "pusk"
    },
 
]
    return(
        <>
         {itens.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>

         ))}


        </>
    )
 
}

export default List