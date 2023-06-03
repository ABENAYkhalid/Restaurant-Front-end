import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ing from '../pictures/rest.jpg';

function SignInModal(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setError] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 const nav=useNavigate();

  const register = () => {
    nav('/register')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password}),
      });

      if (response.ok) {
        const data = await response.json();
        setLoggedIn(true); // Set the logged-in state to true
        setUserRole(data.role); // Set the user role received from the response
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or password invalid',
        });
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  if (isLoggedIn) {
    // Redirect the user to the appropriate page based on the role
    if (userRole === 'user') {
      return <Navigate to="/user-page" />;
    } else if (userRole === 'admin') {
      return <Navigate to="/admin-page" />;
    }
  }

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
              <span className="h1 fw-bold mb-0">Restaurant</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                <div className="form-outline mb-4">
                  <input type="email" id="form2Example18" className="form-control form-control-lg" value={email} onChange={handleEmailChange} required />
                  <label className="form-label" htmlFor="form2Example18">Email address</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form2Example28" className="form-control form-control-lg" value={password} onChange={handlePasswordChange} required />
                  <label className="form-label" htmlFor="form2Example28">Password</label>
                </div>
                {props.isOwner && (
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="owner" value={props.isOwner} onChange={() => { }} checked={props.isOwner} />
                    <label className="form-check-label" htmlFor="owner">I am an owner</label>
                  </div>
                )}
                <button type="submit" className="btn btn-info btn-lg btn-block">Login</button>
                <p>Don't have an account? <a href="#!" className="link-info" onClick={register}>Register here</a></p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src={ing}
              alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInModal;
