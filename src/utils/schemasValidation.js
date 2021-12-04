import * as Yup from 'yup';

const requiredDefaultMessage = 'Fill this field, please';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,16}$/, 'Must be latin letter')
  .required(requiredDefaultMessage);

export const EMAIL_SCHEMA = Yup.string()
  .email('Enter correct email')
  .required(requiredDefaultMessage);

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z]),(?=.*?[a-z])(?=.*?[0=9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
    'Enter correct password, please'
  )
  .required(requiredDefaultMessage);

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});
