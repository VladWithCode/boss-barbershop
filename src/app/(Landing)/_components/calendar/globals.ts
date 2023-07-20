export const SQUARE_COUNT = 42;

export const weekdays = {
  0: "Dom",
  1: "Lun",
  2: "Mar",
  3: "Mie",
  4: "Jue",
  5: "Vie",
  6: "Sab",
};

export type TMonth = {
  name: string;
  shortName: string;
  length: number;
};

export const months: {
  [k: number]: TMonth;
} = {
  0: {
    name: "Enero",
    shortName: "Ene",
    length: 31,
  },
  1: {
    name: "Febrero",
    shortName: "Feb",
    length: 28,
  },
  2: {
    name: "Marzo",
    shortName: "Mar",
    length: 31,
  },
  3: {
    name: "Abril",
    shortName: "Abr",
    length: 30,
  },
  4: {
    name: "Mayo",
    shortName: "May",
    length: 31,
  },
  5: {
    name: "Junio",
    shortName: "Jun",
    length: 30,
  },
  6: {
    name: "Julio",
    shortName: "Jul",
    length: 31,
  },
  7: {
    name: "Agosto",
    shortName: "Ago",
    length: 31,
  },
  8: {
    name: "Septiembre",
    shortName: "Sep",
    length: 30,
  },
  9: {
    name: "Octubre",
    shortName: "Oct",
    length: 31,
  },
  10: {
    name: "Noviembre",
    shortName: "Nov",
    length: 30,
  },
  11: {
    name: "Diciembre",
    shortName: "Dic",
    length: 31,
  },
};
