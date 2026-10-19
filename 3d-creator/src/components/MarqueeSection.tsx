import { useEffect, useRef, useState } from 'react';

const SHOTS = [
  'liga-home',
  'an-evolucao',
  'kz-home',
  'wb-vitrine',
  'qgis-plugin',
  'pt-prod',
  'an-absoluto',
  'liga-tabela',
  'livro',
  'kz-cat',
  'wb-home',
  'an-home',
  'pt-home',
  'liga-jogos',
  'qgis-landing',
  'liga-artilharia',
].map((name) => `/img/${name}.webp`);

const ROW_1 = SHOTS.slice(0, 8);
const ROW_2 = SHOTS.slice(8);

function Row({ images, transform }: { images: string[]; transform: string }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div className="flex w-max gap-3" style={{ transform, willChange: 'transform' }}>
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover object-top"
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <Row images={ROW_1} transform={`translateX(${offset - 200}px)`} />
        <Row images={ROW_2} transform={`translateX(${-(offset - 200)}px)`} />
      </div>
    </section>
  );
}
