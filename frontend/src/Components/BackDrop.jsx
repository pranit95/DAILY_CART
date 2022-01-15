import React from 'react'
import styles from "./Styles/BackDrop.module.css"


const BackDrop = ({show,click}) => {
    return show && (
        <div className={styles.backdrop} onClick={click}>
            
        </div>
    )
}

export default BackDrop
