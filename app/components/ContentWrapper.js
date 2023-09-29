import React from 'react'
import Content from './Content'

export default function ContentWrapper() {
  return (
    <div className='my-6'>
        <Content category={'Trending'}/>
        <Content category={'Ekonomi'}/>
        <Content category={'Education'}/>
        <Content category={'Politics'}/>
        
    </div>
  )
}
