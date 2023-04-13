import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link to='/'>Home</Link>
      <Link to='/company'>Empresa</Link>
      <Link to='/newproject'>Novo Projeto</Link>
      <Link to='/contact'>Contato</Link>
    </div>
  )
}

export default NavBar