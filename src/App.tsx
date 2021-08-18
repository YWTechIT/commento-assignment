/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./components/atoms/container";
import Header from "./components/molecules/header";
import Login from "./components/molecules/login";
import Feed from "./components/organisms/feed";
import { Data } from "./types";
import styled from "styled-components";
import FilterGroup from "./components/molecules/filter";
import Loading from "./components/atoms/loading";

const App = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [currentPostId, setCurrentPostId] = useState<number>(1);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const getPosts = useCallback(
    async (currentPostId: number) => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "https://problem.comento.kr/api/list",
          {
            params: {
              headers: "Accept: application/json",
              page: { currentPostId },
              ord: "asc",
              category: [1, 2, 3],
              limit: 10,
            },
          }
        );
        setData([...data, ...response.data.data]);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    },
    [data]
  );

  // init data
  useEffect(() => {
    setLoading(true);
    getPosts(currentPostId);
  }, []);

  // useIntersectionObserver data
  useEffect(() => {
    setLoading(true);
    const io = new IntersectionObserver(function (entries) {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && loadMoreRef.current) {
            setCurrentPostId((currentPostId) => currentPostId + 1);
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
  }, [getPosts]);

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

  const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    min-width: 0;
  `;

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <Header>‘[제출일] 이름’ 을 작성해주세요:)</Header>
      <Container>
        <Login />
        <MainWrapper>
          <FilterGroup />
          {data && data.map((item) => <Feed key={item.id} item={item}></Feed>)}
        </MainWrapper>
      </Container>
      <div ref={loadMoreRef}></div>
      {loading && <Loading>Loading...</Loading>}
    </>
  );
};

export default App;
