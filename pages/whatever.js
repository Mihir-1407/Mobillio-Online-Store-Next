import React from 'react'
import Head from 'next/head'

const Whatever = (props) => {
  return (
    <>
      <div className="whatever-container">
        <Head>
          <title>Whatever - Mobillio Online Store</title>
          <meta
            property="og:title"
            content="Whatever - Mobillio Online Store"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .whatever-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Whatever
