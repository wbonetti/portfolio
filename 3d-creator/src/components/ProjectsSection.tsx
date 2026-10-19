import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionStyle, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const img = (name: string) => `/img/${name}.webp`;

interface Project {
  name: string;
  category: string;
  description: string;
  href: string;
  /** 3 imagens: duas à esquerda e uma alta à direita; 2: uma de cada lado; 1: largura total. */
  images: { src: string; alt: string }[];
}

const PROJECTS: Project[] = [
  {
    name: 'Campeonato 2T',
    category: '2T · esporte',
    description:
      'Site oficial do campeonato: jogos, tabela, artilharia e notícias atualizados durante a rodada, sobre a LigaPro, a plataforma de campeonatos que construí.',
    href: 'https://liga-pro-api.vercel.app/liga-2t',
    images: [
      { src: img('liga-tabela'), alt: 'Tabela de classificação do Campeonato 2T com pontos, saldo e cartões.' },
      { src: img('liga-artilharia'), alt: 'Ranking de artilharia do Campeonato 2T.' },
      { src: img('liga-home'), alt: 'Página inicial do Campeonato 2T com o último resultado, os jogos da rodada e a classificação.' },
    ],
  },
  {
    name: 'WB Shoes',
    category: 'Varejo',
    description:
      'Loja de tênis com vitrine filtrável por gênero e marca, várias fotos e numerações por modelo, pedido fechado no WhatsApp e painel administrativo.',
    href: 'https://wbshoes.vercel.app',
    images: [
      { src: img('wb-vitrine'), alt: 'Vitrine da WB Shoes com filtros por gênero e marca e a grade de tênis com preços.' },
      { src: img('wb-mobile'), alt: 'WB Shoes aberta no celular.' },
      { src: img('wb-home'), alt: 'Página inicial da WB Shoes com os modelos em destaque.' },
    ],
  },
  {
    name: 'Aplicação de Precisão',
    category: 'Agro · IA',
    description:
      'Plugin de QGIS que lê o ortomosaico do drone, encontra plantas daninhas com YOLO e gera o mapa de prescrição para aplicar só onde precisa.',
    href: 'https://precision-agriculture-one.vercel.app',
    images: [
      { src: img('qgis-landing'), alt: 'Landing page do plugin Aplicação de Precisão com o mapa da lavoura.' },
      { src: img('qgis-plugin'), alt: 'QGIS com o plugin aplicado: grade de infestação e polígonos de prescrição sobre a lavoura.' },
    ],
  },
  {
    name: 'O Diabo é Não Viver',
    category: 'Deivid Freitas · editorial',
    description:
      'Página de vendas e fluxo de compra do livro, com página de obrigado e frete calculado pela Melhor Envio.',
    href: 'https://livro-o-diabo-e-nao-viver.vercel.app',
    images: [{ src: img('livro'), alt: 'Landing page do livro O Diabo é Não Viver, com a capa, o título e os botões de compra.' }],
  },
];

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const { images } = project;

  return (
    <div className="h-[85vh]">
      <motion.article
        className={`sticky top-[calc(6rem+var(--card-offset))] origin-top border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:top-[calc(8rem+var(--card-offset))] md:p-8 ${RADIUS}`}
        style={{ scale, '--card-offset': `${index * 28}px` } as MotionStyle}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex max-w-xl flex-col gap-1">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </h3>
              <p className="hidden text-sm font-light leading-relaxed text-[#D7E2EA]/60 md:block">
                {project.description}
              </p>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <ProjectImages images={images} />
      </motion.article>
    </div>
  );
}

const TOP_H = 'clamp(130px, 16vw, 230px)';
const BOTTOM_H = 'clamp(160px, 22vw, 340px)';
const FULL_H = `calc(${TOP_H} + ${BOTTOM_H} + 1rem)`;

function Shot({ image, height, className = '' }: { image: Project['images'][number]; height?: string; className?: string }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className={`w-full object-cover object-top ${RADIUS} ${className}`}
      style={height ? { height } : undefined}
    />
  );
}

function ProjectImages({ images }: { images: Project['images'] }) {
  if (images.length === 1) return <Shot image={images[0]} height={FULL_H} />;

  const tall = images[images.length - 1];
  const left = images.slice(0, -1);

  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
        {left.length === 2 ? (
          <>
            <Shot image={left[0]} height={TOP_H} />
            <Shot image={left[1]} height={BOTTOM_H} />
          </>
        ) : (
          <Shot image={left[0]} height={FULL_H} />
        )}
      </div>
      <div className="w-[60%]">
        <Shot image={tall} className="h-full" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="entregas"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Entregas
        </h2>
      </FadeIn>

      <div ref={ref} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <FadeIn className="mx-auto mt-16 max-w-3xl text-center text-[#D7E2EA]/70 sm:mt-20">
        <p className="font-light leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}>
          <span className="font-medium text-[#D7E2EA]">Também entregues, sem prints por sigilo:</span> Dosimetria de
          Risco de Lesões (avaliação de atletas com laudo em PDF e análise por IA) e uma plataforma de consultas de
          crédito instalada com a marca de cada cliente.
        </p>
      </FadeIn>
    </section>
  );
}
