import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowLeft,
  Building2,
  Globe2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WebsiteFooterBar } from './WebsiteFooterBar';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: (bookmark?: string) => void;
  onNavigateSolutions?: (bookmark?: string) => void;
  onNavigateUseCases?: (bookmark?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onNavigateServices,
  onNavigateSolutions,
  onNavigateUseCases
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    region: 'Finland / Nordics',
    interest: 'Intelligent Websites (Pillar 1)',
    timeline: 'Immediate (1-2 months)',
    message: '',
    gdprConsent: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestSelect = (interest: string) => {
    setFormState((prev) => ({ ...prev, interest }));
  };

  const handleTimelineSelect = (timeline: string) => {
    setFormState((prev) => ({ ...prev, timeline }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName.trim() || !formState.email.trim() || !formState.company.trim()) {
      setErrorMsg('Please fill in your name, business email, and company.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable API enquiry intake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const interestOptions = [
    'Intelligent Websites (Pillar 1)',
    'Contextual AI Core (Pillar 2)',
    'Connected Ecosystems (Pillar 3)',
    'Nordic SME Website Revamp',
    'Custom Enterprise Integration'
  ];

  const timelineOptions = [
    'Immediate (1-2 months)',
    'Next Quarter (3-6 months)',
    'Exploratory / Budgeting'
  ];

  return (
    <div className="min-h-screen bg-[#f6f5f8] text-neutral-900 font-sans selection:bg-orange-100 selection:text-orange-900 pt-24 pb-0">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER & BREADCRUMB                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        {/* Back navigation breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/80 shadow-2xs hover:shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-medium text-neutral-600">Company</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-bold text-[#F27C23]">Contact Us</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50/90 border border-orange-200/80 text-[#F27C23] text-xs font-extrabold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT WITH BRAVE EDGE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.12]">
            Let's engineer your <span className="text-[#F27C23]">intelligent advantage</span>.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Whether you are exploring an AI-native website revamp, enterprise contextual AI ingestion, or real-time system connectors, our technical architects in Helsinki are ready to collaborate.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN 2-COLUMN CONTACT GRID                                 */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Details, HQ Info & Guarantees (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary HQ Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F27C23] flex items-center justify-center shrink-0 shadow-2xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-neutral-900 uppercase tracking-wide">
                    Helsinki Office
                  </h3>
                  <p className="text-xs text-neutral-500">Finland HQ</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-neutral-100 text-xs sm:text-sm text-neutral-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F27C23] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-900">Address</div>
                    <div className="text-neutral-600 leading-relaxed">
                      Lapinlahdenkatu 16<br />
                      00180 Helsinki, Finland
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#58548C] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-900">Phone</div>
                    <a
                      href="tel:+3584510178XX"
                      className="text-neutral-600 hover:text-[#58548C] transition-colors font-mono"
                    >
                      +358 45 10178XX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#45769B] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-900">Direct Support Email</div>
                    <a
                      href="mailto:support@braveedge.fi"
                      className="text-neutral-600 hover:text-[#45769B] transition-colors font-medium underline underline-offset-2"
                    >
                      support@braveedge.fi
                    </a>
                  </div>
                </div>

                {/* SLA / Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-neutral-900">Response SLA</div>
                    <div className="text-neutral-600">
                      Technical review & response within 24 business hours (EET).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nordic Hub Context Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 via-[#58548C]/5 to-white border border-purple-100 shadow-sm space-y-3.5 text-left">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#58548C] uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-[#58548C]" />
                <span>Nordic & Baltic Operations</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Operating directly out of Finland and Estonia, serving corporate SMEs across the Nordics and international partners globally with GDPR-sovereign AI infrastructure.
              </p>
              <div className="pt-1 space-y-2 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#58548C] shrink-0" />
                  <span>1-on-1 technical discovery with lead system architects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#58548C] shrink-0" />
                  <span>ERP, CRM & data source feasibility audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#58548C] shrink-0" />
                  <span>EU AI Act & FIN-FSA regulatory compliance</span>
                </div>
              </div>
            </div>

            {/* Quick Vendor Link Pill */}
            <div className="p-4 rounded-2xl bg-white/70 border border-neutral-200/80 flex items-center justify-between text-xs">
              <span className="text-neutral-600 font-medium">Looking to partner as a technology vendor?</span>
              <a
                href="https://www.braveedge.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#58548C] hover:text-purple-700 hover:underline flex items-center gap-1 shrink-0 ml-2"
              >
                <span>Vendor Portal</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Professional Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-md text-left">
              
              {isSubmitted ? (
                /* Success State */
                <div className="py-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-neutral-900">{formState.fullName}</span>. Our technical architecture team has received your project parameters and will reach out to <span className="font-bold text-neutral-900">{formState.email}</span> within 24 business hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-left text-xs space-y-1.5 max-w-md mx-auto">
                    <div className="font-bold text-neutral-800">Enquiry Summary:</div>
                    <div className="text-neutral-600"><span className="font-medium">Company:</span> {formState.company}</div>
                    <div className="text-neutral-600"><span className="font-medium">Focus Area:</span> {formState.interest}</div>
                    <div className="text-neutral-600"><span className="font-medium">Timeline:</span> {formState.timeline}</div>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                    <button
                      onClick={onNavigateHome}
                      className="px-5 py-2.5 rounded-xl bg-[#F27C23] hover:bg-[#E06B12] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
                    >
                      Return to Home
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
                      Request Technical Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500">
                      Share your digital transformation goals or website revamp parameters with our team.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">
                        Full Name <span className="text-[#F27C23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Matti Virtanen"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F27C23]/20 focus:border-[#F27C23] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">
                        Business Email <span className="text-[#F27C23]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="e.g. matti@company.fi"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F27C23]/20 focus:border-[#F27C23] transition-all"
                      />
                    </div>
                  </div>

                  {/* Company & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">
                        Company Name <span className="text-[#F27C23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Nordic Solutions Oy"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F27C23]/20 focus:border-[#F27C23] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-neutral-700">
                        Current Website / Domain
                      </label>
                      <input
                        type="text"
                        name="website"
                        value={formState.website}
                        onChange={handleInputChange}
                        placeholder="e.g. www.company.fi"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F27C23]/20 focus:border-[#F27C23] transition-all"
                      />
                    </div>
                  </div>

                  {/* Region Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700">
                      Region / Country
                    </label>
                    <select
                      name="region"
                      value={formState.region}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F27C23]/20 focus:border-[#F27C23] transition-all cursor-pointer"
                    >
                      <option value="Finland / Nordics">Finland (Helsinki, Espoo, Tampere & Nordics)</option>
                      <option value="Estonia / Baltics">Estonia (Tallinn, Tartu & Baltics)</option>
                      <option value="Sweden / Scandinavia">Sweden & Scandinavia</option>
                      <option value="Rest of Europe">Rest of Europe (EU)</option>
                      <option value="Global / North America">Global / International</option>
                    </select>
                  </div>

                  {/* Primary Area of Interest Pills */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">
                      Primary Area of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleInterestSelect(option)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            formState.interest === option
                              ? 'bg-[#F27C23] text-white shadow-2xs border border-[#F27C23]'
                              : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200/80'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Pills */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">
                      Target Project Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleTimelineSelect(opt)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            formState.timeline === opt
                              ? 'bg-[#58548C] text-white shadow-2xs border border-[#58548C]'
                              : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200/80'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Overview Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700">
                      Project Goals & Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Describe your current setup, target features (e.g. conversational AI assistant, ERP connectors, 3D configurator), and any specific data sources..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F27C23]/20 focus:border-[#F27C23] transition-all resize-none"
                    />
                  </div>

                  {/* GDPR Consent */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      checked={formState.gdprConsent}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, gdprConsent: e.target.checked }))
                      }
                      className="w-4 h-4 accent-[#F27C23] rounded cursor-pointer"
                    />
                    <label htmlFor="gdprConsent" className="text-[11px] text-neutral-500 cursor-pointer">
                      I agree to the processing of my contact information in accordance with EU GDPR standards.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-2xl bg-[#F27C23] hover:bg-[#E06B12] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-orange-500/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing to technical architects...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Technical Enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. INTEGRATED FOOTER                                          */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full">
        <WebsiteFooterBar
          onNavigate={(view) => {
            if (view === 'home') onNavigateHome();
            else if (view === 'about' && onNavigateAbout) onNavigateAbout();
            else if (view === 'services' && onNavigateServices) onNavigateServices();
            else if (view === 'solutions' && onNavigateSolutions) onNavigateSolutions();
            else if (view === 'use-cases' && onNavigateUseCases) onNavigateUseCases();
          }}
        />
      </div>

    </div>
  );
};

export default ContactPage;
