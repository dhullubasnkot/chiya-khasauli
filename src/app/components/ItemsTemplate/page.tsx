import Image from "next/image";
import Link from "next/link";

type Item = {
  id: string | number;
  name: string;
  price: number;
  image: string;
};

interface TemplateProps {
  title: string;
  title1?: string;
  items: Item[];
  noslice?: boolean;
  taste?: string;
  buttonText?: string;
}

export default function Template({
  title,
  title1,
  items,
  noslice,
  taste,
  buttonText,
}: TemplateProps) {
  const displayedItems = noslice ? items.slice(0, 4) : items;

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-800">
            {title}
          </h1>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">{title1}</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedItems?.map((item, index) => {
            const { name, price, image } = item;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center"
              >
                <div className="w-full h-48 relative mb-4">
                  <Link href={`/items/${item.id}`} key={item.id}>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                  </Link>
                </div>
                <h2 className="text-lg font-semibold text-amber-700">{name}</h2>
                <p className="text-gray-700">Rs. {price}</p>
              </div>
            );
          })}
        </div>

        {noslice && (
          <div className="flex justify-center mt-8">
            <Link href={taste}>
              <button className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition duration-300">
                {buttonText}
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
