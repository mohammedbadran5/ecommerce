import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access passed state
import InputField from './InputField';
import DropdownField from './DropdownField';
import TextAreaField from './TextAreaField';
import CouponField from './CouponField';
import './PaymentForm.css';

const countries = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'GB', label: 'United Kingdom' },
    // Add other countries as needed
];

const PaymentForm = () => {
    const location = useLocation(); // Access the location object
    const { cartItems } = location.state || { cartItems: [] }; // Get cartItems from location state
    const [formValues, setFormValues] = useState({
        usernameOrEmail: '',
        firstName: '',
        lastName: '',
        company: '',
        country: '',
        houseNumber: '',
        apartment: '',
        city: '',
        zipCode: '',
        phone: '',
        notes: '',
        coupon: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        // Example validation logic (you can customize as needed)
        if (!formValues.firstName) newErrors.firstName = 'First name is required';
        if (!formValues.lastName) newErrors.lastName = 'Last name is required';
        if (!formValues.city) newErrors.city = 'City is required';
        if (!formValues.zipCode) newErrors.zipCode = 'ZIP code is required';
        if (!formValues.phone) newErrors.phone = 'Phone number is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formValues);
            // Add your form submission logic here
        }
    };

    return (
        <div className="payment-form-container">
            <form className="payment-form" onSubmit={handleSubmit} aria-label="Payment Information Form">
                <h2>Billing Details</h2>
                <div className="billing-details">
                    <InputField
                        label="First Name *"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                        
                    />
                    <InputField
                        label="Last Name *"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />
                    <InputField
                        label="Company Name"
                        name="company"
                        value={formValues.company}
                        onChange={handleChange}
                    />
                    <DropdownField
                        label="Country"
                        name="country"
                        options={countries}
                        value={formValues.country}
                        onChange={handleChange}
                    />
                    <InputField
                        label="House Number *"
                        name="houseNumber"
                        value={formValues.houseNumber}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Suite, Unit, etc (optional)"
                        name="apartment"
                        value={formValues.apartment}
                        onChange={handleChange}
                    />
                    <InputField
                        label="Town/City *"
                        name="city"
                        value={formValues.city}
                        onChange={handleChange}
                        error={errors.city}
                    />
                    <InputField
                        label="ZIP Code *"
                        name="zipCode"
                        value={formValues.zipCode}
                        onChange={handleChange}
                        error={errors.zipCode}
                    />
                    <InputField
                        label="Phone *"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        error={errors.phone}
                    />
                </div>

                <h3>Additional Information</h3>
                <TextAreaField
                    label="Notes"
                    name="notes"
                    value={formValues.notes}
                    onChange={handleChange}
                />

                <h3>Payment</h3>
                <CouponField
                    label="Have a Coupon? Enter it"
                    name="coupon"
                    value={formValues.coupon}
                    onChange={handleChange}
                />
                <button type="submit" className="pay-button">Pay</button>
            </form>

            <h2>Your Cart Items</h2>
            {cartItems.length > 0 ? (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((cartItem, index) => {
                            const { product, quantity } = cartItem;
                            const subtotal = (parseFloat(product.cost.replace(/[$]/, '')) * quantity).toFixed(2);
                            return (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>${parseFloat(product.cost.replace(/[$]/, '')).toFixed(2)}</td>
                                    <td>{quantity}</td>
                                    <td>${subtotal}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <p>No items in your cart.</p>
            )}
        </div>
    );
};

export default PaymentForm;
