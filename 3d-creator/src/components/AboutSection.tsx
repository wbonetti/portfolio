import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

const STATS = [
  {
    value: '6',
    label: 'entregas',
    className: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] items-start text-left',
    delay: 0.1,
    x: -80,
  },
  {
    value: '2013',
    label: 'ano de início',
    className: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] items-start text-left',
    delay: 0.25,
    x: -80,
  },
  {
    value: '4',
    label: 'no ar',
    className: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] items-end text-right',
    delay: 0.15,
    x: 80,
  },
  {
    value: 'MCSA',
    label: 'Web Applications',
    className: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] items-end text-right',
    delay: 0.3,
    x: 80,
  },
];

const ABOUT_TEXT =
  'Programo desde 2013 e trabalho com C# .NET desde 2018, hoje num sistema tributário da Secretaria da Fazenda de SC. Fora dele, faço sistemas inteiros, do banco de dados ao deploy: API, painel, site e integrações, com IA quando o problema pede. Me conte o que você precisa e o prazo que tem em mente!';

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {STATS.map(({ value, label, className, delay, x }) => (
        <FadeIn
          key={label}
          delay={delay}
          x={x}
          y={0}
          duration={0.9}
          className={`pointer-events-none absolute flex flex-col ${className}`}
        >
          <span
            className="hero-heading font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 5.5rem)' }}
          >
            {value}
          </span>
          <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">{label}</span>
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Sobre mim
            </h2>
          </FadeIn>
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <ContactButton />
      </div>
    </section>
  );
}
