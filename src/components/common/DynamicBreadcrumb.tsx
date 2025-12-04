"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PRODUCT_DETAIL_BREADCRUMB_ITEM } from "@/const/static/product-detail-breadcrumb";

export default function DynamicBreadcrumb({ data }: { data?: string[] }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lastSegment = segments.at(-1);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {PRODUCT_DETAIL_BREADCRUMB_ITEM.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </div>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{lastSegment}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
