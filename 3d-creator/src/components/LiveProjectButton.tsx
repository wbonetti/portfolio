import { ArrowUpRight } from 'lucide-react';

export default function LiveProjectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Ver no ar
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </a>
  );
}
