import { Github, Linkedin, Mail } from 'lucide-react';
import ContactButton, { EMAIL } from './ContactButton';
import FadeIn from './FadeIn';

const LINKS = [
  { label: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail, external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wiliam-bonetti/', Icon: Linkedin, external: true },
  { label: 'GitHub', href: 'https://github.com/wbonetti', Icon: Github, external: true },
];

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="relative z-10 flex flex-col items-center gap-10 px-5 pb-10 pt-20 text-center sm:px-8 sm:pt-28 md:gap-14 md:px-10 md:pt-36"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contato
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p
          className="max-w-[560px] font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        >
          A próxima entrega pode ser a sua. Me conte o que você precisa e o prazo que tem em mente. Respondo por{' '}
          <span className="whitespace-nowrap">e-mail</span>.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <ContactButton />
      </FadeIn>

      <FadeIn delay={0.4} className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {LINKS.map(({ label, href, Icon, external }) => (
          <a
            key={href}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener' } : {})}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-base"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {label}
          </a>
        ))}
      </FadeIn>

      <footer className="mt-10 flex w-full flex-wrap justify-between gap-2 border-t border-[#D7E2EA]/15 pt-6 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
        <span>&copy; 2026 Wiliam Bonetti</span>
        <span>Dev full-stack de produto</span>
      </footer>
    </section>
  );
}
