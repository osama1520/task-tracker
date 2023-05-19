import React from 'react'

const button = ({color,text,onClick}) => {
  return (
    <button className='btn' onClick={onClick} style={{backgroundColor:color}}>{text}</button>
  )
}

export default button
