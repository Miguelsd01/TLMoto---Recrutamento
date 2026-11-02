
import Link from "next/link";

type CardProps = {
  nome: string;
  descricao: string;
  link: string;
};

export default function Card({ nome, descricao, link }: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-blue-500">

      <h3 className="text-2xl font-bold">
        {nome}
      </h3>

      <p className="mt-3 text-slate-400">
        {descricao}
      </p>

      <Link
        href={link}
        className="mt-6 inline-block font-semibold text-blue-400 hover:text-blue-300"
      >
        {`Ver mais sobre ${nome} →`}
      </Link>
    </div>
  );
}
