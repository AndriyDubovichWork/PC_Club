import { object, string } from 'yup';

const required = 'this field is required';

const ForgotPasswordSchema = object({
  email: string().email('invalid email').required(required),
});

export default ForgotPasswordSchema;
