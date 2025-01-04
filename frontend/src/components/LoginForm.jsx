import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function LoginForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });
    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: '' }); // Clear error on input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.username) {
            validationErrors.username = 'Please enter your email.';
        }
        if (!formData.password) {
            validationErrors.password = 'Please enter your password.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Mock login logic; replace with real authentication logic
            console.log('Login successful', formData);

            // Redirect to the courses page
            navigate('/courses');
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
                            Email
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.username && 'border-red-500'
                            }`}
                            id="username"
                            type="text"
                            placeholder="Email"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.username}
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
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
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
                    <div className="w-full">
                        <Button message="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;