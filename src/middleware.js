import { NextResponse } from "next/server";

export function middleware(request) {
    const {pathname} = request.nextUrl;
    const lower = pathname.toLowerCase();

    if (lower !== pathname) {
        const url = request.nextUrl.clone();
        url.pathname = lower; 
        return NextResponse.redirect(url, 308);
    }
}

export const config = {
    matcher: ["/((?!_next|api|fonts|.*\\..*).*)"],
}