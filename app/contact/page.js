// pages/contact.js
"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_pkso92q', 'template_5orns9b', formData, 'aNF0gqu3ZOzNUAHGA')
            .then((response) => {
                console.log('Success:', response);
                alert('Your message has been sent successfully!');
                setFormData({ from_name: '', email: '', message: '' }); // Clear the form
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            });
    };

    return (
        <>
        <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Itim&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Parkinsans:wght@300..800&family=Playwrite+VN:wght@100..400&display=swap');
        .contact {
          font-family: "Open Sans", serif;
          font-weight: 300;
        }
        `}
      </style>
        <div className="contact py-16">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
                    Get in Touch
                </h1>
                <p className="text-lg text-gray-600 text-center mb-10 leading-relaxed sm:text-2xl">
                    We’d love to hear from you! Please send us your thoughts, questions, or feedback.
                </p>

                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-2xl rounded-2xl space-y-6">
                    <div>
                        <label htmlFor="from_name" className="block text-lg font-semibold text-gray-800 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="from_name"
                            value={formData.from_name}
                            onChange={handleInputChange}
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 transform hover:scale-105"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 transform hover:scale-105"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 transform hover:scale-105"
                            rows="6"
                            placeholder="Type your message here"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-500 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}
