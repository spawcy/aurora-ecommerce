import { ProductCardLoading } from "../products/product-card";

export default function ShopDetailLoadingPage() {
  return (
    <div className="mt-4 sm:mt-19 pb-10">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center gap-2">
          <div className="h-4 w-10 bg-slate-300 rounded animate-pulse" />
          <div className="h-3 w-3 bg-slate-200 rounded-full animate-pulse" />
          <div className="h-4 w-20 bg-slate-300 rounded animate-pulse" />
          <div className="h-3 w-3 bg-slate-200 rounded-full animate-pulse" />
          <div className="h-4 w-32 bg-slate-300 rounded animate-pulse" />
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 mt-10">
          <div className="aspect-video block w-full h-full rounded-md bg-slate-300 animate-pulse" />
          <div className="block w-full h-full rounded-md">
            <div className="h-6 w-25 bg-slate-300 rounded animate-pulse" />
            <div className="block w-[90%] h-14 rounded-md bg-slate-300 animate-pulse mt-8" />
            <div className="space-y-3 mt-7">
              <div className="h-3 w-3/4 bg-slate-300 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-slate-300 rounded animate-pulse" />
              <div className="h-3 w-2/3 bg-slate-300 rounded animate-pulse" />
            </div>
            <div className="w-full mt-12 py-6 border-t border-b border-border grid grid-cols-[1fr_5.20fr_.9fr] place-items-center gap-4">
              <div className="h-12 w-full bg-slate-300 rounded-md animate-pulse" />
              <div className="h-12 w-full bg-slate-300 rounded-md animate-pulse" />
              <div className="h-10 w-10 bg-slate-300 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        <ProductCardLoading className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-24" />
      </div>
    </div>
  );
}
