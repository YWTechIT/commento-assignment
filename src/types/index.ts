export interface Data {
    category_id: number;
    contents: string;
    created_at: string;
    id: number;
    title: string;
    updated_at: string;
    user_id: number;
}

export interface AdsData{
    contents: string;
    created_at: string;
    id: number;
    title: string;
    updated_at: string;
    img: string;
}

export type SortType = "asc" | "desc";