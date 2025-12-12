import { FrownIcon } from "lucide-react";

export default function NotFoundTitles({ title, text }: { title: string; text: React.ReactNode }) {
  return (
    <div className="text-center max-w-md 2xl:max-w-2xl mx-auto">
      <figure className="block">
        <FrownIcon className="block size-14 2xl:size-24 mx-auto text-muted-foreground" />
      </figure>
      <p className="mt-6 text-2xl md:text-4xl 2xl:text-6xl font-medium">{title}</p>
      <p className="text-muted-foreground mt-1 2xl:text-xl 2xl:mt-3.5 leading-relaxed">{text}.</p>
    </div>
  );
}
