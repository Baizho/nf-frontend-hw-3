import Image from "next/image";
import BlogListVertical from "@/components/BlogListVertical";

export default function Home() {
  return (
    <>
      <div className="text-center text-xl font-bold">
        {" "}
        Popular blogs for you
      </div>
      <div className="flex justify-center mt-10 ">
        <BlogListVertical extraurl={""} />
        {/* <div>Extra</div> */}
      </div>
    </>
  );
}
