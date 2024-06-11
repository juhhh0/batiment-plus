import Button from "@/components/ui/Button";
import { getGlobalsData } from "@/data/data";
import React from "react";

export default async function page() {
    const globalsData = await getGlobalsData();
  return (
    <main className="mx-auto max-w-5xl py-20 px-5">
      <section className="">
        <h2 className="font-secondary font-semibold mb-5">
          Contactez Nous
        </h2>
        <p className="mb-5">
          Vous souhaitez obtenir des renseignements complémentaires sur notre
          activité, des informations pour votre projet de construction ou de
          rénovation, n’hésitez pas à nous contacter via le formulaire
          ci-dessous.
        </p>
        <form action="" className="flex flex-col gap-4 mb-5">
          <div className="flex-col flex">
            <label htmlFor="">Prénom</label>
            <input type="text" />
          </div>
          <div className="flex-col flex">
            <label htmlFor="">Mail</label>
            <input type="text" />
          </div>
          <div className="flex-col flex">
            <label htmlFor="">Message</label>
            <input type="text" />
          </div>
            <Button label="Envoyer"/>
        </form>
        <h3 className="py-5 font-secondary font-semibold">
          Nos Coordonnées
        </h3>
        <article className="flex items-center gap-4">
          <img className="w-20" src={"http://localhost:1337" + globalsData?.globals.logo.data.attributes.url} alt="" />
          <ul className="flex flex-col">
            <li>
              <span className="font-semibold">Adresse : </span>{globalsData?.globals.adress}
            </li>
            <li>
              <span className="font-semibold">Email : </span>{globalsData?.globals.email}
            </li>
            <li>
              <span className="font-semibold">Téléphone : </span>{globalsData?.globals.phone}
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
