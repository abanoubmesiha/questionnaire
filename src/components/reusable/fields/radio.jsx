import React from 'react'
import { FormGroup, Label, Input, Col, FormFeedback, Row } from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import { getErrorsByPath } from '../../../helpers/hook-form-helpers';

const RadioField = ({
  errors,
  innerRef,
  label,
  name,
  options,
}) => {
  return (
    <>
      <FormGroup row tag="fieldset">
        <legend className="col-form-label col-sm-8">
          {label}
        </legend>
        <Col md={2}>
          {
            options.map((o) => (
              <FormGroup inline check>
                <Input
                  innerRef={innerRef}
                  invalid={getErrorsByPath(errors, name) && true}
                  name={name}
                  type="radio"
                  value={o.value}
                  />
                {' '}
                <Label check>{o.label}</Label>
              </FormGroup>
            ))
          }
        </Col>
      </FormGroup>
      <Row>
        <Col md={12}>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <FormFeedback style={{ display: getErrorsByPath(errors, name) ? 'block' : 'none'}}>
                {message}
              </FormFeedback>
            )
          }
          />
        </Col>
      </Row>
    </>
  )
};

export default RadioField;