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
import { HandleSortType, SortType } from "./types";
import { useAds } from "./hooks/useAds";
import Ads from "./components/molecules/ads";

const App = () => {
  const [sort, setSort] = useState<SortType>({ sort: "asc" });

  const handleSort = useCallback((sort: HandleSortType) => {
    sort === "asc" ? setSort({ sort: "asc" }) : setSort({ sort: "desc" });
  }, []);

  const {
    data,
    fetchNextPage: postFetchNextPage,
    hasNextPage,
    status,
    isFetchingNextPage,
  } = usePosts(sort);
  const posts = data?.pages.flatMap((item) => item.data);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data: adData, fetchNextPage: adFetchNextPage } = useAds();
  const adPosts = adData?.pages.flatMap((items) => items.data);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNextPage && loadMoreRef.current)
            postFetchNextPage();
        });
      }, 500);
    });

    const el = loadMoreRef && loadMoreRef.current;

    if (!el) return;

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [hasNextPage, postFetchNextPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNextPage && loadMoreRef.current)
            adFetchNextPage();
        });
      }, 500);
    });

    const el = loadMoreRef && loadMoreRef.current;

    if (!el) return;

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [hasNextPage, adFetchNextPage]);

  return (
    <>
      <Header>‘[제출일] 이름’ 을 작성해주세요:)</Header>
      <Container>
        <Login />
        <Main>
          <DataGrid handleSort={handleSort} />

          {posts &&
            posts.map((item, idx) => {
              return (idx + 1) % 4 === 0 && adPosts ? (
                <>
                  <Feed key={item.id} item={item} />
                  <Ads
                    key={String(adPosts[Math.floor(idx / 4)])}
                    item={adPosts[Math.floor(idx / 4)]}
                  />
                </>
              ) : (
                <Feed key={item.id} item={item} />
              );
            })}

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
