import Image from "next/image";

export default function PedroDias() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">

      <div className="max-w-3xl mx-auto mt-12">
        <h1 className="text-4xl font-bold">
          Olá! Sou o Pedro Dias
        </h1>

        <Image
          src="/pedro.jpg"
          alt="Fotografia do Pedro"
          width={200}
          height={200}
          unoptimized
           className="mt-8 h-48 w-48 rounded-full object-cover border-4 border-blue-500"
        />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-blue-400">
            Sobre mim
          </h2>
          <p className="mt-3">
            Sou estudante de Engenharia Informática de Computadores no Tagus. Tenho 20 anos e sou natural de Lisboa.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Hobbies e interesses
          </h2>
          <p className="mt-3">
            Gosto de programação, música e desporto. Faço jujitsu e gosto de voleibol.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Projetos
          </h2>
          <p className="mt-3">
            Não tenho projetos de programação, mas já trabalhei em campos de férias.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            O que espero aprender
          </h2>
          <p className="mt-3">
            Quero melhorar as minhas capacidades em programacão e aprender telemetria.
          </p>
        </section>
      </div>
    </main>
  );
}
