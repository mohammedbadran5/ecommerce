import React from 'react';

const TextAreaField = ({ label, name, value, onChange, error }) => {
    return (
        <label>
            {label}
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows="4"
                aria-describedby={`${name}Error`}
            />
            {error && <span className="error" id={`${name}Error`}>{error}</span>}
        </label>
    );
};

export default TextAreaField;
