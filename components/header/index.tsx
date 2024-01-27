import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-neutral-300 p-4 text-black">
      <div className="container mx-auto text-center">
        <Link href="/" className="text-lg font-bold hover:text-gray-400">
          Logo SwordCode
        </Link>
      </div>
    </header>
  );
};
