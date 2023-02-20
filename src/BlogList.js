import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({blogs, title, handleDelete}) {
    
  return (
    <div>
        <h2>{title}</h2>
        {
          blogs.map((blog)=>{

              return <div  className="blog-preview" key={blog.id}>                      
                        <Link to={`/blog/${blog.id}`}>
                          <h2>
                            {blog.title}
                          </h2>
                          <p> Written By : {blog.author}  </p>
                          </Link>
                         
                          {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>         */}                      
                      </div>
          })
        }
    </div>
  )
}

export default BlogList