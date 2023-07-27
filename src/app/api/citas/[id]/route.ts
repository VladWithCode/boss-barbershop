import { getCitaById } from "@/citas/service";
import { getDBConnection } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const [connectError] = await getDBConnection();

  if (connectError)
    return NextResponse.json(
      {
        message: "Error al conectarse al base de datos",
      },
      { status: 500 }
    );

  return await getCitaById(id);
}
