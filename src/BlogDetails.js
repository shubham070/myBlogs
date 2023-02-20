import React from 'react'
import { redirect, useParams} from 'react-router-dom'
import useFetch from './useFetch';

function BlogDetails() {
const { id } = useParams();
const {data:blog, isPending, isError} = useFetch('http://localhost:8000/blogs/'+id);

//const history = History();

const handleDelete = (id) => {
  fetch('http://localhost:8000/blogs/' + id,{
    method:'Delete'
  }).then(()=>{
    redirect('/');
  })
}

  return (
    <div className='blog-details'>
        { isPending && <div>Loading...</div> }
        { isError && <div> Something went wrong </div> }
        {blog && (
            <article>
                <h2> {blog.title} </h2>
                <p> written by {blog.author} </p>
                <div> {blog.body} </div>
                <button onClick={()=>handleDelete(blog.id)}>delete</button>
            </article>
        )}
        </div>
  )
}

export default BlogDetails