import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {signWithEmailPass, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        //sign in with emailpassword------>
        signWithEmailPass(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            if(user.emailVerified){
              navigate(from, {replace: true});
            } else {
              toast.error('Please verify your email and then try login !!!')
            }
        })
        .catch(error => {
            toast.error(error.message);
        })
        .finally(() => {
          setLoading(false)
        })
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default Login