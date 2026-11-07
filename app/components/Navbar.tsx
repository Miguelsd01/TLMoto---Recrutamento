import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-14 overflow-hidden border-b border-slate-800 bg-slate-900 px-6">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between">

        <Link href="/" className="flex h-full items-center gap-3">
          <Image
            src="/tlmoto-logo.png"
            alt="Logótipo da TLMoto"
            width={300}
            height={300}
            className="h-24 w-auto"
          />
          <span className="text-xl font-bold text-blue-400">
            A Nossa Equipa
          </span>
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-400">
            Início
          </Link>

          <Link href="/PedroDias" className="hover:text-blue-400">
            Pedro
          </Link>

          <Link href="/Miguel" className="hover:text-blue-400">
            Miguel
          </Link>
        </div>

      </nav>
    </header>
  );
}