"use client";

import { Category, categoryData, courseCardData } from "@/app/constant";
import { Clock, Level } from "@/components/svgs";
import { useRouter, useSearchParams } from "next/navigation";
import slugify from "slugify";

export default function Courses() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category_params = searchParams.get("category");

  function handleCategoryToggle(value: Category) {
    router.push(`?category=${value}`);
  }

  return (
    <main className=" px-10 z-0 min-h-screen">
      <div className="flex flex-row flex-wrap my-5 flex-shrink z-0 gap-5 justify-center lg:justify-start">
        {categoryData.map(({ title, value }, index) => (
          <button
            className={`btn btn-xs ${
              value === category_params ? "btn-outline" : "btn-ghost"
            }`}
            onClick={() => handleCategoryToggle(value)}
            key={index}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-5 justify-center lg:justify-start">
        {courseCardData
          .filter(({ category }) => {
            if (category_params === Category.ALL || !category_params) {
              return true;
            } else if (category_params === Category.PEMROGRAMAN) {
              return category === "Pemrograman";
            } else if (category_params === Category.ARTIFICIALINTELLIGENCE) {
              return category === "Artificial Intelligence";
            } else if (category_params === Category.MARKETING) {
              return category === "Marketing";
            } else {
              return true;
            }
          })
          .map(({ title, category, duration, level }, index) => (
            <div
              key={index}
              className="card w-52 bg-base-100 shadow-lg card-compact cursor-pointer"
              onClick={() =>
                router.push(
                  `/courses/${slugify(title, {
                    lower: true,
                  })}`
                )
              }
            >
              <figure className="">
                <div className="badge badge-sm absolute top-2 left-2">
                  {category}
                </div>
                <img src="https://picsum.photos/500" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-sm">{title}</h2>
                <div className="card-actions flex-row">
                  <span className="badge badge-sm items-center gap-1 py-3 badge-outline flex-shrink">
                    <div className="h-3 w-3">
                      <Clock />
                    </div>
                    <p className=" font-semibold text-[0.6rem]">
                      {duration} Jam
                    </p>
                  </span>
                  <span className="badge badge-sm items-center gap-1 py-3 badge-outline flex-shrink">
                    <div className="h-3 w-3">
                      <Level />
                    </div>
                    <p className=" font-semibold text-[0.6rem]">{level}</p>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
