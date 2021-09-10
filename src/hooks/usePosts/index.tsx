import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { Data, SortType } from "../../types";

type QueryKeyType = Array<string | SortType>;
type PostResponse = { data: Data[]; pageParam: number };

async function getPosts(
    queryKey: QueryKeyType,
    pageParam: number
): Promise<PostResponse> {
    const sortParam = queryKey[1] as SortType;

    const response = await axios.get("https://problem.comento.kr/api/list", {
        params: {
            headers: "Accept: application/json",
            page: pageParam,
            ord: sortParam,
            category: [1, 2, 3],
            limit: 10,
        },
    });

    return {
        data: response.data.data.map(function (item: Data) {
            item["complete"] = false;
            return item;
        }),
        pageParam: pageParam + 1,
    };
}

export function usePosts(postParams: SortType) {
    return useInfiniteQuery(
        ["usePosts", postParams],
        ({ queryKey, pageParam = 1 }) => getPosts(queryKey, pageParam),
        {
            getNextPageParam: (nextPage) => nextPage.pageParam ?? false,
        }
    );
}
