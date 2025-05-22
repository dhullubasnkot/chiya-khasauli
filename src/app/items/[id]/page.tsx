import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/page";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  image: string;
  ingredients: string[];
  category: string;
}

interface Props {
  params: {
    id: string;
  };
}

export default function ItemDetails({ params }: Props) {
  const item: Item | undefined = HotelItems.find(
    (item) => String(item.id) === params.id
  );

  if (!item) return notFound();

  const similarItems = HotelItems.filter(
    (other) => other.category === item.category && other.id !== item.id
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-16">
        {/* Main Section - Full Width */}
        <section className="w-full mb-10">
          <div className="grid md:grid-cols-2 gap-10  mx-0 px-8 py-10 rounded-none  border-t border-amber-100 animate-fade-in">
            <div className="relative w-full h-72 md:h-[450px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <span className="absolute top-4 left-4 text-sm font-semibold bg-amber-600 text-white px-4 py-2 rounded-full shadow-md">
                {item.category}
              </span>
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <h1 className="text-5xl font-extrabold text-amber-800 leading-tight">
                {item.name}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.description}
              </p>
              <div className="text-4xl font-bold text-amber-700">
                Rs. {item.price}
              </div>
              <div>
                <span
                  className={`inline-block px-5 py-2 rounded-full text-white text-md font-semibold shadow-lg transition-colors duration-300 ${
                    item.isAvailable ? "bg-green-600" : "bg-red-500"
                  }`}
                >
                  {item.isAvailable
                    ? "Available Now! 🎉"
                    : "Currently Unavailable 😔"}
                </span>
              </div>

              <div>
                <h2 className="text-amber-600 font-bold text-xl mb-3">
                  Ingredients:
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
                  {item.ingredients.map((ing, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-amber-500 mr-2">•</span> {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Items - Full Width */}
        {similarItems.length > 0 && (
          <section className="w-full py-12 px-6">
            <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {similarItems.map((similar) => (
                <Link
                  href={`/items/${similar.id}`}
                  key={similar.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 duration-300 overflow-hidden border border-amber-50 flex flex-col"
                >
                  <div className="relative w-full h-52">
                    <Image
                      src={similar.image}
                      alt={similar.name}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-amber-800 mb-2">
                      {similar.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {similar.description}
                    </p>
                    <p className="text-2xl text-amber-700 font-bold">
                      Rs. {similar.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
