import { useEffect, useState } from "react";
import axios from "axios";

export default function useItemSearch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${pageNumber}`,
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setItems((prev) => {
          return [...prev, ...res.data.nodes];
        });

        setHasMore(res.data.nodes.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, items, hasMore };
}
