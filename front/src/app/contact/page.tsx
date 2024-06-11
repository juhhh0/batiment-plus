import React from "react";

export default function page() {
  return (
    <main className="mx-auto max-w-5xl py-10 md:py-20">
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
          <div className="button mt-4">
            <button>Envoyer</button>
          </div>
        </form>
        <h3 className="py-5 font-secondary font-semibold">
          Nos Coordonnées
        </h3>
        <article className="flex items-center gap-4">
          <img src="https://picsum.photos/100" alt="" />
          <ul className="flex flex-col">
            <li>
              <span className="font-semibold">Adresse : </span>24 rue de la
              Division Leclerc, Bobigny 93000
            </li>
            <li>
              <span className="font-semibold">Email : </span>contact@batiplus.fr
            </li>
            <li>
              <span className="font-semibold">Téléphone : </span>0739274905
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
