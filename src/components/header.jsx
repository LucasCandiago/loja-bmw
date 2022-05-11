import React from 'react'
import styles from './../styles/Header.module.scss'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function header(){
    return(
        <div className={styles.header}>
            <div className="Bem vindo">Seja bem vindo!</div>
            <Button onClick> <Link to="/">Home</Link> </Button>
            <Button onClick> <Link to="/pages/signup">Cadastre-se</Link> </Button>
        </div>
    )
}
