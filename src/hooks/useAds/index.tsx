import axios, {AxiosResponse} from "axios";
import { useQuery } from "react-query";
import { AdsData } from "../../types";

type AdResponse = { data: AdsData[]; pageParam: number};

async function getAds({ pageParam = 1 }): Promise<AdResponse> {
  const response: AxiosResponse<any> = await axios.get("https://problem.comento.kr/api/ads", {
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

export function useAds(){
  return useQuery<AdResponse, Error>("useAds", getAds)
}
