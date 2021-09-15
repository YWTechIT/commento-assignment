/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";
import {Container, Header, Login, Feed, Loading, DataGrid, Main, Ads} from "./components";
import { usePosts, useAds } from "./hooks";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { SortType } from "./types";

const App = () => {
  // asc, desc
  const [sort, setSort] = useState<SortType>(SortType.ASC);
  const handleSort = useCallback((sort: SortType) => {
    sort === SortType.ASC ? setSort(SortType.ASC) : setSort(SortType.DESC);
  }, []);

  // usePost
  const {data: postData, fetchNextPage: postFetchNextPage, hasNextPage: postHasNextPage, status: postStatus, isFetchingNextPage: postIsFetchingNextPage,
  } = usePosts(sort);
  const posts = postData?.pages.flatMap((item) => item.data);

  // useAds
  const { data: adData, fetchNextPage: adFetchNextPage, hasNextPage: adHasNextPage } = useAds();
  const adPosts = adData?.pages.flatMap((items) => items.data);
  const adPostLength = posts ? posts.length : 0;
  const FetchADNeeded = adPostLength % 20 > 0

  // useLocalStorage
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [bookMark, setBookMark] = useLocalStorage<string[]>("bookmarks", []);
  const filterPost = posts?.map((item) => bookMark.includes(item.id) ? {...item, complete: true} : item).filter((item) => (showFilter ? item.complete : true));

  const toggleShowFilter = () => {
    setShowFilter(showFilter => !showFilter);
  }
  console.log(bookMark)

  // useIntersectionObserver
  const loadMoreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (!showFilter && postHasNextPage && entry.isIntersecting && loadMoreRef.current) postFetchNextPage();
          if (!showFilter && FetchADNeeded && entry.isIntersecting && loadMoreRef.current && adHasNextPage) adFetchNextPage();
        });
      }, 500);
    });

    const el = loadMoreRef && loadMoreRef.current;

    if (!el) return;

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [postHasNextPage, postFetchNextPage, adHasNextPage, adFetchNextPage, showFilter, FetchADNeeded]);

  return (
    <>
      <Header>‘[제출일] 이름’ 을 작성해주세요:)</Header>
      <Container>
        <Login />
        <Main>  
          <DataGrid handleSort={handleSort} showFilter={showFilter} toggleShowFilter={toggleShowFilter} bookMark={bookMark} />
          {filterPost &&
            filterPost.map((item, idx) => {
              return ((idx+1) % 4 === 0 && adPosts) ? (
                <React.Fragment key={item.id}>
                  <Feed key={item.id} item={item} bookMark={bookMark} handleBookMark={setBookMark}/>
                  <Ads key={adPosts[Math.floor(idx / 4)].id}
                    item={adPosts[Math.floor(idx / 4)]}
                  />
                </React.Fragment>
              ) : (
                <Feed key={item.id} item={item} bookMark={bookMark} handleBookMark={setBookMark} />
              );
            })}

          {postStatus === "loading" && <Loading>Loading...</Loading>}
          <button disabled={showFilter || !postHasNextPage || postIsFetchingNextPage }>
             {postIsFetchingNextPage
              ? "불러오는 중..."
              : postHasNextPage
              ? "게시물 더 불러오기"
              : "마지막 데이터 입니다."}
          </button>
          <div ref={loadMoreRef} />
        </Main>
      </Container>
    </>
  );
};

export default App;
