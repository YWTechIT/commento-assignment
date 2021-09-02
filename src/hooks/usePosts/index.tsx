import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { Data, SortType } from "../../types";

type QueryKeyType = Array<string | QueryParam>
type QueryParam = {sort: string}
type PostResponse = {data: Data[], pageParam: number}

async function getPosts(queryKey: QueryKeyType, pageParam: number): Promise<PostResponse> {
  let {sort} = queryKey[1] as QueryParam;

  const listResponse = await axios.get("https://problem.comento.kr/api/list", {
    params: {
      headers: "Accept: application/json",
      page: pageParam,
      ord: sort,
      category: [1, 2, 3],
      limit: 10,
    },
  });

  return {
    data: listResponse.data.data,
    pageParam: pageParam + 1,
  };
}

export function usePosts(sortFilter: SortType) {
  return useInfiniteQuery(["usePosts", sortFilter], ({queryKey, pageParam=1}) => getPosts(queryKey, pageParam), {
    getNextPageParam: (nextPage) => nextPage.pageParam ?? false,
  });
}