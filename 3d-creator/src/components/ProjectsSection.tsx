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
  /** Sem href, o card não mostra o botão "Ver no ar" (sistema privado). */
  href?: string;
  /** 3 imagens: duas à esquerda e uma alta à direita; 2: uma de cada lado; 1: largura total. */
  images?: { src: string; alt: string }[];
  /** Usado no lugar das imagens quando o projeto não pode ter prints. */
  features?: { title: string; text: string }[];
  privateNote?: string;
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
    name: 'Dosimetria de Risco de Lesões',
    category: '2T · saúde esportiva',
    description:
      'Fisioterapeutas e preparadores físicos medem o risco de lesão de cada atleta: cinco frentes viram um score em quatro níveis, com evolução entre avaliações e laudo em PDF com a marca da clínica e análise por IA.',
    privateNote: 'Sem prints: dados de saúde de atletas',
    features: [
      { title: 'Histórico de lesões', text: 'Lesões anteriores do atleta entram como peso no score de risco.' },
      { title: 'Biomecânica funcional', text: 'Agachamento, avanço e agachamento lateral.' },
      { title: 'Mobilidade articular', text: 'Poplíteo, quadril, dorsiflexão e teste de Thomas.' },
      { title: 'Y-Balance e desempenho', text: 'Equilíbrio dinâmico, salto, sprint, prancha lateral e 1RM.' },
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
    name: 'Análise de Desempenho 2T',
    category: '2T · performance',
    description:
      'A 2T sobe a planilha de testes físicos do MyJump e o sistema monta o relatório na hora: evolução entre avaliações, ranking por métrica e PDF com análise por IA. Prints com atletas fictícios.',
    href: 'https://analise2t.wbonetti.com.br',
    images: [
      { src: img('an-home'), alt: 'Tela inicial da Análise de Desempenho 2T com a área para enviar a planilha do MyJump.' },
      { src: img('an-absoluto'), alt: 'Ranking de desempenho absoluto dos atletas em uma métrica, com faixas de ótimo a ruim.' },
      { src: img('an-evolucao'), alt: 'Comparativo de evolução entre a primeira e a segunda avaliação de um atleta, em barras por métrica.' },
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
  {
    name: 'Plataforma de consultas de crédito',
    category: 'Crédito · sistema privado',
    description:
      'Gateway de consultas de crédito e cadastro, mantido numa única base de código e instalado com a marca de cada cliente.',
    privateNote: 'Sigiloso: sem prints e sem nomes de clientes',
    features: [
      { title: 'Acesso e segurança', text: 'Login com JWT, autenticação em duas etapas (TOTP) e passkeys (WebAuthn), com permissões por perfil.' },
      { title: 'Cobrança', text: 'Planos, franquias e saldo por cliente, faturas, boletos, notas fiscais e régua de cobrança.' },
      { title: 'Relatórios', text: 'Laudos e faturas em PDF com JasperReports, e um serviço em Node com Puppeteer que transforma páginas React em PDF.' },
      { title: 'Integrações', text: 'Consultas a diversas fontes de dados, filas com RabbitMQ, envio de e-mail e trilha de auditoria com Hibernate Envers.' },
    ],
  },
  {
    name: 'Kazza com K',
    category: 'Casa · loja Nuvemshop',
    description:
      'Loja virtual de jogos americanos, bordados e peças para servir: vitrine por categoria, cupom de primeira compra e atendimento pelo WhatsApp. Montada na Nuvemshop, onde sou parceiro.',
    href: 'https://kazzacomk.com.br',
    images: [
      { src: img('kz-cat'), alt: 'Vitrine de categorias da Kazza com K: natal, jogos americanos, bordados, guardanapos, para servir, cozinha e banho.' },
      { src: img('kz-mobile'), alt: 'Loja Kazza com K aberta no celular.' },
      { src: img('kz-home'), alt: 'Página inicial da loja Kazza com K, com o nome da marca sobre uma mesa posta.' },
    ],
  },
  {
    name: 'Pati Home',
    category: 'Casa · loja Nuvemshop',
    description:
      'Loja virtual de produtos de limpeza, lavanderia e organização: catálogo por linha, mais vendidos, parcelamento e envio para todo o Brasil. Montada na Nuvemshop, onde sou parceiro.',
    href: 'https://patihome.com.br',
    images: [
      { src: img('pt-prod'), alt: 'Grade de mais vendidos da Pati Home com esponjas, panos e produtos de limpeza.' },
      { src: img('pt-mobile'), alt: 'Loja Pati Home aberta no celular.' },
      { src: img('pt-home'), alt: 'Página inicial da Pati Home com o banner do rodo de silicone.' },
    ],
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
          {project.href ? (
            <LiveProjectButton href={project.href} />
          ) : (
            project.privateNote && (
              <span className="rounded-full border-2 border-dashed border-[#D7E2EA]/50 px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 sm:text-sm">
                {project.privateNote}
              </span>
            )
          )}
        </div>

        {project.images?.length ? (
          <ProjectImages images={project.images} />
        ) : (
          project.features && <ProjectFeatures features={project.features} />
        )}
      </motion.article>
    </div>
  );
}

const TOP_H = 'clamp(130px, 16vw, 230px)';
const BOTTOM_H = 'clamp(160px, 22vw, 340px)';
const FULL_H = `calc(${TOP_H} + ${BOTTOM_H} + 1rem)`;

function Shot({ image, height, className = '' }: { image: NonNullable<Project['images']>[number]; height?: string; className?: string }) {
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

function ProjectFeatures({ features }: { features: NonNullable<Project['features']> }) {
  return (
    <div
      className={`grid content-center gap-6 border-2 border-[#D7E2EA]/15 bg-[#141414] p-6 sm:grid-cols-2 sm:gap-8 sm:p-10 md:p-14 ${RADIUS}`}
      style={{ minHeight: FULL_H }}
    >
      {features.map((f) => (
        <div key={f.title} className="flex flex-col gap-2 border-t border-[#D7E2EA]/25 pt-4">
          <h4 className="font-medium uppercase tracking-wide text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.4rem)' }}>
            {f.title}
          </h4>
          <p className="text-sm font-light leading-relaxed text-[#D7E2EA]/60 sm:text-base">{f.text}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectImages({ images }: { images: NonNullable<Project['images']> }) {
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
          <span className="font-medium text-[#D7E2EA]">Também entregue, sem prints:</span> o Achei Grupo, produto
          próprio: diretório de grupos de WhatsApp e Telegram com divulgação por Pix, destaque pago e anúncios.
        </p>
      </FadeIn>
    </section>
  );
}
