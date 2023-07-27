import { createCita } from '@/citas/service';
import { getDBConnection } from '@/db';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const [connectError] = await getDBConnection();

  if (connectError)
    return NextResponse.json({
      message: 'Error al conectarse a la base de datos',
    });

  const data = await req.json();

  try {
    const id = await createCita(data);

    return NextResponse.json({
      id,
    });
  } catch (e) {
    return NextResponse.json({
      message: 'Error al guardar la cita',
      error: e,
    });
  }
}
