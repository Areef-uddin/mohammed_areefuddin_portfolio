import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formMessage.trim()) return;

    // Compose mailto URI
    const subject = encodeURIComponent(
      formSubject.trim() ? `[Portfolio Inquiry] ${formSubject}` : `Inquiry from ${formName || 'Portfolio Visitor'}`
    );
    const body = encodeURIComponent(
      `Hello Mohammed,\n\n${formMessage}\n\n---\nSender Name: ${formName || 'Not specified'}\nSender Email: ${formEmail || 'Not specified'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Let&apos;s Build Together
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Available for full-time Flutter roles, cross-platform mobile engineering contracts, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 flex items-center justify-between hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-500/20 text-sky-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-zinc-100 hover:text-sky-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 flex items-center justify-between hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Phone & WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneClean}`}
                    className="text-sm font-semibold text-zinc-100 hover:text-emerald-300 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <a
                  href={`https://wa.me/917386872991?text=${encodeURIComponent('Hi Mohammed, saw your Flutter developer portfolio!')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-xs text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/30 rounded border border-emerald-800/40 transition-colors"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 flex items-center justify-between hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/20 text-purple-400">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">GitHub Repository</div>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-zinc-100 hover:text-purple-300 transition-colors"
                  >
                    {PERSONAL_INFO.githubHandle}
                  </a>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-medium">Base Location</div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact Dispatch Form */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
              <MessageSquare className="h-4 w-4" />
              <span>Direct Inquiry</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-4">
              Send a Message to Mohammed
            </h3>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Subject / Role Title
                </label>
                <input
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="e.g. Flutter Developer Opportunity / Project Inquiry"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Describe your project, team requirements, or discussion topic..."
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-zinc-500">
                  Directly dispatched to mdareefuddin2@gmail.com
                </span>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-950 hover:bg-sky-400 active:bg-sky-600 transition-colors shadow-sm shadow-sky-500/20"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>

              {messageSent && (
                <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Email client triggered. Looking forward to speaking with you!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
