import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { VERIFY_EMAIL } from '../../constants/actionTypes';
import { verifyEmailAction } from '../../actions/userActions';
import "./EmailVerificationSuccessPanel.css"
const EmailVerificationSuccessPanel = () => {
  const messageStore = useSelector(state => state.message);
  const dispatch = useDispatch();
  const location = useLocation();
  //useParams is not used, this is only for path variable instead of dynamic parameter
  let query = new URLSearchParams(location.search);
  const token = query.get('token');
  //const {token}=useParams();
  const [verifyRes, setVerifyRes] = useState("loading....");
  useEffect(() => {
    console.log("token on page load:" + token);
    dispatch(verifyEmailAction(token))
  }, []);
  useEffect(() => {
    if (messageStore.operation === "VERIFY_EMAIL" && messageStore.operationSuccess) {
      setVerifyRes(messageStore.message)
    }
  }, [messageStore]);
  return (
    <div className='container'>
      <div className="col-lg-12">
        <div className='row row-notify'><h2>Notification</h2></div>
        <div className='row row-notify'><h3>
          <svg className='icon-sm-check' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
          </svg> 
          {verifyRes}</h3></div>
        <div className='row row-notify'><a href="/"><button className='btn'>Return to home</button></a></div>
      </div>
    </div>
  )
}

export default EmailVerificationSuccessPanel