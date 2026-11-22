import React from 'react';
import { PageLayout } from '../../../../shared/layouts/PageLayout';
import { SectionHeading } from '../../../../shared/components/molecules/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { ContactInformation } from '../components/ContactInformation';

export function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      description="Connect with Sharath R. for React Native engineering, mobile architectural consulting, or full-time roles."
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's Build Something Exceptional Together"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-6">
          <div className="md:col-span-7 bg-[var(--bg-surface)] p-6 sm:p-8 rounded-3xl border border-[var(--border-color)] shadow-xs">
            <h3 className="font-bold text-lg text-[var(--text-primary)] mb-4">
              Send a Message
            </h3>
            <ContactForm />
          </div>

          <div className="md:col-span-5">
            <ContactInformation />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default ContactPage;
