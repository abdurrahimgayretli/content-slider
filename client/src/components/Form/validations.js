import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  url: yup.string().required().url(),
  duration: yup.number().min(1).required(),
});

export default validations;
