import { apolloClient } from "./apolloClient";
import { DocumentNode } from "graphql";
import { useState } from "react";

export const useQuery = (query: DocumentNode) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  apolloClient.query({ query }).then((result) => {
    setData(result.data);
    setLoading(false);
  });

  return { data, loading };
};
