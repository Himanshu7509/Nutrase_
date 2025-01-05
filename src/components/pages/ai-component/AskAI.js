import React from 'react'
import ApiFetch from './ai-page/ai'
import Header from '../../common/header/Header'

const AskAi = () => {
  return (
    <>
        <Header/>
        <div>
          <ApiFetch/>
        </div>

    </>
  )
}

export default AskAi