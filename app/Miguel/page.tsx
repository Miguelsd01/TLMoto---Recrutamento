
import Link from "next/link";
import Image from "next/image";

export default function Miguel() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">

      <div className="max-w-3xl mx-auto mt-12">
        <h1 className="text-4xl font-bold">
          Olá! Sou o Miguel
        </h1>

        <Image
          src="/miguel.jpg"
          alt="Fotografia do Miguel"
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
            Sou o Miguel, tenho 18 anos, sou de Portimão e estou no primeiro ano em Engenharia Informática e de Computadores no Tagus.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Hobbies e interesses
          </h2>
          <p className="mt-3">
            Gosto de tecnologia e inovação, música, aprender novas coisas, convívio e exploração de mota.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Projetos
          </h2>
          <ul className="mt-3 list-disc space-y-3 pl-6">
            <li>
            Quantum Trace – JunctionX Hackathon: focado na rastreabilidade e segurança da informação através de tecnologia quântica.
            </li>
            <li>
            Projetos de programação – CS50: projetos desenvolvidos em C, envolvendo algoritmos, estruturas de dados, manipulação de ficheiros e gestão de memória.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            O que espero aprender
          </h2>
          <p className="mt-3">
            Espero aprender novas competências técnicas, desnvolvendo projetos práticos, trabalhar em equipa, enfrentar desafios e contactar com diferentes áreas de conhecimento.
          </p>
        </section>

      </div>
    </main>
  );
}
