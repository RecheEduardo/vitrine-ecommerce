import { useState } from 'react';
import type { Produto } from '../types/produto';

export const useProducts = () => {
  const [products, setProducts] = useState<Produto[]>();
  const [error, setError] = useState<string | null>(null);

  // logica de fetching assincriona
  // TODO: tratar estado de loading futuramente

  return { products, error };
};