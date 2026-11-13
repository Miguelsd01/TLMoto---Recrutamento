"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

type CardProps = {
  nome: string;
  descricao: string;
  link: string;
  imagem: string;
};

export default function Card({ nome, descricao, link, imagem }: CardProps) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 hover:border-blue-400 hover:shadow-[0_0_24px_rgba(96,165,250,0.25)]"
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={link}
        className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
      >
        <Image
          src={imagem}
          alt={`Fotografia de ${nome}`}
          width={200}
          height={200}
          className="mb-5 h-24 w-24 rounded-full border-4 border-blue-500 object-cover"
        />
        
        <h3 className="text-2xl font-bold">{nome}</h3>
        <p className="mt-3 text-slate-400">{descricao}</p>
        <span className="mt-6 inline-block font-semibold text-blue-400">
          {`Ver mais sobre ${nome} →`}
        </span>
      </Link>
    </motion.div>
  );
}
