import React from 'react'
import { Form } from 'reactstrap';
import RadioField from '../reusable/fields/radio';

const Step1 = () => {
  return (
    <Form>
      <RadioField
        label="Is your business model B2C or B2B or both?"
        name="businessModel"
        options={[
          {
            label: 'B2C',
          },
          {
            label: 'B2B',
          },
          {
            label: 'Both',
          },
        ]}
      />
      <RadioField
        label="Do you target all age brackets?"
        name="age"
        options={[
          {
            label: 'Yes',
          },
          {
            label: 'No',
          },
        ]}
      />
      <RadioField
        label="Do you target all industries?"
        name="industries"
        options={[
          {
            label: 'Yes',
          },
          {
            label: 'No',
          },
        ]}
      />
    </Form>
  )
};

export default Step1;