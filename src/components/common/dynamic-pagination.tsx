"use client";

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";

export default function DynamicPagination({ page, totalPages, goTo, next, prev }: { page: number; totalPages: number; goTo: (page: number) => void; next: () => void; prev: () => void }) {
  const windowSize = 3;
  const half = Math.floor(windowSize / 2);
  let start = page - half;
  let end = page + half;

  if (start < 1) {
    start = 1;
    end = windowSize;
  }
  if (end > totalPages) {
    end = totalPages;
    start = totalPages - windowSize + 1;
    if (start < 1) start = 1;
  }

  const pagesToShow = [];
  for (let i = start; i <= end; i++) pagesToShow.push(i);

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              prev();
            }}
          />
        </PaginationItem>

        {pagesToShow.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              isActive={p === page}
              onClick={(e) => {
                e.preventDefault();
                goTo(p);
              }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
