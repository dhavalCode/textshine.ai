import { NEXT_PUBLIC_WEBAPP_URL } from "../constants";

export { default as classNames } from "../utils/classNames";

export function absoluteUrl(path: string) {
  return `${NEXT_PUBLIC_WEBAPP_URL}${path}`;
}

export const makeShortText = (txt: string, limit = 50): string => {
  if (txt.length > limit) {
    return txt.slice(0, limit - 3) + "...";
  }
  return txt;
};
