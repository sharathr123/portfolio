import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useContact } from '../hooks/useContact';

export function ContactForm() {
  const {
    formData,
    status,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContact();

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-center space-y-4"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
          Message Received!
        </h3>
        <p className="text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
          Thank you for reaching out. I'll review your message and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-4 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {errors.global && (
        <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errors.global}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] text-sm focus:outline-none focus:ring-2 focus:ring-[#6650a4]"
          />
          {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
            Your Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@company.com"
            className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] text-sm focus:outline-none focus:ring-2 focus:ring-[#6650a4]"
          />
          {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
          Subject / Opportunity
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Senior React Native Role / Contract Work"
          className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] text-sm focus:outline-none focus:ring-2 focus:ring-[#6650a4]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your app idea, engineering team, or project requirements..."
          className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] text-sm focus:outline-none focus:ring-2 focus:ring-[#6650a4]"
        ></textarea>
        {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#6650a4] hover:bg-[#55418b] dark:bg-[#aa97e8] dark:hover:bg-[#9782db] dark:text-[#171717] text-white font-semibold text-sm shadow-sm transition-all disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  );
}

export default ContactForm;
