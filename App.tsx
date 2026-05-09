import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Wrench,
  Droplets,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Flame,
  Gauge,
  Home,
  Building2,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: Droplets,
    title: 'Leak Detection & Repair',
    description:
      'State-of-the-art leak detection technology to find and fix hidden leaks before they cause costly damage.',
  },
  {
    icon: Wrench,
    title: 'Pipe Installation & Repair',
    description:
      'From repiping entire homes to patching a single section, we handle all pipe work with precision.',
  },
  {
    icon: Flame,
    title: 'Water Heater Services',
    description:
      'Installation, repair, and maintenance of traditional and tankless water heaters from all major brands.',
  },
  {
    icon: Gauge,
    title: 'Drain Cleaning',
    description:
      'Powerful hydro-jetting and snaking services to clear stubborn blockages and restore full flow.',
  },
  {
    icon: Home,
    title: 'Residential Plumbing',
    description:
      'Complete plumbing solutions for homes — from fixture upgrades to full bathroom remodels.',
  },
  {
    icon: Building2,
    title: 'Commercial Plumbing',
    description:
      'Reliable commercial plumbing services designed to minimise downtime and keep your business running.',
  },
];

const REVIEWS = [
  {
    name: 'Sarah M.',
    rating: 5,
    date: 'March 2025',
    text: 'James came out same day and fixed our burst pipe within an hour. Professional, clean, and fairly priced. Will absolutely use again!',
  },
  {
    name: 'Tom B.',
    rating: 5,
    date: 'January 2025',
    text: 'Had a water heater replaced and the whole job was done in under 3 hours. Great communication from start to finish.',
  },
  {
    name: 'Linda K.',
    rating: 5,
    date: 'November 2024',
    text: "Best plumber I've ever hired. Diagnosed a slow drain issue nobody else could figure out. Honest and very knowledgeable.",
  },
  {
    name: 'Marcus D.',
    rating: 5,
    date: 'October 2024',
    text: 'Used James\' Plumbing for a full bathroom renovation. Exceptional quality work and they left the place spotless.',
  },
  {
    name: 'Priya S.',
    rating: 4,
    date: 'September 2024',
    text: 'Prompt service and very transparent about pricing. Fixed our leaking kitchen sink the same afternoon we called.',
  },
  {
    name: 'Chris W.',
    rating: 5,
    date: 'August 2024',
    text: 'Emergency call at 11pm and James answered. Leak was stopped within the hour. Truly 24/7 service.',
  },
];

