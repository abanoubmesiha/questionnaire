import React from 'react'
import { FormGroup, Label, Input, Col, FormFeedback, Row } from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import { getErrorsByPath } from '../../../helpers/hook-form-helpers';

const RadioField = ({
  wrapperClassName,
  errors,
  innerRef,
  label,
  name,
  options,
}) => {
  return (
    <div className={`radio-field ${wrapperClassName}`}>
      <FormGroup row tag="fieldset">
        <legend className="col-form-label col">
          {label}
        </legend>
        <Col md={2}>
          {
            options.map((o) => (
              <FormGroup check key={o.value} inline>
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
    </div>
  )
};

export default RadioField;