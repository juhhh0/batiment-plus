import Button from "@/components/ui/Button";
import Informations from "@/components/ui/Informations";
import Input from "@/components/ui/Input";
import { getGlobalsData } from "@/data/data";
import React from "react";

export default async function page() {
  const globalsData = await getGlobalsData();
  return (
    <main className="mx-auto max-w-5xl px-5">
      <section>
        <h2 className="font-secondary font-semibold">Contactez Nous</h2>
        <p className="mb-5">
          Vous souhaitez obtenir des renseignements complémentaires sur notre
          activité, des informations pour votre projet de construction ou de
          rénovation, n&apos;hésitez pas à nous contacter via le formulaire
          ci-dessous.
        </p>
        <form action="" className="flex flex-col gap-4 mb-5">
          <Input label="Nom" required={true} name="name" type="text" />
          <div className="flex gap-4">
            <Input
              label="Mail"
              required={true}
              name="mail"
              type="email"
              style="flex-1"
            />
            <Input
              label="Téléphone"
              required={false}
              name="phone"
              type="tel"
              style="flex-1"
            />
          </div>
          <Input label="Sujet" required={true} name="subject" type="text" />
          <div className="flex-col flex gap-1">
            <label htmlFor="message">
              Message<span className="text-red-500 mx-1">*</span>
            </label>
            <textarea
              name="message"
              required={true}
              className="min-h-32"
            ></textarea>
          </div>
          <div className="text-xs">
            <span className="text-red-500 mx-1 text-lg leading-3">*</span>Champs
            obligatoires
          </div>
          <Button label="Envoyer" />
        </form>
        <h3 className="font-secondary font-semibold my-8">Nos Coordonnées</h3>
        <article className="flex items-center gap-4">
          <img
            className="w-20"
            src={
              "http://localhost:1337" +
              globalsData?.globals.logo.data.attributes.url
            }
            alt=""
          />
          <Informations data={globalsData?.globals} />
        </article>
      </section>
    </main>
  );
}
