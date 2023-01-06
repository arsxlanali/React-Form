import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import dayjs from "dayjs";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { TextField } from "@mui/material";
import  { Link} from "react-router-dom";
const validationSchema = function (values) {
  return Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    dob: Yup.string().required("Date of birth is Required"),
    tob: Yup.string().required("Time of birth is Required"),
    refrence: Yup.string().required("Refrence is Required"),
    date: Yup.string().required("Date is Required"),
    document: Yup.string().required("Document is Required"),
  });
};
const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};
const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
};


const onSubmit = (values, { setSubmitting , resetForm, setFieldValue }) => {
  let x = JSON.parse(localStorage.getItem("array"));
  x.push(values);
  localStorage.setItem("array", JSON.stringify(x));
  setFieldValue("dob", "")
  setFieldValue("tob", "")
  setFieldValue("date", "")
  setSubmitting(false)
  resetForm();
};

const AddData = ()=>{
  const [selectedFile, setSelectedFile] = useState(null);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Formik
          initialValues={{
            name: "",
            dob: "",
            tob: "",
            refrence: "",
            date: "",
            document: "",
          }}
          validate={validate(validationSchema)}
          onSubmit={onSubmit}
          validateOnMount
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid,
            setFieldValue,
            // validateOnMount,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px",
                width: "300px",
                height: "70vh",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {/* {errors.name && touched.name && errors.name} */}
              <TextField
                id="date"
                label="Birthday Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                // value={values.date}
                onChange={(newValue) => {
                  setFieldValue("dob", new Date(newValue?.target?.value));
                }}
              />
              <TextField
                id="time"
                label="Time of Birth"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(newValue) => {
                  setFieldValue("tob", newValue?.target?.value);
                }}
              />
              <TextField
                id="refrence"
                label="Refrence"
                variant="outlined"
                name="refrence"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.refrence}
              />
              <TextField
                id="date"
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(newValue) => {
                  setFieldValue("date", new Date(newValue?.target?.value));
                }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  type="file"
                  // value={selectedFile}
                  onChange={(event) => {
                    setSelectedFile(event?.target?.value);
                    setFieldValue("document", event?.target?.value);
                    // console.log(values)
                  }}
                />
                <UploadFileIcon />
                {selectedFile}
              </IconButton>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
        <ul>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>
      </div>
    );




}

export default AddData;