import Image from 'next/image';

const services = [
  { title: 'Monthly Mess Service', text: 'Homestyle Kerala meals every month', price: 'AED 450', icon: '🍛' },
  { title: 'Fresh Milk Tea', text: 'Hot, fresh tea made throughout the day', price: 'AED 2', icon: '☕' },
  { title: 'Kannur Snacks', text: 'Popular Kerala snacks, fresh and filling', price: 'From AED 3', icon: '🥟' },
];

const posts = [
  'Fresh Kerala breakfast is ready in Jurf 1. Start your day with Kannur flavour!',
  'Working nearby? Choose your monthly mess plan and enjoy homestyle Kerala food.',
  'Need a quick tea break? Fresh milk tea and Kannur snacks are waiting for you.',
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="brand"><span>K</span><div><b>KANNUR TATT KADA</b><small>Jurf 1 · Ajman</small></div></div>
        <a className="call" href="tel:+971">Call Now</a>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">AUTHENTIC KANNUR FLAVOURS</p>
          <h1>Your daily taste of<br/><em>Kerala.</em></h1>
          <p className="heroText">Monthly mess meals, fresh milk tea and Kannur snacks near Lucky Center.</p>
          <div className="actions"><a href="#offers">Explore offers</a><a className="outline" href="https://maps.google.com/?q=Jurf+1+Lucky+Center+Ajman" target="_blank">Get directions</a></div>
        </div>
        <div className="teaCard"><div className="steam">●  ●  ●</div><div className="cup">☕</div><b>Fresh every hour</b></div>
      </section>

      <section id="offers" className="section">
        <p className="eyebrow red">WHAT WE SERVE</p><h2>Good food. Honest value.</h2>
        <div className="grid">
          {services.map((item) => <article key={item.title}><div className="icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p><b>{item.price}</b></article>)}
        </div>
      </section>

      <section className="marketing">
        <div><p className="eyebrow">QUICK PROMOTION</p><h2>Ready-to-use English posts</h2></div>
        <div className="posts">{posts.map((post, i) => <article key={post}><span>0{i + 1}</span><p>{post}</p><button onClick={() => navigator.clipboard.writeText(post)}>Copy</button></article>)}</div>
      </section>

      <section className="location"><div><p className="eyebrow red">VISIT US</p><h2>Near Lucky Center, Jurf 1</h2><p>Ajman, United Arab Emirates</p></div><a href="https://maps.google.com/?q=Jurf+1+Lucky+Center+Ajman" target="_blank">Open Maps →</a></section>

      <footer><b>KANNUR TATT KADA</b><span>Kerala Food · Tea · Snacks</span></footer>
    </main>
  );
}
