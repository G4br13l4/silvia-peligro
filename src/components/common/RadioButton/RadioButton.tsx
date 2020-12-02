import React from 'react';

interface Props {
    name: string;
    label: string;
    value: string;
    // currentForm: any;
    required?: boolean;
    onChange?: Function;
}

export const RadioButton = (props: Props) => {
    const {
        name,
        label,
        value,
        // currentForm,
        required,
        onChange
    } = props;

    return(
        <>
            <input
                type="radio"
                name={name}
                value={value}
                onChange={e => onChange!(e.target)}
                // ref={currentForm}
            />
            <label>{label}</label><br/> 
        </>
    );
};