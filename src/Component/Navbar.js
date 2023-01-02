import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
   // console.log(  localStorage.getitem("mail"))
//    var x =  localStorage.getitem("mail")
    return (
      
        <div>



            <div class="topnav">


                <NavLink className="navlinks" activeclassName exact="true" to="/" >Home</NavLink>
                <NavLink activeclassName to="./Register"> Register</NavLink>
                <NavLink activeclassName to="./Contact">Contact</NavLink>
                 <NavLink activeclassName to="./About">About </NavLink>
                
                    <NavLink activeclassName to="./Login" className="Login">Login</NavLink>
               
               
                
                {/* <NavLink activeclassName to="./About">About </NavLink>
                <NavLink activeclassName to="./Login" className="Login">Login</NavLink> */}
                
                  
{/*                 
                   {
                    localStorage.getitem("mail") ?
                        <>

                        </>
                        :
                        <>

                        </>

                } */}








            </div>


        </div>
    )
}
