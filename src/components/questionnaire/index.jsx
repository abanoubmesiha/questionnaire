import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap';
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
    setStep('final');
    setData({ ...data, ...stepData});
  };

  const onFinalSubmit = () => {
    submitFormData(data);
  };

  const goBack = () => setStep(step === 'final' ? 2 : 1);

  return (
    <section>
      <Row>
        <Col className={`flex-all-center ${step === 'final' ? 'flex-column' : ''}`}>
          <Step1 onSubmit={onSubmitStep1} step={step} withoutButtons={step === 'final'} />
          <Step2 goBack={goBack} onSubmit={onSubmitStep2} step={step} withoutButtons={step === 'final'} />
          <SuccessAlert history={history} step={step} />
          {
            step === 'final' && (
              <Row className="final-buttons">
                <Col className="d-flex justify-content-between">
                  <Button type="button" color="light" onClick={goBack}>Back</Button>
                  <Button type="button" color="primary" onClick={onFinalSubmit}>Submit</Button>
                </Col>
              </Row>
            )
          }
        </Col>
      </Row>
    </section>
  )
};

export default Questionnaire;