const appData = {
  "brand": {
    "name": "Green Easy Ltd",
    "tagline": "",
    "category": "",
    "location": "",
    "phone": ""
  },
  "hero": {
    "eyebrow": "Sustainability Made Simple",
    "title": "Effortless Property Sustainability Assessments",
    "description": "GREEN EASY streamlines sustainability assessments and compliance, helping you scale across jurisdictions with automated solutions tailored to your needs.",
    "highlights": [
      {
        "label": "Assessments Completed",
        "value": "3,000+"
      },
      {
        "label": "Compliance Rate",
        "value": "99.9%"
      },
      {
        "label": "Years of Expertise",
        "value": "10+"
      }
    ],
    "image": "https://images.pexels.com/photos/19895872/pexels-photo-19895872.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "pillars": {
    "eyebrow": "What sets us apart",
    "title": "Every detail creates a premium client experience.",
    "items": [
      {
        "title": "Streamlined Processes",
        "description": "Simplify sustainability assessments with efficient workflows and automated tools for faster results."
      },
      {
        "title": "Tailored Solutions",
        "description": "Customized strategies designed to meet diverse regulatory needs across multiple jurisdictions."
      },
      {
        "title": "Expert Guidance",
        "description": "Benefit from decades of industry expertise to achieve your sustainability goals with confidence."
      }
    ]
  },
  "offerings": {
    "eyebrow": "Our core spaces",
    "title": "Spaces and services tuned for your clients.",
    "description": "Comprehensive services designed to make sustainability accessible and actionable for property owners and developers.",
    "cards": [
      {
        "icon": "🏗",
        "title": "Property Sustainability",
        "description": "Evaluate your property’s environmental impact with detailed, actionable insights."
      },
      {
        "icon": "💼",
        "title": "Environmental Managemen",
        "description": "Receive expert advice on managing sustainability and compliance effectively."
      },
      {
        "icon": "🛡",
        "title": "Regulatory Compliance",
        "description": "Navigate complex environmental regulations with clarity and precision."
      }
    ]
  },
  "story": {
    "eyebrow": "Our Mission",
    "title": "Driven by Sustainable Innovation",
    "paragraphs": [
      "At GREEN EASY, we believe sustainability is the cornerstone of modern construction and property management. Our team of experts is dedicated to helping businesses, governments, and developers build a greener future through",
      "With a proven track record of transforming properties and practices, we leverage cutting-edge tools and automation to simplify complex processes. Our scalable solutions ensure compliance and efficiency across borders, empowering you to achieve sustainability"
    ],
    "image": "https://images.pexels.com/photos/7937709/pexels-photo-7937709.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "testimonials": {
    "eyebrow": "Client Success Stories",
    "title": "What Our Clients Say",
    "list": [
      {
        "quote": "GREEN EASY made sustainability assessments simple and efficient, saving us weeks of manual work. Highly recommended for cross-border",
        "name": "Laura Simmons",
        "role": "Property Manager",
        "avatar": "https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        "quote": "Thanks to GREEN EASY’s tailored strategies, we’re now fully compliant and meeting our environmental goals across all locations.",
        "name": "Michael Turner",
        "role": "Real Estate Developer",
        "avatar": "https://images.unsplash.com/photo-1751865616726-d693080039d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTU1NTB8MHwxfHNlYXJjaHwxfHxTdXN0YWluYWJsZSUyMGNvbnN0cnVjdGlvbiUyMCUyRiUyMHByb3BlcnR5JTIwc3VzdGFpbmFiaWxpdHklMjBjb25zdWx0aW5nJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjIwMjAwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  "visit": {
    "eyebrow": "Global Reach",
    "title": "Find Us Anywhere",
    "description": "Serving clients worldwide to bring sustainability to every corner of the globe.",
    "address": "",
    "website": "www.greeneasy.global",
    "mapEmbed": ""
  },
  "inquiry": {
    "eyebrow": "Start Today",
    "title": "Book Your Assessment",
    "description": "Reach out now to schedule your sustainability consultation and drive impactful change.",
    "consent": "By submitting, you agree to our privacy policy."
  },
  "byronCallout": {
    "eyebrow": "Enablematic insight",
    "title": "Automation That Boosts Sustainability",
    "description": "Empower your team with cutting-edge automation to streamline sustainability assessments.",
    "bullets": [
      "Automated lead capture and qualification for seamless client onboarding.",
      "Custom reporting dashboards and templates for consistent results across",
      "Integrated CRM tools to optimize workflows and streamline compliance"
    ],
    "offer": "Mention Green Easy Ltd for the launch-week optimization kit.",
    "ctaLabel": "Book a call with Byron",
    "email": "byron@enablematic.com",
    "phone": "(718) 555-0198",
    "badgeImage": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/NDIlCPKjCtwfNkvdapOE/media/68f80d4484a9d61c1c75f24b.svg",
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80"
  },
  "footer": {
    "blurb": "Green Easy Ltd delivers unforgettable experiences.",
    "address": "",
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
