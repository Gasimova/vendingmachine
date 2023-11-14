import React from 'react'
import { Header } from '../../components/Header'
import styles from './Blog.module.css'

export const Blog = () => {
    return (
        <>
            <Header />
            <div className='displayBox' style={{justifyContent:'center'}}>
                <img className={styles.blogImg} alt='blog' src='https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-computer-laptop-260nw-1255851382.jpg' />
            </div>
        </>
    )
}
