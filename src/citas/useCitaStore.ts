import { create } from 'zustand';

type TCitaFields = typeof INITIAL_CITA_STATE;

type TCitaState = TCitaFields & {
  setField: <K extends keyof TCitaFields>(
    field: K, 
    value: TCitaFields[K]
  ) => void;
  resetState: () => void;
};

const INITIAL_CITA_STATE = {
  name: '',
  telefono: '',
  hora: '',
  fecha: '',
  servicio: '',
  costo: 0,
  descuento: 0,
  metodo_pago: 'efectivo', // 'efectivo' | 'tarjeta'
};

const useCitaStore = create<TCitaState>(set => ({
  ...INITIAL_CITA_STATE,

  setField: (field, value) =>
    set(() => ({ [field]: value })),

  resetState: () => set(INITIAL_CITA_STATE),
}));

export default useCitaStore;