const FAQS = [
  {
    question: 'Do you offer 24/7 emergency plumbing?',
    answer:
      'Yes. We are available around the clock for genuine plumbing emergencies — burst pipes, flooding, gas leaks, and more. Call our emergency line anytime.',
  },
  {
    question: 'How quickly can you arrive?',
    answer:
      'For emergencies we aim to arrive within 60 minutes. For standard appointments we typically offer same-day or next-day availability.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. James\' Plumbing is fully licensed, bonded, and insured. All work is completed to code and backed by our workmanship guarantee.',
  },
  {
    question: 'Do you provide free estimates?',
    answer:
      'Yes, we provide free, no-obligation estimates for all non-emergency work. We believe in transparent pricing with no hidden fees.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the greater metro area and surrounding suburbs within a 40-mile radius. Contact us to confirm service in your specific location.',
  },
  {
    question: 'Do you guarantee your work?',
    answer:
      'All labour is backed by a 12-month workmanship guarantee. Parts are covered by their respective manufacturer warranties.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
          {answer}
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('sent');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={56} className="text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
        <p className="text-gray-600 mb-6">
          Thanks for reaching out. We'll be in touch within a few hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900 placeholder-gray-400"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900 placeholder-gray-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">How can we help?</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Describe your plumbing issue or what service you need..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-gray-900 placeholder-gray-400 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          <span>Sending...</span>
        ) : (
          <>
            Send Message <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <div className="font-sans text-gray-900 antialiased">
      {/* ── Nav ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <Droplets size={20} className="text-white" />
            </div>
            <span
              className={`font-bold text-lg tracking-tight transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              James' Plumbing
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+15551234567"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
            >
              <Phone size={15} />
              Call Now
            </a>
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
            mobileOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-3 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 mt-3 w-full justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              <Phone size={16} />
              (555) 123-4567
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Plumber at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/70 to-gray-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Available 24/7 for Emergencies
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Expert Plumbing
              <br />
              <span className="text-blue-400">You Can Trust</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              James' Plumbing delivers fast, reliable plumbing services for homes and businesses.
              Licensed, insured, and backed by a satisfaction guarantee.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <Phone size={20} />
                (555) 123-4567
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { icon: ShieldCheck, label: 'Licensed & Insured' },
                { icon: Clock, label: '60-Min Response' },
                { icon: CheckCircle, label: '12-Month Guarantee' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-300">
                  <Icon size={18} className="text-blue-400" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-blue-600 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white text-sm font-medium">
            {[
              '20+ Years Experience',
              'Over 2,000 Jobs Completed',
              '5-Star Rated Service',
              'Upfront Flat-Rate Pricing',
              'No Hidden Fees',
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                {i > 0 && <span className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full" />}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From emergency repairs to full installations, we cover every plumbing need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="James the plumber"
                className="w-full h-[520px] object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-black leading-none">20+</div>
                <div className="text-blue-200 text-sm mt-1 font-medium">Years in business</div>
              </div>
            </div>

            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6">
                Plumbing Done Right,
                <br />
                Every Time
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                James founded this business with a single principle: treat every customer's home like
                your own. That means honest advice, quality materials, and work that lasts.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: 'Transparent Pricing',
                    desc: 'Get a firm quote before any work begins. No surprises on your bill.',
                  },
                  {
                    title: 'Same-Day Availability',
                    desc: "We understand plumbing can't wait. We prioritise fast scheduling.",
                  },
                  {
                    title: 'Clean & Respectful',
                    desc: 'We protect your home, clean up after ourselves, and treat your space with care.',
                  },
                  {
                    title: 'Fully Guaranteed',
                    desc: 'All labour is covered by a 12-month workmanship warranty — no questions asked.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <CheckCircle size={14} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{title}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency CTA ── */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#3b82f6_0%,_transparent_60%)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            Emergency Service Available Now
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Plumbing Emergency?
            <br />
            <span className="text-blue-400">We're One Call Away.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Don't let a burst pipe or flooding cause thousands in damage. Our emergency team is
            standing by 24 hours a day, 7 days a week.
          </p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl px-10 py-5 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            <Phone size={24} />
            Call (555) 123-4567
          </a>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Customer Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">4.9 out of 5</span>
              <span className="text-gray-400 text-sm">— 200+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <StarRating rating={review.rating} />
                <p className="text-gray-700 mt-4 mb-5 leading-relaxed text-sm">{review.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{review.date}</div>
                  </div>
                  <CheckCircle size={16} className="text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
              Common Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know before booking.
            </p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
                Request a Free Quote
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Fill out the form and we'll get back to you within a few hours. For urgent issues,
                please call us directly.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
                  { icon: Mail, label: 'Email', value: 'james@jamesplumbing.com', href: 'mailto:james@jamesplumbing.com' },
                  { icon: MapPin, label: 'Service Area', value: 'Greater Metro Area & Surrounds', href: null },
                  { icon: Clock, label: 'Hours', value: 'Mon–Sat 7am–7pm | 24/7 Emergency', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="text-gray-800 font-semibold hover:text-blue-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-gray-800 font-semibold">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Droplets size={16} className="text-white" />
              </div>
              <span className="text-white font-bold">James' Plumbing</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="text-sm text-center">
              © {new Date().getFullYear()} James' Plumbing. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
