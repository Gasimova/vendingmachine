import React from 'react'
import { CommonButton } from '../../components/Button'
import { Header } from '../../components/Header'
import styles from './About.module.css'

export const About = () => {
    return (
        <>
            <Header />
            <div className={styles.displayBoxAbout}>
                <div><img alt='about' src='https://img.freepik.com/free-vector/about-us-page-concept-illustration_114360-3931.jpg' /></div>
                <CommonButton to='/about/blog' text='GO TO BLOG PAGE' />
            </div>
        </>
    )
}
