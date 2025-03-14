"use strict";

const $formSelect = document.getElementById("formSelect");

$formSelect.addEventListener("submit", (event) => {
  event.preventDefault();

  const respuestas = {
    htero: 0,
    homo: 0,
    psexu: 0,
    queer: 0,
    asexu: 0,
  };

  for (let i = 1; i <= 10; i++) {
    const pregunta = document.getElementById(`pregunta${i === 1 ? "" : i}`);
    if (pregunta && pregunta.value) {
      respuestas[pregunta.value]++;
    } else {
      console.warn(`Pregunta ${i} no fue contestada.`);
    }
  }

  let atraccionPrincipal = "";
  let maxQuestion = 0;

  for (const [key, value] of Object.entries(respuestas)) {
    if (value > maxQuestion) {
      maxQuestion = value;
      atraccionPrincipal = key;
    }
  }

  if (atraccionPrincipal) {
    const resultado = {
      htero: "Heterosexual",
      homo: "Homosexual (gay / lesbiana)",
      psexu: "Pansexual",
      queer: "Queer o no binario",
      asexu: "Asexual",
    }[atraccionPrincipal];

    alert(`Tu tendencia sexual predominante es: ${resultado}`);
  } else {
    alert(
      "No se pudo determinar tu orientacion. Por favor, responde todas las preguntas"
    );
  }

  console.log("Respuestas:", respuestas);
  console.log("Atracciòn Principal:", atraccionPrincipal);
});
