export interface Data {
    category_id: number;
    contents: string;
    created_at: string;
    id: number;
    title: string;
    updated_at: string;
    user_id: number;
}

export interface AdData{
    contents: string;
    created_at: string;
    id: number;
    img: string;
    title: string;
    updated_at: string;
}

export type SortType = {sort: "asc"} | {sort: "desc"};
export type HandleSortType = "asc" | "desc";