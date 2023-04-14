import React from 'react'

import styles from './Home.module.css'

import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_section}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Gerencie seus projetos em um lugar só!</p>
        <LinkButton to='/newproject' text="Criar Projeto" />
        <img src={savings} alt='Cofre Costs' /> 
    </section>
  )
}

export default Home