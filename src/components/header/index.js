import './style.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ReactReduxContext, useDispatch,useSelector } from "react-redux";

 

const Header = () => {
    const dispatch=useDispatch();
const auth = useSelector(x => {
    return x.Auth;
})
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed bg-light" id="navmain"  >
                <div class="container-fluid" id="nav">
                    <a class="navbar-brand" href="#">
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg"  width="30" height="30" class="d-inline-block align-top" alt="" />
                        DBS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

 

                    <div class="collapse navbar-collapse" id="navbarColor03">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                  {auth.isLoggedIn? navItems([{name:"Home",link:"/home"},{name:"Make Payment",link:"/payment"}])
                                  : navItems([{name:"Welcome",link:""}])
                                  }
                                </a>
                            </li>
                        </ul>
                        {!auth.isLoggedIn ?
                            <ul class="navbar-nav me-auto" id="loginbutton">
                                <li class="nav-item dropdown" >
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Login</a>
                                    <div class="dropdown-menu">
                                        <Link className="nav-link" to={"/login"} ><a class="dropdown-item" href="#">Customer</a></Link>
                                        <Link className="nav-link" to={"/login"} >   <a class="dropdown-item" href="#">Employee</a></Link>
                                    </div>
                                </li>
                            </ul> :
                            <ul class="navbar-nav me-auto" id="loginbutton">
                                <li class="nav-item button" >
                                    <Link to={"/logout"}><a class="nav-link" href="#" role="button" aria-haspopup="true" aria-expanded="false">Logout</a></Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;

const navItems=(list)=>{

 

    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {  list.map(item => (
                <li class="nav-item" key={item.index}>
                <Link className="nav-link" to={item.link}>{item.name}</Link>
                </li>
             )) 
             }
            </ul>
        </div>
    )
}