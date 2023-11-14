import React from 'react'
import { Link } from 'react-router-dom'
import styles from './VendingMachine.module.css'

export const VendingMachine = () => {
    return (
        <div className={styles.imgBox}>
            <div className={styles.title}>Hello </div>
            <img alt='vending machine' src='https://bjs.scene7.com/is/image/bjs/166466?$bjs-Zoom$' />
            <div >
                <ul className={styles.title}>
                    <li className={styles.list}>
                        <Link to="/soda">Soda</Link>
                    </li>
                    <li className={styles.list}>
                        <Link to="/cake">Cake</Link>
                    </li>
                    <li className={styles.list}>
                        <Link to="/fresh">Fresh</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
