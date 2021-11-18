import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';
import Step1 from './step1';
import Step2 from './step2';
import SuccessAlert from './success-alert';

const Questionnaire = ({ history }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const submitFormData = (data) => {
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    // Assume the following `catch` is `then` and the request is successful
    .catch(() => setStep('success'));
  }

  const onSubmitStep1 = (stepData) => {
    setStep(2);
    setData({ ...data, ...stepData});
  };

  const onSubmitStep2 = (stepData) => {
    const formData = { ...data, ...stepData};
    setData(formData);
    submitFormData(formData);
  };

  const goBack = () => setStep(1);

  return (
    <section className="h-100">
      <Row>
        <Col className="flex-all-center">
          <Step1 onSubmit={onSubmitStep1} step={step} />
          <Step2 goBack={goBack} onSubmit={onSubmitStep2} step={step} />
          <SuccessAlert history={history} step={step} />
        </Col>
      </Row>
    </section>
  )
};

export default Questionnaire;