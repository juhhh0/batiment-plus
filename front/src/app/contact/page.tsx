import React from "react";

export default function page() {
  return (
    <main className="mx-auto max-w-5xl py-10 md:py-20">
      <section className="pt-20">
        <h2>Contactez Nous</h2>
        <p className="text-xl">
          Vous souhaitez obtenir des renseignements complémentaires sur notre
          activité, des informations pour votre projet de construction ou de
          rénovation, n’hésitez pas à nous contacter.
        </p>
        <form action="">
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
          <button className="button mt-8"> Envoyer </button>
        </form>
        <h3>Nos coordonnées</h3>
        <article className="flex">
          <img src="https://picsum.photos/100" alt="" />
          <div className="flex flex-col">
            <span>Adresse : 24 rue de la Division Leclerc, Bobigny 93000</span>
            <span>Email : contact@batiplus.fr</span>
            <span>Téléphone : 0739274905</span>
          </div>
        </article>
      </section>
    </main>
  );
}
