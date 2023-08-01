'use client';
import React, { useState } from 'react';
import Calendar from './Calendar';
import CustomerData from './CustomerData';
import Confirmation from './Confirmation';

const STEP_INSTRUCTIONS = [
  'Para comenzar selecciona una fecha disponible en el calendario y a continuación la hora en que te gustaria ser atendido',
  'Ahora introduce tus datos para agendar la cita',
  'Para finalizar revisa que la información sea correcta y confirma tu cita.',
];

function Section() {
  const [step, setStep] = useState(0);

  return (
    <section className="text-main-dark bg-zinc-300 px-5">
      <h1 className="text-xl font-semibold uppercase text-center py-5">
        Agenda tu cita
      </h1>
      <p className="text-md font-normal text-justify w-[32ch] mx-auto">
        {STEP_INSTRUCTIONS[step]}
      </p>
      {/* Calendar */}
      {step === 0 ? (
        <Calendar setStep={setStep} />
      ) : step === 1 ? (
        <CustomerData setStep={setStep} />
      ) : step === 2 ? (
        <Confirmation setStep={setStep} />
      ) : null}
    </section>
  );
}

export default Section;
