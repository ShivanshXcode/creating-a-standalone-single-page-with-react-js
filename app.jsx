import React, { useState } from 'react';

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Tailwind CSS CDN script for development purposes - typically loaded in index.html or via postcss/webpack */}
      {/* For this setup, it's assumed Tailwind is loaded globally via CDN or build process */}
      {/* Font Awesome is loaded via CDN link in the head (can be moved to index.html for strict correctness) */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>

      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Logos Section */}
      <LogosSection />

      {/* Partner Advantages Section */}
      <PartnerAdvantagesSection />

      {/* Partnership Programs Section */}
      <PartnershipProgramsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Get Started Section */}
      <GetStartedSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Platform', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Developers', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <header className="bg-[#12002f] py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center relative z-10 rounded-b-xl shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-white">cometchat</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-8 lg:space-x-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <a
          href="#"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium"
        >
          Log in
        </a>
        <button className="bg-[#7B46F1] hover:bg-[#6a3ad0] text-white py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
          Schedule a demo
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#12002f] shadow-lg py-4 px-6 z-20">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col space-y-4 items-center">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </a>
            <button className="bg-[#7B46F1] hover:bg-[#6a3ad0] text-white py-3 px-6 rounded-full w-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
              Schedule a demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-[#12002f] min-h-[calc(100vh-6rem)] flex items-center justify-center py-16 px-6 md:px-12 lg:px-24 rounded-b-xl overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-10 left-10 md:top-20 md:left-20 lg:w-96 lg:h-96"></div>
        <div className="absolute w-64 h-64 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-2/3 left-1/4 md:top-1/2 md:left-1/3 lg:w-96 lg:h-96"></div>
        <div className="absolute w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-10 right-10 md:bottom-20 md:right-20 lg:w-96 lg:h-96"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Join the CometChat partner universe
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-500">
            Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
          </p>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-[#1C003D] p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-purple-800 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-purple-300">
              Become a partner
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-400 text-sm font-medium mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Type your name here..."
                  className="w-full px-4 py-3 bg-[#0f0022] border border-purple-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Type your email something..."
                  className="w-full px-4 py-3 bg-[#0f0022] border border-purple-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-gray-400 text-sm font-medium mb-2">
                  Companies name
                </label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Type you company's name"
                  className="w-full px-4 py-3 bg-[#0f0022] border border-purple-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7B46F1] hover:bg-[#6a3ad0] text-white py-3 rounded-xl font-semibold text-lg transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
              >
                Submit application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Logos Section Component
const LogosSection = () => {
  const logos = [
    { src: "https://placehold.co/100x40/000000/FFFFFF?text=AWS", alt: "AWS Logo" },
    { src: "https://placehold.co/100x40/000000/FFFFFF?text=10XGenomics", alt: "10X Genomics Logo" },
    { src: "https://placehold.co/100x40/000000/FFFFFF?text=Microsoft", alt: "Microsoft Logo" },
    { src: "https://placehold.co/100x40/000000/FFFFFF?text=NASSCOM", alt: "NASSCOM Logo" },
    { src: "https://placehold.co/100x40/000000/FFFFFF?text=Techstars", alt: "Techstars Logo" },
    { src: "https://placehold.co/100x40/000000/FFFFFF?text=TeknoPoint", alt: "Tekno Point Logo" },
    { src: "https://placehold.co/100x40/000000/FFFFFF?text=Cisco", alt: "Cisco Logo" },
  ];

  return (
    <section className="bg-black py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 transform hover:scale-110"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x40/000000/FFFFFF?text=${logo.alt.replace(/\s/g, '')}`; }}
          />
        ))}
      </div>
    </section>
  );
};

// Partner Advantages Section Component
const PartnerAdvantagesSection = () => {
  const advantages = [
    {
      icon: 'fas fa-coins',
      title: 'Free credits',
      description: 'Empowering partners to scale.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Revenue share',
      description: 'Get monthly recurring revenues when you refer clients.',
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Training and mentoring sessions',
      description: 'Enabling partners to deliver the best experience.',
    },
    {
      icon: 'fas fa-unlock-alt',
      title: 'Special developer access',
      description: 'Get an all-access account to build unlimited POCs for your clients.',
    },
    {
      icon: 'fas fa-clock',
      title: 'Reduced time',
      description: 'Deliver your products much faster with our partners\' programs.',
    },
    {
      icon: 'fas fa-star',
      title: 'Value addition to your users',
      description: 'We need a 2 line text here',
    },
    {
      icon: 'fas fa-book',
      title: 'Knowledge sessions',
      description: 'Access to product and market sessions.',
    },
    {
      icon: 'fas fa-headset',
      title: 'On-demand support',
      description: 'Technical assistance for implementation.',
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Significant passive income',
      description: 'We need a 2 line text here',
    },
  ];

  return (
    <section className="bg-[#0A001F] py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h3 className="text-purple-400 text-lg font-semibold mb-2">Be a partner</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          CometChat partner advantages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-[#1C003D] p-6 rounded-xl border border-purple-800 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30"
            >
              <div className="text-purple-400 text-3xl mb-4">
                <i className={advantage.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-300">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Partnership Programs Section Component
const PartnershipProgramsSection = () => {
  const programs = [
    {
      icon: 'fas fa-handshake',
      title: 'Affiliate partner program',
      description:
        'Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentives for referring CometChat to any of your customers.',
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Technology partner program',
      description:
        'Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!',
    },
    {
      icon: 'fas fa-rocket',
      title: 'Start-up growth program',
      description:
        'We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.',
    },
  ];

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h3 className="text-purple-400 text-lg font-semibold mb-2">Our programs</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-xl">
          Types of partnerships programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#0A001F] p-6 rounded-xl border border-purple-800 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30"
            >
              <div className="text-purple-400 text-3xl mb-4">
                <i className={program.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-300">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-purple-800 rounded-xl bg-[#1C003D] shadow-lg mb-4 overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-500/30">
      <button
        className="flex justify-between items-center w-full p-5 text-left text-white focus:outline-none transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-purple-400 text-xl transform transition-transform duration-300">
          <i className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-2 text-gray-300 border-t border-purple-800">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'This is a frequently asked question?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.',
    },
    {
      question: 'This is a frequently asked question?',
      answer: 'Answer to the second frequently asked question.',
    },
    {
      question: 'This is a very long frequently asked question about our services with more than one line?',
      answer: 'Answer to the third frequently asked question which has a longer question.',
    },
    {
      question: 'This is a question?',
      answer: 'Answer to the fourth question.',
    },
    {
      question: 'This is a question?',
      answer: 'Answer to the fifth question.',
    },
  ];

  return (
    <section className="bg-[#0A001F] py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h3 className="text-purple-400 text-lg font-semibold mb-2">FAQ's</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
          We want to help you with all your doubts
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Get Started Section Component
const GetStartedSection = () => {
  return (
    <section className="relative bg-[#12002f] py-20 px-6 md:px-12 lg:px-24 overflow-hidden rounded-b-xl">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-1/4 left-1/4"></div>
        <div className="absolute w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-1/2 right-1/4"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
          Get started for free
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
          Build and test for as long as you need. Pick a plan when you're ready.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-1000">
          <button className="bg-transparent border border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
            Start free trial
          </button>
          <button className="bg-[#7B46F1] hover:bg-[#6a3ad0] text-white py-3 px-8 rounded-full font-semibold transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        'Features', 'Chat & Messaging', 'Voice & Video Calls', 'Security & Compliance',
        'Extensions', 'Features at a glance', 'Webhooks & Bots', 'Moderation',
        'Analytics & Insights', 'Implementation', 'Widgets', 'UI Kits', 'SDKs & APIs',
        'Technologies', 'React Chat SDK & API', 'Angular Chat SDK & API', 'Vue Chat SDK & API',
        'iOS Swift Chat SDK & API', 'Android Kotlin Chat SDK & API', 'Android Java Chat SDK & API',
        'React Native Chat SDK & API', 'WordPress Chat SDK & API', 'Laravel/PHP Chat SDK & API',
        'Next.js Chat SDK & API'
      ],
    },
    {
      title: 'Solutions',
      links: [
        'By Use cases', 'Social Community', 'Marketplace', 'Healthcare', 'Education',
        'Virtual Events', 'On-demand Service', 'Dating Apps', 'Gaming', 'By Organization Type',
        'Enterprise', 'Startups'
      ],
    },
    {
      title: 'Developers',
      links: [
        'Technologies documentation', 'React', 'Angular', 'Vue', 'iOS Swift', 'Android Kotlin',
        'Android Java', 'React Native', 'Ionic/Capacitor', 'WordPress', 'Laravel/Php', 'Flutter',
        'Next.js', 'Documentation', 'Documentation', 'Product updates', 'Tutorials',
        'Open-source Apps', 'Product status', 'Glossary'
      ],
    },
    {
      title: 'Resources',
      links: [
        'Customer stories', 'Blog', 'Give feedback', 'Community forum', 'Help center',
        'Partners'
      ],
    },
    {
      title: 'Competitors',
      links: [
        'Sendbird', 'Getstream', 'Applozic', 'Twilio', 'Pubnub'
      ],
    },
    {
      title: 'Company',
      links: [
        'About us', 'Careers', 'Chat with us'
      ],
    },
  ];

  return (
    <footer className="bg-[#0A001F] py-16 px-6 md:px-12 lg:px-24 border-t border-purple-900">
      <div className="container mx-auto">
        {/* Top section: Logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-purple-900">
          <div className="mb-8 lg:mb-0">
            <span className="text-2xl font-bold text-white">cometchat</span>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h4 className="text-purple-400 font-semibold text-lg mb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section: Copyright and social media */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} CometChat</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-white transition duration-300">Terms of Use</a>
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
            </div>
          </div>
          <div className="flex space-x-6 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-white transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition duration-300">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;