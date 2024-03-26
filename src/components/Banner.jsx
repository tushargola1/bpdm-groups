import React from 'react'

const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <div className="banner-gradient">
        <div className="banner-content">
            <h1>{props.title}</h1>
        </div>
      </div></div>
    </>
  )
}

export default Banner
