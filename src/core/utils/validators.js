export function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export function validateContactForm(formData) {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Please provide a detailed message (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
