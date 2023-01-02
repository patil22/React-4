import React, { useState } from 'react'
 import { useNavigate } from 'react-router-dom';
 


export default function Register() {
  const nav = useNavigate();
  // var alertval;
 // setTimeout(() => {
    // nav("/Login")
   // alert("You have to Login first")
    // navigate("/Login")
    // console.log(alertval)

 //  }, 0);

  // if(alertval === true)
  // {
  //   navigate("/Login")
  //   console.log("bbbaakak")
  // }
  const [va,setva] = useState()
  var passvalue
  var repeatpassval
  const passcheck = (e)=>{
    passvalue = e.target.value

  }
  const repeatpassvalue=(e)=>{
    repeatpassval = e.target.value;
  }
const register = ()=>{
  var mailvalue = document.getElementById('email').value;
  localStorage.setItem('mail',mailvalue)
  if(passvalue === repeatpassval ){
   nav("/Login")
   // alert("jjjjj")
  }
//  if(passvalue !== repeatpassval){
 setva("Password not match")

 
}
// const email = (e)=>{
//   var mailvaile = e.target.value;
//   // localStorage.setItem("mail","mailvaile")

// }
  return (
    <div>
      
      <form action="">
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <br/>
          <b>{va}</b>
          <hr/>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email"  required/>

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id="psw" onClick = {passcheck} required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat"  onClick = {repeatpassvalue}required/>
                  <hr/>

                    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}
                    <button type="submit" class="registerbtn" onClick = {register}>Register</button>
                  </div>

                  {/* <div class="container signin">
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                  </div> */}
                </form>

              </div>
              )
}
