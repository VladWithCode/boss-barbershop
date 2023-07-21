import { model, models, Schema } from 'mongoose';

const CitaSchema = new Schema({
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
	metodo_pago: { type: String, enum: ['efectivo', 'tarjeta'] },
	id_pago_tarjeta: { type: String },
	estatus: {
		type: String,
		enum: ['pendiente', 'en proceso', 'terminada', 'cancelada'],
	},
});

const Cita = models.Cita || model('Cita', CitaSchema);

export default Cita;
