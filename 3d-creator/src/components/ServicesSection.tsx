import FadeIn from './FadeIn';

const SERVICES = [
  {
    name: 'Sistemas sob medida',
    description:
      'API, banco de dados e regras de negócio feitos para o seu processo, com login seguro, permissões por perfil e deploy incluso.',
  },
  {
    name: 'Sites e lojas',
    description:
      'Sites rápidos e lojas com vitrine filtrável e pedido fechado no WhatsApp, prontos para o celular e fáceis de atualizar.',
  },
  {
    name: 'Painéis administrativos',
    description:
      'Painéis para cadastrar produtos, partidas ou clientes, acompanhar resultados e gerar relatórios e laudos em PDF.',
  },
  {
    name: 'Integrações',
    description:
      'Conexão com fontes de dados, frete, e-mail, filas e WhatsApp, para o sistema conversar com as ferramentas que você já usa.',
  },
  {
    name: 'IA aplicada',
    description:
      'IA onde o problema pede: detecção em imagens de drone com YOLO e análises escritas com OpenAI dentro do próprio sistema.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Serviços
      </h2>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.name} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 py-8 text-[#0C0C0C] sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span className="shrink-0 font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
