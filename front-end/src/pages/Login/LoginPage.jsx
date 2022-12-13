import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import LoginForm from './sessions/LoginForm';

function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage) history.push('/customer/products');
  }, [history]);

  return (
    <div className="loginContainer">
      <section className="loginForm">
        <LoginForm />
      </section>

    </div>
  );
}

export default LoginPage;
