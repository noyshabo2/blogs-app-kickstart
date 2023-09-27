import React from 'react'
import './blogPreview.scss'
export default function BlogPreview({blog }) {
  return (
    <li className='blog-card'>
      <div className='left-content'>
      <h3 className='title'>{blog.title}</h3>
      <p className='content'>{blog.content}</p>
      <div className='footer-container'>
        <h2 className='date'>{blog.createAt}</h2>
        <div className='tags-container'>
          {blog.tags.map(tag => <span className='tag'>{tag}</span>)}
        </div>
      </div>
      </div>
      <img src={blog.image} width={'20%'} height={100}/>
    </li>
  )
}
