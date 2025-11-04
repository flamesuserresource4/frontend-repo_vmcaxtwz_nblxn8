import { useState } from 'react';
import { Check, CreditCard, Shield, Sparkles } from 'lucide-react';

const pill = 'inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-200';
const glowCard = 'rounded-2xl border border-red-500/20 bg-white/5 hover:bg-white/10 transition-colors shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_35px_0_rgba(255,36,36,0.25)]';

function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20 bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,36,36,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
          {subtitle && <p className="text-neutral-400 mt-2">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function PriceRow({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm text-neutral-200">
      <span className="text-neutral-300">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}

function Store() {
  const [method, setMethod] = useState('Robux');
  const isRobux = method === 'Robux';

  return (
    <SectionWrapper
      id="store"
      title="Store"
      subtitle="Choose your plan. Taxes on Robux payments are covered. All sales are final and non-refundable."
    >
      <div className="mb-6 flex items-center gap-3">
        <span className={pill}><CreditCard size={14} /> Payment</span>
        <div className="flex p-1 rounded-full bg-white/5 border border-red-500/20">
          {['Robux', 'PayPal'].map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                method === m
                  ? 'bg-[#ff2424] text-white shadow-[0_0_20px_rgba(255,36,36,0.5)]'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 99 Nights */}
        <div className={glowCard + ' p-6'}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">99 Nights Hub & Diamonds/Days Farm</h3>
            <span className={pill}><Shield size={14} /> Premium</span>
          </div>
          <div className="mt-4 grid gap-3">
            {isRobux ? (
              <>
                <PriceRow label="Lifetime" value="950 Robux + 3 Server Boosts" />
                <PriceRow label="Monthly" value="550 Robux + 2 Server Boosts" />
              </>
            ) : (
              <>
                <PriceRow label="Lifetime" value="N/A (Robux only)" />
                <PriceRow label="Monthly" value="N/A (Robux only)" />
              </>
            )}
          </div>
          <p className="mt-4 text-xs text-neutral-400">
            Robux payments include tax coverage. Non-refundable.
          </p>
        </div>

        {/* Touch Football */}
        <div className={glowCard + ' p-6'}>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Touch Football Keyless</h3>
            <span className={pill}><Sparkles size={14} /> Featured</span>
          </div>
          <div className="mt-4 grid gap-3">
            {isRobux ? (
              <>
                <PriceRow label="Lifetime" value="1450 Robux + $13.99 PayPal" />
                <PriceRow label="Monthly" value="550 Robux + 2 Server Boosts + $4.99 PayPal" />
              </>
            ) : (
              <>
                <PriceRow label="Lifetime" value="$13.99 PayPal" />
                <PriceRow label="Monthly" value="$4.99 PayPal (with 2 Server Boosts if using hybrid)" />
              </>
            )}
          </div>
          <p className="mt-4 text-xs text-neutral-400">
            Robux payments include tax coverage. Non-refundable.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

function PremiumInfo() {
  const perks = [
    {
      title: '99 Nights Hub GUI',
      items: ['Keyless', 'Priority Support'],
    },
    {
      title: 'Diamonds & Days Farm',
      items: ['Keyless', 'Priority Support'],
    },
    {
      title: 'Touch Football',
      items: ['Keyless', 'Priority Support'],
    },
  ];

  return (
    <SectionWrapper id="premium" title="Premium Info" subtitle="Exclusive perks designed for power users.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {perks.map((perk) => (
          <div key={perk.title} className={glowCard + ' p-6'}>
            <h3 className="text-lg font-semibold text-white">{perk.title}</h3>
            <ul className="mt-4 space-y-2">
              {perk.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-neutral-200">
                  <Check size={16} className="text-[#ff2424]" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function SupportedGames() {
  const games = [
    {
      title: '99 Nights in the Forest',
      desc: 'GUI Script + Diamonds/Days Farm',
    },
    {
      title: 'The Strongest Battlegrounds GUI',
      desc: 'Optimized GUI for competitive play',
    },
    {
      title: 'Touch Football GUI',
      desc: 'Keyless, streamlined controls',
    },
  ];

  return (
    <SectionWrapper id="games" title="Supported Games" subtitle="Glowing red cards show what we power.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((g) => (
          <div key={g.title} className={glowCard + ' p-6'}>
            <h3 className="text-lg font-semibold text-white">{g.title}</h3>
            <p className="text-neutral-300 mt-2">{g.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function SupportedExecutors() {
  return (
    <SectionWrapper id="executors" title="Supported Executors" subtitle="Reliable on PC and Mobile.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={glowCard + ' p-6'}>
          <h3 className="text-lg font-semibold text-white">PC</h3>
          <ul className="mt-3 space-y-2 text-neutral-200">
            {['Potassium', 'Swift', 'Bunni', 'Macsploit'].map((e) => (
              <li key={e} className="flex items-center gap-2"><Check size={16} className="text-[#ff2424]" /> {e}</li>
            ))}
          </ul>
        </div>
        <div className={glowCard + ' p-6'}>
          <h3 className="text-lg font-semibold text-white">Mobile</h3>
          <ul className="mt-3 space-y-2 text-neutral-200">
            {['Delta', 'Krnl', 'Arceus X v5'].map((e) => (
              <li key={e} className="flex items-center gap-2"><Check size={16} className="text-[#ff2424]" /> {e}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

function About() {
  return (
    <SectionWrapper id="about" title="About" subtitle="Who we are and what we do.">
      <div className={glowCard + ' p-6'}>
        <p className="text-neutral-300">
          CPS Network is the next-gen Roblox script hub providing keyless, optimized, and safe scripts with premium features and consistent updates.
        </p>
      </div>
    </SectionWrapper>
  );
}

function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact" subtitle="Join our community and reach out.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={glowCard + ' p-6'}>
          <h3 className="text-white font-semibold">Discord</h3>
          <p className="text-neutral-300 mt-2">Connect for support, updates, and access.</p>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-max items-center gap-2 rounded-lg border border-red-600/30 bg-white/5 px-4 py-2 text-[#ff2424] hover:bg-white/10 transition-colors"
          >
            Join Discord
          </a>
        </div>
        <div className={glowCard + ' p-6'}>
          <h3 className="text-white font-semibold">Socials</h3>
          <p className="text-neutral-300 mt-2">Follow for announcements and showcases.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#" className="text-neutral-300 hover:text-white">Twitter/X</a>
            <a href="#" className="text-neutral-300 hover:text-white">YouTube</a>
            <a href="#" className="text-neutral-300 hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default function Sections() {
  return (
    <>
      <Store />
      <PremiumInfo />
      <SupportedGames />
      <SupportedExecutors />
      <About />
      <Contact />
    </>
  );
}
