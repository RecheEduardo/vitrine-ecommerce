import { useState, useEffect } from 'react';
import type { Produto } from '../types/produto';

// configurando acesso da api via .env em produção
const API_URL = import.meta.env.VITE_API_URL;

export const useProducts = () => {
  
  // assegura que a resposta do JSON é realmente um array de produtos
  const [products, setProducts] = useState<Produto[]>();

  // handling de carregamento e de erro com os blocos assincronos
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('ERRO! Falha ao buscar produtos...');
        }

        const data = await response.json();
        setProducts(data.products);
      
      } catch (err) {

        if (err instanceof Error) {
          setError(err.message);
        } else { // erro externo ou indefinido
          setError('Um erro desconhecido ocorreu!');
        }

      } finally { // bloco utilizado com condicional para futuros loaders
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 
  // a condicao do useEffect é [] para garantir que a chamada  
  // aconteca apenas na renderização do site  
  
  return { products, loading, error };
}