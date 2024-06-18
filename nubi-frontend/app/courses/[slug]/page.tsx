import { courseCardData } from "@/app/constant";
import { Category, Clock, Level } from "@/components/svgs";
import Image from "next/image";
import slugify from "slugify";

export async function generateStaticParams() {
  const slug = courseCardData.map(({ title }) => ({
    slug: slugify(title, {
      lower: true,
    }),
  }));
  return slug;
}

export default function Page({ params }: { params: { slug: string } }) {
  const slug_data = courseCardData.map(({ title }) =>
    slugify(title, {
      lower: true,
    })
  );

  const { slug } = params;

  const [filteredData] = courseCardData
    .map((arr) => ({
      ...arr,
      slug: `${slugify(arr.title, { lower: true })}`,
    }))
    .filter((arr) => slug == arr.slug);

  const data = slug_data.includes(slug) ? slug : "Coming soon";

  return (
    <section className="flex flex-col lg:flex-row mt-10 px-10">
      <div className="flex-auto w-auto lg:w-96 flex flex-col gap-6">
        <div className="flex gap-5">
          <div>
            <Image
              src={"https://picsum.photos/1000"}
              width={200}
              height={200}
              alt="Contoh"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="prose prose-lg lg:prose-xl font-semibold">
                {filteredData.title}
              </p>
            </div>
            <div className="flex flex-row items-center mt-2 gap-1 prose prose-p:font-medium">
              <div className="h-4 w-4">
                <Clock />
              </div>
              <p className="mt-0">Durasi: {filteredData.duration} Jam</p>
            </div>
            <div className="flex flex-row items-center gap-1 prose prose-p:font-medium">
              <div className="h-4 w-4">
                <Level />
              </div>
              <p className="mt-0">Level: {filteredData.level}</p>
            </div>
            <div className="flex flex-row items-center gap-1 prose prose-p:font-medium">
              <div className="h-4 w-4">
                <Category />
              </div>

              <span className="mt-0">
                Kategori:{" "}
                <p className="badge badge-outline m-0">
                  {filteredData.category}
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="prose prose-p:text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            id consectetur purus ut faucibus pulvinar elementum. Nibh tortor id
            aliquet lectus proin. Hendrerit dolor magna eget est lorem ipsum
            dolor sit amet. Congue quisque egestas diam in arcu cursus euismod
            quis. Dictumst quisque sagittis purus sit amet volutpat. Tempus
            imperdiet nulla malesuada pellentesque elit eget. Commodo viverra
            maecenas accumsan lacus vel facilisis volutpat. Cras sed felis eget
            velit aliquet sagittis id consectetur. Proin fermentum leo vel orci
            porta non.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            id consectetur purus ut faucibus pulvinar elementum. Nibh tortor id
            aliquet lectus proin. Hendrerit dolor magna eget est lorem ipsum
            dolor sit amet. Congue quisque egestas diam in arcu cursus euismod
            quis. Dictumst quisque sagittis purus sit amet volutpat. Tempus
            imperdiet nulla malesuada pellentesque elit eget. Commodo viverra
            maecenas accumsan lacus vel facilisis volutpat. Cras sed felis eget
            velit aliquet sagittis id consectetur. Proin fermentum leo vel orci
            porta non.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            id consectetur purus ut faucibus pulvinar elementum. Nibh tortor id
            aliquet lectus proin. Hendrerit dolor magna eget est lorem ipsum
            dolor sit amet. Congue quisque egestas diam in arcu cursus euismod
            quis. Dictumst quisque sagittis purus sit amet volutpat. Tempus
            imperdiet nulla malesuada pellentesque elit eget. Commodo viverra
            maecenas accumsan lacus vel facilisis volutpat. Cras sed felis eget
            velit aliquet sagittis id consectetur. Proin fermentum leo vel orci
            porta non.
          </p>
        </div>
      </div>
      <div className="flex-auto">Halo</div>
    </section>
  );
}
