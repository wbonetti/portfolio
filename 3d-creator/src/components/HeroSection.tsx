import ContactButton from './ContactButton';
import FadeIn from './FadeIn';
import Magnet from './Magnet';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Entregas', href: '#entregas' },
  { label: 'Contato', href: '#contato' },
];

// Esfuma as laterais (ombros cortados) e a base do busto para fundir com o fundo.
const AVATAR_MASK =
  'linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%), linear-gradient(to bottom, #000 78%, transparent 100%)';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="relative z-30 flex justify-between px-6 pt-6 md:px-10 md:pt-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[12vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[12.5vw] md:-mt-5 md:text-[13vw] lg:text-[13.5vw]">
            Oi, sou Wiliam
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="relative z-20">
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            dev full-stack de produto: sistemas inteiros, entregues e no ar
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[340px] sm:translate-y-0 md:w-[360px] lg:w-[420px] xl:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="/img/wiliam-avatar.webp"
              alt="Avatar 3D de Wiliam Bonetti"
              width={1040}
              height={1300}
              className="block h-auto w-full"
              style={{ maskImage: AVATAR_MASK, WebkitMaskImage: AVATAR_MASK, maskComposite: 'intersect', WebkitMaskComposite: 'source-in' }}
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
