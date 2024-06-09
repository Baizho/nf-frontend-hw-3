"use client";
import Image from "next/image";
import BlogListVertical from "@/components/BlogListVertical";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  let color = "";
  if (theme === "light") color = "white";
  else color = "gray-400";
  return (
    <div className={`bg-${color} min-h-screen`}>
      <div className="text-center text-xl font-bold">
        {" "}
        Popular blogs for you
      </div>
      <div className="flex justify-center mt-10 ">
        <BlogListVertical extraurl={""} />
        {/* <div>Extra</div> */}
      </div>
    </div>
  );
}
