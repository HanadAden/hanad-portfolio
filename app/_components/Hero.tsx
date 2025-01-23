"use client";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import hanad from "./images/IMG_4928.JPG";
import france from "./images/flag_of_france.png";
import { cn } from "@/lib/utils";
import { TailwindIcon } from "./icons/TailwindIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";
import { NextJSIcon } from "./icons/NextJSIcon";
import { GraphQLIcon } from "./icons/GraphQLIcon";
import { motion } from "framer-motion";
import { SpringIcon } from "@/app/_components/icons/SpringIcon";
import { NodeIcon } from "@/app/_components/icons/NodeIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"code">) => {
    return (
        <code
            className={cn(
                "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 gap-1 py-0.5 rounded-sm text-primary",
                className
            )}
            {...props}
        />
    );
};

export default function Hero() {
    return (
        <Section className="relative flex max-md:flex-col items-start gap-8 md:flex-row md:items-center">
            {/* Éléments flottants d'arrière-plan */}
            <motion.div
                className="absolute top-10 left-10 w-24 h-24 bg-[hsl(var(--primary))] opacity-30 rounded-full"
                animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-[hsl(var(--secondary))] opacity-30 rounded-full"
                animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

<div className="flex-[2] flex flex-col gap-4 z-10">
    {/* Titre */}
    <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold font-caption text-primary"
    >
        Hello, je suis Hanad.
    </motion.h2>
    <motion.h3
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="text-3xl font-caption"
    >
        Étudiant passionné en cybersécurité.
    </motion.h3>

    <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-base"
    >
        Actuellement en troisième année dans le domaine de la cybersécurité, je développe mes compétences 
        pour protéger les systèmes et les données face aux menaces numériques. Ma curiosité et mon envie 
        d’apprendre me poussent à évoluer constamment dans ce domaine en pleine transformation.
    </motion.p>
</div>


            {/* Image de profil */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex-1 m-auto z-10"
            >
               <Image
    src={hanad}
    alt="Photo de profil de Hanad"
    className="rounded-full transform hover:scale-105 transition-transform duration-500"
    layout="responsive"
    width={300} // Largeur par défaut
    height={300} // Hauteur par défaut
    priority
/>

            </motion.div>
        </Section>
    );
}
