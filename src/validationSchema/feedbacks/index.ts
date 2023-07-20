import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  comment: yup.string().required(),
  user_id: yup.string().nullable(),
  content_id: yup.string().nullable(),
});
