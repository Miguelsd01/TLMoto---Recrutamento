
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900 px-6 py-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">

        <Link href="/" className="text-xl font-bold text-blue-400">
          A Nossa Equipa
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
