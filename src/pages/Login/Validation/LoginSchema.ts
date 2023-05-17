import { object, string } from 'yup';

const required = 'this field is required';

const LoginSchema = object({
  email: string().email('invalid email').required(required),
  password: string().required(required),
});

export default LoginSchema;
