import * as yup from 'yup';

const schema = yup.object().shape({
  investment: yup.string()
    .required('This field is required')
    .typeError('This field is required'),

  investmentAmount: yup.number()
    .nullable()
    .when('investment', {
      is: 'true',
      then: yup.number()
        .required('This field is required')
        .typeError('This field is required')
        .positive('Please type the amount of investment in numbers'),
    }),
});

export default schema;
