import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

import styles from './Footer.module.css'
import logo from '../../img/costs_logo.png'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
      <Link to='/'>
          <img src={logo} alt='Logo Costs' />
        </Link>
        <ul>
          <li><FaFacebook /></li>
          <li><FaTwitter /></li>
          <li><FaGithub /></li>
          <li><FaLinkedin /></li>
        </ul>
        <p><span>Costs</span> &copy; 2023</p>
      </Container>
    </footer>
  )
}

export default Footer