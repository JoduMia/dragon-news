import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider'

const UpdateProfile = () => {
    const [accepted, setAccepted] = useState(false);
    const {updateUserInfo, user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmitt = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        updationOfUser(photo,name);
    };

    const updationOfUser = (photo, name) => {
        const profile = {
          displayName: name,
          photoURL: photo
        };
        updateUserInfo(profile)
          .then(()=> {
            console.log('user updated');
            navigate('/')
          }).catch(error =>console.log(error.message));
      };

      const handleChecking = (e) => {
        setAccepted(e.target.checked)
      };
  return (
    <Form onSubmit={handleSubmitt}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control readOnly disabled defaultValue={user.email} type="text" name="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control defaultValue={user?.displayName} type="text" name="name" placeholder="User name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>User image</Form.Label>
        <Form.Control defaultValue={user?.photoURL} type="text" name="photo" placeholder="Enter Image url" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
        onClick={handleChecking}
        type="checkbox"
        label={<>Accept <Link to={'/terms'}>Terms and Conditions</Link></>} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Update
      </Button>
    </Form>
  )
}

export default UpdateProfile;