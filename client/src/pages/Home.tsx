/**
 * Design reminder — Farm-to-Pouch Almanac:
 * grounded forest green, warm paper surfaces, editorial mountain provenance,
 * package-first retail hierarchy, and short tactile interactions.
 */
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Facebook,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Minus,
  Mountain,
  PackageCheck,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sprout,
  Truck,
  UserRound,
  X,
  Youtube,
} from "lucide-react";
import { toast } from "sonner";

const assets = {
  hero: "/manus-storage/sahyadri-hero_e489a525.jpg",
  collection: "/manus-storage/sahyadri-collection_f436814e.jpg",
  bulk: "/manus-storage/sahyadri-bulk_dc560bbc.jpg",
  story: "/manus-storage/sahyadri-story_235b2ed4.jpg",
  mark: "/manus-storage/sahyadri-mark_c02f55a0.png",
};

const products = [
  { name: "Premium Goan Cashews", short: "Cashews", price: "₹680", tone: "cashew", note: "Creamy · Handpicked" },
  { name: "California Almonds", short: "Almonds", price: "₹800", tone: "almond", note: "Bold · Naturally rich" },
  { name: "Roasted Peanuts", short: "Peanuts", price: "₹300", tone: "peanut", note: "Crisp · Lightly roasted" },
  { name: "Roasted Green Peas", short: "Green Peas", price: "₹300", tone: "pea", note: "Bright · Gently spiced" },
];

const valuePacks = [
  { title: "Healthy Snack Pack", desc: "4 x 50g · Just right for busy days", price: "₹199", flag: "Save 12%", tone: "cashew" },
  { title: "Family Pack", desc: "4 x 250g · Everyday pantry favourites", price: "₹799", flag: "Save 15%", tone: "peanut" },
  { title: "Premium Combo", desc: "Cashews + almonds, selected together", price: "₹699", flag: "Save 10%", tone: "almond" },
  { title: "Office Snack Box", desc: "8 x 50g · A thoughtful desk drawer", price: "₹999", flag: "Free shipping", tone: "pea" },
];

function notify(label: string) {
  toast(`${label} is ready to explore`, {
    description: "This is a frontend preview — cart and checkout will connect in the next phase.",
  });
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="brand-lockup" aria-label="Sahyadri Foods home">
      <img className="brand-mark" src={assets.mark} alt="Sahyadri mountain mark" />
      <span className="brand-copy">
        <strong>SAHYADRI<br />FOODS</strong>
        {!compact && <small>Premium Dry Fruits · Healthy Snacks</small>}
      </span>
    </a>
  );
}

