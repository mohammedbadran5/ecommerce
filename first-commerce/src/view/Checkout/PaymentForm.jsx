import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const { cartItems } = location.state || { cartItems: [] };
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

    const totalCost = cartItems.reduce((acc, cartItem) => {
        const cost = parseFloat(cartItem.product.cost.replace(/[$,]/g, '')); // Convert string to number
        return acc + (cost * cartItem.quantity); // Ensure quantity is also a number
    }, 0).toFixed(2);
    

    return (
        <div className="payment-form-container">
            <form className="payment-form" onSubmit={handleSubmit} aria-label="Payment Information Form">
                <div className="form-layout">
                    <div className="left-part">
                        <h2>Customer Information</h2>
                        
                        <InputField
                            placeholder="Email *"
                            name="email"
                            type="email" // Specify the input type
                            value={formValues.email}
                            onChange={handleChange}
                            error={errors.email} // Show error if email is invalid
                        />
                        <hr />
                        <h2>Billing Details</h2>
                        <div className="billing-details">
                            <InputField
                                placeholder="First Name *"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                            />
                            <InputField
                                placeholder="Last Name *"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                            />
                            <InputField
                                placeholder="Company Name"
                                name="company"
                                value={formValues.company}
                                onChange={handleChange}
                            />
                            <DropdownField
                                placeholder="Country"
                                name="country"
                                options={countries}
                                value={formValues.country}
                                onChange={handleChange}
                            />
                            <InputField
                                placeholder="House Number *"
                                name="houseNumber"
                                value={formValues.houseNumber}
                                onChange={handleChange}
                            />
                            <InputField
                                placeholder="Suite, Unit, etc (optional)"
                                name="apartment"
                                value={formValues.apartment}
                                onChange={handleChange}
                            />
                            <InputField
                                placeholder="Town/City *"
                                name="city"
                                value={formValues.city}
                                onChange={handleChange}
                                error={errors.city}
                            />
                            <InputField
                                placeholder="ZIP Code *"
                                name="zipCode"
                                value={formValues.zipCode}
                                onChange={handleChange}
                                error={errors.zipCode}
                            />
                            <InputField
                                placeholder="Phone *"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleChange}
                                error={errors.phone}
                            />
                        </div>
                        <hr />

                        <h3>Additional Information</h3>
                        <TextAreaField
                            placeholder="Notes"
                            name="notes"
                            value={formValues.notes}
                            onChange={handleChange}
                        />
                        <hr />
                        
                        <h3>Payment</h3>
                        <CouponField
                            placeholder="Have a Coupon? Enter it"
                            name="coupon"
                            value={formValues.coupon}
                            onChange={handleChange}
                        />
                        <button type="submit" className="add-to-cart">
                            PLACE ORDER
                        </button>

                    </div>

                    <div className="right-part">
                    <h2>Your order</h2>
                    {cartItems.length > 0 ? (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((cartItem, index) => {
                                    const { product, quantity } = cartItem;
                                    const subtotal = (parseFloat(product.cost.replace(/[$,]/g, '')) * quantity).toFixed(2);
                                    return (
                                        <tr key={index}>
                                            <td><img src={product.url} alt={product.name} style={{ width: '50px', height: '50px' }} /></td>
                                            <td>{product.name}</td>
                                            <td>{quantity}</td>
                                            <td>${subtotal}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="3">Total:</td>
                                    <td>${totalCost}</td>
                                </tr>
                            </tfoot>
                        </table>
                    ) : (
                        <p>No items in your cart.</p>
                    )}
                </div>
                </div>
            </form>
        </div>
    );
};


export default PaymentForm;
