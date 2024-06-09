import Image from "next/image";
import Link from "next/link";
import SearchItem from "./SearchItem";

export default function Header() {
  return (
    <>
      <div className="flex items-center h-10 m-2">
        <Link href="/" className="text-3xl font-sans pl-4 font-bold h-full">
          Medium
        </Link>
        <div className="pl-6 h-full w-1/6 min-w-64">
          <SearchItem />
        </div>
        <Link href="/login" className="ml-4">
          Login
        </Link>
      </div>
    </>
  );
}
