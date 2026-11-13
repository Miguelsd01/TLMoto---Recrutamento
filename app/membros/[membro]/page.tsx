import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as motion from "motion/react-client";
import { membros } from "../../data/membros";

export const instant = false;

export function generateStaticParams() {
  return Object.keys(membros).map((membro) => ({ membro }));
}

export default async function PaginaMembro({
  params,
}: {
  params: Promise<{ membro: string }>;
}) {
  const { membro } = await params;
  const pessoa = membros[membro as keyof typeof membros];

  if (!pessoa) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-clip bg-slate-950 px-4 py-8 text-white sm:px-8 sm:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.20),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <Link
          href="/#equipa"
          className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        >
          <span aria-hidden="true">←</span> Voltar à equipa
        </Link>

        <motion.section
          className="mt-8 grid items-center gap-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-blue-950/20 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-10"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Image
            src={pessoa.imagem}
            alt={`Fotografia de ${pessoa.nome}`}
            width={240}
            height={240}
            priority
            className="mx-auto h-40 w-40 rounded-full border-4 border-blue-500 object-cover shadow-lg shadow-blue-500/20 sm:mx-0 sm:h-52 sm:w-52"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Equipa TLMoto
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
              Sou o {pessoa.nome}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {pessoa.sobre}
            </p>
          </div>
        </motion.section>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.section
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-8"
            initial={{ y: 18 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-blue-400">Hobbies e interesses</h2>
            <p className="mt-4 leading-7 text-slate-300">{pessoa.hobbies}</p>
          </motion.section>

          <motion.section
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-8"
            initial={{ y: 18 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-blue-400">O que espero aprender</h2>
            <p className="mt-4 leading-7 text-slate-300">{pessoa.aprender}</p>
          </motion.section>
        </div>

        <motion.section
          className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-8"
          initial={{ y: 18 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-blue-400">Projetos</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {pessoa.projetos.map((projeto, index) => (
              <li
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 leading-7 text-slate-300"
              >
                {projeto}
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </main>
  );
}
