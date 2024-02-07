import { listMyQuery } from "@/graphql/query";
import { useQuery } from "@/lib/useQuery";
import { useEffect } from "react";

export default function Home() {
  const { loading, data } = useQuery(listMyQuery);

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <>
      {loading || !data ? <p>Loading...</p> : data.listMyCustomTypes.items.map((item: any) => <p key={item.id}>{`${item.title}: ${item.content}`}</p >)
      }
    </>
  )
}
