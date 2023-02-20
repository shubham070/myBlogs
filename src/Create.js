import React, { useState } from 'react'
import { redirect } from 'react-router-dom';


function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    setIsPending(true);

    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added');
      console.log(blog);
      setIsPending(false);
      redirect('/');

    })

  }

  return (
    <div className='create'>
      <h2>Create Blog </h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Blog Title:</label>
        <input type="text" required onChange={(e)=>setTitle(e.target.value)}></input>
        <label>Blog Body:</label>
        <textarea required onChange={(e)=>setBody(e.target.value)}></textarea>
        <label>Blog Author:</label>
        <select required onChange={(e)=>setAuthor(e.target.value)}>
        <option value=""></option>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button>Adding Blog...</button> }


      </form>

    </div>    
  )
}

export default Create