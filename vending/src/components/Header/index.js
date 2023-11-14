import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className='displayBox'>
            <div>
                <Link to='/'>
                <img className={styles.logo} src='https://www.creativefabrica.com/wp-content/uploads/2022/03/07/Restaurant-yummy-food-logo-design-Graphics-26620420-1-580x387.jpg' alt='food' />
                </Link>
            </div>
            <div className={styles.navBox}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/total/5/10'>Total</Link>
            </div>
        </div>
    )
}
