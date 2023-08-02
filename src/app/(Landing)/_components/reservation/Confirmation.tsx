import Btn from '@/app/_components/Btn';
import useCitaStore from '@/citas/useCitaStore';
import React, { Dispatch, SetStateAction } from 'react';
import { shallow } from 'zustand/shallow';

function Confirmation({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const { nombre, telefono, servicio, costo, fecha, hora } = useCitaStore(
    state => ({
      nombre: state.nombre,
      telefono: state.telefono,
      servicio: state.servicio,
      costo: state.costo,
      fecha: state.fecha,
      hora: state.hora,
    }),
    shallow
  );

  return (
    <>
      <div className="bg-main-dark text-zinc-50 my-3 px-8 py-2 rounded-xl space-y-3">
        <Row label="Nombre:" value={nombre} />
        <Row label="Telefono:" value={telefono} />
        <Row label="Servicio:" value={servicio} />
        <Row label="Costo:" value={costo} />
        <Row label="Fecha:" value={fecha} />
        <Row label="Hora:" value={hora} />
      </div>
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

export default Confirmation;

function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="text-xs font-bold">{label}</p>
      <p className="text-md font-normal">{value}</p>
    </div>
  );
}
