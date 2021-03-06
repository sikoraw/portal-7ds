import React from "react";
import { Form } from "react-bootstrap";

const FormikInputFormGroup = (
  label,
  uniqueName,
  inputType,
  formik,
  formikValue,
  formikTouched,
  formikErrors,
  comment = "",
  isDisabled = false,
  formGroupClassName = ""
) => {
  return (
    <>
      <Form.Group className={formGroupClassName}>
        <Form.Label>{label}:</Form.Label>
        <Form.Control
          id={uniqueName}
          name={uniqueName}
          type={inputType}
          placeholder={label}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formikValue}
          disabled={isDisabled}
        />
        {comment !== "" ? <Form.Text>{comment}</Form.Text> : null}
        {formikTouched && formikErrors ? (
          <Form.Text className="text-danger">{formikErrors}</Form.Text>
        ) : null}
      </Form.Group>
    </>
  );
};

export default FormikInputFormGroup;
