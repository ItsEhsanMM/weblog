import React from "react";

import { useMutation } from "@apollo/client";

import { Button, Grid, TextField, Typography } from "@mui/material";

import { POST_COMMENT } from "../graphql/mutation";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";
import { schema } from "../validation/yupValidation";

const CommentForm = ({ slug }) => {
   // Formik
   const { values, errors, handleChange, handleBlur, touched } = useFormik({
      initialValues: {
         email: "",
         name: "",
         comment: "",
      },
      validationSchema: schema,
   });

   // mutation
   let [send, { loading, error }] = useMutation(POST_COMMENT, {
      variables: {
         name: values.name,
         email: values.email,
         comment: values.comment,
         slug,
      },
   });

   const sendData = () => {
      if (values.name && values.email && values.comment && !errors.email) {
         send();
         if (!loading && !error) {
            toast.success("کامنت ارسال شد", {
               position: "top-center",
               rtl: true,
            });
         }
      } else if (error) {
         toast.error("خطایی رخ داد", {
            position: "top-center",
            rtl: true,
         });
      } else {
         toast.warn("فیلد را کامل کنید", {
            position: "top-center",
            rtl: true,
         });
      }
   };

   return (
      <div>
         <ToastContainer />

         <Grid
            item
            xs={12}
            sx={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)", py: 1, borderRadius: 2 }}
         >
            <Grid item xs={12}>
               <Typography
                  component="p"
                  variant="h5"
                  color="primary"
                  fontWeight={700}
                  m={2}
               >
                  کامنت
               </Typography>
            </Grid>

            <Grid item xs={12} m={2}>
               <TextField
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="نام"
                  id="name"
                  variant="outlined"
                  fullWidth
               />
            </Grid>

            <Grid item xs={12} m={2}>
               <TextField
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="ایمیل"
                  variant="outlined"
                  id="email"
                  fullWidth
               />
               {touched.email && errors.email && (
                  <Typography component={"p"} mt={1} ml={1} variant="p" color={"red"}>
                     {errors.email}
                  </Typography>
               )}
            </Grid>

            <Grid item xs={12} m={2}>
               <TextField
                  label="کامنت"
                  variant="outlined"
                  onBlur={handleBlur}
                  fullWidth
                  multiline
                  minRows={4}
                  id="comment"
                  value={values.comment}
                  onChange={handleChange}
               />
            </Grid>

            <Grid item xs={12} m={2}>
               {loading ? (
                  <Button disabled variant="contained">
                     در حال ارسال
                  </Button>
               ) : (
                  <Button variant="contained" onClick={sendData}>
                     ارسال
                  </Button>
               )}
            </Grid>
         </Grid>
      </div>
   );
};

export default CommentForm;
