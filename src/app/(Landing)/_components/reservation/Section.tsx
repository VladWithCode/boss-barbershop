"use client";
import React, { useState } from "react";
import Calendar from "./Calendar";

const CitaStepComponents = [
  <Calendar key={0} />,

]

function Section() {
  const [step, setStep] = useState(0);
  
  return (
    <section className="text-main-dark bg-zinc-300 px-5">
      <h1 className="text-xl font-semibold uppercase text-center py-5">
        Agenda tu cita
      </h1>
      <p className="text-md font-normal text-justify w-[32ch] mx-auto">
        Para comenzar selecciona una fecha disponible en el calendario y a
        continuación la hora en que te gustaria ser atendido
      </p>
      {/* Calendar */}
      <Calendar />
      {
        
      }
    </section>
  );
}

export default Section;
