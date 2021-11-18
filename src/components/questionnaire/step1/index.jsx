import React from 'react'
import { Form } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import RadioField from '../../reusable/fields/radio';
import { businessModelOptions, yesAndNoOptions } from '../../../helpers/options'

const Step1 = () => {

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      />
      <RadioField
        errors={errors}
        innerRef={register()}
        label="Do you target all industries?"
        name="industries"
        options={yesAndNoOptions}
      />
      <button type="submit">Submit</button>
    </Form>
  )
};

export default Step1;