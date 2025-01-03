import { useState } from 'react';
import Button from '../components/Button';

function SignUpForm() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: '' }); // Clear error on input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.username) {
            validationErrors.username = 'Please enter a username.';
        }
        if (!formData.email) {
            validationErrors.email = 'Please enter an email.';
        }
        if (!formData.password) {
            validationErrors.password = 'Please enter a password.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Proceed with form submission
            console.log('Form submitted', formData);
        }
    };

    return (
        <div>
            <div className="w-full">
                <form className="bg-white" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-xl font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.username && 'border-red-500'
                            }`}
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-xl font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.email && 'border-red-500'
                            }`}
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-xl font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.password && 'border-red-500'
                            }`}
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>
                        <Button message="Sign Up" />
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;