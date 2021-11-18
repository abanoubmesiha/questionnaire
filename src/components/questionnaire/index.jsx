import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import Step1 from './step1';
import Step2 from './step2';

const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const onSubmitStep1 = (data) => {
    setStep(2);
    setData(data);
  };

  const onSubmitStep2 = (data) => {
    console.log(data);
  };

  const goBack = () => setStep(1);

  return (
    <section className="h-100">
      <Row>
        <Col className="flex-all-center">
          <Step1 onSubmit={onSubmitStep1} step={step} />
          <Step2 goBack={goBack} onSubmit={onSubmitStep2} step={step} />
        </Col>
      </Row>
    </section>
  )
};

export default Questionnaire;