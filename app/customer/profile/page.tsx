"use client";
import { useRouter } from "next/navigation";

const pageProfile = () => {
  const router = useRouter();
  return (
    <>
      <h1>profilepage</h1>
      <button onClick={() => {
        router.push("/");
      }}>Go Home</button>
    </>
  );
};

export default pageProfile;
