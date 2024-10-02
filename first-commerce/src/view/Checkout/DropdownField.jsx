import React from 'react';

const DropdownField = ({ label, name, options, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={onChange}>
                <option value="" disabled>Select your country</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownField;