function ProductArt({ tone, small = false }: { tone: string; small?: boolean }) {
  const labels: Record<string, string> = { cashew: "CASHEWS", almond: "ALMONDS", peanut: "PEANUTS", pea: "GREEN PEAS" };
  return (
    <div className={`product-art ${tone} ${small ? "small" : ""}`} aria-hidden="true">
      <div className="pack-edge pack-edge-left" />
      <div className="pack-edge pack-edge-right" />
      <div className="pack-seal"><Mountain size={13} /><Leaf size={10} /></div>
      <div className="pack-brand">SAHYADRI<br /><span>FOODS</span></div>
      <div className="pack-divider" />
      <div className="pack-type">PREMIUM</div>
      <div className="pack-name">{labels[tone]}</div>
      <div className="pack-hills"><Mountain /><Mountain /><Mountain /></div>
      <div className="pack-weight">50 g</div>
    </div>
  );
}

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <article className="product-card" style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
      <div className="product-label">{index === 0 ? "Most loved" : index === 1 ? "Pantry staple" : index === 2 ? "Lightly roasted" : "Snack bright"}</div>
      <div className={`product-stage ${product.tone}`}>
        <div className="stage-glow" />
        <ProductArt tone={product.tone} />
        <span className="ingredient-shape shape-one" />
        <span className="ingredient-shape shape-two" />
        <span className="ingredient-shape shape-three" />
      </div>
      <div className="product-info">
        <p className="eyebrow">Handpicked selection</p>
        <h3>{product.name}</h3>
        <p className="product-note">{product.note}</p>
        <div className="price-row"><span>From <strong>{product.price}</strong></span><span>per pack</span></div>
        <button className="product-add" onClick={() => notify(product.name)}><ShoppingCart size={15} /> Add to cart</button>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
      <div className="herb-divider" aria-hidden="true"><span /><Leaf size={13} /><span /></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      toast("Enter a valid email address", { description: "We’ll use it only for Sahyadri table notes and offers." });
      return;
    }
    toast("You’re on the table-notes list", { description: "Thank you for joining Sahyadri Foods." });
    setEmail("");
  };

  return (
    <div id="top" className="site-shell">
      <div className="shipping-strip"><PackageCheck size={13} /> Free shipping on orders above ₹499 <span>•</span> Use code <b>SAHYADRI10</b> for 10% off your first order</div>

      <header className="site-header">
        <div className="container header-inner">
          <BrandLockup />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {['Home', 'Shop', 'Combo Packs', 'Bulk Orders', 'Why Sahyadri', 'About Us', 'Contact'].map((item, index) => (
              <a key={item} href={index === 0 ? '#top' : index === 1 ? '#shop' : index === 3 ? '#bulk' : index === 5 ? '#story' : '#footer'}>{item}{item === 'Shop' && <ChevronDown size={13} />}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button onClick={() => notify('Search')} aria-label="Search products"><Search size={18} /></button>
            <button className="account-action" onClick={() => notify('Account')}><UserRound size={17} /><span>Login</span></button>
            <button className="bag-action" onClick={() => notify('Your cart')} aria-label="Open cart"><ShoppingBag size={18} /><i>0</i></button>
            <button className="whatsapp-button" onClick={() => notify('WhatsApp ordering')}><Phone size={15} /> WhatsApp Order</button>
            <button className="mobile-menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {['Shop all products', 'Combo packs', 'Bulk orders', 'Why Sahyadri', 'About us', 'Contact'].map((item) => <a onClick={() => setMenuOpen(false)} href={`#${item.includes('Bulk') ? 'bulk' : item.includes('About') ? 'story' : item.includes('Shop') ? 'shop' : 'footer'}`} key={item}>{item}</a>)}
          </div>
        )}
      </header>

      <main>
        <section className="hero" aria-label="Premium dry fruits from Goa">
          <img src={assets.hero} alt="Premium dry fruit pouches and bowls in a Sahyadri mountain setting" />
          <div className="hero-overlay" />
          <div className="hero-pouch-legends" aria-hidden="true">
            {['Cashews', 'Almonds', 'Peanuts', 'Green peas'].map((name) => <span key={name}><b><Mountain size={10} /> SAHYADRI</b><small>Premium<br />{name}</small><i><Leaf size={9} /> Selected near the hills</i></span>)}
          </div>
          <div className="container hero-content">
            <p className="hero-kicker"><Leaf size={13} /> From the heart of Goa</p>
            <h1>Taste the Goodness<br /><em>of Nature</em></h1>
            <p>Hill-grown pantry favourites, sorted near the Sahyadris and packed to bring a little more care to everyday rituals.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#shop">Shop now <ArrowRight size={17} /></a>
              <a className="button button-outline" href="#bulk">Bulk order <ShoppingBag size={16} /></a>
            </div>
          </div>
        </section>

        <section className="container trust-wrap" aria-label="Sahyadri quality commitments">
          <div className="trust-rail">
            <div><Leaf /><span><b>100% Natural</b><small>No preservatives</small></span></div>
            <div><BadgeCheck /><span><b>Premium Quality</b><small>Handpicked</small></span></div>
            <div><ShieldCheck /><span><b>Hygienically Packed</b><small>Food-grade packaging</small></span></div>
            <div><Truck /><span><b>Fast Delivery</b><small>Across India</small></span></div>
            <div><Heart /><span><b>Great Taste</b><small>Made for everyday</small></span></div>
          </div>
        </section>

        <section className="collection-section" id="shop">
          <div className="container collection-layout">
            <div className="collection-copy">
              <SectionHeading eyebrow="A page from our pantry almanac" title="Our Premium Collection" copy="Small-batch essentials for the way you snack, share and stock the pantry." />
              <div className="category-list">
                {products.map((product, index) => <a href="#best-sellers" key={product.short}><span>0{index + 1}</span><b>{product.short}</b><ArrowRight size={16} /></a>)}
              </div>
              <a href="#best-sellers" className="text-link">View the complete collection <ArrowRight size={16} /></a>
            </div>
            <div className="collection-visual">
              <img src={assets.collection} alt="Curated bowls of cashews, almonds, peanuts and roasted peas" />
              <div className="collection-note"><Sprout size={17} /><span><b>Chosen with care</b><small>From trusted growers to your shelf</small></span></div>
            </div>
          </div>
        </section>

        <section className="best-sellers" id="best-sellers">
          <div className="container">
            <div className="best-header">
              <SectionHeading eyebrow="The table keeps returning to these" title="Best Sellers" copy="Thoughtful favourites for gifting, grazing and a well-stocked kitchen." />
              <button onClick={() => notify('All products')} className="button button-muted">View all products <ArrowRight size={16} /></button>
            </div>
            <div className="product-grid">
              {products.map((product, index) => <ProductCard product={product} index={index} key={product.name} />)}
            </div>
          </div>
        </section>

        <section className="value-section">
          <div className="container">
            <div className="value-header">
              <SectionHeading eyebrow="Pantry provisions" title="Value Packs & Combos" copy="Bring more good snacks home, without overthinking it." />
              <p>Made for shared cupboards, festive gifting, and small everyday breaks.</p>
            </div>
            <div className="value-grid">
              {valuePacks.map((pack) => (
                <article className="value-card" key={pack.title}>
                  <span className="savings-tag">{pack.flag}</span>
                  <div className={`value-art ${pack.tone}`}><ProductArt tone={pack.tone} small /><ProductArt tone={pack.tone} small /></div>
                  <div><h3>{pack.title}</h3><p>{pack.desc}</p><strong>{pack.price}</strong></div>
                  <button aria-label={`Add ${pack.title}`} onClick={() => notify(pack.title)}><Plus size={18} /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container bulk-section" id="bulk">
          <div className="bulk-copy">
            <p className="eyebrow light"><span />Bulk orders</p>
            <h2>Buy More · <em>Save More</em></h2>
            <p>For office pantries, weddings, retail shelves and thoughtful corporate gifts. We make large orders feel just as considered.</p>
            <div className="bulk-badges"><span><PackageCheck /> Custom packing</span><span><Sprout /> Gift-ready options</span></div>
            <button className="button button-cream" onClick={() => notify('Bulk ordering')}>Request bulk pricing <ArrowRight size={17} /></button>
          </div>
            <div className="bulk-table">
              <div className="bulk-table-header"><span>Attractive Price Per KG</span><small>For planned purchases and regular pantry programs</small></div>
              {[['5 kg', '5% off', 'Save ₹ per kg'], ['10 kg', '10% off', 'Save ₹₹ per kg'], ['20 kg', '15% off', 'Save ₹₹₹ per kg'], ['50 kg & above', 'Best price', 'Custom quote']].map((row) => <div className="bulk-row" key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
              <button onClick={() => notify('Bulk ordering')} className="bulk-cta">Get bulk quote <ArrowRight size={16} /></button>
            </div>
          <div className="bulk-visual">
            <img src={assets.bulk} alt="Bulk dry fruit baskets and wooden scoops" />
            <div className="bulk-visual-note"><span>Provisions for more</span><b>Selected in bulk,<br />sealed with care.</b><i><Leaf size={13} /> From the Sahyadri pantry</i></div>
          </div>
        </section>

        <section className="choice-section">
          <div className="container">
            <SectionHeading eyebrow="The Sahyadri difference" title="Sorted near the hills. Saved for your table." />
            <div className="choice-grid">
              <div className="comparison-card">
                <div className="compare-head"><span>Usual shelf snacks</span><b>Sahyadri Foods</b></div>
                {['Fresh whole ingredients', 'Premium food-grade pouches', 'Trusted sourcing partners', 'Personalised support'].map((feature) => <div className="compare-row" key={feature}><span><X size={15} /> Not assured</span><b><Check size={15} /> {feature}</b></div>)}
              </div>
              <div className="promise-card">
                <h3>Our Field Notes</h3>
                <div className="promise-list">
                  <div><BadgeCheck /><span><b>Hill-side selection</b><small>Carefully sorted</small></span></div>
                  <div><span className="rupee">₹</span><span><b>Honest prices</b><small>Thoughtfully valued</small></span></div>
                  <div><PackageCheck /><span><b>Freshly sealed</b><small>Packed close to source</small></span></div>
                  <div><Heart /><span><b>Made for sharing</b><small>Everyday nourishment</small></span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-image"><img src={assets.story} alt="Sahyadri mountains and waterfall in the monsoon" /><div className="story-shade" /><div className="story-copy"><p className="eyebrow light"><span />Our vision</p><h2>Nourishing lives,<br /><em>naturally.</em></h2><p>Good food starts with good stewardship — for ingredients, growers and the routines that bring people together.</p><a className="text-link light" href="#footer">Know more about us <ArrowRight size={16} /></a></div></div>
          <div className="story-values">
            {[['Our promise', 'We source only the best and deliver nothing but premium.'], ['Healthy living', 'Wholesome snacks for considered everyday rituals.'], ['Sustainable relationships', 'Grower partnerships that last beyond a season.'], ['Trusted sourcing', 'We work closely with every supplier.']].map(([title, copy], index) => <article key={title}><span>{index === 0 ? <BadgeCheck /> : index === 1 ? <Leaf /> : index === 2 ? <Sprout /> : <Heart />}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="journey-section">
          <div className="container">
            <SectionHeading eyebrow="From our farm to your home" title="A quieter, closer way to the table." />
            <div className="journey-steps">
              {[[MapPin, 'Sourcing', 'Chosen with reliable hill-country growers'], [ShieldCheck, 'Quality check', 'Each harvest is assessed with care'], [Sprout, 'Cleaning', 'Prepared to keep its natural character'], [PackageCheck, 'Packing', 'Sealed near the source in premium pouches'], [Truck, 'Delivery', 'Sent quickly to your everyday table']].map(([Icon, title, copy], index) => { const StepIcon = Icon as typeof MapPin; return <article key={title as string}><i>{String(index + 1).padStart(2, '0')}</i><span><StepIcon /></span><h3>{title as string}</h3><p>{copy as string}</p></article>})}
            </div>
          </div>
        </section>

        <section className="newsletter-section">
          <div className="container newsletter-inner"><div><p className="eyebrow light"><span />A note from the hills</p><h2>Get 10% off your first order.</h2><p>Seasonal pantry notes and carefully chosen offers, no clutter.</p></div><form onSubmit={(event) => { event.preventDefault(); handleSubscribe(); }}><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Enter your email address" aria-label="Email address" /><button type="submit">Subscribe now <ArrowRight size={16} /></button></form></div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><BrandLockup compact /><p>Bringing the considered goodness of the Sahyadri mountains to your home.</p><div className="socials"><a href="#footer" aria-label="Instagram"><Instagram /></a><a href="#footer" aria-label="Facebook"><Facebook /></a><a href="#footer" aria-label="YouTube"><Youtube /></a></div></div>
          <div><h3>Quick links</h3><a href="#top">Home</a><a href="#shop">Shop</a><a href="#bulk">Bulk orders</a><a href="#story">About us</a></div>
          <div><h3>Customer support</h3><a href="#footer">My account</a><a href="#footer">Track order</a><a href="#footer">Shipping policy</a><a href="#footer">FAQs</a></div>
          <div><h3>Contact us</h3><p><Phone size={14} /> +91 98765 43210</p><p><Mail size={14} /> support@sahyadrifoods.com</p><p><MapPin size={14} /> Sahyadri Foods, Goa, India</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Sahyadri Foods. All rights reserved.</span><span>Secure payments accepted <b>UPI</b> <b>VISA</b> <b>RuPay</b></span></div>
      </footer>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation"><a href="#top"><Leaf /><span>Home</span></a><a href="#shop"><ShoppingBag /><span>Shop</span></a><button onClick={() => notify('Search')}><Search /><span>Search</span></button><button onClick={() => notify('Your cart')}><ShoppingCart /><span>Cart</span></button><button onClick={() => notify('Account')}><UserRound /><span>Account</span></button></nav>
    </div>
  );
}
