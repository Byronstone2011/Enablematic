const appData = {
  "brand": {
    "name": "Eco Cleaning Systems",
    "tagline": "",
    "category": "",
    "location": "",
    "phone": ""
  },
  "hero": {
    "eyebrow": "Eco-friendly cleaning solutions",
    "title": "Streamlined Cleaning for Builders and Developers",
    "description": "EcoCleaning Systems specializes in efficient, eco-friendly commercial and post-construction cleaning, helping contractors and developers save time and meet",
    "highlights": [
      {
        "label": "Projects Cleaned",
        "value": "1,000+"
      },
      {
        "label": "Client Satisfaction",
        "value": "98%"
      },
      {
        "label": "Years of Experience",
        "value": "15+"
      }
    ],
    "image": "https://images.pexels.com/photos/19783674/pexels-photo-19783674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "pillars": {
    "eyebrow": "What sets us apart",
    "title": "Every detail creates a premium client experience.",
    "items": [
      {
        "title": "Eco-Friendly Practices",
        "description": "We use sustainable cleaning methods and products to minimize environmental impact without compromising results."
      },
      {
        "title": "CHAS Certified",
        "description": "Our compliance with industry standards ensures your site meets health and safety regulations."
      },
      {
        "title": "Proven Track Record",
        "description": "With 1,000+ completed projects, our expertise guarantees high-quality cleaning for commercial and construction"
      }
    ]
  },
  "offerings": {
    "eyebrow": "Our core spaces",
    "title": "Spaces and services tuned for your clients.",
    "description": "Tailored cleaning services for contractors, developers, and homeowners. We make your properties shine, ready for the next step.",
    "cards": [
      {
        "icon": "🏗",
        "title": "Post-Construction Cleaning",
        "description": "Thorough cleaning for construction sites, ensuring properties are spotless and ready for handover."
      },
      {
        "icon": "🏡",
        "title": "Show Home Cleaning",
        "description": "Pristine cleaning for show homes that impress potential buyers and enhance appeal."
      },
      {
        "icon": "💼",
        "title": "Contract & Commercial",
        "description": "Reliable ongoing cleaning services tailored to business needs and professional environments."
      }
    ]
  },
  "story": {
    "eyebrow": "Our Journey",
    "title": "A Trusted Name in Cleaning Excellence",
    "paragraphs": [
      "EcoCleaning Systems was founded with a commitment to sustainability and quality in the commercial and construction cleaning industry. Our team combines eco-friendly practices with meticulous attention to detail, ensuring every",
      "We understand the unique challenges faced by contractors, developers, and homeowners. By leveraging our experience and innovative approach, we simplify the cleaning process and deliver results that exceed expectations, making us the go-to partner for cleaning"
    ],
    "image": "https://images.pexels.com/photos/6196238/pexels-photo-6196238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "testimonials": {
    "eyebrow": "Customer Success Stori",
    "title": "What Our Clients Say",
    "list": [
      {
        "quote": "EcoCleaning Systems transformed our construction site, saving us hours of clean-up time and ensuring compliance. Highly recommend!",
        "name": "James Carter",
        "role": "Site Manager, ABC Builders",
        "avatar": "https://images.pexels.com/photos/3969717/pexels-photo-3969717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        "quote": "Our show homes have never looked better. The attention to detail and professionalism is unmatched.",
        "name": "Sarah Collins",
        "role": "Marketing Manager, Dream Estates",
        "avatar": "https://images.unsplash.com/photo-1730791979207-583e51851e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTU1NTB8MHwxfHNlYXJjaHwxfHxDb21tZXJjaWFsJTIwJTI2JTIwcG9zdC1jb25zdHJ1Y3Rpb24lMjBjbGVhbmluZyUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzYyMDUyNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  "visit": {
    "eyebrow": "Find Us",
    "title": "EcoCleaning Systems Location",
    "description": "We proudly serve contractors and developers across the UK. Contact us for efficient and eco-friendly cleaning solutions today.",
    "address": "Serving locations across the UK",
    "website": "www.ecocleaningsystems.co.uk",
    "mapEmbed": ""
  },
  "inquiry": {
    "eyebrow": "Get Started",
    "title": "Book Your Cleaning Service Today",
    "description": "Contact us for a free consultation or quote. Let us handle the cleaning while you focus on your project.",
    "consent": "By submitting, you agree to our privacy policy."
  },
  "byronCallout": {
    "eyebrow": "Enablematic insight",
    "title": "Smarter Cleaning with Automation",
    "description": "Transform your cleaning operations with AI-powered automation, ensuring simplicity and efficiency.",
    "bullets": [
      "Streamline scheduling with real-time updates and job tracking.",
      "Automated quoting and invoicing save time and reduce errors.",
      "Digital compliance certificates delivered instantly."
    ],
    "offer": "Mention Eco Cleaning Systems for the launch-week optimization kit.",
    "ctaLabel": "Book a call with Byron",
    "email": "byron@enablematic.com",
    "phone": "(718) 555-0198",
    "badgeImage": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/NDIlCPKjCtwfNkvdapOE/media/68f80d4484a9d61c1c75f24b.svg",
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80"
  },
  "footer": {
    "blurb": "Eco Cleaning Systems delivers unforgettable experiences.",
    "address": "Serving locations across the UK",
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
