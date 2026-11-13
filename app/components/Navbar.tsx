"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/membros/pedro", label: "Pedro" },
  { href: "/membros/miguel", label: "Miguel" },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="relative z-50 h-16 border-b border-slate-800 bg-slate-900 px-3 text-white sm:px-6">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3"
      >
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/tlmoto-logo.png"
            alt="Logótipo da TLMoto"
            width={300}
            height={300}
            className="h-11 w-auto shrink-0 sm:h-12"
          />
          <span className="whitespace-nowrap text-sm font-bold text-blue-400 sm:text-xl">
            A Nossa Equipa
          </span>
        </Link>

        <div className="hidden h-full items-center gap-2 sm:flex sm:gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-blue-300 ${
                isActive(href) ? "bg-slate-800 text-blue-300" : "text-slate-200"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <details key={pathname} className="group relative sm:hidden">
          <summary
            aria-controls="menu-mobile"
            className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg border border-slate-700 px-3 text-sm font-semibold text-white transition-colors hover:border-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 [&::-webkit-details-marker]:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 group-open:hidden"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="hidden h-5 w-5 group-open:block"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
            <span>Menu</span>
          </summary>

          <div
            id="menu-mobile"
            className="absolute right-0 top-full mt-2 min-w-48 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-xl shadow-black/30"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-blue-300 ${
                  isActive(href) ? "bg-slate-800 text-blue-300" : "text-slate-200"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
