import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-14 border-b border-slate-800 bg-slate-900 px-3 sm:px-6">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between gap-2">

        <Link href="/" className="flex h-full min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/tlmoto-logo.png"
            alt="Logótipo da TLMoto"
            width={300}
            height={300}
            className="h-11 w-auto shrink-0 sm:h-14"
          />
          <span className="whitespace-nowrap text-sm font-bold text-blue-400 sm:text-xl">
            A Nossa Equipa
          </span>
        </Link>

        <div className="flex shrink-0 gap-2 text-xs sm:gap-6 sm:text-base">
          <Link href="/" className="whitespace-nowrap hover:text-blue-400">
            Início
          </Link>

          <Link href="/membros/pedro" className="whitespace-nowrap hover:text-blue-400">
            Pedro
          </Link>

          <Link href="/membros/miguel" className="whitespace-nowrap hover:text-blue-400">
            Miguel
          </Link>
        </div>

      </nav>
    </header>
  );
}
