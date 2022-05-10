// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"

function App() {
const [todo, setTodo]= useState("")
const [list, setList]= useState([])

function handleChange(f){
  setTodo(f.target.value)
  }
function handleSubmit(){
  setList(
  [...list, todo]
  )
}
const handleRemove=(i)=>{
list.splice(i,1)
setTodo([...todo])
}
useEffect(()=>{
  console.log(list)
})
  return (
    <>
     <input type="text" onChange={handleChange} 
  placeholder='Title'/>
  <button className='btn btn-success' onClick={handleSubmit}>Add</button>
    <div>
      <ol>
        {
          list.map((x,i)=>{
            return(
              <div className='card p-2'>
                
              <div className='card-body'>
            <li key={i}>{x}</li>
            </div>
            
           <button className='btn btn-danger' onClick={()=> handleRemove(i)}>Cancel</button>
              </div>
          )})
        }
        
      </ol>
    </div>
 </>
  );
}

export default App;
