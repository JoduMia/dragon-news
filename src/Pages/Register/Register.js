import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const {emailPassRegister, updateUserInfo, verifyEmail} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        emailPassRegister(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            //update user photo and name
            updationOfUser(photo,name);

            //email verification
            verifyEmail()
            .then(() => {})
            .catch(error => {});

            //toast
            toast.success('Please verify your email. Verification has been sent!')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        });
    };

    const updationOfUser = (photo, name) => {
      const profile = {
        displayName: name,
        photoURL: photo
      };
      updateUserInfo(profile)
        .then(()=> {
          console.log('user updated');
        }).catch(error =>console.log(error.message));
    };


    const handleChecking = (e) => {
      setAccepted(e.target.checked);
    };
  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="User name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>User image</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Enter Image url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        onClick={handleChecking}
        type="checkbox"
        label={<>Accept <Link to={'/terms'}>Terms and Conditions</Link></>} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <p>{error}</p>
    </Form>
  )
}

export default Register