const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Submit contact form
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch("https://portfolio1-5ndr.onrender.com/api/contact/submit", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// Get all contacts (admin only)
export const getContacts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/all`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch contacts');
    }

    return data;
  } catch (error) {
    throw error;
  }
};
