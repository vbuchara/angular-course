
export type Categories = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export interface Course {
    id: number;
    description: string;
    iconUrl?: string;
    longDescription: string;
    category: Categories;
    lessonsCount?: number;
}
