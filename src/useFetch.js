import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);
    
    useEffect(()=>{
        fetch(url)
        .then(res => {      
          if(!res.ok)
          {
            setIsError(true);
            setIsPending(false);
            throw Error('error fetching Blogs');
          }
         return res.json();
        })
        .then(data => {
            setData(data);
         setIsPending(false);
        }).catch(err => {
          console.log(err.message);
        });
      },[url]);

      return {data, isPending, isError}

}

export default useFetch