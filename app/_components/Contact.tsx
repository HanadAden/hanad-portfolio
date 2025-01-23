"use client";
import { Section } from "@/app/_components/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/app/_components/icons/LinkedInIcon";
import { GithubIcon } from "@/app/_components/icons/GithubIcon";

export default function Contact() {
    return (
        <Section className="flex flex-col items-center justify-center" id="contact">
            <h1 className="text-5xl font-extrabold text-primary mb-8 tracking-tight">
                Connectons-nous
            </h1>
            <div className="space-y-5 text-center text-lg">
                <p className="text-foreground">
                    Si vous souhaitez me contacter, veuillez m&apos;envoyer un e-mail à{" "}
                    <a
                        href="mailto:Hanad.aden00@gmail.com"
                        className={cn(buttonVariants({ variant: "link" }), "text-primary font-semibold hover:underline")}
                    >
Hanad.aden00@gmail.com                    </a>
                </p>
                <p className="text-foreground">
                    Ou vous pouvez me joindre sur:
                </p>
                <div className="flex space-x-4 justify-center">
                    <a
                  href="https://www.linkedin.com/in/hanad-moussa-aden-b1a6aa1a6/"
                  className={cn(buttonVariants({ variant: "outline" }), "p-2")}
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedInIcon size={20} className="text-primary" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                  href="https://github.com/HanadAden"
                  className={cn(buttonVariants({ variant: "outline" }), "p-2")}
                        aria-label="GitHub Profile"
                    >
                        <GithubIcon size={20} className="text-primary" />
                        <span className="sr-only">GitHub</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};
