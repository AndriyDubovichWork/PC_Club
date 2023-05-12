import { object, date, string } from 'yup';

const required = 'this field is required';

const PresonalInformationSchema = object({
  firstName: string().required(required),
});

export default PresonalInformationSchema;
