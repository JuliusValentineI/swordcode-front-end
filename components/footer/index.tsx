import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-200 p-4 text-black text-center footer">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/sobre-mi">Sobre mi</Link>
          </li>
        </ul>
      </nav>
      <p className="mt-4">Copyright © {new Date().getFullYear()} SwordCode</ p>
    </footer>
  );
};
