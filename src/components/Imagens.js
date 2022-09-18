import styles from './Imagens.module.css'


function Imagens (){
    return (
        <>
        <img src='allan22.jpg' 
        className={styles.ft} 
        alt='minha foto'
        onClick={()=>{console.log('clicou na foto')}}
        />
        </>
    )
}


export default Imagens