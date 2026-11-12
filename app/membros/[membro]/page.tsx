
import Image from "next/image";
import { notFound } from "next/navigation";
import { membros } from "../../data/membros";
export const instant = false;

export function generateStaticParams() {
  return Object.keys(membros).map((membro) => ({
    membro,
  }));
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
    <main className="min-h-screen bg-slate-900 p-10 text-white">
      <div className="mx-auto mt-12 max-w-3xl">
        <h1 className="text-4xl font-bold">
          Olá! Sou o {pessoa.nome}
        </h1>

        <Image
          src={pessoa.imagem}
          alt={`Fotografia de ${pessoa.nome}`}
          width={200}
          height={200}
          className="mt-8 h-48 w-48 rounded-full border-4 border-blue-500 object-cover"
        />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-blue-400">
            Sobre mim
          </h2>
          <p className="mt-3">{pessoa.sobre}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Hobbies e interesses
          </h2>
          <p className="mt-3">{pessoa.hobbies}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Projetos
          </h2>
          <ul className="mt-3 list-disc space-y-3 pl-6">
            {pessoa.projetos.map((projeto, index) => (
              <li key={index}>{projeto}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            O que espero aprender
          </h2>
          <p className="mt-3">{pessoa.aprender}</p>
        </section>
      </div>
    </main>
  );
}
