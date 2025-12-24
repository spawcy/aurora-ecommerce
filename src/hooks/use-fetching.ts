"use client";

import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item-interface";
import { useEffect } from "react";
import { useState } from "react";

interface ApiResponse {
  status: number;
  data: ProductPlaceholderItem[] | ProductPlaceholderItem;
}

export function useFetching(apiUrl: string) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl, {
          cache: "no-store",
        });

        if (!response.ok) {
          console.log(`Fetch failed: ${response.status}`);
          // throw new Error(`Fetch failed: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch products");
          console.error(err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  return { data, isLoading, error };
}
