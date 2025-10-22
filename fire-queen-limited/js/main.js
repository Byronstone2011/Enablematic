const appData = {
  "brand": {
    "name": "Fire Queen Limited",
    "tagline": "",
    "category": "",
    "location": "",
    "phone": ""
  },
  "hero": {
    "eyebrow": "Trusted Fire Safety Solutions",
    "title": "Stay Compliant & Protected with Expert Fire Services",
    "description": "FIRE QUEEN LIMITED ensures your business meets fire safety regulations with timely servicing, reliable systems, and audit-ready compliance documentation. From risk",
    "highlights": [
      {
        "label": "Established",
        "value": "Stockpor"
      },
      {
        "label": "Technicians",
        "value": "BAFE Re"
      },
      {
        "label": "Service Coverage",
        "value": "UK & Irela"
      }
    ],
    "image": "https://images.pexels.com/photos/33533879/pexels-photo-33533879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "pillars": {
    "eyebrow": "What sets us apart",
    "title": "Every detail creates a premium client experience.",
    "items": [
      {
        "title": "Certified Expertise",
        "description": "BAFE registered technicians ensure all services meet the highest safety standards and government regulations."
      },
      {
        "title": "Comprehensive Services",
        "description": "From fire extinguisher servicing to alarm diagnostics, we provide end-to-end fire safety solutions."
      },
      {
        "title": "Trusted Across Industri",
        "description": "Proven track record with local councils, landlords, schools, and commercial businesses nationwide."
      }
    ]
  },
  "offerings": {
    "eyebrow": "Our core spaces",
    "title": "Spaces and services tuned for your clients.",
    "description": "Comprehensive fire safety services tailored to your needs. Let us keep your premises safe and compliant.",
    "cards": [
      {
        "icon": "🛋️",
        "title": "Fire Extinguisher Servicin",
        "description": "Supply, installation, recharge, and annual maintenance for portable extinguishers."
      },
      {
        "icon": "🛠️",
        "title": "Fire Alarm Solutions",
        "description": "Installation, servicing, fault diagnostics, and system upgrades for all fire alarms."
      },
      {
        "icon": "🎥",
        "title": "Emergency Lighting",
        "description": "Testing, installation, and servicing to ensure reliable emergency lighting systems."
      }
    ]
  },
  "story": {
    "eyebrow": "Our Journey",
    "title": "Safeguarding Lives and Businesses",
    "paragraphs": [
      "At FIRE QUEEN LIMITED, we specialize in fire safety solutions that protect lives and property. Operating from Stockport, our expert team provides trusted services like extinguisher servicing, alarm maintenance, and emergency",
      "Our tailored solutions empower businesses to meet compliance standards with ease. From automated maintenance scheduling to certified inspections, we simplify fire safety management for organizations across the UK and Ireland."
    ],
    "image": "https://images.pexels.com/photos/7693223/pexels-photo-7693223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "testimonials": {
    "eyebrow": "What Clients Say",
    "title": "Real Results, Real Trust",
    "list": [
      {
        "quote": "FIRE QUEEN LIMITED transformed how we manage fire compliance. Their scheduled servicing and audit-ready documentation are invaluable.",
        "name": "Sarah Peters",
        "role": "Property Manager",
        "avatar": "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        "quote": "Thanks to their reliable fire systems, we operate with confidence knowing we're fully compliant with safety regulations.",
        "name": "John Taylor",
        "role": "Local Council Administrator",
        "avatar": "https://images.unsplash.com/photo-1589668944320-409833e5ba10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTU1NTB8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYWRtaW5pc3RyYXRpb24lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc2MTE1Mzg2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  "visit": {
    "eyebrow": "Visit Us",
    "title": "Find Us in Stockport",
    "description": "Located in the heart of Stockport, FIRE QUEEN LIMITED serves businesses across the UK & Ireland with unmatched fire safety expertise.",
    "address": "Stockport, England",
    "website": "www.firequeen.co.uk",
    "mapEmbed": ""
  },
  "inquiry": {
    "eyebrow": "Get Started",
    "title": "Request Your Consultation Today",
    "description": "Contact our team to schedule your free fire safety survey or inquire about our services. Let us help you stay safe and compliant.",
    "consent": "We respect your privacy and will only use your information to assist you."
  },
  "byronCallout": {
    "eyebrow": "Enablematic insight",
    "title": "Fire Safety Simplified with Automation",
    "description": "Leverage AI-powered tools to streamline fire safety management and compliance for your business.",
    "bullets": [
      "Automated maintenance scheduling and reminders for hassle-free compliance.",
      "Digital service certificates and audit-ready reports at your fingertips.",
      "Effortless e-commerce for fire safety products and inventory tracking."
    ],
    "offer": "Mention Fire Queen Limited for the launch-week optimization kit.",
    "ctaLabel": "Book a call with Byron",
    "email": "byron@enablematic.com",
    "phone": "(718) 555-0198",
    "badgeImage": "https://media.licdn.com/dms/image/v2/D4E3DAQHwjHFRSZGZHA/image-scale_191_1128/B4EZk.Au0BK0Ac-/0/1757682004292/enablematic_cover?e=1760900400&v=beta&t=4qqU51xjVGEF7nRAlH4pUD_qrv6Y4buDUMQnD1pkUKg",
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80"
  },
  "footer": {
    "blurb": "Fire Queen Limited delivers unforgettable experiences.",
    "address": "Stockport, England",
    "email": "",
    "socials": [
      {
        "label": "Instagram",
        "href": "https://instagram.com"
      },
      {
        "label": "Pinterest",
        "href": "https://pinterest.com"
      },
      {
        "label": "Google Reviews",
        "href": "https://google.com"
      }
    ]
  }
};

const Navigation = ({ brand }) => (
  <header className="nav">
    <div className="nav__brand">
      <div className="nav__logo">{brand.name}</div>
      <span className="nav__tagline">{brand.tagline}</span>
    </div>
    <div className="nav__meta">
      <span>{brand.category}</span>
      <span>{brand.location}</span>
      <a href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}>{brand.phone}</a>
    </div>
  </header>
);

const Hero = ({ hero }) => (
  <section className="hero">
    <div className="hero__content">
      <span className="eyebrow">{hero.eyebrow}</span>
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
      <div className="hero__stats">
        {hero.highlights.map((item) => (
          <div className="hero__stat" key={item.label}>
            <span className="hero__stat-value">{item.value}</span>
            <span className="hero__stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="hero__media">
      <div className="hero__media-card">
        <img src={hero.image} alt="Interior setting prepared for client services" />
      </div>
    </div>
  </section>
);

const Pillars = ({ pillars }) => (
  <section className="section section--pillars">
    <div className="section__header section__header--center">
      <span className="eyebrow">{pillars.eyebrow}</span>
      <h2>{pillars.title}</h2>
    </div>
    <div className="pillars-grid">
      {pillars.items.map((item) => (
        <article className="pillar-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

const Offerings = ({ offerings }) => (
  <section className="section" id="services">
    <div className="section__header">
      <span className="eyebrow">{offerings.eyebrow}</span>
      <h2>{offerings.title}</h2>
      <p>{offerings.description}</p>
    </div>
    <div className="services-track" role="list">
      {offerings.cards.map((card) => (
        <article className="service-card" key={card.title} role="listitem">
          <span className="service-card__icon" aria-hidden="true">
            {card.icon}
          </span>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </article>
      ))}
    </div>
  </section>
);

const Story = ({ story }) => (
  <section className="section section--story">
    <div className="story__media">
      <img src={story.image} alt="Team collaborating inside the studio" />
    </div>
    <div className="story__content">
      <span className="eyebrow">{story.eyebrow}</span>
      <h2>{story.title}</h2>
      {story.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </section>
);

const Testimonials = ({ testimonials }) => (
  <section className="section">
    <div className="section__header section__header--center">
      <span className="eyebrow">{testimonials.eyebrow}</span>
      <h2>{testimonials.title}</h2>
    </div>
    <div className="testimonial-grid">
      {testimonials.list.map((testimonial) => (
        <blockquote className="testimonial-card" key={testimonial.name}>
          <p className="testimonial-card__quote">“{testimonial.quote}”</p>
          <div className="testimonial-card__author">
            <img src={testimonial.avatar} alt={testimonial.name} />
            <div>
              <span className="testimonial-card__name">{testimonial.name}</span>
              <span className="testimonial-card__role">{testimonial.role}</span>
            </div>
          </div>
        </blockquote>
      ))}
    </div>
  </section>
);

const Visit = ({ visit }) => (
  <section className="section section--visit">
    <div className="visit__content">
      <span className="eyebrow">{visit.eyebrow}</span>
      <h2>{visit.title}</h2>
      <p>{visit.description}</p>
      <div className="visit__info">
        <div>
          <h3>Address</h3>
          <p>{visit.address}</p>
        </div>
        <div>
          <h3>Website</h3>
          <a className="visit__website" href={visit.website} target="_blank" rel="noreferrer">
            {visit.website.replace(/^https?:\/\//, "")}
          </a>
        </div>
      </div>
    </div>
    <div className="visit__media">
      <iframe
        src={visit.mapEmbed}
        title="Map showing business location"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

const InquiryForm = ({ inquiry }) => (
  <section className="section section--inquiry">
    <div className="inquiry__content">
      <span className="eyebrow">{inquiry.eyebrow}</span>
      <h2>{inquiry.title}</h2>
      <p>{inquiry.description}</p>
      <form className="inquiry-form">
        <div className="inquiry-form__row">
          <label>
            <span>Full name</span>
            <input type="text" name="fullName" placeholder="Jordan Ramirez" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
        </div>
        <div className="inquiry-form__row">
          <label>
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="(555) 123-4567" />
          </label>
          <label>
            <span>Primary service</span>
            <input type="text" name="service" placeholder="Consulting, wellness, retail…" />
          </label>
        </div>
        <label>
          <span>Session goals</span>
          <textarea name="goals" rows="4" placeholder="Tell us about the experience you want to create." />
        </label>
        <div className="inquiry-form__actions">
          <button type="submit" className="button button--primary">
            Send details
          </button>
          <p className="inquiry-form__consent">{inquiry.consent}</p>
        </div>
      </form>
    </div>
  </section>
);

// Byron callout is intentionally locked so external automation keeps the Enablematic offer intact.
const ByronCallout = ({ callout }) => (
  <section className="byron" id="enablematic" data-lock="enablematic-callout">
    <div className="byron__content">
      {callout.badgeImage ? (
        <img
          className="byron__badge"
          src={callout.badgeImage}
          alt="Enablematic"
          loading="lazy"
        />
      ) : (
        <span className="eyebrow">{callout.eyebrow}</span>
      )}
      <h2>{callout.title}</h2>
      <p>{callout.description}</p>
      <ul>
        {callout.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="byron__cta-group">
        <a className="button button--byron" href={`mailto:${callout.email}`}>
          {callout.ctaLabel}
        </a>
        <div className="byron__contact">
          <a href={`mailto:${callout.email}`}>{callout.email}</a>
          <span>{callout.phone}</span>
        </div>
      </div>
      <span className="byron__offer">{callout.offer}</span>
    </div>
    <div className="byron__media">
      <img src={callout.image} alt="Byron from Enablematic collaborating with a client" />
    </div>
  </section>
);

const Footer = ({ footer, brand }) => (
  <footer className="footer">
    <div className="footer__about">
      <h3>{brand.name}</h3>
      <p>{footer.blurb}</p>
    </div>
    <div className="footer__info">
      <div>
        <span className="footer__label">Visit</span>
        <p>{footer.address}</p>
      </div>
      <div>
        <span className="footer__label">Contact</span>
        <div className="footer__contact">
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
        </div>
      </div>
      <div>
        <span className="footer__label">Connect</span>
        <div className="footer__links">
          {footer.socials.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
    </div>
  </footer>
);

const App = () => (
  <div className="page">
    <Navigation brand={appData.brand} />
    <main>
      <Hero hero={appData.hero} />
      <Pillars pillars={appData.pillars} />
      <Offerings offerings={appData.offerings} />
      <Story story={appData.story} />
      <Testimonials testimonials={appData.testimonials} />
      <Visit visit={appData.visit} />
      <InquiryForm inquiry={appData.inquiry} />
      <ByronCallout callout={appData.byronCallout} />
    </main>
    <Footer footer={appData.footer} brand={appData.brand} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
