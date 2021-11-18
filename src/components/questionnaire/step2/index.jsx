import React from 'react'
import { Form, Button, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import RadioField from '../../reusable/fields/radio';
import InputField from '../../reusable/fields/input';
import { yesAndNoOptions } from '../../../helpers/options'

const Step2 = ({
  goBack,
  onSubmit,
  step,
  withoutButtons,
}) => {

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { investment } = watch();

  return (
    <Form
      className={step !== 2 && step !== 'final' ? 'd-none' : ''}
      id="step2Form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Row className="fields">
        <Col>
          <RadioField
            errors={errors}
            innerRef={register()}
            label="Did you have an investment?"
            name="investment"
            options={yesAndNoOptions}
          />
          <InputField
            disabled={investment !== 'true'}
            errors={errors}
            innerRef={register()}
            label="How much was the investment?"
            name="investmentAmount"
            type="number"
          />
        </Col>
      </Row>
      <Row className={withoutButtons ? 'd-none' : ''}>
        <Col className="d-flex justify-content-between">
          <Button type="button" color="light" onClick={goBack}>Back</Button>
          <Button type="submit" color="primary">Next</Button>
        </Col>
      </Row>
    </Form>
  )
};

export default Step2;