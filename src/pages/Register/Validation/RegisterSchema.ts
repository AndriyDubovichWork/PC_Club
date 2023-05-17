import { object, ref, string } from 'yup';

const required = 'this field is required';

const RegisterSchema = object({
  email: string().email('invalid email').required(required),
  passwordOne: string().required(required),
  passwordTwo: string()
    .required(required)
    .oneOf([ref('passwordOne')], 'passwords must match!'),
});

export default RegisterSchema;
