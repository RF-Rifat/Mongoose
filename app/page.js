"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Home() { 
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <h3>Learning Mongoose</h3>
      {data?.map((item) => (
        <div key={item.id}>
          <h1>{item?.name}</h1>
          <Image
            width={600}
            height={600}
            src={`https:${item?.imageSrc}`}
            alt="photo"
          />
          <h1>{item?.description}</h1>
        </div>
      ))}
    </>
  );
}
