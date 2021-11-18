import * as yup from 'yup';

const schema = yup.object().shape({
  businessModel: yup.string()
    .required('This field is required')
    .typeError('This field is required'),

  age: yup.string().nullable(),

  industries: yup.string().nullable(),
});

export default schema;
