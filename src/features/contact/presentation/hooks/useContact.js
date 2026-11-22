import { useState, useMemo } from 'react';
import { ContactUseCase } from '../../domain/ContactUseCase';
import { contactRepository } from '../../data/contactRepository';

export function useContact() {
  const useCase = useMemo(() => new ContactUseCase(contactRepository), []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setStatus('submitting');
    setErrors({});

    try {
      const result = await useCase.submitMessage(formData);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrors(result.errors || {});
      }
    } catch {
      setStatus('error');
      setErrors({ global: 'Failed to send message. Please try again or email directly.' });
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setErrors({});
  };

  return {
    formData,
    status,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
