import { object, string } from 'yup';

const required = 'this field is required';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const PresonalInformationSchema = object({
  firstName: string().required(required),
  lastName: string().required(required),
  email: string().email('not valid email').required(required),
  phoneNumber: string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(required),
  coupon: string(),
});

export default PresonalInformationSchema;
