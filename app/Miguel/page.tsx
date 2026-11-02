
import Link from "next/link";
import Image from "next/image";

export default function Miguel() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10">

      <div className="max-w-3xl mx-auto mt-12">
        <h1 className="text-4xl font-bold">
          Olá! Sou o Miguel 👋
        </h1>

        <Image
          src="/miguel.jpg"
          alt="Fotografia do Miguel"
          width={200}
          height={200}
          className="rounded-full object-cover mt-8 w-48 h-48"
        />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-blue-400">
            Sobre mim
          </h2>
          <p className="mt-3">
            sobre mim
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Hobbies e interesses
          </h2>
          <p className="mt-3">
            hobbies e interesses
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Projetos
          </h2>
          <p className="mt-3">
            projetos
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-blue-400">
            O que espero aprender
          </h2>
          <p className="mt-3">
            o que espero aprender
          </p>
        </section>

      </div>
    </main>
  );
}
