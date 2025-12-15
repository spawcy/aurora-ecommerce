import { NO_NAV_FOOTER_PATH_ITEMS, VALID_EXACT_ROUTES } from "@/const/static/disable-nav-footer-path-items";
import { usePathname } from "next/navigation";

export const useLayoutVisibility = (): boolean => {
  const currentPath: string = usePathname();
  const isValidRoute = (): boolean => {
    if (VALID_EXACT_ROUTES.includes(currentPath)) return true;
    const validDynamicPatterns: RegExp[] = [/^\/products\/[a-z0-9-]+$/i];
    return validDynamicPatterns.some((pattern: RegExp) => pattern.test(currentPath));
  };
  const isExcludedPath: boolean = NO_NAV_FOOTER_PATH_ITEMS.includes(currentPath);
  const isUnknownRoute: boolean = !isValidRoute();
  const shouldHideLayout: boolean = isExcludedPath || isUnknownRoute;
  return shouldHideLayout;
};
