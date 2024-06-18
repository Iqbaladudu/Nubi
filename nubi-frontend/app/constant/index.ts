export enum Category {
  "ALL" = "all",
  "PEMROGRAMAN" = "pemrograman",
  "ARTIFICIALINTELLIGENCE" = "artificial intelligence",
  "MARKETING" = "marketing",
}

export interface CategoryData {
  title: string;
  value: Category;
}

export const categoryData: CategoryData[] = [
  {
    title: "Semua Kategori",
    value: Category.ALL,
  },
  {
    title: "Pemrograman",
    value: Category.PEMROGRAMAN,
  },
  {
    title: "Artificial Intelligence",
    value: Category.ARTIFICIALINTELLIGENCE,
  },
  {
    title: "Marketing",
    value: Category.MARKETING,
  },
];

export interface CourseCardData {
  title: string;
  category: string;
  duration: string;
  level: string;
}

export const courseCardData: CourseCardData[] = [
  {
    title: "Kursus Javascript Untuk Pemula",
    category: "Pemrograman",
    duration: "12",
    level: "Dasar",
  },
  {
    title: "Kursus Javascript Untuk Menengah",
    category: "Pemrograman",
    duration: "12",
    level: "Menengah",
  },
  {
    title: "Kursus Javascript Untuk Expert",
    category: "Pemrograman",
    duration: "12",
    level: "Expert",
  },
  {
    title: "Introduction to Prompt Engineering",
    category: "Artificial Intelligence",
    duration: "12",
    level: "Dasar",
  },
  {
    title: "Belajar Marketing Untuk Pemula",
    category: "Marketing",
    duration: "12",
    level: "Dasar",
  },
];
