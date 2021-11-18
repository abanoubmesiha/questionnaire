import React from 'react'
import { Form, Button, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import RadioField from '../../reusable/fields/radio';
import { businessModelOptions, yesAndNoOptions } from '../../../helpers/options'

const Step1 = ({
    onSubmit,
    step,
    withoutButtons,
  }) => {

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { businessModel } = watch();

  return (
    <Form
      className={step !== 1 && step !== 'final' ? 'd-none' : ''}
      id="step1Form"
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
            errors={errors}
            innerRef={register()}
            label="Do you target all age brackets?"
            name="age"
            options={yesAndNoOptions}
            wrapperClassName={businessModel === 'B2C' ? 'd-none' : ''}
          />
          <RadioField
            errors={errors}
            innerRef={register()}
            label="Do you target all industries?"
            name="industries"
            options={yesAndNoOptions}
            wrapperClassName={businessModel === 'B2B' ? 'd-none' : ''}
          />
        </Col>
      </Row>
      <Row className={withoutButtons ? 'd-none' : ''}>
        <Col className="d-flex justify-content-end">
          <Button type="submit" color="primary">Next</Button>
        </Col>
      </Row>
    </Form>
  )
};

export default Step1;