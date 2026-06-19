import React from "react";
import {
  Building2,
  Shield,
  Network,
  Sun,
  Menu,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              GNIT <span className="text-green-600">LTD</span>
            </h1>
            <p className="text-xs text-slate-500">
              Engineering Critical Infrastructure for Africa
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-green-600">
              Home
            </a>
            <a href="#about" className="hover:text-green-600">
              Company Profile
            </a>
            <a href="#business-units" className="hover:text-green-600">
              Business Units
            </a>
            <a href="#services" className="hover:text-green-600">
              Services
            </a>
            <a href="#contact" className="hover:text-green-600">
              Contact
            </a>
          </nav>

          <button className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-700/20 border border-green-500 px-4 py-2 rounded-full text-sm mb-6">
              <CheckCircle size={16} />
              Established 2019 | RC 1551039
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Engineering Critical
              <span className="text-green-500 block">
                Infrastructure for Africa
              </span>
            </h1>

            <p className="text-xl text-slate-300 mt-8 max-w-3xl">
              GNIT LTD is a multidisciplinary Engineering, Procurement and
              Construction (EPC) company delivering integrated Energy, ICT,
              Security and Infrastructure solutions across Nigeria and Africa.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2">
                Request Consultation
                <ArrowRight size={18} />
              </button>

              <button className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="bg-slate-100 border-y">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="font-bold text-xl">2019</h3>
              <p className="text-slate-600">Established</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">RC 1551039</h3>
              <p className="text-slate-600">Registered Company</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Abuja</h3>
              <p className="text-slate-600">Head Office</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Africa</h3>
              <p className="text-slate-600">Growth Vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT GNIT */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                Company Profile
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-6">
                Building Sustainable Infrastructure for a Connected Future
              </h2>

              <p className="text-lg text-slate-600 mb-6">
                GNIT LTD provides integrated engineering, energy, ICT and
                security solutions that enable governments, institutions,
                businesses and communities to operate efficiently, securely and
                sustainably.
              </p>

              <p className="text-lg text-slate-600">
                Our end-to-end approach covers consulting, engineering design,
                procurement, implementation, commissioning and long-term
                operational support.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-10 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>

              <div className="space-y-4">
                <div>✓ Integrity</div>
                <div>✓ Excellence</div>
                <div>✓ Innovation</div>
                <div>✓ Safety</div>
                <div>✓ Sustainability</div>
                <div>✓ Customer Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS UNITS */}
      <section
        id="business-units"
        className="py-24 bg-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-500 font-semibold uppercase">
              Strategic Business Units
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Integrated Infrastructure Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* EPC */}
            <div className="bg-slate-800 p-8 rounded-xl">
              <Building2 className="text-green-500 mb-4" size={40} />

              <h3 className="text-xl font-bold mb-4">
                GNIT EPC & Infrastructure
              </h3>

              <p className="text-slate-300">
                Engineering, Procurement and Construction services for public
                and private sector infrastructure projects.
              </p>
            </div>

            {/* ENERGY */}
            <div className="bg-slate-800 p-8 rounded-xl">
              <Sun className="text-green-500 mb-4" size={40} />

              <h3 className="text-xl font-bold mb-4">
                GNIT Energy
              </h3>

              <p className="text-slate-300">
                Renewable energy solutions including solar, hybrid systems,
                battery storage and wind energy projects.
              </p>
            </div>

            {/* ICT */}
            <div className="bg-slate-800 p-8 rounded-xl">
              <Network className="text-green-500 mb-4" size={40} />

              <h3 className="text-xl font-bold mb-4">
                GNIT ICT
              </h3>

              <p className="text-slate-300">
                Enterprise networking, fibre infrastructure, cybersecurity,
                data centres and digital transformation solutions.
              </p>
            </div>

            {/* SECURITY */}
            <div className="bg-slate-800 p-8 rounded-xl">
              <Shield className="text-green-500 mb-4" size={40} />

              <h3 className="text-xl font-bold mb-4">
                GNIT Security
              </h3>

              <p className="text-slate-300">
                CCTV surveillance, access control, intrusion detection and
                integrated electronic security systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase">
              Services
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Comprehensive Infrastructure Solutions
            </h2>

            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
              GNIT provides end-to-end engineering, technology, energy and
              security services designed to support sustainable development and
              operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-4">
                EPC & Infrastructure
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>Engineering Design</li>
                <li>Procurement</li>
                <li>Construction Management</li>
                <li>Project Delivery</li>
                <li>Technical Consultancy</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-4">
                Renewable Energy
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>Solar PV Systems</li>
                <li>Hybrid Energy Systems</li>
                <li>Battery Storage</li>
                <li>Wind Energy</li>
                <li>Operations & Maintenance</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-4">
                ICT Infrastructure
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>Enterprise Networking</li>
                <li>Fiber Optics</li>
                <li>Data Centres</li>
                <li>Cybersecurity</li>
                <li>Systems Integration</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-4">
                Security Systems
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>CCTV Surveillance</li>
                <li>Access Control</li>
                <li>Intrusion Detection</li>
                <li>Perimeter Security</li>
                <li>Monitoring Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SMART COMMUNITIES */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase">
              Flagship Solution
            </span>

            <h2 className="text-4xl font-bold mt-4">
              GNIT Smart Communities™
            </h2>

            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
              Integrated digital, energy and security infrastructure for modern
              residential estates, business parks, educational campuses and
              mixed-use developments.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-2xl mb-6">
                Connectivity
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Fiber Optic Backbone</li>
                <li>✓ GPON Infrastructure</li>
                <li>✓ Enterprise WiFi</li>
                <li>✓ Structured Cabling</li>
                <li>✓ Internet Distribution</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-2xl mb-6">
                Security
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ CCTV Surveillance</li>
                <li>✓ Access Control</li>
                <li>✓ Visitor Management</li>
                <li>✓ Perimeter Security</li>
                <li>✓ Monitoring Systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-2xl mb-6">
                Energy
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Solar Infrastructure</li>
                <li>✓ Hybrid Power Systems</li>
                <li>✓ Battery Storage</li>
                <li>✓ Solar Street Lighting</li>
                <li>✓ Smart Metering Ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION PACKAGES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase">
              Industry Solutions
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Tailored Infrastructure Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Smart Schools™
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>Campus Fiber Network</li>
                <li>Enterprise WiFi</li>
                <li>Solar Power Systems</li>
                <li>CCTV Monitoring</li>
                <li>Access Control</li>
                <li>Digital Learning Infrastructure</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Smart Hospitals™
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>Hybrid Power Systems</li>
                <li>Secure ICT Infrastructure</li>
                <li>Data Centres</li>
                <li>CCTV Systems</li>
                <li>Access Control</li>
                <li>Telemedicine Support</li>
              </ul>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Smart Government Facilities™
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>Data Centre Infrastructure</li>
                <li>Fiber Backbone</li>
                <li>Security Command Centre</li>
                <li>Solar Backup Systems</li>
                <li>Integrated Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-500 font-semibold uppercase">
              Industries Served
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Supporting Critical Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Government",
              "Education",
              "Healthcare",
              "Telecommunications",
              "Manufacturing",
              "Commercial Real Estate",
              "Agriculture",
              "Hospitality",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-slate-800 p-6 rounded-xl text-center"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GNIT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase">
              Why GNIT
            </span>

            <h2 className="text-4xl font-bold mt-4">
              A Trusted Infrastructure Partner
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">
                Integrated Expertise
              </h3>

              <p className="text-slate-600">
                Energy, ICT, Security and EPC services under one organization.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">
                End-to-End Delivery
              </h3>

              <p className="text-slate-600">
                Complete project lifecycle management from design to support.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">
                Quality & Safety
              </h3>

              <p className="text-slate-600">
                Commitment to excellence, compliance and operational safety.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">
                Sustainable Innovation
              </h3>

              <p className="text-slate-600">
                Future-ready infrastructure solutions designed for growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase">
              Project Experience
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Delivering Critical Infrastructure Solutions
            </h2>

            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
              GNIT supports public and private sector organizations through the
              successful delivery of engineering, ICT, security and renewable
              energy projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                ICT Infrastructure
              </h3>

              <p className="text-slate-600">
                Enterprise networks, wireless deployments, structured cabling,
                data centres and cybersecurity solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Renewable Energy
              </h3>

              <p className="text-slate-600">
                Solar power systems, hybrid energy infrastructure, battery
                storage and sustainable power solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                Security Systems
              </h3>

              <p className="text-slate-600">
                CCTV surveillance, access control, perimeter protection and
                integrated security platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-4">
                EPC Services
              </h3>

              <p className="text-slate-600">
                Engineering design, procurement, construction management and
                infrastructure project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HSE & QUALITY */}
      <section id="hse" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-500 font-semibold uppercase">
              HSE & Quality
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Safety, Quality and Sustainability
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Our Commitment
              </h3>

              <p className="text-slate-300 mb-6">
                GNIT is committed to maintaining the highest standards of
                health, safety, environmental stewardship and quality
                management across all operations.
              </p>

              <ul className="space-y-4">
                <li>✓ Zero Harm Philosophy</li>
                <li>✓ Environmental Protection</li>
                <li>✓ Regulatory Compliance</li>
                <li>✓ Continuous Improvement</li>
                <li>✓ Quality Assurance</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">
                Core Objectives
              </h3>

              <div className="space-y-4">
                <div className="border-b border-slate-700 pb-4">
                  Zero Major Incidents
                </div>

                <div className="border-b border-slate-700 pb-4">
                  Safe Project Delivery
                </div>

                <div className="border-b border-slate-700 pb-4">
                  Client Satisfaction
                </div>

                <div className="border-b border-slate-700 pb-4">
                  Sustainable Infrastructure Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-green-600 font-semibold uppercase">
              Careers
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Build the Future With GNIT
            </h2>

            <p className="text-slate-600 mt-6 max-w-3xl mx-auto">
              We are always interested in hearing from talented professionals
              across engineering, energy, ICT, security and project management
              disciplines.
            </p>

            <div className="mt-10">
              <a
                href="mailto:info@gnit-ltd.com"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg inline-block"
              >
                Submit Your CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-500 font-semibold uppercase">
              Contact Us
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Let's Discuss Your Next Project
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-slate-800 p-8 rounded-xl">
              <Mail size={32} className="text-green-500 mb-4" />

              <h3 className="font-bold text-xl mb-4">
                Email
              </h3>

              <p>info@gnit-ltd.com</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <Phone size={32} className="text-green-500 mb-4" />

              <h3 className="font-bold text-xl mb-4">
                Phone / WhatsApp
              </h3>

              <p>+234 805 999 1118</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <MapPin size={32} className="text-green-500 mb-4" />

              <h3 className="font-bold text-xl mb-4">
                Head Office
              </h3>

              <p>Abuja, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <h2 className="text-2xl font-bold">
                GNIT <span className="text-green-500">LTD</span>
              </h2>

              <p className="text-slate-400 mt-4">
                Engineering Critical Infrastructure for Africa
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Strategic Business Units
              </h3>

              <ul className="space-y-2 text-slate-400">
                <li>GNIT EPC & Infrastructure</li>
                <li>GNIT Energy</li>
                <li>GNIT ICT</li>
                <li>GNIT Security</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                Contact Information
              </h3>

              <ul className="space-y-2 text-slate-400">
                <li>info@gnit-ltd.com</li>
                <li>+234 805 999 1118</li>
                <li>Abuja, Nigeria</li>
                <li>RC 1551039</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-10 pt-8 text-center text-slate-500">
            © {new Date().getFullYear()} GNIT LTD. All Rights Reserved.
          </div>
        </div>
      </footer>
