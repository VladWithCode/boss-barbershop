import { Model, model, models, Schema } from 'mongoose';

export type TCita = {
  usuario_id?: string;
  nombre: string;
  telefono: string;
  hora: string;
  fecha: Date;
  servicio: string;
  costo: number;
  descuento: number;
  tiene_descuento: boolean;
  cantidad_pagada: number;
  metodo_pago: 'efectivo' | 'tarjeta';
  id_pago_tarjeta?: string;
  estatus: 'pendiente' | 'en proceso' | 'terminada' | 'cancelada';
};

const CitaSchema = new Schema<TCita>({
  usuario_id: { type: Schema.Types.ObjectId, ref: 'Usuario' },
  nombre: { type: String, required: true, trim: true },
  telefono: { type: String, required: true, trim: true },
  hora: { type: String, required: true },
  fecha: { type: Date, required: true },
  servicio: { type: String, required: true },
  costo: { type: Number, required: true },
  descuento: { type: Number, default: 0 },
  tiene_descuento: { type: Boolean, default: false },
  cantidad_pagada: { type: Number, required: true },
  metodo_pago: {
    type: String,
    enum: ['efectivo', 'tarjeta'],
    default: 'efectivo',
  },
  id_pago_tarjeta: { type: String },
  estatus: {
    type: String,
    enum: ['pendiente', 'en proceso', 'terminada', 'cancelada'],
		default: 'pendiente'
  },
});

const Cita = (models.Cita as Model<TCita>) || model<TCita>('Cita', CitaSchema);

export default Cita;
