import ProductActions from "@/components/layouts/product-detail/product-actions";
import ImageGallery from "@/components/ui/thumbnail-carousel";
import Image from "next/image";

export default function ProductInformations({ product }: { product?: any }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 mt-10">
      <ImageGallery product={product} />
      <ProductDescription title={product.product_title} description={product.product_description} categories={product.product_categories} />
    </div>
  );
}

export function ProductGallery({ primary }: { primary: string }) {
  return (
    <div className="grid gap-4 max-h-fit">
      <div className="flex items-center justify-center rounded-md bg-accent mr-auto py-14 border border-border w-full">
        <figure className="block w-72">
          <Image src={primary} alt="product__placeholder" width={700} height={700} className="block max-w-full" />
        </figure>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="w-full border border-border bg-accent rounded-md p-2">
            <figure className="flex items-center justify-center mx-auto py-4">
              <Image src={primary} alt="product__placeholder" width={150} height={150} className="block max-w-full" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductDescription({ title, description, categories }: { title?: string; description?: string; categories: string[] }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-5xl font-semibold text-foreground mt-4 leading-relaxed">{title}</h2>
      <p className="text-secondary-foreground mt-4 leading-relaxed">{description}</p>
      <ProductActions title={title || "product is error, contact the admin"} />
      <ProductCategory categories={categories} />
    </div>
  );
}

export function ProductCategory({ categories }: { categories: string[] }) {
  return (
    <div className="mt-8">
      <b className="text-foreground">Categories</b>
      <p className="text-muted-foreground">{categories.join(", ")}</p>
    </div>
  );
}
