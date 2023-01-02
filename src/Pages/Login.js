import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


export default function Login() {

    // let val
    const [dis, setdis] = useState()
    const [wrongstate, setwrongstate] = useState()
    const navigate = useNavigate();
    const pass = (e) => {

        // val = e.target.value;
        // console.log(val)
        setdis("Username contain at least 6 character ,one uppercase & one lowercase ,one special & one numeric value is required i.e Gaurav@123")


    }
    const loginsubmit = () => {
        var Username = document.getElementById('username').value
        // navigate("/About")

        // let input = ((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})
        // [A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$.*$%^&+!=])(?=.{8,})
        if (Username.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,64}$/)) {
            navigate("/Dashboard")
            // console.log("right")  ;
            //alert("righthhhhhhh");


        }


        else {
            alert("Invalid Username")
            //setwrongstate("Invalid Username")
            // console.log("wrong")
            //setwrongstate(alert("Invalid Username"))

        }  // alert("Invalid Username")
        ///setwrongstate(alert("Invalid Username"))


        // console.log(val)

    }
    // const loghandle = ()=>{
    //     navigate("/About")

    //  }

    return (
        <div>


            <form action="" >


                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <br /><br />
                    <b>{dis}</b> <h1>{wrongstate}</h1>

                    <input type="text" placeholder="Enter Username" name="uname" id="username" required onChange={pass} />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    {/* <NavLink   activeclassName to = "./About">Login</NavLink> */}
                    <button type="submit" onClick={loginsubmit}>Login</button>
                    {/* //  <p onClick={loghandle}></p> */}
                </div>

                {/* <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a>password?</a></span>
            </div> */}
            </form>
        </div >








    );
}


