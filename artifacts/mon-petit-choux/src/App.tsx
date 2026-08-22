import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import pastryBox from '@assets/image_1787221154439.png';

const queryClient = new QueryClient();

function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg className={`orn ${className}`} viewBox="0 0 600 64" aria-hidden="true">
      <path d="M300 32H44M556 32H300M300 32l-10-10M300 32l10-10M300 32l-10 10M300 32l10 10" />
      <path d="M290 32C274 22 258 16 246 21c-10 4-8 13 0 13 8 0 10-8 2-11M246 21c-20-2-32 14-52 16-18 2-27-8-20-14 7-6 16 1 12 8" />
      <path d="M216 34c-10 10-23 14-30 8 8-8 20-11 30-8M200 38c-2 10 3 15 13 19M262 27c-3-10 2-18 12-21M274 6c2 0 3 2 0 3" />
      <path d="M310 32c16-10 32-16 44-11 10 4 8 13 0 13-8 0-10-8-2-11M354 21c20-2 32 14 52 16 18 2 27-8 20-14-7-6-16 1-12 8" />
      <path d="M384 34c10 10 23 14 30 8-8-8-20-11-30-8M400 38c2 10-3 15-13 19M338 27c3-10-2-18-12-21M326 6c-2 0-3 2 0 3" />
      <circle cx="92" cy="32" r="2.5" fill="currentColor" stroke="none" /><circle cx="508" cy="32" r="2.5" fill="currentColor" stroke="none" />
      <path d="M300 23l8 9-8 9-8-9 8-9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Lockup({ variant }: { variant: 'nav' | 'hero' | 'foot' }) {
  return (
    <span className={`lockup lockup-${variant}`}>
      <Flourish />
      <span className="lk-name">Mon-Petit-Choux</span>
      <span className="lk-sub">Pastry Shoppe</span>
    </span>
  );
}

const menuSections = [
  {
    title: 'Cream Puffs',
    intro: 'Pâte à choux topped with signature craquelin, pastry cream, compote, and cream fillings.',
    items: [
      ['Vanilla', '$6', 'Fresh made vanilla pastry cream and whipping cream.'],
      ['Chocolate', '$8', 'Callebaut chocolate pastry cream and whipping cream.'],
      ['Blueberry Lavender', '$8', 'Blueberry lavender compote, pastry cream, whipping cream, and blueberries.'],
      ['Peach Ginger', '$8', 'Peach ginger compote, vanilla pastry cream, peaches, and ginger.'],
      ['Raspberry', '$7', 'Raspberry rose pastry cream, whipping cream, rose, and raspberry.'],
    ],
  },
  {
    title: 'Gourmet Éclairs',
    intro: 'Pâte à choux with signature craquelin, pastry cream, compotes, and other fillings.',
    items: [
      ['Vanilla · dark chocolate · raspberry', '$9', 'Pastry cream, vanilla whipping cream, Callebaut chocolate, and fresh raspberries.'],
      ['Pear', '$9', 'Pear compote, vanilla pastry cream, Chantilly cream, and crumble topping.'],
      ['Raspberry', '$6', 'Raspberry pastry cream with raspberry topping.'],
      ['Pistachio', '$6', 'Pistachio pastry cream and pistachio topping.'],
      ['Vanilla', '$6', 'Vanilla pastry cream dipped in chocolate.'],
      ['Rose & Raspberry', '$6', 'Pastry cream filled with rose and raspberry.'],
    ],
  },
  {
    title: 'Viennoiserie',
    intro: 'Laminated dough with lovely buttery layers.',
    items: [
      ['Croissant', '$4.50', 'Classic buttery laminated pastry.'],
      ['Almond Croissant', '$5', 'Filled with almond cream and almond slivers.'],
      ['Chocolate Croissant', '$5', 'Laminated dough filled with chocolate.'],
      ['Pistachio Croissant', '$6', 'Pistachio pieces and pistachio glaze.'],
      ['Danish', '$4–6', 'Fruit or savory flavors with homemade cream cheese filling.'],
      ['Fruit Tart', '$6–45', 'Pastry cream, fresh fruit, and glaze.'],
    ],
  },
];

