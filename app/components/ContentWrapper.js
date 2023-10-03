import React from 'react'
import Content from './Content'

export default function ContentWrapper() {
  return (
    <div className='my-6'>
        <Content category={'politik'}/>
        <Content category={'terbaru'}/>
        <Content category={'hiburan'}/>
        
        
    </div>
  )
}
