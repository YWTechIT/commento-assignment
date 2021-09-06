export interface Data {
    category_id: number;
    contents: string;
    created_at: string;
    id: string;
    title: string;
    updated_at: string;
    user_id: number;
}

export interface AdData{
    contents: string;
    created_at: string;
    id: string;
    img: string;
    title: string;
    updated_at: string;
}

export type SortType = "asc" | "desc"