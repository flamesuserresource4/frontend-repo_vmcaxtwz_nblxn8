import Spline from '@splinetool/react-spline';
import { ArrowRight, Gamepad2 } from 'lucide-react';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays to enhance red glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,36,36,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex items-center">
        <div className="w-full text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs text-red-200 mb-6 backdrop-blur">
            <Gamepad2 size={14} />
            <span>Keyless. Optimized. Future-ready.</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            CPS <span className="text-[#ff2424] drop-shadow-[0_0_25px_rgba(255,36,36,0.7)]">Network</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-neutral-300">
            The Next-Gen Roblox Script Hub
          </p>
          <p className="mt-2 text-sm sm:text-base text-neutral-400">
            Keyless Scripts. Premium Access. Maximum Power.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollTo('store')}
              className="relative inline-flex items-center justify-center rounded-lg px-5 py-3 text-white font-medium bg-[#ff2424] shadow-[0_0_25px_rgba(255,36,36,0.6)] hover:shadow-[0_0_35px_rgba(255,36,36,0.8)] transition-shadow"
            >
              <span className="absolute inset-0 -z-0 animate-pulse bg-[#ff2424]/20 rounded-lg" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Store <ArrowRight size={18} />
              </span>
            </button>
            <button
              onClick={() => scrollTo('games')}
              className="relative inline-flex items-center justify-center rounded-lg px-5 py-3 text-[#ff2424] font-medium bg-white/5 hover:bg-white/10 transition-colors border border-red-600/30"
            >
              <span className="absolute inset-0 -z-0 animate-pulse bg-[#ff2424]/10 rounded-lg" />
              <span className="relative z-10 flex items-center gap-2">
                View Supported Games <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
