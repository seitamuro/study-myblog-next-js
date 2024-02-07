import { useEffect, useState } from "react";
import { apolloClient } from "@/lib/apolloClient";

import { listMyQuery } from "@/graphql/query";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apolloClient.query({ query: listMyQuery }).then((result) => {
      console.log(result)
    })
  });
}
