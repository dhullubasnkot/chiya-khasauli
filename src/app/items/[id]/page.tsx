import Navbar from "@/app/components/navbar";
import HotelItems from "@/app/data/hoteldata";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/app/components/footer";

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
  params: Promise<{
    id: string;
  }>;
}

export default async function ItemDetails({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const rawItem = HotelItems.find((item) => String(item.id) === id);

  const item: Item | undefined = rawItem
    ? {
        ...rawItem,
        isAvailable:
          typeof rawItem.isAvailable === "boolean"
            ? rawItem.isAvailable
            : false,
      }
    : undefined;

  if (!item) return notFound();

  const similarItems = HotelItems.filter(
    (other) => other.category === item.category && other.id !== item.id
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-16">
        {/* Item Details Section */}
        <section className="w-full mb-10">
          <div className="grid  md:grid-cols-2 gap-10 px-4 sm:px-6 md:px-10 py-10 border-t border-amber-100 animate-fade-in">
            {/* Item Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <span className="absolute top-4 left-4 text-xs sm:text-sm font-semibold bg-amber-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md">
                {item.category}
              </span>
            </div>

            {/* Item Content */}
            {/* Item Content */}
            <div className="space-y-6 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-800 leading-tight">
                {item.name}
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
              <div className="text-2xl sm:text-3xl font-bold text-amber-700">
                Rs. {item.price}
              </div>
              <div>
                <span
                  className={`inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-white text-sm sm:text-md font-semibold shadow-lg transition-colors duration-300 ${
                    item.isAvailable ? "bg-green-600" : "bg-red-500"
                  }`}
                >
                  {item.isAvailable
                    ? "Available Now! 🎉"
                    : "Currently Unavailable 😔"}
                </span>
              </div>

              <div>
                <h2 className="text-amber-600 font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                  Ingredients:
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
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

        {/* Similar Items Section */}
        {/* Similar Items Section */}
        {similarItems.length > 0 && (
          <section className="w-full py-12 px-4 sm:px-6 md:px-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-800 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
              {similarItems.map((similar) => (
                <Link
                  href={`/items/${similar.id}`}
                  key={similar.id}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300 overflow-hidden border border-amber-50 flex flex-col"
                >
                  <div className="relative w-full h-28 sm:h-32 md:h-40">
                    <Image
                      src={similar.image}
                      alt={similar.name}
                      fill
                      className="object-cover rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-2 sm:p-4 md:p-5 flex-grow flex flex-col justify-between">
                    <h3 className="text-xs sm:text-base md:text-lg font-semibold text-amber-800 mb-1">
                      {similar.name}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-gray-600 mb-2 line-clamp-2">
                      {similar.description}
                    </p>
                    <p className="text-xs sm:text-base md:text-lg text-amber-700 font-bold">
                      Rs. {similar.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

// Optional: Static params
export async function generateStaticParams() {
  return HotelItems.map((item) => ({
    id: String(item.id),
  }));
}
