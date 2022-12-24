import React, { useEffect, useState } from "react";
import Checkcard from "../../components/Checkcard";
import { useRouter } from "next/router";

export default function checkout({ filteredData }) {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  return (
    <Checkcard
      img={filteredData[0]?.img}
      location={filteredData[0]?.location}
      title={filteredData[0]?.title}
      description={filteredData[0]?.description}
      total={filteredData[0]?.total}
    />
  );
}
export async function getServerSideProps({ query }) {
  const { id } = query;
  const searchResults = await fetch("https://www.jsonkeeper.com/b/XRE1").then(
    (res) => res.json()
  );
  let filteredData = searchResults.filter((item) => item.id == id);
  return { props: { filteredData } };
}
