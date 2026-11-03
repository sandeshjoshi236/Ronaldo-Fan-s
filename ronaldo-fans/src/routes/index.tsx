import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import jerseyImg from "@/assets/cr7-portugal-jersey.png.asset.json";
import watchImg from "@/assets/cr7-watch.png.asset.json";

const HERO =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RONALDO FANS | Streetwear & Football Fashion" },
      { name: "description", content: "Jerseys, tees and hoodies for fans who live the game. Order via WhatsApp." },
      { property: "og:title", content: "RONALDO FANS | Streetwear & Football Fashion" },
      { property: "og:description", content: "Jerseys, tees and hoodies for fans who live the game." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "9779812794446";
function openWhatsApp(message: string) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

const products = [
  { name: "CR7 Portugal Jersey", cat: "jersey", price: "Rs. 2,999", tag: "SIGNATURE", img: jerseyImg.url, alt: "CR7 Portugal black jersey with number 7" },
  { name: "CR7 Signature Watch", cat: "watch", price: "Rs. 7,499", tag: "LIMITED", img: watchImg.url, alt: "CR7 Ronaldo silver watch in gift box" },
  { name: "Match Day Jersey", cat: "jersey", price: "Rs. 1,899", tag: "FAN FAVORITE", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=700&q=80", alt: "Football jersey" },
  { name: "Everyday Graphic Tee", cat: "tee", price: "Rs. 1,199", tag: "NEW DROP", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80", alt: "Classic streetwear tee" },
  { name: "Oversized Hoodie", cat: "hoodie", price: "Rs. 2,499", tag: "COZY PICK", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80", alt: "Casual hoodie" },
  { name: "Minimal Logo Tee", cat: "tee", price: "Rs. 999", tag: "ESSENTIAL", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80", alt: "Minimal fashion tee" },
  { name: "Training Track Jacket", cat: "hoodie", price: "Rs. 2,799", tag: "NEW DROP", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80", alt: "Track jacket" },
  { name: "Classic Steel Watch", cat: "watch", price: "Rs. 5,999", tag: "BEST SELLER", img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80", alt: "Classic steel wristwatch" },
  { name: "Gold Chrono Watch", cat: "watch", price: "Rs. 8,999", tag: "PREMIUM", img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=700&q=80", alt: "Gold chronograph watch" },
  { name: "Away Kit Jersey", cat: "jersey", price: "Rs. 1,799", tag: "NEW DROP", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80", alt: "Away kit football jersey" },
];
const filters: [string, string][] = [
  ["all", "All pieces"],
  ["jersey", "Jerseys"],
  ["tee", "T-shirts"],
  ["hoodie", "Hoodies"],
  ["watch", "Watches"],
];

function Index() {
  const [filter, setFilter] = useState("all");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const phone = String(f.get("phone") || "").trim();
    openWhatsApp(
      `Hi RONALDO FANS!\nName: ${String(f.get("name")).trim()}\nPhone: ${phone || "Not provided"}\nTopic: ${f.get("topic")}\nMessage: ${String(f.get("message")).trim()}`,
    );
  };

  return (
    <>
      <header>
        <a className="logo" href="#home">RONALDO<span>FANS</span></a>
        <nav>
          <a href="#home">Home</a><a href="#shop">Shop</a><a href="#story">Our vibe</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-actions"><a className="btn outline" href="#shop">Explore shop</a></div>
      </header>
      <main>
        <section className="hero" id="home">
          <div>
            <div className="eyebrow">STREETWEAR • FOOTBALL CULTURE • EVERYDAY STYLE</div>
            <h1>WEAR YOUR<br /><em>PASSION.</em></h1>
            <p>Fresh fits for fans who bring their energy everywhere. Discover tees, jerseys and streetwear made for your everyday rotation.</p>
            <div className="hero-buttons">
              <a className="btn lime" href="#shop">Shop collection ↗</a>
              <a className="btn outline" href="#contact">Ask us anything</a>
            </div>
          </div>
          <div className="hero-art">
            <img src={HERO} alt="Fashion streetwear editorial" />
            <div className="hero-tag">YOUR STYLE. YOUR GAME.</div>
          </div>
        </section>
        <div className="ticker"><span>NEW SEASON</span><span>✳</span><span>FAN CULTURE</span><span>✳</span><span>STREET READY</span><span>✳</span><span>RONALDO FANS</span></div>

        <section id="shop">
          <div className="section-head">
            <div><div className="eyebrow">THE COLLECTION</div><h2>Find your fit.</h2></div>
            <p>Choose a style and message us on WhatsApp to ask about sizes, availability or ordering.</p>
          </div>
          <div className="filters">
            {filters.map(([k, l]) => (
              <button key={k} className={`filter ${filter === k ? "active" : ""}`} onClick={() => setFilter(k)}>{l}</button>
            ))}
          </div>
          <div className="products">
            {products.filter((p) => filter === "all" || p.cat === filter).map((p) => (
              <article className="product" key={p.name}>
                <div className="product-img"><img src={p.img} alt={p.alt} loading="lazy" /><span className="tag">{p.tag}</span></div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <div className="price-row">
                    <span>{p.price}</span>
                    <button className="add" aria-label={`Ask about ${p.name}`} onClick={() => openWhatsApp(`Hi RONALDO FANS! I'm interested in the ${p.name}. Could you share available sizes and details?`)}>+</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" id="story">
          <div>
            <div className="eyebrow" style={{ color: "var(--lime)" }}>MORE THAN A LOOK</div>
            <h2>Made for the<br />ones who<br />live the game.</h2>
            <p>RONALDO FANS brings football energy and street style together. Pick your favorite pieces, find your fit, and wear what you love—on match day and every day.</p>
            <a className="btn lime" href="#contact">Talk to our team ↗</a>
          </div>
          <img src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1000&q=85" alt="Fashion clothing rack" />
        </section>

        <section className="contact" id="contact">
          <div>
            <div className="eyebrow">LET'S CONNECT</div>
            <h2>Need a hand<br />with your fit?</h2>
            <p>Send us your question, order request or size inquiry. The form opens WhatsApp with your message ready to send.</p>
            <p><strong>WhatsApp:</strong> 9812794446</p>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field"><label htmlFor="name">YOUR NAME</label><input id="name" name="name" placeholder="Name" required /></div>
            <div className="field"><label htmlFor="phone">PHONE (OPTIONAL)</label><input id="phone" name="phone" placeholder="Your number" /></div>
            <div className="field full"><label htmlFor="topic">WHAT ARE YOU LOOKING FOR?</label>
              <select id="topic" name="topic"><option>Product / size inquiry</option><option>Place an order</option><option>Delivery question</option><option>Other</option></select>
            </div>
            <div className="field full"><label htmlFor="message">MESSAGE</label><textarea id="message" name="message" placeholder="Tell us what you need..." required /></div>
            <div className="field full"><button className="btn lime" type="submit">Send via WhatsApp ↗</button></div>
          </form>
        </section>
      </main>
      <footer>
        <div className="logo">RONALDO<span>FANS</span></div>
        <div>Street style. Football soul. © {new Date().getFullYear()} RONALDO FANS</div>
        <div>Made for the fans.</div>
      </footer>
      <a className="whatsapp" href="https://wa.me/9779812794446?text=Hi%20RONALDO%20FANS%2C%20I%20have%20a%20question." target="_blank" rel="noopener">WhatsApp ↗</a>
    </>
  );
}
