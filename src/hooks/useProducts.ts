import { useState, useEffect } from 'react';
import type { Produto } from '../types/produto';

const API_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const useProducts = () => {
  // utiliza como tipo um array de produtos, definido em types/
  const [products, setProducts] = useState<Produto[]>();
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, []); // array vazio garante que o fetch ocorra apenas uma vez

  return { products, loading, error };
};