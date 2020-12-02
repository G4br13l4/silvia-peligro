import React from 'react';
import { FormFieldProps } from './FormField.Props';
import { RadioButton } from '../RadioButton';

export const FormField = React.memo((props: FormFieldProps) => {
    const {
        deafultValue,
        label,
        placeholder,
        description,
        disabled,
        onValueChange,
        //options,
        radioButton,
        textarea,
        regex,
        required,
        title,
        currentForm,
        name,
        onClick,
        defaultOptionText,
        isSubmitted,
        displayError
    } = props;

    let labelText = required ? `${title} *` : title;
    
    return(
        <>
            {title && <label>{labelText}</label>}
            {radioButton ? (
                <RadioButton
                    name={name}
                    // currentForm={currentForm}
                    label={label || ''}
                    required={required}
                    value={deafultValue}
                />
            ): null}
        </>
    );
});