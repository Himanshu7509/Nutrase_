import React from 'react'
import Header from '../../common/header/Header'
import Blogs from './blogPage/Blog'
import Footer from '../../common/footer/footer'

const BlogsP = () => {
  return (
    <>
        <Header/>
        <div>
            <Blogs/>
        </div>
        <Footer/>
    </>
  )
}

export default BlogsP