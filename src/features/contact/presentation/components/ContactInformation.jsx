import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Briefcase } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { appConfig } from '../../../../core/config/appConfig';
import { copyToClipboard } from '../../../../core/utils/helpers';

export function ContactInformation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(appConfig.social.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Prominent Current Company & Designation Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-[#f5f3ff] via-[#ede9fe] to-[#e0e7ff] dark:from-[#2e1b4d] dark:via-[#1e1b4b] dark:to-[#172554] border-2 border-purple-300 dark:border-purple-700 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider mb-2">
          <Briefcase className="w-4 h-4" />
          <span>Current Role & Organization</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight mb-1">
          {appConfig.developer.currentRole}
        </h3>
        <p className="text-sm sm:text-base font-extrabold text-[#6650a4] dark:text-[#aa97e8] mb-3">
          {appConfig.developer.companyFull}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-purple-200 dark:border-purple-800 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-white dark:bg-purple-950 font-bold text-purple-900 dark:text-purple-200 shadow-2xs">
            {appConfig.developer.period}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
            Full-Time Production Role
          </span>
        </div>
      </div>

      {/* Contact Details Card */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-gray-700 shadow-xs space-y-4">
        <h4 className="font-extrabold text-base text-gray-900 dark:text-white">
          Contact Details
        </h4>

        {/* Email */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#6650a4] flex items-center justify-center font-bold">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase">Direct Email</span>
              <a href={`mailto:${appConfig.social.email}`} className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white hover:underline">
                {appConfig.social.email}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            title="Copy email"
            className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Location (Clean Bangalore, India) */}
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
          <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#0d9488] flex items-center justify-center font-bold">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="block text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase">Location</span>
            <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
              {appConfig.developer.location}
            </span>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="pt-2 flex items-center gap-3">
          <a
            href={appConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 text-xs font-bold text-gray-900 dark:text-white hover:border-[#6650a4] transition-colors"
          >
            <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>
          <a
            href={appConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 text-xs font-bold text-gray-900 dark:text-white hover:border-[#6650a4] transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default ContactInformation;
