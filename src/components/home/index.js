import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Toolbar, AppBar, Typography, Card } from '@material-ui/core';
import Cards from '../../cards';
const Home = () =>{
  const dispatch = useDispatch();
  const logstatus = useSelector(x => {
    return x.Auth;
  });
  return (
    <div>
      <AppBar position="static" style={{ background: '#FFFFFF' }}>
        <Toolbar>
          
          
          <Button  style={{ marginLeft: 900 }}  >Home</Button>
          <Button  style={{ marginLeft: 20 }} href="/aboutus">About</Button>
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown"  >

          {!logstatus.isLoggedIn ?
                            <ul class="navbar-nav me-auto" id="loginbutton"  style={{ marginLeft: 20 }}>
                                <li class="nav-item dropdown" color="black">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"
                                     fgid="#ff3333" 
                                    style={{ marginLeft: 20, color:'white'}} ><b>Login</b></a>
                                    <div class="dropdown-menu">
                                        <Link className="nav-link" to={"/login1"} ><a class="dropdown-item"  >Customer</a></Link>
                                        <Link className="nav-link" to={"/login1"} >   <a class="dropdown-item">Employee</a></Link>
                                    </div>
                                </li>
                            </ul> :
                            <ul class="navbar-nav me-auto" id="loginbutton">
                                <li class="nav-item button" >
                                    <a class="nav-link" href="/home" role="button" aria-haspopup="true" aria-expanded="false"
                                    class="btn btn-danger" fgid="1009"
                                    style={{ marginLeft: 20 }}>Logout</a>
                                </li>
                            </ul>
                        }

 




          </div>
        </Toolbar>
      </AppBar>
      





    </div>


  )
}
export default Home
//<button onClick={() => setAuth(true)}>Loginclick</button>
