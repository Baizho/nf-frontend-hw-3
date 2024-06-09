"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import BlogListVertical from "@/components/BlogListVertical";

export default function tagPage() {
  const { tagName } = useParams();
  return (
    <>
      <div className="text-center text-xl font-bold">
        {" "}
        Read blogs with the tag of {tagName}
      </div>
      <div className="flex justify-center mt-10 ">
        <BlogListVertical extraurl={"/tag/" + tagName} />
        {/* <div>Extra</div> */}
      </div>
    </>
  );
}
