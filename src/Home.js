import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const {data, isPending} = useFetch("http://localhost:8000/blogs");

  return (
    <div className='home'>
      {isPending && <div>Pending....</div>}  
      <BlogList blogs={data} title="All Blogs"></BlogList>   
    </div>
  )
}

export default Home