// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react'
import Login from './components/Login';
import About from './components/About';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path : '/home',
      element : <Home/>
     },
    {
      path : '/login',
      element : <Login/>
     },
     {
      path : '/about',
      element : <About/>
     }
  ])

  // const [count , setCount] = useState(0);
  // const [name, setname] = useState('Abhishek')
  // const [form, setform] = useState({})
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
//   const [data, setdata] = useState(null);
//   const [isLoading, setisLoading] = useState(null);
//  const [error, setError] = useState(null);


//   useEffect(()=>{

//     const api = 'https://jsonplaceholder.typicode.com/posts';

//     fetch(api)
//     .then(response=>{
//       if(!response.ok){
//         throw new Error('Network request was not Ok');
//       }
//       return response.json();
//     })
//     .then(data=>{
//       setdata(data);
//       setisLoading(false);
//     })
//     .catch(error=>{
//       setError(error);
//       setisLoading(false);
//     })
//   } , []);
//  if (isLoading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error.message}</p>;
//     }

// const handleClick = () =>{
//   alert('hey i am clicked');
// }

// const handlemouseOver = () =>{
//   // alert('hey i am a mouse over');
// }

// const handleChange = (e) =>{
//   // setname(e.target.value);
//   setform({...form,[e.target.name]: e.target.value} );
//   console.log(form)
// }

return (
    <>
    <div>Hello my name is abhishek</div>
    <Navbar/>
  <RouterProvider router={router}/>
    {/* <div className="button">
      <button onClick={handleClick}>click me</button>
    </div>

    <div className="red" onMouseOver={handlemouseOver}>
      I am a red div.
    </div>
    <input type="text" name="email"   value={form.email?form.email : ""} onChange={handleChange} />
    <input type="phone"  name='phone' value={form.phone?form.phone : ""} onChange={handleChange} /> */}
{/* <h1>API Data</h1>
{data && (<pre>{JSON.stringify(data ,null , 2)}</pre>)} */}
 {/* Display the data */}
            
    {/* <h1>I've rendered {count} times!</h1> */}
    </>
  );
}

export default App;
