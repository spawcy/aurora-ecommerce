import NotFoundActions from "@/components/layouts/not-found/not-found-actions";
import NotFoundTitles from "@/components/layouts/not-found/not-found-titles";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 sm:p-0">
      <NotFoundTitles
        title="404 Not Found"
        text={
          <>
            The page looking for <strong>could not be found</strong>. It may have been moved, deleted, or the link you followed is incorrect.
          </>
        }
      />
      <NotFoundActions />
    </div>
  );
}
