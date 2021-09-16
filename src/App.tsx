/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Facebook } from "react-content-loader";
import {Container, Header, Login, Feed, DataGrid, Main, Ads} from "./components";
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
  const [showScrap, setShowScrap] = useState<boolean>(false);
  const [bookMark, setBookMark] = useLocalStorage<string[]>("bookmarks", []);
  const filterPost = posts?.map((item) => bookMark.includes(item.id) ? {...item, complete: true} : item).filter((item) => (showScrap ? item.complete : true));

  const toggleShowScrap = useCallback(() => {
    setShowScrap(showScrap => !showScrap);
  }, [])

  // useIntersectionObserver
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (!showScrap && postHasNextPage && entry.isIntersecting && loadMoreRef.current) postFetchNextPage();
          if (!showScrap && FetchADNeeded && entry.isIntersecting && loadMoreRef.current && adHasNextPage) adFetchNextPage();
        }, options);
      }, 500);
    }, );

    const el = loadMoreRef && loadMoreRef.current;

    if (!el) return;

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [postHasNextPage, postFetchNextPage, adHasNextPage, adFetchNextPage, showScrap, FetchADNeeded]);

  // skeleton UI
  const [isLoading, setLoading] = useState<boolean>(true);
  console.log(isLoading)
  useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <Header>‘[제출일] 이름’ 을 작성해주세요:)</Header>
      <Container>
        <Login />
        <Main>  
          <DataGrid handleSort={handleSort} showScrap={showScrap} toggleShowScrap={toggleShowScrap} bookMark={bookMark} />
          
          {filterPost && 
            filterPost.map((item, idx) => {
              return ((idx+1) % 4 === 0 && adPosts) ? (
                <React.Fragment key={item.id}>
                  <Feed key={item.id} item={item} bookMark={bookMark} handleBookMark={setBookMark} isLoading={isLoading}/>
                  <Ads key={adPosts[Math.floor(idx / 4)].id}
                    item={adPosts[Math.floor(idx / 4)]}
                    isLoading={isLoading}
                  />
                </React.Fragment>
              ) : (
                <Feed key={item.id} item={item} bookMark={bookMark} handleBookMark={setBookMark} isLoading={isLoading} />
              );
            })}

            {(!showScrap && loadMoreRef) && <><Facebook width={768}/><div ref={loadMoreRef} /></>}
          
        </Main>
      </Container>
    </>
  );
};

export default App;