function PastryArt({ type }: { type: string }) {
  return (
    <svg className={`pastry-art art-${type}`} viewBox="0 0 220 190" aria-hidden="true">
      <ellipse cx="110" cy="164" rx="62" ry="6" fill="#D9CDBB" opacity=".6" />
      {type === 'eclair' && <><path d="M28 118c0-18 16-26 34-26h96c18 0 34 8 34 26s-16 26-34 26H62c-18 0-34-8-34-26Z" fill="#EFC79C" /><path d="M30 100c18-20 36-2 54-18s36 8 54-4 38 8 54 6c4 12 2 20-2 24-30 6-140 6-160 0Z" fill="#C4657F" /></>}
      {type === 'croissant' && <><path d="M28 140c0-62 34-94 82-94s82 32 82 94c0 0-18-32-82-32S28 140 28 140Z" fill="#E09A50" /><g fill="none" stroke="#17120D" strokeWidth="1.2"><path d="M48 122 38 92M72 112 62 62M95 109 88 50M125 109l7-59M148 112l10-50M172 122l10-30" /></g></>}
      {type === 'honore' && <><path d="M40 158c-4-18 6-26 70-26s74 8 70 26Z" fill="#EDBE8B" /><g fill="#FBEFDD" stroke="#17120D" strokeWidth="1.4"><circle cx="84" cy="115" r="18" /><circle cx="136" cy="115" r="18" /><circle cx="56" cy="120" r="17" /><circle cx="164" cy="120" r="17" /></g><circle cx="110" cy="92" r="7" fill="#A8354E" /></>}
      {type === 'fraisier' && <><path d="M50 82h120v70c0 8-8 10-14 10H64c-6 0-14-2-14-10Z" fill="#FBF3E4" /><path d="M50 82h120v14H50Z" fill="#D75B72" /><path d="M50 122h120v10H50Z" fill="#E3B87C" /><path d="M50 74c0-8 12-12 60-12s60 4 60 12-12 12-60 12-60-4-60-12Z" fill="#E04A66" /></>}
      {type === 'tower' && <><g fill="#F0C79B" stroke="#17120D" strokeWidth="1.3"><circle cx="110" cy="44" r="13" /><circle cx="92" cy="72" r="14" /><circle cx="128" cy="72" r="14" /><circle cx="72" cy="104" r="15" /><circle cx="110" cy="100" r="15" /><circle cx="148" cy="104" r="15" /><circle cx="58" cy="136" r="16" /><circle cx="93" cy="134" r="16" /><circle cx="128" cy="134" r="16" /><circle cx="162" cy="136" r="16" /></g><path d="M38 158c34-8 110-8 144 0" fill="none" stroke="#17120D" strokeWidth="1.7" /></>}
      {type === 'chou' && <><path d="M50 130c0-18 16-26 60-26s60 8 60 26-26 29-60 29-60-11-60-29Z" fill="#EFC79C" /><path d="M52 121c10-15 22 2 34-12s24 6 36-8 24 8 36 0 16 11 14 22c-19 9-99 9-120-2Z" fill="#FDF6EA" /><path d="M56 108c-6-34 22-58 54-58s60 24 54 58c-24-9-84-9-108 0Z" fill="#E9B173" /></>}
      <path d="M42 164h136" stroke="#17120D" strokeWidth="1.3" opacity=".7" />
    </svg>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPage, setMenuPage] = useState(0);
  const [pageDirection, setPageDirection] = useState<'next' | 'prev'>('next');
  const [turningFromPage, setTurningFromPage] = useState<number | null>(null);
  const activeMenu = menuSections[menuPage];
  const renderMenuSheet = (menu: (typeof menuSections)[number], page: number) => (
    <>
      <div className="menu-page-top"><span>Menu · {String(page + 2).padStart(2, '0')}</span><span>{page === 0 ? 'Pâte à choux' : page === 1 ? 'Pâtisserie' : 'Boulangerie'}</span></div>
      <h3>{menu.title}</h3>
      <p className="menu-page-intro">{menu.intro}</p>
      <div className="menu-items">{menu.items.map(([name, price, description]) => <div className="menu-item" key={name}><div className="menu-item-line"><strong>{name}</strong><span className="menu-dots" /><b>{price}</b></div><p>{description}</p></div>)}</div>
    </>
  );
  const changeMenuPage = (nextPage: number) => {
    if (nextPage === menuPage || nextPage < 0 || nextPage >= menuSections.length || turningFromPage !== null) return;
    setPageDirection(nextPage > menuPage ? 'next' : 'prev');
    setTurningFromPage(menuPage);
    setMenuPage(nextPage);
  };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setNavOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="reference-site">
      <header className={`ref-nav ${scrolled ? 'scrolled' : ''} ${navOpen ? 'nav-open' : ''}`} id="nav">
        <a href="#top" onClick={() => setNavOpen(false)}><Lockup variant="nav" /></a>
        <nav className={`ref-navlinks ${navOpen ? 'is-open' : ''}`} id="site-nav-menu">
          <a className="nav-text" href="#counter" onClick={() => setNavOpen(false)}>The Menu</a>
          <a className="nav-text" href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a className="nav-text" href="#visit" onClick={() => setNavOpen(false)}>Visit</a>
          <a className="pill" href="tel:15136318333" onClick={() => setNavOpen(false)}>Order ahead</a>
        </nav>
        <button className={`nav-toggle ${navOpen ? 'is-open' : ''}`} type="button" aria-expanded={navOpen} aria-controls="site-nav-menu" aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setNavOpen((open) => !open)}>
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
      </header>

      <main id="top">
        <section className="ref-hero">
          <div className="ref-hero-frame">
            <span className="orn-slot bottom"><Flourish /></span>
            <h1><Lockup variant="hero" /></h1>
            <p className="hero-tag">French pastries, baked fresh every morning.</p>
            <div className="hero-actions" aria-label="Hero actions">
              <button className="pill hero-order" type="button">Order now</button>
              <a className="pill ghost" href="#counter">View menu <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <p className="micro hero-hours">Thursday &amp; Friday · 8:30 to 1:30 · Saturday · 9 to 1:30, or until sold out</p>
        </section>

        <section className="name-section" id="name">
          <div className="wrap name-grid">
            <div className="definition reveal"><span className="definition-word">chou</span><p className="micro definition-pos">French · noun</p><ol><li>Cabbage.</li><li>Pâte à choux: the pastry used for cream puffs and éclairs.</li></ol></div>
            <div className="name-body reveal"><h2 className="heading">Pâte à choux, made with signature craquelin.</h2><p className="body-copy">Mon-Petit-Choux describes its cream puffs as pâte à choux topped with signature craquelin, pastry cream, compote, and cream fillings. Flavors in the shop change by the month.</p><p className="body-copy">The official menu also lists pâte à choux éclairs, filled with pastry cream, compotes, and other fillings.</p></div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="wrap">
            <div className="about-head reveal"><h2>About Us</h2></div>
            <div className="about-columns">
              <article className="about-column reveal"><p className="about-column-number">01</p><h3>Early mornings</h3><p>All items are baked fresh every morning. The bakery recommends visiting early because signature items often sell out.</p></article>
              <article className="about-column reveal"><p className="about-column-number">02</p><h3>Handcrafted goods</h3><p>Pâte à choux pastries are topped with signature craquelin and filled with pastry cream, compote, and cream fillings. Flavors change by the month.</p></article>
              <article className="about-column reveal"><p className="about-column-number">03</p><h3>A place to enjoy</h3><p>Find Mon-Petit-Choux in Cheviot at 3704 Cheviot Avenue, Suite 2. Visit Thursday through Saturday, or until the shop sells out.</p></article>
            </div>
          </div>
        </section>

        <div className="menu-about-separator" aria-hidden="true"><Flourish /></div>

        <section className="menu-section" id="counter">
          <div className="wrap">
            <div className="menu-intro reveal"><p className="micro">From the official menu</p><h2 className="heading-lg">A little book of the morning case.</h2><p className="body-copy">A small selection of the bakery&apos;s listed pastries. In-shop flavors and availability change, so the menu is best read as an invitation to visit early.</p></div>
            <div className={`menu-book reveal ${menuOpen ? 'is-open' : ''}`}>
              <button className="menu-cover" type="button" onClick={() => { setTurningFromPage(null); setMenuOpen(true); setMenuPage(0); }} aria-label="Open the Mon-Petit-Choux menu">
                <div className="book-rule"><Flourish /></div>
                <p className="menu-cover-kicker">Mon-Petit-Choux</p>
                <h3>Le Menu</h3>
                <p className="menu-cover-sub">Pastry Shoppe<br />Cheviot, Ohio</p>
                <div className="book-rule book-rule-bottom"><Flourish /></div>
                <span className="menu-open-label">{menuOpen ? 'Menu open' : 'Open the menu'} <span aria-hidden="true">↗</span></span>
              </button>
              {menuOpen ? <div className="menu-pages" aria-live="polite">
                <section className="menu-page">
                  <div className="menu-page-sheet menu-page-sheet-in">{renderMenuSheet(activeMenu, menuPage)}</div>
                  {turningFromPage !== null && <div className={`menu-page-sheet menu-page-sheet-out page-turn-${pageDirection}`} aria-hidden="true" onAnimationEnd={() => setTurningFromPage(null)}>
                    <div className="menu-sheet-face menu-sheet-front">{renderMenuSheet(menuSections[turningFromPage], turningFromPage)}</div>
                    <div className="menu-sheet-face menu-sheet-back">{renderMenuSheet(activeMenu, menuPage)}</div>
                  </div>}
                  <div className="menu-page-actions">
                    <button type="button" className="page-arrow" onClick={() => changeMenuPage(menuPage - 1)} disabled={menuPage === 0 || turningFromPage !== null} aria-label="Previous menu page">←</button>
                    <span>{menuPage + 1} / {menuSections.length}</span>
                    <button type="button" className="page-arrow" onClick={() => changeMenuPage(menuPage + 1)} disabled={menuPage === menuSections.length - 1 || turningFromPage !== null} aria-label="Next menu page">→</button>
                    <button type="button" className="menu-close" onClick={() => { setTurningFromPage(null); setMenuOpen(false); }}>Close menu</button>
                  </div>
                </section>
              </div> : <div className="menu-closed-side"><Flourish /><p className="micro">A short tasting menu</p><strong>Turn the page.</strong><span>Three chapters of the morning case.</span><button type="button" onClick={() => { setTurningFromPage(null); setMenuOpen(true); }}>Begin reading <span aria-hidden="true">→</span></button></div>}
              </div>
            <p className="menu-note micro-w">All items are baked fresh every morning. Special orders require at least 48 hours&apos; notice.</p>
          </div>
        </section>

        <section className="plaque-section"><div className="wrap"><div className="plaque-orn"><Flourish /></div><p className="micro">Thursday · Friday · Saturday</p><p className="plaque-line">Thursday and Friday, 8:30 to 1:30. Saturday, 9 to 1:30. Or until sold out.</p><div className="plaque-orn"><Flourish /></div></div></section>

        <section className="visit-section" id="visit"><div className="wrap visit-grid"><div className="visit-visual"><img src={pastryBox} alt="Fresh fruit-filled pastries from Mon-Petit-Choux" /><a className="map-card" href="https://www.google.com/maps/search/?api=1&query=3704+Cheviot+Avenue+Suite+2+Cincinnati+Ohio+45211" target="_blank" rel="noreferrer"><span className="map-card-label">Find the shoppe</span><strong>3704 Cheviot Avenue<br />Suite 2, Cincinnati</strong><span className="map-card-link">Open in Maps <span aria-hidden="true">↗</span></span></a></div><div className="visit-detail reveal"><p className="micro">Visit the counter</p><h2 className="heading-lg">Visit for breakfast.</h2><div className="visit-rows"><div className="vrow"><span className="vkey">Address</span><span>3704 Cheviot Avenue, Suite 2<br />Cincinnati, Ohio 45211</span></div><div className="vrow"><span className="vkey">Hours</span><span>Thursday and Friday, 8:30am to 1:30pm<br />Saturday, 9am to 1:30pm<br />Sunday to Wednesday, closed</span></div><div className="vrow"><span className="vkey">Telephone</span><a href="tel:15136318333">(513) 631-8333</a></div><div className="vrow"><span className="vkey">Correspondence</span><a href="mailto:monpetitchouxltd@gmail.com">monpetitchouxltd@gmail.com</a></div></div><div className="visit-ctas"><a className="pill" href="https://www.google.com/maps/search/?api=1&query=3704+Cheviot+Avenue+Suite+2+Cincinnati+Ohio+45211" target="_blank" rel="noreferrer">Get directions</a><a className="pill ghost" href="tel:15136318333">Call to order ahead</a></div><p className="visit-fine">Special request orders need 48 hours&apos; notice. Custom cake orders are handled by <a href="mailto:maribelleltd@gmail.com">Maribelle Cakery</a>.</p></div></div></section>
      </main>

      <footer className="ref-footer"><div className="wrap"><div className="footer-grid"><a href="#top"><Lockup variant="foot" /></a><nav><a href="#counter">The Menu</a><a href="#about">About</a><a href="#visit">Visit</a><a href="https://www.instagram.com/mon.petit.choux.cincinnati/" target="_blank" rel="noreferrer">Instagram</a></nav></div><div className="footer-bottom"><span>© 2026 Mon-Petit-Choux Pastry Shoppe · Cheviot, Cincinnati</span><span className="studio-credit">Built by Studio 1801</span></div></div></footer>
    </div>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}
function RoutedErrorBoundary({ children }: { children: ReactNode }) { const [location] = useLocation(); return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>; }
function App() { return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>; }
export default App;