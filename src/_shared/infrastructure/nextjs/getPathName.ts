import { headers } from "next/headers";
import "server-only";

export const getHeaderValue = async (name: string) =>
  (await headers()).get(name);

export const getPathname = async () => {
  // Get the headers from the request
  const url = await getHeaderValue("x-url");
  const parsedUrl = url ? new URL(url) : null;
  const pathname = parsedUrl ? parsedUrl.pathname : "";
  return pathname;
};
