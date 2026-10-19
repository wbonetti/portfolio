export const EMAIL = 'wiliam.bonetti@gmail.com';
export const WHATSAPP_URL =
  'https://wa.me/5549999845396?text=Ol%C3%A1%20Wiliam%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20um%20or%C3%A7amento.';

export default function ContactButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      className="inline-block whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Chamar pra orçar
    </a>
  );
}
