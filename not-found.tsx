import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-medium mt-4">Page Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="mt-6 inline-block">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
} 