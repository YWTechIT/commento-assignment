import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { AdData } from "../../types";

type AdResponse = { data: AdData[]; pageParam: number};

async function getAds(pageParam: number): Promise<AdResponse> {
  const response = await axios.get("https://problem.comento.kr/api/ads", {
    params: {
      page: pageParam,
      limit: 5,
    },
  });

  return {
    data: response.data.data,
    pageParam: pageParam + 1,
  };
}

export function useAds() {
  return useInfiniteQuery("useAds", ({pageParam=1}) => getAds(pageParam), {
    getNextPageParam: (nextPage) => nextPage.pageParam,
  });
}