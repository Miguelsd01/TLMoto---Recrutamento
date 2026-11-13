import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Apresentação */}
      <section className="relative overflow-hidden px-5 py-20 text-center sm:px-6 sm:py-24 md:py-32">
        <Image
          src="/banner.png"
          alt="Mota da TLMoto em pista"
          fill
          priority
          className="object-cover opacity-30"
        />

        {/* Degradé para a imagem se fundir com o fundo da página */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />

        {/* Conteúdo por cima da imagem */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Conhece a nossa
            <span className="text-blue-400"> Equipa.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Somos recrutas a fazer uma tarefa para a TLmoto.
          </p>

          <a
            href="#equipa"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-colors hover:bg-blue-500"
          >
            Conhecer a equipa
          </a>
        </div>
      </section>

      {/* Membros */}
      <section id="equipa" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
        <h2 className="mb-6 text-2xl font-bold sm:mb-10 sm:text-3xl">
          Os nossos membros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pedro Dias */}
          <Card
            nome="Pedro Dias"
            descricao="Sou estudante de Engenharia Informática de Computadores no Tagus. Tenho 20 anos e sou natural de Lisboa."
            link="/membros/pedro"
            imagem="/pedro.jpg"
          />

          {/* Miguel */}
          <Card
            nome="Miguel"
            descricao="Sou o Miguel, tenho 18 anos, sou de Portimão e estou no primeiro ano em Engenharia Informática e de Computadores no Tagus."
            link="/membros/miguel"
            imagem="/miguel.jpg"
          />
        </div>
      </section>

    </main>
  );
}
