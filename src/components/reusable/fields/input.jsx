import React from 'react'
import { FormGroup, Label, Input, Col, FormFeedback, Row } from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import { getErrorsByPath } from '../../../helpers/hook-form-helpers';

const InputField = ({
  disabled,
  errors,
  innerRef,
  label,
  name,
  type,
  wrapperClassName,
}) => {
  return (
    <div className={`input-field ${wrapperClassName}`}>
      <FormGroup>
        <Label for={name}>
          {label}
        </Label>
        <Input
          disabled={disabled}
          innerRef={innerRef}
          invalid={getErrorsByPath(errors, name) && true}
          name={name}
          type={type}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <FormFeedback>{message}</FormFeedback>}
        />
      </FormGroup>
    </div>
  )
};

export default InputField;