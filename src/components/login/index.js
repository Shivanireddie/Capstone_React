import { TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, logout } from "../../store/auth/action";
import { useHistory } from "react-router-dom"
const Login = () => {
  let history = useHistory();
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = data;//desconstructing
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: [e.target.value] })
    //e.target.name->should hit value
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)//to show on console

  }
  const f1 = () => {
    if (logstatus.isLoggedIn) {
      return history.push("/verticaltabs");
    }
  }
  //changeHandler->is just a function we can use any name
  //e->to access the data

  const logstatus = useSelector(x => {
    return x.Auth;
  });

  console.log(logstatus);
  const dispatch = useDispatch();
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>


          <form noValidate autoComplete="off">
            <br /><br />
            <br />

            <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={username} onChange={changeHandler} /><br /><br />
            <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={password} onChange={changeHandler} />
            
          </form>
          <br></br>
          
          <button class="btn btn-submit btn-danger"
            onClick={e => {
              dispatch(login(data));
              f1()
            }}
          >Login
         
          </button>

        </form>
      </center>
    </div>
  )
}
export default Login

//value is something likw whixh reflects when user enter after user enter data after de-constructibg
//onChange->which is used to enter data
//onSubmit->to store in db
/*
<input type="text" name="username" value={username} onChange={changeHandler}></input><br />
         <input type="password" name="password" value={password} onChange={changeHandler}></input><br />
         */
//status:{logstatus.isLoggedIn ? "true" : "false"}

//<pre>{JSON.stringify(data)}</pre>