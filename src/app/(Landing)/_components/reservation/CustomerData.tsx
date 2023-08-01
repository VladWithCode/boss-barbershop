import Btn from '@/app/_components/Btn';
import React, { Dispatch, SetStateAction } from 'react';

function CustomerData({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      <form className="bg-main-dark text-zinc-50 rounded-xl my-3 py-5 px-8 space-y-3">
        <Input label="Nombre" id="nombre" type="text" />
        <Input label="Telefono" id="telefono" type="tel" />
      </form>
      <div className="flex justify-between py-2">
        <Btn type="button" onClick={() => setStep(prev => prev - 1)}>
          Volver
        </Btn>
        <Btn type="button" onClick={() => setStep(prev => prev + 1)}>
          Siguiente
        </Btn>
      </div>
    </>
  );
}

export default CustomerData;

function Input({
  label,
  id,
  type,
}: {
  label: string;
  id: string;
  type: string;
}) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="nombre" className="text-sm font-bold">
        {label}
      </label>
      <input
        type={type}
        className="bg-zinc-50 border-b-2 border-white text-md p-2 outline-none bg-opacity-0 focus:bg-opacity-20"
        name={id}
        id={id}
      />
    </div>
  );
}
