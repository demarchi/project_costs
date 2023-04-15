import React from 'react'
import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import LinkButton from '../layout/LinkButton'

import { useState, useEffect } from 'react'

function ProjectForm({ btnText }) {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch( "http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <form className={styles.form}>
        <Input 
            type='text'
            text='Nome do Projeto'
            name='name'
            placeholder='Insira o nome do Projeto'
        />
        <Input 
            type='number'
            text='Orçamento do Projeto'
            name='budget'
            placeholder='Insira o orçamento do Projeto'
        />
        <Select 
          name='category_id' 
          text='Selecione a categoria' 
          options={categories}
        />
        <LinkButton text={btnText} to='/' />
    </form>
  )
}

export default ProjectForm