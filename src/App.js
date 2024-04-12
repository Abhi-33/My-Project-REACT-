// import logo from './logo.svg';
import { useEffect , useState } from 'react';
import Navbar from './components/Navbar';
import React from 'react'

function App() {
  // const [count , setCount] = useState(0);
// runs on every render 
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count=>count+1);
  //   }, 1000);
  // });
  
  // runs only on first render
  // useEffect(()=>{
  //     setTimeout(() => {
  //       setCount((count)=>count+1);
  //     }, 1000);
  // } , []); 
  const [data, setdata] = useState(null);
  const [isLoading, setisLoading] = useState(null);
 const [error, setError] = useState(null);


  useEffect(()=>{

    const api = 'https://jsonplaceholder.typicode.com/posts';

    fetch(data)
    .then(response=>{
      if(!response.ok){
        throw new Error('Network request was not Ok');
      }
      return response.json();
    })
    .then(data=>{
      setdata(data);
      setisLoading(false);
    })
    .catch(error=>{
      setError(error);
      setisLoading(false);
    })
  } , []);
 if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

  return (
    <>
    <Navbar/>
<h1>API Data</h1>
{data && (<pre>JSON.stringify(data ,null , 2)</pre>)}
 {/* Display the data */}
            
    {/* <h1>I've rendered {count} times!</h1> */}
    </>
  );
}

export default App;
