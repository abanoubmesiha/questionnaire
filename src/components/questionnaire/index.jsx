import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import Step1 from './step1';
// import Step2 from './step2';
import StepperControls from './stepper-controls';

const Questionnaire = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="h-100">
      <Row>
        <Col className="flex-all-center">
          <Step1
            step={step}
          />
          {/* <Step2
            step={step}
          /> */}
        </Col>
      </Row>
      <StepperControls
        step={step}
      />
    </section>
  )
};

export default Questionnaire;