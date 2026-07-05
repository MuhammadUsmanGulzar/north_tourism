import { useEffect } from 'react';

export default function Destinations() {
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
                <button className="navbar__hamburger" id="dest-hamburger">
                    <i className="ri-menu-line"></i>
                </button>
            </div>
        </nav>

        
        <div className="mobile-menu" id="dest-mobile-menu">
            <div className="mobile-menu__header">
                <div className="navbar__logo">
                    <a href="/">BROAD PEAK</a>
                </div>
                <button className="mobile-menu__close" id="dest-menu-close">
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

    
    <section className="dest-hero" id="dest-hero">
        <div className="dest-hero__bg" id="dest-hero-bg"></div>
        <div className="dest-hero__overlay"></div>
        <div className="dest-hero__container dest-container">
            <span className="dest-hero__tagline">DISCOVER THE KARAKORAM</span>
            <h1 className="dest-hero__title">DESTINATIONS OF<br />NORTHERN PAKISTAN</h1>
            <p className="dest-hero__desc">From alpine meadows and turquoise lakes to ancient valleys and legendary mountain landscapes, explore the most breathtaking destinations across Gilgit-Baltistan.</p>
        </div>
    </section>

    
    <section className="dest-intro">
        <div className="dest-container">
            <div className="dest-intro__inner">
                <div>
                    <span className="dest-intro__label">THE LAND OF MOUNTAINS</span>
                    <h2 className="dest-intro__heading">Where Every Valley<br />Tells A Story</h2>
                </div>
                <p className="dest-intro__body">
                    Northern Pakistan offers one of the world's most extraordinary collections of landscapes, cultures, and adventures. From the towering peaks of the Karakoram to centuries-old villages and crystal-clear lakes, every destination offers a unique experience.
                </p>
            </div>
        </div>
    </section>

    
    <section className="dest-grid-section">
        <div className="dest-container">
            <div className="dest-grid-section__header">
                <span className="dest-section-tag">EXPLORE BY REGION</span>
                <h2 className="dest-section-title">FEATURED DESTINATIONS</h2>
            </div>

            <div className="dest-grid">

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/destination_skardu_1783185586097.png" alt="Skardu" loading="lazy" /></a>
                        <span className="dest-card__badge">Adventure</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Skardu</a></h3>
                        <p className="dest-card__desc">Gateway to the Karakoram giants, Skardu is a hub of dramatic valleys, cold deserts, and high-altitude glacial lakes.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">June–September</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">2,230m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/destination_hunza_1783185596174.png" alt="Hunza Valley" loading="lazy" /></a>
                        <span className="dest-card__badge">Culture</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Hunza Valley</a></h3>
                        <p className="dest-card__desc">A legendary mountain valley renowned for its ancient forts, terraced fields, longevity of its people, and dramatic peaks.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">April–October</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">2,438m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/destination_fairy_meadows_1783185607151.png" alt="Fairy Meadows" loading="lazy" /></a>
                        <span className="dest-card__badge">Nature</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Fairy Meadows</a></h3>
                        <p className="dest-card__desc">A lush green alpine grassland located at the base of Nanga Parbat, offering unparalleled views of the Killer Mountain.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">May–September</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">3,300m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/destination_attabad_lake_1783185617186.png" alt="Attabad Lake" loading="lazy" /></a>
                        <span className="dest-card__badge">Photography</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Attabad Lake</a></h3>
                        <p className="dest-card__desc">Born from a massive landslide, this lake is famous for its surreal bright turquoise waters cradled by towering mountain walls.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">May–October</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">2,559m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/destination_deosai_1783185627767.png" alt="Deosai National Park" loading="lazy" /></a>
                        <span className="dest-card__badge">Wildlife</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Deosai National Park</a></h3>
                        <p className="dest-card__desc">Known as the Land of Giants, this vast high-altitude plateau is home to the Himalayan brown bear and spectacular wild flowers.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">July–September</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">4,114m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/passu-cones.png" alt="Passu Cones" loading="lazy" /></a>
                        <span className="dest-card__badge">Nature</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Passu Cones</a></h3>
                        <p className="dest-card__desc">The iconic spiked peaks of Passu rise dramatically above the Hunza River, creating one of the Karakoram's most photographed vistas.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">May–October</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">2,400m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/soothing-clouds.png" alt="Khunjerab Pass" loading="lazy" /></a>
                        <span className="dest-card__badge">Adventure</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Khunjerab Pass</a></h3>
                        <p className="dest-card__desc">The highest paved border crossing in the world, linking Pakistan and China through the Karakoram National Park.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">May–October</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">4,693m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

                
                <article className="dest-card">
                    <div className="dest-card__image">
                        <a href="/expedition-detail"><img src="/assets/images/soothing-valley.png" alt="Shigar Valley" loading="lazy" /></a>
                        <span className="dest-card__badge">Culture</span>
                    </div>
                    <div className="dest-card__body">
                        <h3 className="dest-card__title"><a href="/expedition-detail">Shigar Valley</a></h3>
                        <p className="dest-card__desc">A fertile valley hosting the historic Shigar Fort, serving as the gateway to the high peaks of the Karakoram Range.</p>
                        <div className="dest-card__info-list">
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Best Season</span>
                                <span className="dest-card__info-val">April–October</span>
                            </div>
                            <div className="dest-card__info-item">
                                <span className="dest-card__info-label">Elevation</span>
                                <span className="dest-card__info-val">2,230m</span>
                            </div>
                        </div>
                        <a href="/expedition-detail" className="dest-card__btn">Explore Destination <i className="ri-arrow-right-line"></i></a>
                    </div>
                </article>

            </div>
        </div>
    </section>

    
    <section className="dest-regions">
        <div className="dest-container">
            <div className="dest-regions__header">
                <span className="dest-section-tag">REGIONAL BREAKDOWN</span>
                <h2 className="dest-section-title">THE THREE KINGDOMS</h2>
            </div>

            <div className="dest-regions__list">

                
                <div className="dest-region-row">
                    <div className="dest-region-row__image">
                        <img src="/assets/images/soothing-lake.png" alt="Skardu Region" loading="lazy" />
                    </div>
                    <div className="dest-region-row__content">
                        <h3 className="dest-region-row__title">Skardu Region</h3>
                        <p className="dest-region-row__desc">A high-altitude basin of Baltistan known for cold deserts, giant historical forts, and deep blue glacial lakes. It acts as the staging ground for all major mountaineering expeditions in the Karakoram range.</p>
                        <div className="dest-region-row__attractions">
                            <strong>Key Attractions:</strong> Upper Kachura Lake, Katpana Desert, Kharpocho Fort.
                        </div>
                    </div>
                </div>

                
                <div className="dest-region-row dest-region-row--reversed">
                    <div className="dest-region-row__image">
                        <img src="/assets/images/hunza.png" alt="Hunza Region" loading="lazy" />
                    </div>
                    <div className="dest-region-row__content">
                        <h3 className="dest-region-row__title">Hunza Region</h3>
                        <p className="dest-region-row__desc">The heart of ancient culture, scenic grandeur, and high-literacy communities along the Karakoram Highway. Bordered by towering peaks like Rakaposhi and Ladyfinger.</p>
                        <div className="dest-region-row__attractions">
                            <strong>Key Attractions:</strong> Baltit Fort, Karimabad, Passu Suspension Bridge.
                        </div>
                    </div>
                </div>

                
                <div className="dest-region-row">
                    <div className="dest-region-row__image">
                        <img src="/assets/images/activity-trekking.png" alt="Ghanche Region" loading="lazy" />
                    </div>
                    <div className="dest-region-row__content">
                        <h3 className="dest-region-row__title">Ghanche Region</h3>
                        <p className="dest-region-row__desc">A peaceful valley of pristine beauty, orchards, and centuries-old wood-crafted mosques. It offers a calmer, deeply authentic side of local Balti life.</p>
                        <div className="dest-region-row__attractions">
                            <strong>Key Attractions:</strong> Khaplu Palace, Chaqchan Mosque, Haldi Cones.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="dest-seasons">
        <div className="dest-container">
            <div className="dest-seasons__header">
                <span className="dest-section-tag">TIMING YOUR JOURNEY</span>
                <h2 className="dest-section-title">TRAVEL SEASONS</h2>
            </div>

            <div className="dest-seasons__grid">

                
                <div className="dest-season-card">
                    <div className="dest-season-card__content">
                        <div className="dest-season-card__badge">Spring</div>
                        <h3 className="dest-season-card__title">March – May</h3>
                        <p className="dest-season-card__desc">Watch the valleys come alive with cherry, apricot, and apple blossoms. The weather is cool, with snow capped peaks framing lush green fields.</p>
                    </div>
                </div>

                
                <div className="dest-season-card">
                    <div className="dest-season-card__content">
                        <div className="dest-season-card__badge">Summer</div>
                        <h3 className="dest-season-card__title">June – August</h3>
                        <p className="dest-season-card__desc">The prime season for high-altitude trekking and road trips. Passes are open, lakes are clear, and Deosai is covered in a carpet of alpine wildflowers.</p>
                    </div>
                </div>

                
                <div className="dest-season-card">
                    <div className="dest-season-card__content">
                        <div className="dest-season-card__badge">Autumn</div>
                        <h3 className="dest-season-card__title">September – October</h3>
                        <p className="dest-season-card__desc">A photographer's paradise. The valleys turn into a fiery palette of yellow, gold, orange, and red foliage as temperatures begin to cool.</p>
                    </div>
                </div>

                
                <div className="dest-season-card">
                    <div className="dest-season-card__content">
                        <div className="dest-season-card__badge">Winter</div>
                        <h3 className="dest-season-card__title">November – February</h3>
                        <p className="dest-season-card__desc">A quiet, snowy wonderland. Perfect for experiencing frozen lakes, snow leopard tracking, and the raw, uncrowded majesty of the peaks.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="dest-faq">
        <div className="dest-container">
            <div className="dest-faq__header">
                <span className="dest-faq__subtitle">PLAN YOUR VISIT</span>
                <h2 className="dest-faq__title">PLAN YOUR VISIT</h2>
                <p className="dest-faq__desc">Essential information before exploring Northern Pakistan.</p>
            </div>

            <div className="dest-faq__accordion" id="dest-faq-accordion">

                <div className="dest-faq__item active">
                    <button className="dest-faq__header-btn">
                        <span>What is the best time to visit Northern Pakistan?</span>
                        <i className="ri-add-line dest-faq__icon"></i>
                    </button>
                    <div className="dest-faq__body dest-faq__body--open">
                        <p className="dest-faq__answer">The ideal season is from May to October. Spring (March-April) offers blossoms, Summer (May-August) is perfect for high-altitude trekking, and Autumn (September-October) provides spectacular foliage colors.</p>
                    </div>
                </div>

                <div className="dest-faq__item">
                    <button className="dest-faq__header-btn">
                        <span>Are these destinations suitable for families?</span>
                        <i className="ri-add-line dest-faq__icon"></i>
                    </button>
                    <div className="dest-faq__body">
                        <p className="dest-faq__answer">Yes. Many destinations like Hunza Valley, Skardu, Shigar, and Attabad Lake offer comfortable hotels and paved roads, making them highly suitable for family vacations.</p>
                    </div>
                </div>

                <div className="dest-faq__item">
                    <button className="dest-faq__header-btn">
                        <span>How many days should I spend in Gilgit-Baltistan?</span>
                        <i className="ri-add-line dest-faq__icon"></i>
                    </button>
                    <div className="dest-faq__body">
                        <p className="dest-faq__answer">We recommend a minimum of 7 to 10 days to fully appreciate the region. Due to travel distances between valleys and weather conditions, a longer trip ensures a more relaxed and memorable experience.</p>
                    </div>
                </div>

                <div className="dest-faq__item">
                    <button className="dest-faq__header-btn">
                        <span>Do I need permits for certain areas?</span>
                        <i className="ri-add-line dest-faq__icon"></i>
                    </button>
                    <div className="dest-faq__body">
                        <p className="dest-faq__answer">Yes, certain border regions and protected national parks require special permits or NOCs. Our team handles all travel NOCs and permits as part of our guided tour services.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="dest-cta" id="dest-contact">
        <div className="dest-cta__overlay"></div>
        <div className="dest-container">
            <div className="dest-cta__content">
                <div className="dest-cta__text">
                    <span className="dest-cta__tag">THE JOURNEY STARTS HERE</span>
                    <h2 className="dest-cta__title">READY TO EXPLORE THE NORTH?</h2>
                    <p className="dest-cta__desc">Let our local experts help you discover the mountains, valleys, lakes, and cultures that make Northern Pakistan unforgettable.</p>
                </div>
                <div className="dest-cta__buttons">
                    <a href="/expeditions" className="dest-btn-white">VIEW EXPEDITIONS</a>
                    <a href="/contact" className="dest-btn-outline-light">CONTACT OUR TEAM</a>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="dest-container footer__container">

            
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
                    <li><a href="/expedition-detail">K2 Base Camp Trek</a></li>
                    <li><a href="/expedition-detail">Concordia Trek</a></li>
                    <li><a href="/expedition-detail">Gondogoro La Pass</a></li>
                    <li><a href="/expedition-detail">Snow Lake Trek</a></li>
                    <li><a href="/expedition-detail">Nanga Parbat Base Camp</a></li>
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

        <div className="dest-container footer__bottom">
            <p>&copy; 2026 Broad Peak Adventures. All Rights Reserved.</p>
        </div>
    </footer>

    
    <a href="#" className="scroll-to-top">
        <i className="ri-arrow-up-line"></i>
    </a>
    </div>
  );
}
