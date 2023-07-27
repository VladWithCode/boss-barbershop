import { NextResponse, type NextRequest } from 'next/server';
import Cita from './Cita';
import type { TCita } from './Cita';

export async function createCita(data: TCita) {
  const cita = new Cita(data);

  const savedCita = await cita.save();

  return savedCita._id;
}

export async function getCitaById(citaId: string) {
  const foundCita = await Cita.findById(citaId).lean();

  if (!foundCita)
    return NextResponse.json(
      {
        message: 'No se encontro cita con el id: ' + citaId,
      },
      { status: 404 }
    );

  return NextResponse.json({
    cita: foundCita,
  });
}
