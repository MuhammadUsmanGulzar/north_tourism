import { useEffect } from 'react';

export default function BlogPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // --- Navbar scroll behavior ---
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('header--scrolled');
        } else {
          header.classList.remove('header--scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // --- Mobile menu ---
    const hamburger = document.querySelector('#hamburger-menu, .navbar__hamburger');
    const mobileMenu = document.querySelector('#mobile-menu, .mobile-menu');
    const menuClose  = document.querySelector('#mobile-menu-close, .mobile-menu__close');

    const openMenu = () => {
      console.log('Opening mobile menu');
      mobileMenu?.classList.add('active');
    };
    const closeMenu = () => {
      console.log('Closing mobile menu');
      mobileMenu?.classList.remove('active');
    };

    hamburger?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);

    const links = document.querySelectorAll('.mobile-menu__links a');
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // --- Hero bg load animation ---
    const heroBg = document.querySelector('[class$="hero__bg"]');
    if (heroBg) {
      heroBg.classList.add('abt-hero__bg--loaded');
    }

    // --- General FAQ accordion toggles ---
    const faqButtons = document.querySelectorAll('.faq-accordion__header, [class$="-faq__header-btn"]');
    faqButtons.forEach(btn => {
      const btnHandler = () => {
        const item = btn.closest('.faq-accordion__item, [class$="-faq__item"]');
        if (!item) return;
        const isOpen = item.classList.contains('active');
        const body = item.querySelector('.faq-accordion__body, [class$="-faq__body"]');
        const icon = btn.querySelector('.faq-icon');

        // Close siblings
        const section = btn.closest('section, .faq-preview-section');
        if (section) {
          section.querySelectorAll('.faq-accordion__item, [class$="-faq__item"]').forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
              const otherBody = otherItem.querySelector('.faq-accordion__body, [class$="-faq__body"]');
              if (otherBody) {
                (otherBody as HTMLElement).style.display = 'none';
              }
              const otherIcon = otherItem.querySelector('.faq-icon');
              if (otherIcon) {
                otherIcon.classList.remove('ri-subtract-line');
                otherIcon.classList.add('ri-add-line');
              }
            }
          });
        }

        // Toggle self
        if (isOpen) {
          item.classList.remove('active');
          if (body) (body as HTMLElement).style.display = 'none';
          if (icon) {
            icon.classList.remove('ri-subtract-line');
            icon.classList.add('ri-add-line');
          }
        } else {
          item.classList.add('active');
          if (body) (body as HTMLElement).style.display = 'block';
          if (icon) {
            icon.classList.remove('ri-add-line');
            icon.classList.add('ri-subtract-line');
          }
        }
      };
      btn.addEventListener('click', btnHandler);
      (btn as any)._handler = btnHandler;
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamburger?.removeEventListener('click', openMenu);
      menuClose?.removeEventListener('click', closeMenu);
      links.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
      faqButtons.forEach(btn => {
        if ((btn as any)._handler) {
          btn.removeEventListener('click', (btn as any)._handler);
        }
      });
    };
  
  }, []);

  return (
    <div className="page-wrapper animate-fade-in">
      <header className="header" id="main-header">
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="/">BROAD PEAK</a>
            </div>

            <ul className="navbar__menu">
                <li><a href="/">Home</a></li>
                <li><a href="/expeditions">Expeditions</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            <div className="navbar__actions">
                <a href="#" className="navbar__social"><i className="ri-instagram-line"></i></a>
                <a href="#" className="navbar__social"><i className="ri-facebook-fill"></i></a>
                <a href="/contact" className="navbar__cta">Book a Trip</a>
                <button className="navbar__hamburger" id="post-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="post-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="post-menu-close">
                    <i className="ri-close-line"></i>
                </button>
            </div>
            <ul className="mobile-menu__links">
                <li><a href="/">Home</a></li>
                <li><a href="/expeditions">Expeditions</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </header>

    
    <section className="post-hero" id="post-hero">
        <div className="post-hero__bg" id="post-hero-bg"></div>
        <div className="post-hero__overlay"></div>
        <div className="post-hero__container post-container">
            <span className="post-hero__tagline">Expedition Planning</span>
            <h1 className="post-hero__title">K2 BASE CAMP TREK 2026:<br />THE COMPLETE PLANNING GUIDE</h1>
            <div className="post-hero__meta">
                <span><i className="ri-calendar-line"></i> 17 January 2026</span>
                <span className="separator">•</span>
                <span><i className="ri-time-line"></i> 12 min read</span>
                <span className="separator">•</span>
                <span><i className="ri-user-line"></i> Broad Peak Team</span>
            </div>
        </div>
    </section>

    
    <article className="post-content">
        <div className="post-container--narrow">

            
            <div className="post-section">
                <p className="lead-text">Trekking to the base camp of K2 (8,611m), the second-highest mountain in the world, is often described as one of the most magnificent and demanding treks on the planet. Deep in the heart of the Karakoram range, this expedition takes you through the legendary Baltoro Glacier to Concordia, the "Throne Room of the Mountain Gods."</p>
                <p>For 2026, the demand for this trek is higher than ever. With evolving logistics, permit regulations, and changing weather patterns, meticulous preparation is essential. This guide covers everything you need to know to successfully conquer the K2 Base Camp Trek.</p>
            </div>

            
            <div className="post-section">
                <h2>Best Time To Visit</h2>
                <p>The Karakoram mountains have a remarkably short window for safe trekking. The optimal time to attempt the K2 Base Camp trek is between <strong>mid-June and late August</strong>.</p>
                <ul>
                    <li><strong>Late June to July:</strong> This is peak season. The snow on the Baltoro Glacier has usually melted enough to make the trails visible and safer to navigate. The days are longer and generally warmer.</li>
                    <li><strong>August:</strong> The weather is often at its most stable, though the glacier can become more broken and crevassed later in the month.</li>
                </ul>
                <p>Attempting the trek outside of this window dramatically increases the risk of extreme cold, heavy snow blocking the Gondogoro La pass, and severe logistical disruptions.</p>
            </div>

            
            <div className="post-section">
                <h2>Physical Preparation</h2>
                <p>Make no mistake: this is a strenuous expedition. You will be trekking on uneven, rocky glacial moraine for 5-8 hours a day, at altitudes steadily increasing from 3,000m to over 5,100m at Concordia.</p>
                <p>Your training should begin at least 4 to 6 months before your departure date. Focus on:</p>
                <ul>
                    <li><strong>Cardiovascular Endurance:</strong> Running, cycling, or swimming for 45-60 minutes, 3-4 times a week.</li>
                    <li><strong>Strength Training:</strong> Focus on your core, legs, and lower back. Squats, lunges, and deadlifts are highly recommended.</li>
                    <li><strong>Hike Training:</strong> Nothing prepares you for trekking like trekking. Do long hikes (10-15km) carrying a weighted backpack (8-10kg) to simulate expedition conditions.</li>
                </ul>
            </div>

            <div className="post-image-break">
                <img src="/assets/images/k2.png" alt="Majestic view of K2 peak" loading="lazy" />
                <span className="image-caption">The imposing pyramid of K2 (8,611m) viewed from Concordia.</span>
            </div>

            
            <div className="post-section">
                <h2>Permits &amp; Documentation</h2>
                <p>Because the trek takes place in a restricted border zone, independent trekking is strictly prohibited. You must travel with a registered tour operator like Broad Peak Adventures.</p>
                <p>You will need:</p>
                <ol>
                    <li><strong>Pakistan E-Visa:</strong> Apply for a tourist visa well in advance. We will provide the necessary Letter of Invitation (LOI).</li>
                    <li><strong>NOC (No Objection Certificate):</strong> Required for foreign nationals entering the restricted zone. We handle this application process for you upon booking.</li>
                    <li><strong>Central Karakoram National Park (CKNP) Fee:</strong> Included in our standard packages, this fee goes toward conservation efforts.</li>
                </ol>
            </div>

            
            <div className="post-section">
                <h2>Packing Checklist</h2>
                <p>The key to packing for the Karakoram is layering. The temperature can swing from 25°C in the valleys during the day to -10°C at Concordia at night.</p>
                <div className="checklist">
                    <p><strong>Essential Gear:</strong></p>
                    <ul>
                        <li>4-season sleeping bag (rated to -15°C)</li>
                        <li>Sturdy, waterproof trekking boots (broken in)</li>
                        <li>GORE-TEX outer shell jacket and pants</li>
                        <li>High-quality down jacket (800+ fill)</li>
                        <li>Thermal base layers (merino wool preferred)</li>
                        <li>Trekking poles (crucial for glacier crossings)</li>
                        <li>Category 4 polarized sunglasses</li>
                    </ul>
                </div>
            </div>

            
            <div className="post-section">
                <h2>Altitude &amp; Safety Tips</h2>
                <p>Acute Mountain Sickness (AMS) is the biggest threat on this trek. Our itineraries are designed with mandatory acclimatization days built in, typically at Paju (3,400m) and Urdukas (4,130m).</p>
                <p><strong>Golden Rules of Altitude:</strong></p>
                <ul>
                    <li><em>Climb high, sleep low.</em></li>
                    <li>Drink at least 3-4 liters of water daily. Hydration is critical for acclimatization.</li>
                    <li>Communicate openly with your guide. Never hide headaches, nausea, or dizziness.</li>
                    <li>Walk at a slow, steady pace ("Pole Pole").</li>
                </ul>
            </div>

            
            <div className="post-section">
                <h2>Cost Breakdown</h2>
                <p>A reputable, fully-supported K2 Base Camp trek usually costs between $2,200 and $3,500 USD for a 20-22 day itinerary. Beware of operators offering prices significantly below this, as it often compromises guide wages, food quality, or safety equipment.</p>
                <p>Our comprehensive packages cover domestic flights (Islamabad to Skardu), all accommodations, meals during the trek, permits, guide fees, and porter wages.</p>
            </div>

            
            <div className="post-section">
                <h2>Final Thoughts</h2>
                <p>The trek to K2 Base Camp is not just a physical challenge; it is a journey through some of the most dramatic and awe-inspiring landscapes on Earth. With proper preparation, the right team, and a deep respect for the mountains, you will return with memories that will last a lifetime.</p>
            </div>

            
            <div className="author-box">
                <div className="author-box__image">
                    <img src="/assets/images/who-we-are-small.png" alt="Broad Peak Team" />
                </div>
                <div className="author-box__content">
                    <h3>Broad Peak Expedition Team</h3>
                    <p>Written by our senior guides who have collectively spent decades navigating the Baltoro Glacier and safely guiding climbers to the foot of the Savage Mountain.</p>
                </div>
            </div>

        </div>
    </article>

    
    <section className="related-posts">
        <div className="post-container">
            <h2 className="related-posts__title">FURTHER READING</h2>
            
            <div className="related-grid">
                
                
                <article className="related-card">
                    <div className="related-card__image">
                        <a href="#"><img src="/assets/images/article_snow_lake_1783186049575.png" alt="Snow Lake Trek Guide" loading="lazy" /></a>
                    </div>
                    <div className="related-card__body">
                        <span className="related-card__cat">Expedition Planning</span>
                        <h3 className="related-card__title"><a href="#">Snow Lake Trek Guide</a></h3>
                        <a href="#" className="related-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="related-card">
                    <div className="related-card__image">
                        <a href="#"><img src="/assets/images/article_visa_logistics_1783186040279.png" alt="Pakistan Visa Requirements" loading="lazy" /></a>
                    </div>
                    <div className="related-card__body">
                        <span className="related-card__cat">Logistics</span>
                        <h3 className="related-card__title"><a href="#">Pakistan Visa Requirements</a></h3>
                        <a href="#" className="related-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="related-card">
                    <div className="related-card__image">
                        <a href="#"><img src="/assets/images/destination_hunza_1783185596174.png" alt="Hunza Travel Guide" loading="lazy" /></a>
                    </div>
                    <div className="related-card__body">
                        <span className="related-card__cat">Destinations</span>
                        <h3 className="related-card__title"><a href="#">Hunza Travel Guide</a></h3>
                        <a href="#" className="related-card__btn">Read Article <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

            </div>
        </div>
    </section>

    
    <section className="post-cta">
        <div className="post-cta__overlay"></div>
        <div className="post-container">
            <div className="post-cta__content">
                <div className="post-cta__text">
                    <span className="post-cta__tag">THE JOURNEY BEGINS</span>
                    <h2 className="post-cta__title">READY TO EXPERIENCE K2 YOURSELF?</h2>
                    <p className="post-cta__desc">Join our team of local guides and discover the mountains, valleys, and glaciers of Gilgit-Baltistan.</p>
                </div>
                <div className="post-cta__buttons">
                    <a href="/expeditions" className="post-btn-white">EXPLORE EXPEDITIONS</a>
                    <a href="/contact" className="post-btn-outline-light">CONTACT OUR TEAM</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="post-container footer__container">

            
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

        <div className="post-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
