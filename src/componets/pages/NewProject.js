import React from 'react'
import ProjectForm from '../Project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto e depois para adicionar os serviços.</p>
            <ProjectForm btnText='Criar Projeto' />
        </div>
      )
}

export default NewProject