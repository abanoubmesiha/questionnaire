import * as yup from 'yup';

const schema = yup.object().shape({
  businessModel: yup.string()
    .required('This field is required')
    .typeError('This field is required'),

  age: yup.string()
    .nullable()
    .when('businessModel', {
      is: (val) => val === 'B2B' || val === 'Both',
      then: yup.string()
        .required('This field is required')
        .typeError('This field is required'),
    }),

  industries: yup.string()
    .nullable()
    .when('businessModel', {
      is: (val) => val === 'B2C' || val === 'Both',
      then: yup.string()
        .required('This field is required')
        .typeError('This field is required'),
    }),
});

export default schema;
