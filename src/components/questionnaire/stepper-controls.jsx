import React from 'react'
import { Row, Col, Button } from 'reactstrap';

const StepperControls = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-around">
        <Button color="secondary">Back</Button>
        <Button color="primary">Next</Button>
        <Button color="primary">Submit</Button>
      </Col>
    </Row>
  )
};

export default StepperControls;