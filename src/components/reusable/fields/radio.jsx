import React from 'react'
import { FormGroup, Label, Input, Col } from 'reactstrap';

const RadioField = ({
  label,
  name,
  options,
}) => {
  return (
    <FormGroup row tag="fieldset">
      <legend className="col-form-label col-sm-10">
        {label}
      </legend>
      <Col md={2}>
        {
          options.map((o) => (
            <FormGroup inline check>
              <Input name={name} type="radio" />
              {' '}
              <Label check>{o.label}</Label>
            </FormGroup>
          ))
        }
      </Col>
    </FormGroup>
  )
};

export default RadioField;