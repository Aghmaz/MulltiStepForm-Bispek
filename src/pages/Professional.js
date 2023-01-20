import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Professional = () => {
  return (
    <div className='mb-3'>
      <h5> Job Title</h5>
      <p className='mt-3' style={{ fontSize: "11px" }} > Pick the job title you identify with the most</p>

      <div>
        <div style={{ display: "flex", gap: "5px" }}>
          <Card className='bg-white w-25 p-2 ' md="4" variant="outline-primary">
            <Form.Check
              inline
              label="Engineer"
              name="group1"
              type="radio"
            />
          </Card>{' '}
          <Card className='bg-white w-25 p-2' md="4"variant="outline-primary">
            <Form.Check
              inline
              label="Contractor"
              name="group1"
              type="radio"
            />
          </Card>{' '}
          <Card className='bg-white w-25 p-2' md="4" variant="outline-primary">
            <Form.Check
              inline
              label="Consultant"
              name="group1"
              type="radio"
            />
          </Card>{' '}
        </div>
        <h5 className='mt-3'> My Specialty</h5>
        <p className='mt-3' style={{ fontSize: "11px" }} >
          Add the types of infrastructure projects that are most interesting to you
        </p>
        <h6 className='mt-3'> Specify your preference</h6>
<div> 
<Button className=" mb-2 mt-3" variant="outline-primary" type="submit">High Rise Condonminiums</Button>
<Button className=" mb-2 mt-3 ms-3" variant="outline-primary" type="submit">Parking Garages</Button>
<Button className=" mb-2 mt-3 ms-3" variant="outline-primary" type="submit">Office Buildings</Button>
<Button className=" mb-2 mt-2 " variant="outline-primary" type="submit">Low Rise Structure</Button>
<Button className=" mb-2 mt-2 ms-3" variant="outline-primary" type="submit">Floors & Bridge</Button>
<Button className=" mb-2 mt-2 ms-3" variant="outline-primary" type="submit">Marine Structures</Button>
<Button className=" mb-2 mt-2 " variant="outline-primary" type="submit">Underground tunnel & Pipelines</Button>

</div>


        <Button className=" mb-3 mt-3" variant="outline-primary" type="submit">back</Button>
        <Button style={{ float: "right" }} className=" mb-3 mt-3" type="submit">next</Button>
      </div>
    </div>
  )
}

export default Professional
