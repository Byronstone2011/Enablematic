const appData = {
  "brand": {
    "name": "Fire Queen Limited",
    "tagline": "",
    "category": "",
    "location": "",
    "phone": ""
  },
  "hero": {
    "eyebrow": "Your trusted fire safety partne",
    "title": "Simplify Compliance & Protect Lives with Fire Queen",
    "description": "Fire Queen Limited ensures your business stays compliant with fire safety regulations through reliable services, streamlined maintenance, and audit-ready",
    "highlights": [
      {
        "label": "Years of Expertise",
        "value": "Over 10"
      },
      {
        "label": "Service Coverage",
        "value": "UK & Ir"
      },
      {
        "label": "Trusted by",
        "value": "100+ organ"
      }
    ],
    "image": "https://images.pexels.com/photos/33533879/pexels-photo-33533879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "pillars": {
    "eyebrow": "What sets us apart",
    "title": "Every detail creates a premium client experience.",
    "items": [
      {
        "title": "Comprehensive Service",
        "description": "From fire extinguisher servicing to fire risk assessments, we cover all fire safety needs under one roof, ensuring"
      },
      {
        "title": "Certified & Trusted Profe",
        "description": "Our team is fully certified, delivering top-tier services with visible trust signals and professional branding."
      },
      {
        "title": "Proven Reliability",
        "description": "Our service vans and consistent branding reflect our commitment to reliability and quality for every customer."
      }
    ]
  },
  "offerings": {
    "eyebrow": "Our core spaces",
    "title": "Spaces and services tuned for your clients.",
    "description": "We provide extensive fire safety services designed to protect businesses and organizations while ensuring compliance.",
    "cards": [
      {
        "icon": "🛋️",
        "title": "Fire Extinguisher Services",
        "description": "Supply, installation, recharge, and maintenance to keep your fire extinguishers ready for action."
      },
      {
        "icon": "🛠️",
        "title": "Fire Alarm Systems",
        "description": "Installation, diagnostics, upgrades, and servicing to ensure your fire alarms are always operational."
      },
      {
        "icon": "🎥",
        "title": "Emergency Lighting",
        "description": "Testing and maintenance of emergency lighting systems for safe evacuations during power outages."
      }
    ]
  },
  "story": {
    "eyebrow": "Our journey of fire",
    "title": "A Passion for Protection",
    "paragraphs": [
      "Fire Queen Limited was founded with a mission to safeguard businesses and organizations from fire hazards. With a comprehensive range of services, we’ve built a reputation for reliability and expertise across the UK & Ireland.",
      "By leveraging automation and tailored solutions, we help clients simplify compliance, streamline operations, and protect lives. Our trusted services make fire safety effortless, giving you peace of mind."
    ],
    "image": "https://images.pexels.com/photos/5965019/pexels-photo-5965019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "testimonials": {
    "eyebrow": "What clients say about",
    "title": "Customer Stories",
    "list": [
      {
        "quote": "Fire Queen’s automated reminders saved us from missed maintenance visits. Their reliability keeps our multi-site business compliant and",
        "name": "Jane Simmons",
        "role": "Facilities Manager, Local Council",
        "avatar": "https://images.pexels.com/photos/7831936/pexels-photo-7831936.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        "quote": "Their fire risk assessments helped us pass audits seamlessly. The team’s professionalism is unmatched.",
        "name": "Mark Davies",
        "role": "Operations Director, Care Home",
        "avatar": "https://images.unsplash.com/photo-1713689824343-77d2f99e19b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTU1NTB8MHwxfHNlYXJjaHwxfHxGaXJlJTIwcHJvdGVjdGlvbiUyMCUyRiUyMEZpcmUlMjBzYWZldHklMjBzZXJ2aWNlcyUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzYxMTM4MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  "visit": {
    "eyebrow": "Serving across the UK",
    "title": "Find Us Nearby",
    "description": "We proudly serve businesses nationwide, ensuring every client receives timely and trusted fire safety solutions.",
    "address": "UK & Ireland",
    "website": "www.firequeenlimited.com",
    "mapEmbed": ""
  },
  "inquiry": {
    "eyebrow": "Ready to protect your busines",
    "title": "Contact Fire Queen Limited",
    "description": "Schedule a consultation or service today. Let us handle your fire safety needs with expertise and care.",
    "consent": "We value your privacy and will only use your details for service-related communication."
  },
  "byronCallout": {
    "eyebrow": "Enablematic insight",
    "title": "Enhancing Fire Safety Through Automation",
    "description": "Fire Queen Limited leverages AI to simplify operations and improve compliance for businesses.",
    "bullets": [
      "Automated scheduling ensures timely maintenance and fault resolution.",
      "Centralized digital compliance records streamline audits and reporting.",
      "E-commerce capabilities simplify product sales and inventory management."
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
    "address": "UK & Ireland",
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
