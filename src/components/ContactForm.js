import { useState } from 'react';
function ContactForm() {
// Define state for form inputs
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

// Handle form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || message === '') {
alert('Please fill in all fields.');
return;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
alert('Form submitted successfully!');
};

return (
<form onSubmit={handleSubmit}>
<div>
<label>Name:</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</div>

<div>
<label>Email:</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>

<div>
<label>Message:</label>
<textarea
value={message}
onChange={(e) => setMessage(e.target.value)}
/>
</div>

<button type="submit">Submit</button>
</form>
);

const handleChange = (e) => {
const { name, value } = e.target;
if (name === 'name') setName(value);
else if (name === 'email') setEmail(value);
else setMessage(value);
};
return (
<form onSubmit={handleSubmit}>
<div>
<label>Name:</label>
<input
type="text"
name="name"
value={name}
onChange={handleChange}
/>
</div>

<div>
<label>Email:</label>
<input
type="email"
name="email"
value={email}
onChange={handleChange}
/>
</div>

<div>
<label>Message:</label>
<textarea
name="message"
value={message}
onChange={handleChange}
/>
</div>

<button type="submit">Submit</button>
</form>
);

}

export default ContactForm;