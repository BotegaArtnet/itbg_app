import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            NextApp
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/explore" className="hover:text-blue-600">
              Explore
            </Link>
            <Link href="/feed" className="hover:text-blue-600">
              Feed
            </Link>
            <Link href="/messages" className="hover:text-blue-600">
              Messages
            </Link>
            <Link href="/grid-demo" className="hover:text-blue-600">
              Grid Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 