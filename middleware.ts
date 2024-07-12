import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const privateRoute = createRouteMatcher(["/dashboard", "/dashboard/:id"]);

export default clerkMiddleware((auth, req) => {
  if (privateRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
