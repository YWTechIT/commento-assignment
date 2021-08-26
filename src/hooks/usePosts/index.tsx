import axios, { AxiosResponse } from "axios";
import { useInfiniteQuery } from "react-query";
import { Data } from "../../types";

type Response = { data: Data[]; pageParam: number };

async function getPosts({ pageParam = 1 }): Promise<Response> {
  const response: AxiosResponse<any> = await axios.get("https://problem.comento.kr/api/list", {
    params: {
      headers: "Accept: application/json",
      page: pageParam,
      ord: "asc",
      category: [1, 2, 3],
      limit: 10,
    },
  });
  return {
    data: response.data.data,
    pageParam: pageParam + 1,
  };
}

export function usePosts() {
  return useInfiniteQuery("usePosts", getPosts, {
    getNextPageParam: (nextPage) => nextPage.pageParam,
  });
}