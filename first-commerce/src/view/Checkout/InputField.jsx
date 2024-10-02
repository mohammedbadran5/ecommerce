import React from 'react';

const InputField = ({ label, name, value, onChange, error, required = false }) => {
    return (
        <label>
            {label}{required && '*'}
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                aria-describedby={`${name}Error`}
            />
            {error && <span className="error" id={`${name}Error`}>{error}</span>}
        </label>
    );
};

export default InputField;
