"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import BlogListVertical from "@/components/BlogListVertical";

export default function tagPage() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("q");
  return (
    <>
      <div className="text-center text-xl font-bold">
        {" "}
        Results of your search
      </div>
      <div className="flex justify-center mt-10 ">
        <BlogListVertical extraurl={"/search?q=" + filter} />
        {/* <div>Extra</div> */}
      </div>
    </>
  );
}
