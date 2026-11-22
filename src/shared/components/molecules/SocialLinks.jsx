import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Copy } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { appConfig } from '../../../core/config/appConfig';
import { copyToClipboard } from '../../../core/utils/helpers';

export function SocialLinks({ variant = 'default', className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(appConfig.social.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isDarkFooter = variant === 'dark-footer';

  const linkClass = isDarkFooter
    ? 'w-10 h-10 rounded-full bg-[#1b2533] border border-[#2d3a4d] text-teal-400 hover:text-white hover:bg-teal-600 hover:border-teal-500 transition-all flex items-center justify-center'
    : 'w-10 h-10 rounded-full bg-[var(--bg-subsurface)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[#6650a4] hover:border-[#6650a4] dark:hover:text-[#aa97e8] dark:hover:border-[#aa97e8] transition-all flex items-center justify-center';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={appConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className={linkClass}
      >
        <FaLinkedin className="w-4 h-4" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={appConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className={linkClass}
      >
        <FaGithub className="w-4 h-4" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={`mailto:${appConfig.social.email}`}
        aria-label="Send Email"
        className={linkClass}
      >
        <Mail className="w-4 h-4" />
      </motion.a>

      <motion.button
        type="button"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCopyEmail}
        aria-label="Copy Email to Clipboard"
        title={copied ? 'Copied!' : 'Copy email to clipboard'}
        className={`${linkClass} relative`}
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </motion.button>
    </div>
  );
}

export default SocialLinks;
