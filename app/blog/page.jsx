"use client";

import { useSearchParams } from "next/navigation";

const Blog = () => {
  const searchParams = useSearchParams();

  return (
    <div>{searchParams.get("paragraph")}</div>
  )
}

export default Blog