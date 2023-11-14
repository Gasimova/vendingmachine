import React from 'react'
import { CommonButton } from '../Button'
import styles from './NotFound.module.css'
export const NotFound = () => {
    return (
        <>
            <div className={styles.notFound}>
                <img src='https://www.bagbazaars.com/assets/img/no-product-found.png' alt='not found' />
                <CommonButton text='GO BACK' to='/' />
            </div>
        </>
    )
}
