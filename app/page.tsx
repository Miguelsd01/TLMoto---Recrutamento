import Card from "./components/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Apresentação */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold md:text-6xl">
          Conhece a nossa
          <span className="text-blue-400"> Equipa.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Somos recrutas a fazer uma tarefa para a TLmoto.
        </p>

        <a
          href="#equipa"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-colors hover:bg-blue-500"
        >
          Conhecer a equipa
        </a>
      </section>

      {/* Membros */}
      <section id="equipa" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-bold">
          Os nossos membros
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
          {/* Pedro Dias */}
          <Card
            nome="Pedro Dias"
            descricao="Sou estudante de Engenharia Informatica de Computadores no Tagus. Tenho 20 anos e sou natural de Lisboa."
            link="/PedroDias"
          />

          {/* Miguel */}
          <Card
            nome="Miguel"
            descricao="Sou o Miguel, tenho 18 anos, sou de Portimão e estou no primeiro ano em Engenharia Informática e de Computadores no Tagus."
            link="/Miguel"
          />
          </div>
      </section>

    </main>
  );
}
