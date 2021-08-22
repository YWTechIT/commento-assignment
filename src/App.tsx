/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./components/organisms/container";
import Header from "./components/molecules/header";
import Login from "./components/molecules/login";
import Feed from "./components/organisms/feed";
import { Data, SortType } from "./types";
import Loading from "./components/atoms/loading";
import DataGrid from "./components/organisms/dataGrid";
import Main from "./components/organisms/main";

const App = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [currentPostId, setCurrentPostId] = useState<number>(1);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleSort = useCallback(
    (sort: SortType) => {
      if (sort === "asc") {
        const asc = [...data].sort((a, b) => a.id - b.id);
        setData(asc);
      } else {
        const desc = [...data].sort((a, b) => b.id - a.id);
        setData(desc);
      }
    },
    [data]
  );

  const getPosts = useCallback(
    async (currentPostId: number) => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://problem.comento.kr/api/list",
          {
            params: {
              headers: "Accept: application/json",
              page: currentPostId,
              ord: "asc",
              category: [1, 2, 3],
              limit: 10,
            },
          }
        );
        setData([...data, ...response.data.data]);
        setCurrentPostId((currentPostId) => currentPostId + 1);
      } catch (e) {
        setError(e);
      }
    },
    [data]
  );

  // useIntersectionObserver data
  useEffect(() => {
    setLoading(true);
    const io = new IntersectionObserver(function (entries) {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && loadMoreRef.current) {
            getPosts(currentPostId);
          }
        });
      }, 1000);
    });

    const el = loadMoreRef && loadMoreRef.current;

    if (!el) {
      return;
    }

    io.observe(el);

    return () => {
      io.unobserve(el);
      setLoading(false);
    };
  }, [currentPostId, getPosts]);

  // get ads
  // useEffect(() => {
  //   const getAds = async () => {
  //     const response = await axios.get("https://problem.comento.kr/api/ads", {
  //       params: {
  //         page: 1,
  //         limit: 5,
  //       },
  //     });
  //     console.log(response);
  //   };
  //   getAds();
  // }, []);

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <Header>‘[제출일] 이름’ 을 작성해주세요:)</Header>
      <Container>
        <Login />
        <Main>
          <DataGrid handleSort={handleSort} />
          {data && data.map((item) => <Feed key={item.id} item={item}></Feed>)}
        </Main>
      </Container>
      <div ref={loadMoreRef}></div>
      {loading && <Loading>Loading...</Loading>}
    </>
  );
};

export default App;
