const appData = {
  "brand": {
    "name": "KLC Group",
    "tagline": "Insulation Excellence",
    "category": "Building Insulation",
    "location": "",
    "phone": ""
  },
  "hero": {
    "eyebrow": "Family-owned excellence",
    "title": "Streamline your insulation projects effortlessly.",
    "description": "KLC Group makes insulation hassle-free with expert support and seamless service. Enjoy top quality and efficiency.",
    "highlights": [
      {
        "label": "Years in Business",
        "value": "18+"
      },
      {
        "label": "Projects Completed",
        "value": "1,000+"
      },
      {
        "label": "Customer Satisfaction",
        "value": "98%"
      }
    ],
    "image": "https://images.pexels.com/photos/14528674/pexels-photo-14528674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "pillars": {
    "eyebrow": "What sets us apart",
    "title": "Every detail creates a premium client experience.",
    "items": [
      {
        "title": "Proven Expertise",
        "description": "With 18 years of experience, we bring unmatched skill to every project."
      },
      {
        "title": "Certified Quality",
        "description": "Our accreditations ensure top-notch workmanship and compliance."
      },
      {
        "title": "Visual Impact",
        "description": "Our project photography showcases the high-quality results we deliver."
      }
    ]
  },
  "offerings": {
    "eyebrow": "Our core spaces",
    "title": "Spaces and services tuned for your clients.",
    "description": "Specializing in insulation and rendering, KLC Group ensures superior quality.",
    "cards": [
      {
        "icon": "🏗",
        "title": "External Wall Insulation",
        "description": "Enhance energy efficiency and aesthetics with expert wall insulation."
      },
      {
        "icon": "🛠",
        "title": "Loft Insulation",
        "description": "Keep your home warm and energy bills low with our loft insulation."
      },
      {
        "icon": "🎨",
        "title": "Rendering",
        "description": "Improve your home's exterior with our durable and stylish rendering."
      }
    ]
  },
  "story": {
    "eyebrow": "Our Journey",
    "title": "Crafting Comfort for Homes",
    "paragraphs": [
      "Founded on family values, KLC Group thrives on customer care and quality. With 18 years in the industry, we offer expertise in insulation and rendering.",
      "Our strong service reputation is backed by multiple accreditations, ensuring peace of mind for clients. We aim to elevate your home with seamless, modern solutions."
    ],
    "image": "https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  "testimonials": {
    "eyebrow": "What Clients Say",
    "title": "Trusted by Homeowners",
    "list": [
      {
        "quote": "KLC Group transformed our home with incredible insulation. The process was smooth and efficient.",
        "name": "Alice Johnson",
        "role": "Homeowner",
        "avatar": "https://images.pexels.com/photos/14528674/pexels-photo-14528674.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        "quote": "Outstanding service and quality. KLC Group made our home more energy-efficient than ever.",
        "name": "Mark Stevens",
        "role": "Property Manager",
        "avatar": "https://images.unsplash.com/photo-1751486403890-793880b12adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4Mjc2Nzh8MHwxfHNlYXJjaHwxfHxCdWlsZGluZyUyMGluc3VsYXRpb24lMjAlMkYlMjBjb25zdHJ1Y3Rpb24lMjAlMjhleHRlcm5hbCUyMHdhbGwlMjBpbnN1bGF0aW9uJTJDJTIwbG9mdCUyMGluc3VsYXRpb24lMkMlMjByZW5kZXJpbmclMjklMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDB8fHx8MTc2MjcyNTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  "visit": {
    "eyebrow": "Visit Us",
    "title": "Discover Our Expertise",
    "description": "Explore our projects and see why we are the trusted choice for insulation and rendering.",
    "address": "",
    "website": "",
    "mapEmbed": ""
  },
  "inquiry": {
    "eyebrow": "Get in Touch",
    "title": "Book a Consultation",
    "description": "Contact us for a free, no-obligation survey and discover how we can enhance your property.",
    "consent": "I agree to the terms and conditions."
  },
  "byronCallout": {
    "eyebrow": "Enablematic insight",
    "title": "Innovate with Automation",
    "description": "Streamline your project management with our advanced automation solutions.",
    "bullets": [
      "Instant online quotes for quick decision-making.",
      "Automated follow-ups to nurture leads effectively.",
      "Manage compliance docs efficiently with automation."
    ],
    "offer": "Mention KLC Group for the launch-week optimization kit.",
    "ctaLabel": "Book a call with Byron",
    "email": "byron@enablematic.io",
    "phone": "+44 7776044988",
    "badgeImage": "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/NDIlCPKjCtwfNkvdapOE/media/68f80d4484a9d61c1c75f24b.svg",
    "image": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80"
  },
  "footer": {
    "blurb": "KLC Group delivers unforgettable experiences.",
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
