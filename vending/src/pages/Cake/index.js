import React from 'react'
import { CommonButton } from '../../components/Button'
import styles from './Cake.module.css'

export const Cake = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.rotate} alt='rotate' src='https://img.freepik.com/premium-photo/isolated-strawberry-cupcake-white-background_1015665-6.jpg' />
        <div className={styles.box}>
          <p>Sugar is not good for health</p>
          <CommonButton text='GO BACK' to='/' />
        </div>
        <img className={styles.rotate} alt='rotate' src='https://img.freepik.com/premium-photo/vanilla-cupcake-with-cream-decorated-with-berries-isolated-white-background-homemade-dessert_503274-2397.jpg' />
      </div>
    </>
  )
}
