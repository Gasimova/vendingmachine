import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import styles from './Total.module.css'

export const Total = () => {
    const { numOne, numTwo } = useParams()

    return (
        <>
            <Header />
            <div className={styles.box}>
                <p className={styles.title}> TOTAL : {parseInt(numOne) + parseInt(numTwo)}</p>
            </div>
        </>
    )
}
