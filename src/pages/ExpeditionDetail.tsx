import { useState, useEffect, FormEvent } from 'react';
import { expeditionsData } from '../data/expeditionsData';

export default function ExpeditionDetail() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // Default first one open
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Parse the current expedition ID from the query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const currentId = searchParams.get('id') || 'k2';
  
  // Lookup expedition data, fallback to K2 if invalid
  const expedition = expeditionsData[currentId] || expeditionsData['k2'];

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroLoaded(true);
    
    // Navbar scroll behavior
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentId]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Smooth clean SPA transition to thank-you page
    window.history.pushState({}, '', '/thank-you');
    window.dispatchEvent(new Event('pushstate'));
  };

  // Get difficulty-specific class for hero tag
  const getDifficultyClass = (diff: string) => {
    switch (diff.toLowerCase()) {
      case 'easy': return 'expd-hero__meta-val--easy';
      case 'moderate': return 'expd-hero__meta-val--moderate';
      case 'hard': return 'expd-hero__meta-val--hard';
      case 'extreme': return 'expd-hero__meta-val--extreme';
      default: return '';
    }
  };

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Dynamic Header */}
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="main-header">
        <nav className="navbar">
          <div className="navbar__logo">
            <a href="/">BROAD PEAK</a>
          </div>

          <ul className="navbar__menu">
            <li><a href="/">Home</a></li>
            <li><a href="/expeditions" className="active">Expeditions</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="navbar__actions">
            <a href="#" className="navbar__social"><i className="ri-instagram-line"></i></a>
            <a href="#" className="navbar__social"><i className="ri-facebook-fill"></i></a>
            <a href="/contact" className="navbar__cta">Book a Trip</a>
            <button className="navbar__hamburger" id="expd-hamburger" onClick={() => setMobileMenuOpen(true)}>
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`} id="expd-mobile-menu">
          <div className="mobile-menu__header">
            <div className="navbar__logo">
              <a href="/">BROAD PEAK</a>
            </div>
            <button className="mobile-menu__close" id="expd-menu-close" onClick={() => setMobileMenuOpen(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <ul className="mobile-menu__links">
            <li><a href="/" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="/expeditions" onClick={() => setMobileMenuOpen(false)}>Expeditions</a></li>
            <li><a href="/destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</a></li>
            <li><a href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</a></li>
            <li><a href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="expd-hero">
        <div 
          className={`expd-hero__bg ${heroLoaded ? 'abt-hero__bg--loaded' : ''}`} 
          id="expd-hero-bg"
          style={{ backgroundImage: `url(${expedition.gallery[0] || '/assets/images/k2.png'})` }}
        ></div>
        <div className="expd-hero__overlay"></div>
        <div className="expd-hero__container expd-container">
          <span className="expd-hero__tagline">{expedition.tagline}</span>
          <h1 className="expd-hero__title">{expedition.title}</h1>
          <p className="expd-hero__desc">{expedition.desc}</p>
          
          <div className="expd-hero__meta-grid">
            <div className="expd-hero__meta-item">
              <span className="expd-hero__meta-label">Difficulty</span>
              <span className={`expd-hero__meta-val ${getDifficultyClass(expedition.difficulty)}`}>
                {expedition.difficulty}
              </span>
            </div>
            <div className="expd-hero__meta-item">
              <span className="expd-hero__meta-label">Duration</span>
              <span className="expd-hero__meta-val">{expedition.duration}</span>
            </div>
            <div className="expd-hero__meta-item">
              <span className="expd-hero__meta-label">Max Altitude</span>
              <span className="expd-hero__meta-val">{expedition.maxAltitude}</span>
            </div>
            <div className="expd-hero__meta-item">
              <span className="expd-hero__meta-label">Best Season</span>
              <span className="expd-hero__meta-val">{expedition.bestSeason}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Grid */}
      <section className="expd-facts">
        <div className="expd-container">
          <div className="expd-facts__grid">
            <div className="expd-fact-card">
              <div className="expd-fact-card__icon"><i className="ri-time-line"></i></div>
              <div className="expd-fact-card__content">
                <span className="expd-fact-card__label">Duration</span>
                <span className="expd-fact-card__val">{expedition.duration}</span>
              </div>
            </div>

            <div className="expd-fact-card">
              <div className="expd-fact-card__icon"><i className="ri-mountain-line"></i></div>
              <div className="expd-fact-card__content">
                <span className="expd-fact-card__label">Altitude</span>
                <span className="expd-fact-card__val">{expedition.maxAltitude}</span>
              </div>
            </div>

            <div className="expd-fact-card">
              <div className="expd-fact-card__icon"><i className="ri-bar-chart-box-line"></i></div>
              <div className="expd-fact-card__content">
                <span className="expd-fact-card__label">Difficulty</span>
                <span className="expd-fact-card__val">{expedition.difficulty}</span>
              </div>
            </div>

            <div className="expd-fact-card">
              <div className="expd-fact-card__icon"><i className="ri-group-line"></i></div>
              <div className="expd-fact-card__content">
                <span className="expd-fact-card__label">Group Size</span>
                <span className="expd-fact-card__val">{expedition.groupSize}</span>
              </div>
            </div>

            <div className="expd-fact-card">
              <div className="expd-fact-card__icon"><i className="ri-hotel-bed-line"></i></div>
              <div className="expd-fact-card__content">
                <span className="expd-fact-card__label">Accommodation</span>
                <span className="expd-fact-card__val">{expedition.accommodation}</span>
              </div>
            </div>

            <div className="expd-fact-card">
              <div className="expd-fact-card__icon"><i className="ri-price-tag-3-line"></i></div>
              <div className="expd-fact-card__content">
                <span className="expd-fact-card__label">Starting Price</span>
                <span className="expd-fact-card__val">{expedition.startingPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="expd-overview">
        <div className="expd-container">
          <div className="expd-overview__inner">
            <div className="expd-overview__text">
              <span className="expd-overview__subtitle">{expedition.overviewSubtitle}</span>
              <h2 className="expd-overview__title">{expedition.overviewTitle}</h2>
              {expedition.overviewDescs.map((desc, i) => (
                <p key={i} className="expd-overview__desc">{desc}</p>
              ))}
            </div>
            <div className="expd-overview__media">
              <img src={expedition.overviewImage} alt={`${expedition.title} trekking`} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="expd-itinerary">
        <div className="expd-container">
          <div className="expd-itinerary__header">
            <span className="expd-section-tag">DAY-BY-DAY ROUTE</span>
            <h2 className="expd-section-title">THE ITINERARY</h2>
          </div>

          <div className="expd-timeline">
            {expedition.itinerary.map((item, index) => (
              <div key={index} className="expd-timeline__item">
                <div className="expd-timeline__day">{item.day}</div>
                <div className="expd-timeline__content">
                  <h3 className="expd-timeline__title">{item.title}</h3>
                  <p className="expd-timeline__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions / Exclusions */}
      <section className="expd-inclusions">
        <div className="expd-container">
          <div className="expd-inclusions__grid">
            <div className="expd-inclusion-box">
              <h3 className="expd-inclusion-box__title">
                <i className="ri-checkbox-circle-line" style={{ color: "#3a9b4e" }}></i> What's Included
              </h3>
              <ul className="expd-inclusion-box__list">
                {expedition.inclusions.map((inc, i) => (
                  <li key={i}><i className="ri-check-line"></i> {inc}</li>
                ))}
              </ul>
            </div>

            <div className="expd-inclusion-box expd-inclusion-box--not">
              <h3 className="expd-inclusion-box__title">
                <i className="ri-close-circle-line" style={{ color: "#c0392b" }}></i> Not Included
              </h3>
              <ul className="expd-inclusion-box__list">
                {expedition.exclusions.map((exc, i) => (
                  <li key={i}><i className="ri-close-line"></i> {exc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="expd-gallery">
        <div className="expd-container">
          <div className="expd-gallery__header">
            <span className="expd-section-tag">VISUAL JOURNEY</span>
            <h2 className="expd-section-title">EXPEDITION GALLERY</h2>
          </div>

          <div className="expd-gallery__grid">
            {expedition.gallery.map((imgUrl, i) => (
              <div key={i} className="expd-gallery__item">
                <img src={imgUrl} alt={`${expedition.title} peak panorama ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="expd-faq">
        <div className="expd-container">
          <div className="expd-faq__header">
            <span className="expd-faq__subtitle">FAQ</span>
            <h2 className="expd-faq__title">PLAN WITH CONFIDENCE</h2>
            <p className="expd-faq__desc">Essential details to prepare you for the challenge ahead.</p>
          </div>

          <div className="expd-faq__accordion" id="expd-faq-accordion">
            {expedition.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`expd-faq__item ${isOpen ? 'active' : ''}`}>
                  <button className="expd-faq__header-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.question}</span>
                    <i className={`expd-faq__icon ${isOpen ? 'ri-subtract-line' : 'ri-add-line'}`}></i>
                  </button>
                  <div className="expd-faq__body" style={{ display: isOpen ? 'block' : 'none' }}>
                    <p className="expd-faq__answer">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking / Inquiry Form */}
      <section className="expd-inquiry" id="expd-inquiry">
        <div className="expd-container">
          <div className="expd-inquiry__grid">
            <div className="expd-inquiry__text">
              <span className="expd-section-tag">BOOKING &amp; PLANNING</span>
              <h2 className="expd-section-title">PLAN YOUR {expedition.title}</h2>
              <p className="expd-inquiry__desc">Have questions about dates, custom requirements, or gear? Submit a quick inquiry below or reach out directly to our team via WhatsApp to get real-time advice from local guides.</p>
              
              <div className="expd-inquiry__contacts">
                <div className="expd-inquiry__contact-item">
                  <i className="ri-mail-line"></i>
                  <span>info@broadpeakadventures.com</span>
                </div>
                <div className="expd-inquiry__contact-item">
                  <i className="ri-phone-line"></i>
                  <span>+92 312 3456789</span>
                </div>
              </div>
            </div>

            <div className="expd-inquiry__form-wrapper">
              <form className="expd-inquiry__form" onSubmit={handleFormSubmit}>
                <div className="expd-inquiry__form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your full name" required />
                </div>
                <div className="expd-inquiry__form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email address" required />
                </div>
                <div className="expd-inquiry__form-row">
                  <div className="expd-inquiry__form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" placeholder="Your country" required />
                  </div>
                  <div className="expd-inquiry__form-group">
                    <label htmlFor="date">Preferred Travel Date</label>
                    <input type="date" id="date" required />
                  </div>
                </div>
                <div className="expd-inquiry__form-group">
                  <label htmlFor="size">Group Size</label>
                  <select id="size" defaultValue="1" required>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3 - 5 People</option>
                    <option value="6-10">6 - 10 People</option>
                    <option value="11+">11+ People</option>
                  </select>
                </div>
                <div className="expd-inquiry__form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="How can we help you plan your journey?" required></textarea>
                </div>
                <div className="expd-inquiry__form-buttons">
                  <button type="submit" className="expd-btn-primary expd-inquiry__submit">SEND INQUIRY</button>
                  <a href="https://wa.me/923123456789" target="_blank" rel="noopener noreferrer" className="expd-btn-whatsapp">
                    <i className="ri-whatsapp-line"></i> WHATSAPP US
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="expd-cta">
        <div className="expd-cta__overlay"></div>
        <div className="expd-container">
          <div className="expd-cta__content">
            <div className="expd-cta__text">
              <span className="expd-cta__tag">THE KARAKORAM CALLS</span>
              <h2 className="expd-cta__title">READY FOR THE JOURNEY OF A LIFETIME?</h2>
              <p className="expd-cta__desc">Join one of the world's greatest adventure experiences with experienced local guides and authentic mountain hospitality.</p>
            </div>
            <div className="expd-cta__buttons">
              <a href="/contact" className="expd-btn-white">CONTACT OUR TEAM</a>
              <a href="/expeditions" className="expd-btn-outline-light">EXPLORE MORE EXPEDITIONS</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="expd-container footer__container">
          <div className="footer__col footer__col--about">
            <h3 className="footer__logo"><a href="/">BROAD PEAK</a></h3>
            <p>Authentic mountain experiences across Gilgit-Baltistan, combining local expertise, cultural immersion, and world-class expedition planning.</p>
            <div className="footer__socials">
              <a href="#"><i className="ri-instagram-line"></i></a>
              <a href="#"><i className="ri-facebook-fill"></i></a>
              <a href="#"><i className="ri-whatsapp-line"></i></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/expeditions">Expeditions</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/travel-guides">Travel Guides</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>POPULAR EXPEDITIONS</h4>
            <ul>
              <li><a href="/expedition-detail?id=k2">K2 Base Camp Trek</a></li>
              <li><a href="/expedition-detail?id=concordia">Concordia Trek</a></li>
              <li><a href="/expedition-detail?id=fairy-meadows">Fairy Meadows Trek</a></li>
              <li><a href="/expedition-detail?id=snow-lake">Snow Lake Trek</a></li>
              <li><a href="/expedition-detail?id=nanga-parbat">Nanga Parbat Base Camp</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms &amp; Conditions</a></li>
              <li><a href="#">Email Us</a></li>
              <li><a href="#">WhatsApp Inquiry</a></li>
            </ul>
          </div>
        </div>

        <div className="expd-container footer__bottom">
          <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top */}
      <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
}
