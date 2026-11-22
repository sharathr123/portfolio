import { validateContactForm } from '../../../core/utils/validators';

export class ContactUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async submitMessage(formData) {
    const { isValid, errors } = validateContactForm(formData);
    if (!isValid) {
      return { success: false, errors };
    }
    const result = await this.repository.sendMessage(formData);
    return { success: true, data: result };
  }
}
