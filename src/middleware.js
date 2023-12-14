import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("middleware");

    const { pathname } = new URL(request.url);

    // Check if the path starts with "/about/" and there is more after that
    // if (pathname.startsWith("/about/") && pathname.length > "/about/".length) {
    // Redirect to the login page
    return NextResponse.redirect(new URL("/login", request.url));
    // }

    // Continue with the normal flow for other routes
    // return NextResponse.next();
}

export const config = {
    // Define the specific routes where the middleware should be applied
    matcher: ["/about/:path+", "/studentlist/:path*"]
};
