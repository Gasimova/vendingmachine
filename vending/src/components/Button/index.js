import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export const CommonButton = ({ text, to }) => {
    return (
        <>
            <Link to={to} className={styles.btn}>{text}</Link>
        </>
    )
}
