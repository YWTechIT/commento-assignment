/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./components/organisms/container";
import Header from "./components/molecules/header";
import Login from "./components/molecules/login";
import Feed from "./components/organisms/feed";
import Loading from "./components/atoms/loading";
import DataGrid from "./components/organisms/dataGrid";
import Main from "./components/organisms/main";
import { usePosts } from "./hooks/usePosts";
import { SortType } from "./types";

const App = () => {
  const { data, fetchNextPage, hasNextPage, status, isFetchingNextPage } = usePosts();
  const [showDesc, setShowDesc] = useState<boolean>(false);
  const posts = showDesc ? data?.pages.flatMap((item) => item.data).sort((a, b) => b.id-a.id) : data?.pages.flatMap((item) => item.data);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  const handleSort = useCallback((sort: SortType) => sort === "desc" ? setShowDesc(true) : setShowDesc(false), []);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNextPage && loadMoreRef.current)
            fetchNextPage();
        });
      }, 500);
    });

    const el = loadMoreRef && loadMoreRef.current;

    if (!el) return;

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
      <Header>‘[제출일] 이름’ 을 작성해주세요:)</Header>
      <Container>
        <Login />
        <Main>
          <DataGrid handleSort={handleSort}/>
          {posts &&
            posts.map((item) => <Feed key={item.id} item={item}></Feed>)}

          {status === "loading" && <Loading>Loading...</Loading>}
          <button disabled={!hasNextPage || isFetchingNextPage}>
            {isFetchingNextPage
              ? "로딩 중..."
              : hasNextPage
              ? "게시물 더 불러오기"
              : "불러올 데이터가 없습니다."}
          </button>
          <div ref={loadMoreRef} />
        </Main>
      </Container>
    </>
  );
};

export default App;
