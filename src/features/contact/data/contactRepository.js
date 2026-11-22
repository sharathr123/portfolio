export const contactRepository = {
  async sendMessage(formData) {
    // Simulate network submission delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Store in localStorage as backup
    try {
      const existing = JSON.parse(localStorage.getItem('sr_contact_submissions') || '[]');
      existing.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('sr_contact_submissions', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }

    return {
      messageId: `msg_${Date.now()}`,
      status: 'SENT',
    };
  },
};
