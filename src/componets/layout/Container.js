import React from 'react'
import styles from './Container.module.css'

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]} ${styles[props.customClass2]}`} >{props.children}</div>
  )
}

export default Container