export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-red-600/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-neutral-400 text-sm">
          © 2025 CPS Network – Where Scripts Evolve.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://discord.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white">
            Discord
          </a>
          <a href="#" className="text-neutral-300 hover:text-white">Twitter/X</a>
          <a href="#" className="text-neutral-300 hover:text-white">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
