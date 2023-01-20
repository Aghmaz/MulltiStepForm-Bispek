import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import ImageUploader from './ImageUploader';
import "./personal.css"
const Personal = () => {



    return (
        <div className='mb-3'>
            <h5> My Profile</h5>
            <p className='mt-3'style={{fontSize:"11px"}} > Start by filling your personal information</p>
            <h5 className='mt-4'>Profile Photo</h5>
            <div className='rounded'>
                <ImageUploader/>
                <p style={{fontSize:"11px"}}>
                    Add your profile photo.The recommended size is 300 x 300px.
                </p>
            </div>
            <div>
            <Form >
      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label>First Name*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
            // defaultValue="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Last Name*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label>Email*</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="jack.offer@joengineering.com"
            // defaultValue="First name"
          />
               
          <Form.Check
            inline
            label="company"
            name="group1"
            type="radio"
          />
          <Form.Check className='ms-5 mt-2'
            inline
            label="personal"
            name="group1"
            type="radio"
          />
       
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        
        
        </Form.Group>
        <Form.Group as={Col} md="6" >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Optional"
            // defaultValue="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Check className='mt-2 check'
        type="switch"
        id="custom-switch"
        label="Display Phone number in public profile "
      />
        </Form.Group>
       
      </Row>

      <Row className='mb-3'>
      <Form.Group as={Col} md="12" >
          <Form.Label>Address*</Form.Label>
          <Form.Control type="text" placeholder="optional" required />
          <Form.Control.Feedback type="invalid">
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" >
          {/* <Form.Label>City</Form.Label> */}
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          {/* <Form.Label>State</Form.Label> */}
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" >
          {/* <Form.Label>Zip</Form.Label> */}
          <Form.Control type="text" placeholder="Zip code" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Button style={{float:"right"}} className=" mb-3" type="submit">Next</Button>
    </Form>
            </div>
        </div>
    )
}

export default Personal