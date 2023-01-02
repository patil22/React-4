import React,{useEffect} from 'react'
// import useHistory from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('mail'))
    {
    
     navigate("/Login  ")
       // history.push('./Login')
    }
    else{
     navigate("/Dashboard  ")
    }
})
  return (
    <div>
        <h1>Dashboard page</h1>
      
    </div>
  )
}
