import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const headers = new Headers(request.headers);

  headers.set("x-url", request.url);

  const response = NextResponse.next({
    request: { headers },
  });

  return response;
}

export const config = {
  matcher: [{ source: "/((?!api|_next/static|_next/image|favicon.ico).*)" }],
};
