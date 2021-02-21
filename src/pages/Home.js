import React, {useState,useEffect} from 'react';
import Loader from '../pages/Loader.js';


function Home() {
    const[data,setData]=useState([]);
    const [isLoading,setISLoading]=useState(false);

    useEffect(()=>{
        setISLoading(true);
        setTimeout(async()=>{
            try{
                const jsonData = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data= await jsonData.json();
                setData(data);
                setISLoading(false);
            }
            catch(err){
                console.log(err);
                throw new Error("incorrect api request");
            }

        },5000);

    },[])
    return(
        <div className="yadav">
         {isLoading && <Loader /> } 



          {data.map((datum)=>(
          <h4 key={datum.id}>
              {datum.title}</h4>

          ))}


        </div>
    )
    
}
export default Home;
