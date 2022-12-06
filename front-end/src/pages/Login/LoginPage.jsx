import React from 'react';
// import PropTypes from 'prop-types'

import LoginForm from './sessions/LoginForm';

function LoginPage() {
  return (
    <div className="loginContainer">
      {/* <section className='loginLogo'>
                <div>
                    <img src="" alt="" />
                </div>
            </section> */}
      <section className="loginForm">
        <LoginForm />
      </section>
    </div>
  );
}

export default LoginPage;
