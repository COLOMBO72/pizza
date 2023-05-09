import React from "react"
import stylesForm from '../../styles/Forms.module.scss'
import { Field } from "redux-form";

const FormControl = ({ input, meta, child, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={stylesForm.formControl + " " + (showError ? stylesForm.error : "")}>
            <div>{props.children}</div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export const createField = (placeholder, component, name, props = {}) => (
    <Field className={stylesForm.formField}
        name={name}
        placeholder={placeholder}
        component={component}
        {...props} />)

