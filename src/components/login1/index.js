import Button from '@material-ui/core/Button';
import { FormHelperText, Grid, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link, Redirect } from 'react-router-dom';
import './style.css'
import { useEffect, useState } from "react";
import { ReactReduxContext, useDispatch } from "react-redux";
import { Auth } from '../../store/auth';
import { useSelector } from 'react-redux';
import { login } from '../../store/auth/action';
import Home from '../home';
const Login1 = () => {
    const dispatch = useDispatch();
    const auth = useSelector(x => {
        return x.Auth;
    })

    let [userDetails, setUserDetails] = useState({ userId: "", password: "" })



    let mes = <div></div>
    const handleInputChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    let [alert, setAlert] = useState({ alertlevel: "" })



    const handleLogin = () => {
        dispatch(login(userDetails));
        if (auth.isLoggedIn) {
            setAlert({ ...alert, alertlevel: "success" })
        }
        else {
            setAlert({ ...alert, alertlevel: "error" })

        }


    };

    return (
       
       <div style={{width: "100%",
       backgroundSize:"contain",
      
  
        height:"401px", backgroundImage: "url(" + "https://www.edgeverve.com/wp-content/uploads/2019/10/Online-Banking-Banner.png" + ")"}}>

        <div id="logincontainer">
            <Grid container>
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "20vh" }}
                >
                    <img src="https://internet-banking.dbs.com.sg/IB/dbs/images/desktoplogo.png" height="70px" width="100px"></img>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item md={12} id="griditem"><TextField id="standard-basic" label="username" name="userId" onChange={handleInputChange} InputLabelProps={{ style: { color: '#888888' } }} /></Grid>
                <Grid item md={12} id="griditem" ><TextField id="standard-basic" label="password" name="password" onChange={handleInputChange} InputLabelProps={{ style: { color: '#888888' } }} /></Grid>
                <FormHelperText style={{ color: '#ff3333' }}>{auth.message}</FormHelperText>
            </Grid>
            <Grid container>
                <Grid item md={2} id="griditem" alignItems="center" justify="center">
                    <Button variant="contained" color="danger" id="login" onClick={handleLogin}>
                        Login
                    </Button>
                </Grid>
            </Grid>

            {
                alert.alertlevel == "success" ? <Redirect to="/menu"></Redirect> : <span></span>
            }




        </div>
        </div>

    )



}
export default Login1;