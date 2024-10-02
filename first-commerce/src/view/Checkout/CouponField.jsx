import React from 'react';

const CouponField = ({ label, name, value, onChange }) => {
    return (
        <label>
            {label}
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default CouponField;
