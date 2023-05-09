import { object, date, string } from 'yup';

const required = 'this field is required';

const BookSchema = object({
  date: date().required(required),
  GPU: string().required(required),
  CPU: string().required(required),
  From: date().required(required),
  Until: date().required(required),
});

export default BookSchema;
