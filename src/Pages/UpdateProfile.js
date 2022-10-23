import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const UpdateProfile = () => {
    const [accepted, setAccepted] = useState(false);
    const {updateUserInfo, user} = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
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
            navigate('/');
            toast.success('User profile updated succesfully!');
          })
          .catch(error =>setError(error.message));
      };

      const handleChecking = (e) => {
        setAccepted(e.target.checked)
      };
  return (
    <Form onSubmit={handleSubmit}>

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
        <Form.Control type="text" name="photo" placeholder="Enter Image url" />
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

      <p className='text-danger'>{error}</p>
    </Form>
  )
}

export default UpdateProfile;