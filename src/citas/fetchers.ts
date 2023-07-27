import { useQuery } from '@tanstack/react-query';

type CitaFilters = {
  fecha: string;
  horario: string;
  usuario: string;
  servicio: string;
};

// Keys
const keys = {
  all: () => ['citas'],
  lists: () => [...keys.all(), 'list'],
  list: ({ filters }: { filters: CitaFilters }) => [
    ...keys.lists(),
    { ...filters },
  ],
  details: () => [...keys.all(), 'detail'],
  detail: (id: string) => [...keys.details(), id],
};

export const CitasKeys = keys;

// Fetchers
/**
 * Object that holds URL constructors
 * for each type of request
 */
const paths: { [key: string]: (...args: any[]) => string } = {
  list: (filters: CitaFilters) =>
    `/?${Object.entries(filters)
      .filter(([, value]) => value.length !== 0)
      .map(([filter, value]) => `${filter}=${value}`)
      .join('&')}`,
  detail: id => `/${id}`,
};

async function fetcher({ queryKey }: { queryKey: any[] }) {
  const [, type, params] = queryKey;

  const response = await fetch('/api/citas' + paths[type](params));
  const data = await response.json();

  if (!response.ok)
    throw new Error(
      data.message || 'Ocurrio un error al conectar con el servidor'
    );

  return data;
}

// Queries
export function useCita(id: string) {
  return useQuery(keys.detail(id), fetcher);
}
