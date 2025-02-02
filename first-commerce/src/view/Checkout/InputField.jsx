import React from 'react';

const InputField = ({ name, value, onChange, error, placeholder, required = false }) => {
    return (
        <div className="input-field">
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} // Use placeholder directly
                required={required}
                aria-describedby={`${name}Error`}
            />
            {error && <span className="error" id={`${name}Error`}>{error}</span>}
        </div>
    );
};

export default InputField;
