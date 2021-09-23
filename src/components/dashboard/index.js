
import {React,useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerDetails } from "../../store/customer/action";
export default function Dashboard() {
  const user = useSelector(x => {
    return x.Customer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomerDetails())
  }, []);
  return (
  <div class="row" top="30px" style={{paddingTop:"5px", paddingLeft:"20px", paddingRight:"20px",paddingBottom:"20px" }}>
    <div style={{padding:"5px"}} class="col-12">
      <div class="card" style={{padding:"20px" , top:"1px"}}>
  <div class="card-header" style={{backgroundColor:"#FF3333" ,color:"white"}} >
    Profile
  </div>
  <div class="card-body container-fluid ">
  <div class="row">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///+xsbGsrKzt7e2urq7BwcGzs7O3t7fl5eX5+fny8vLJycnc3NzQ0NCysrLo6OjW1tbExMTf39+mpqZ9OF3IAAAE7klEQVR4nO2d27aqMAxFpbSU6+ay//9fD4h6EHELJSELR+aTj8zRNmlKDZeLoiiKoiiKoiiKoijKRrI8j3vyTPpBGMi7ynlrHiSuKGPphyIjL5011troCdv7uuYLLLPGm7ncRNP8VLn0I+6iduat3UPSd9KPGUznP/rdJmwj/ahBpN6s0bs5ltKPu5ncrfe7Ov7U0o+8jWqb34BxJ0qTuV+1/ubDaFPpB19LuX0Ab8NYSD/6OopQwX4Y/RlmatAMfShG8BuALNkj2GPAN3LZPr2rInTaIBAEV/yhMESeqLuCzASLGlFbIsEoSqRVlmnC8+Ac66RllojpBPuliFhr0ESZhyJe5i/IFuGIlxaaQzpHB+Dqfk8s2M9TrJRREs/RHttKSz1B7heBBZuGfgjBkiKHINQgdjyGFudQgz6QjsCEU/JceAfmnJh6O/MflI0NmyBKrKm5JinM1q3iG0OQacoVSQcgomnGN0n7aYrwKiNlnKSRraT1LrzLMIoQ9qaO1dBK6/UknIIQoYYz0ECcf+e8hlb+KgrbtvtmKL+rYU0WEOmCqfp9GMpXwd9vyHCOqIYH8/2z9Ptjac1sKJ8Pufc08sdtrAUwRgnMO0sRTts4j2l6Q2m9C+d58ADCvRPWlA/xmpS1fAIIpRfeUANQ4vc4RkOEgyjWhQixDFl3NQCnNFf4MiLGJGWcpiCTlHFrinMfmmtbg7ChGWFK+hjpfoQnJaLEmQGWQQQo7yewvGKTlnqCIeujXfWmD6cY1zAmUAtiVBVTUtp5CnBO+gLtPIWbowOUL/QRjtheIYynBqRqmkO2FBEX4QjRf7tgiqYFAhoNLAhCRpk7O/6pfg5BAkV0wd1rEepvJG/o9iga2Cg6JX7fNemjIGgefGFjb5o7NoHcySxSrmufNBtA+WsXG8g2D6NN4MqlD6SbWoCcsxlWGa11tOcIoQuUyZr12I8fwFXnUOr2j4574/C5s2SIt3RD18Q3g2f8mYdvQt04M/SGvA/n8MsYX6XfoXcjq8uqcM5771xRlel5kruiKIqiKMr3k+VxWjZF2+/WEvu/J7uNkuvmrSnT+LR707hrWj9ITXbc89Ji3IHbyBXNqfapWd20iXntM/9nETzUGqdotZ93RbLJbVYvgpdUaZV8qOjXaXrMDwp0bejQLVgaW8BcSxxJPx3HBEnCjGReRSFH3CskfYmwJld84GGPZCGdRdKVH3jY4egkJ+uWDzyc0TE+wu+KaSXWY9Ye5RfJvNgoibPDR8eDv/Cx/fXgfg59gdoxB9Bl7M9hEYfgWlAY5pjXqBlVb/kQxSNuvOUHh5hnDviICWOTxHWK3B8xIb7NHeTIqrjrRhcVnIoAIzjAp8jc1msDTOEmlwyizzDdQeVtH7gJnluovB0gN8Kxuwn+mBoP9H+LYm4lFAC1IW8XmgCom4Axd2ULgXaeZniCxCmDt49QIJTX3pn7eQVDZwg5hJSdT1CHkK6rBMtXZCgg6wwiLfIWqu2p9MHFHxB1+waNMwNE3U9wBYna7uNU9guQtFWEjaQDJNEUqvKdQ/J3KdpvUxJD8sd25GVIUmDgFffP7DeEDqUkwVQNhVFDNVRDedRQDdVQHjVUQzWURw3VUA3lUUM1VEN51FAN1VAeNVRDNZRHDdWwp/41yPzuN8xibPYbKoqiKIqiKIqiKIpyCv4BHG9dvyHl18MAAAAASUVORK5CYII=" alt="profile" style={{height:"100px", width:"120px"}}/>

    <p class="col-sm-6 "><h3>{user.customerDetails.accountholdername}</h3></p>
    
    </div>
    <div class="row mt-2" >
    <label class="col-sm-6 col-form-label col-form-label-sm">Customer ID:  <span>{user.customerDetails.customerid}</span></label>
    
    
    </div>
    <div class="row mt-2" >
    <label class="col-sm-6 col-form-label col-form-label-sm">Overdraft: <span>{user.customerDetails.overdraftflag}</span></label>
    </div>

 

    <div class="row mt-2" >
    <label class="col-sm-6 col-form-label col-form-label-sm">Clearbalance: <span>{user.customerDetails.clearbalance}</span></label>
    </div>

 

    <div class="row mt-2" >
    <label class="col-sm-6 col-form-label col-form-label-sm">Customer Type: <span>{user.customerDetails.customertype}</span></label>
    </div>

 

    <div class="row mt-2" >
    <label class="col-sm-6 col-form-label col-form-label-sm">Customer City: <span>{user.customerDetails.customercity}</span></label>
    </div>
    

  </div>
</div>
    </div>
   
    </div>
  );
}