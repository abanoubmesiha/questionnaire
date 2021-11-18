import React from 'react'
import { Form, Button, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import RadioField from '../../reusable/fields/radio';
import { businessModelOptions, yesAndNoOptions } from '../../../helpers/options'

const Step2 = ({
  goBack,
  onSubmit,
  step,
}) => {

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { businessModel } = watch();

  return (
    <Form
      className={step !== 2 ? 'd-none' : ''}
      id="step2Form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Row className="fields">
        <Col>
          <RadioField
            errors={errors}
            innerRef={register({ required: true })}
            label="Is your business model B2C or B2B or both?"
            name="businessModel"
            options={businessModelOptions}
          />
          <RadioField
            wrapperClassName={businessModel === 'B2C' ? 'd-none' : ''}
            errors={errors}
            innerRef={register()}
            label="Do you target all age brackets?"
            name="age"
            options={yesAndNoOptions}
          />
          <RadioField
            wrapperClassName={businessModel === 'B2B' ? 'd-none' : ''}
            errors={errors}
            innerRef={register()}
            label="Do you target all industries?"
            name="industries"
            options={yesAndNoOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between">
          <Button type="button" color="light" onClick={goBack}>Back</Button>
          <Button type="submit" color="primary">Next</Button>
        </Col>
      </Row>
    </Form>
  )
};

export default Step2;