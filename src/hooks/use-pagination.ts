"use client";

import { useState, useMemo } from "react";
export function usePagination<T>(data: T[], itemsPerPage = 2) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, page, itemsPerPage]);

  function next() {
    setPage((p) => Math.min(p + 1, totalPages));
  }

  function prev() {
    setPage((p) => Math.max(p - 1, 1));
  }

  function goTo(pageNumber: number) {
    setPage(pageNumber);
  }

  return {
    page,
    totalPages,
    currentData,
    next,
    prev,
    goTo,
  };
}
