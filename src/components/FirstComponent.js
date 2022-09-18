import AnotherComponent from "./AnotherComponent"
import styles from "./FirstComponent.module.css"

function FirstComponent (){
    return(
        <div className={styles.pc}>
        <h3> Meu  primeiro componente</h3>
         <AnotherComponent />
        </div>
    )
}

export default FirstComponent