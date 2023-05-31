import * as yup from "yup";

export const schema = yup.object().shape({
   email: yup.string().email("آدرس ایمیل نامعتبر است").required("فیلد پر شود"),
});
