import React, { useState } from 'react'
import { CommonButton } from '../../components/Button'
import styles from './Soda.module.css'

export const Soda = () => {

  const [count, setCount] = useState(0)


  const increementCount = () => {
    setCount(() => count + 1)
  }

  const decreementCount = () => {
    setCount(() => count > 0 ? count - 1 : 0)
  }


  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.colaImg}>
          {
            Array.from({ length: count }, (_, i) => <img alt={i} key={i} src='https://www.bakenroll.az/en/image/coca-cola.jpg' />)
          }
        </div>
        {
          count ? <span className={styles.count}>EATEN: {count ? count : ''}</span> : ''
        }

        <div className={styles.sodaBox}>
          <button className={styles.btn} onClick={increementCount}>Add More Soda</button>
          <CommonButton text='GO BACK' to='/' />
          <button className={styles.btn} onClick={decreementCount}>Less Soda</button>
        </div>
      </div>
    </>

  )
}
