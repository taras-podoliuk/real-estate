import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="flex items-center hover:underline hover:text-blue-600 px-6 py-3 text-lg"
      >
        <ArrowLeft className="size-5 mr-1" />
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
