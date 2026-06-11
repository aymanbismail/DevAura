// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center bg-background text-foreground">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-extrabold text-[#5271FF]">404</h1>
        <p className="text-xl font-semibold">Page Not Found</p>
        <p className="text-muted-foreground">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/">
          <Button className="mt-4 cursor-pointer bg-[#5271FF]">Go to Homepage</Button>
        </Link>
      </div>
    </div>
  );
}
