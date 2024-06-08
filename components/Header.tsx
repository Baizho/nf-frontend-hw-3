import Image from "next/image";
import Link from "next/link";
import SearchItem from "./searchItem";

export default function Header() {
  return (
    <>
      <div className="flex items-center h-10">
        <Link href="/" className="text-3xl font-sans pl-6 font-bold">
          Medium
        </Link>
        <SearchItem />
      </div>
    </>
  );
}
