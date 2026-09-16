import { useState } from "react";
import {
  ArrowRight,
  Heart,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "NPG Signature Tee",
    category: "T-Shirts",
    price: 18000,
    oldPrice: null,
    image: "/cloth1.jpeg",
    tag: "New",
  },
  {
    id: 2,
    name: "NPG Essential Tee",
    category: "T-Shirts",
    price: 16000,
    oldPrice: null,
    image: "/cloth2.jpeg",
    tag: "New",
  },
  {
    id: 3,
    name: "NPG Oversized Hoodie",
    category: "Hoodies",
    price: 32000,
    oldPrice: 38000,
    image: "/images/npg-hoodie.jpg",
    tag: "Sale",
  },
  {
    id: 4,
    name: "NPG Baggy Denim",
    category: "Jeans",
    price: 35000,
    oldPrice: null,
    image: "/jean.jpeg",
    tag: "Popular",
  },
  {
    id: 5,
    name: "NPG Street Hoodie",
    category: "Hoodies",
    price: 30000,
    oldPrice: null,
    image: "/images/npg-hoodie-black.jpg",
    tag: "New",
  },
  {
    id: 6,
    name: "NPG Classic Tee",
    category: "T-Shirts",
    price: 15000,
    oldPrice: null,
    image: "/images/npg-shirt.jpg",
    tag: null,
  },
  {
    id: 7,
    name: "NPG Cargo Pants",
    category: "Pants",
    price: 28000,
    oldPrice: null,
    image: "/images/npg-cargo.jpg",
    tag: "New",
  },
  {
    id: 8,
    name: "NPG Wide Leg Denim",
    category: "Jeans",
    price: 38000,
    oldPrice: 42000,
    image: "/jean1.png",
    tag: "Sale",
  },
  {
    id: 9,
    name: "NPG Street Cap",
    category: "Accessories",
    price: 12000,
    oldPrice: null,
    image: "/images/npg-cap.jpg",
    tag: null,
  },
  {
    id: 10,
    name: "NPG Crossbody Bag",
    category: "Accessories",
    price: 18000,
    oldPrice: null,
    image: "/images/npg-bag.jpg",
    tag: "New",
  },
  {
    id: 11,
    name: "NPG Heavyweight Tee",
    category: "T-Shirts",
    price: 20000,
    oldPrice: null,
    image: "/many.jpeg",
    tag: "Popular",
  },
  {
    id: 12,
    name: "NPG Relaxed Cargo",
    category: "Pants",
    price: 30000,
    oldPrice: null,
    image: "/images/npg-cargo-2.jpg",
    tag: null,
  },
];

const categories = [
  "All",
  "T-Shirts",
  "Hoodies",
  "Jeans",
  "Pants",
  "Accessories",
];

function formatPrice(price) {
  return `₦${price.toLocaleString()}`;
}

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "All" ||
      product.category === activeCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const toggleLike = (id) => {
    setLiked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <main className="min-h-screen bg-[#100704] text-white">

      {/* ================================================= */}
      {/* SHOP HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-40 md:px-12 md:pb-20 lg:px-16">

        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="
            absolute
            right-[-100px]
            top-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#e59a38]/[0.08]
            blur-[130px]
          " />

          <div className="
            absolute
            bottom-[-150px]
            left-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#e59a38]/[0.04]
            blur-[120px]
          " />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px]">

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="
              mb-5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#e59a38]
            ">
              NPG / Shop
            </p>

            <h1 className="
              text-6xl
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.08em]
              sm:text-7xl
              md:text-9xl
            ">
              Shop
              <br />
              <span className="text-white/25">
                NPG.
              </span>
            </h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="
              mt-8
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >
            <p className="
              max-w-md
              text-sm
              leading-7
              text-white/45
            ">
              Explore the latest NPG streetwear.
              From oversized tees and hoodies to
              baggy denim and everyday accessories.
            </p>

            {/* CART */}
            <div className="
              flex
              items-center
              gap-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/40
            ">
              <ShoppingBag
                size={15}
                className="text-[#e59a38]"
              />

              {cartCount} Items in bag
            </div>
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* SHOP CONTROLS */}
      {/* ================================================= */}

      <section className="
        sticky
        top-0
        z-30
        border-b
        border-white/10
        bg-[#100704]/95
        backdrop-blur-xl
      ">
        <div className="
          mx-auto
          flex
          max-w-[1500px]
          flex-col
          gap-4
          px-6
          py-4
          md:flex-row
          md:items-center
          md:justify-between
          md:px-12
          lg:px-16
        ">

          {/* CATEGORIES */}
          <div className="
            flex
            gap-2
            overflow-x-auto
            pb-1
            scrollbar-hide
          ">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap
                  px-4
                  py-2.5
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  transition
                  duration-300
                  ${
                    activeCategory === category
                      ? "bg-[#e59a38] text-black"
                      : "border border-white/10 text-white/45 hover:border-white/30 hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-3">

            {searchOpen && (
              <div
                data-aos="fade-left"
                className="flex items-center border-b border-white/20"
              >
                <input
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="
                    w-40
                    bg-transparent
                    px-2
                    py-2
                    text-xs
                    text-white
                    outline-none
                    placeholder:text-white/25
                    md:w-52
                  "
                />

                <button
                  onClick={() => {
                    setSearch("");
                    setSearchOpen(false);
                  }}
                  className="text-white/40 hover:text-white"
                >
                  <X size={15} />
                </button>
              </div>
            )}

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="
                grid
                h-9
                w-9
                place-items-center
                border
                border-white/10
                transition
                hover:border-[#e59a38]
                hover:text-[#e59a38]
              "
            >
              <Search size={16} />
            </button>

            <button
              className="
                hidden
                h-9
                items-center
                gap-2
                border
                border-white/10
                px-4
                text-[8px]
                font-black
                uppercase
                tracking-widest
                text-white/50
                transition
                hover:border-[#e59a38]
                hover:text-[#e59a38]
                sm:flex
              "
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* PRODUCTS */}
      {/* ================================================= */}

      <section className="
        px-6
        py-16
        md:px-12
        md:py-24
        lg:px-16
      ">
        <div className="mx-auto max-w-[1500px]">

          {/* RESULT HEADER */}
          <div
            data-aos="fade-up"
            className="
              mb-10
              flex
              items-center
              justify-between
              border-b
              border-white/10
              pb-5
            "
          >
            <p className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/35
            ">
              {filteredProducts.length} Products
            </p>

            <p className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#e59a38]
            ">
              {activeCategory}
            </p>
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <div className="
              grid
              grid-cols-2
              gap-x-3
              gap-y-10
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-3
              xl:grid-cols-4
            ">

              {filteredProducts.map((product, index) => (
                <article
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 100}
                  data-aos-duration="800"
                  className="group"
                >

                  {/* PRODUCT IMAGE */}
                  <div className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    bg-[#1a0b07]
                  ">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div className="
                      absolute
                      inset-0
                      bg-black/0
                      transition
                      duration-500
                      group-hover:bg-black/20
                    " />

                    {/* TAG */}
                    {product.tag && (
                      <span
                        className={`
                          absolute
                          left-3
                          top-3
                          px-3
                          py-2
                          text-[7px]
                          font-black
                          uppercase
                          tracking-[0.15em]
                          ${
                            product.tag === "Sale"
                              ? "bg-[#e59a38] text-black"
                              : "bg-[#100704] text-white"
                          }
                        `}
                      >
                        {product.tag}
                      </span>
                    )}

                    {/* LIKE */}
                    <button
                      onClick={() => toggleLike(product.id)}
                      className="
                        absolute
                        right-3
                        top-3
                        grid
                        h-9
                        w-9
                        place-items-center
                        rounded-full
                        bg-black/40
                        text-white
                        backdrop-blur-md
                        transition
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      <Heart
                        size={15}
                        fill={
                          liked.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                    {/* ADD TO BAG */}
                    <button
                      onClick={addToCart}
                      className="
                        absolute
                        bottom-3
                        left-3
                        right-3
                        flex
                        translate-y-3
                        items-center
                        justify-center
                        gap-3
                        bg-[#e59a38]
                        py-3.5
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-black
                        opacity-0
                        transition
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        hover:bg-white
                      "
                    >
                      <ShoppingBag size={14} />
                      Add to bag
                    </button>

                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="pt-4">

                    <div className="
                      flex
                      items-start
                      justify-between
                      gap-3
                    ">
                      <div>

                        <p className="
                          mb-1
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#e59a38]
                        ">
                          {product.category}
                        </p>

                        <h2 className="
                          text-[11px]
                          font-black
                          uppercase
                          leading-5
                          tracking-tight
                          sm:text-xs
                        ">
                          {product.name}
                        </h2>

                      </div>

                      <div className="text-right">

                        <p className="
                          text-[11px]
                          font-bold
                          text-white
                          sm:text-xs
                        ">
                          {formatPrice(product.price)}
                        </p>

                        {product.oldPrice && (
                          <p className="
                            mt-1
                            text-[8px]
                            text-white/25
                            line-through
                          ">
                            {formatPrice(product.oldPrice)}
                          </p>
                        )}

                      </div>

                    </div>

                    {/* COLOR DOTS */}
                    <div className="
                      mt-3
                      flex
                      items-center
                      gap-1.5
                    ">
                      <span className="
                        h-2.5
                        w-2.5
                        rounded-full
                        border
                        border-white/30
                        bg-black
                      />

                      <span className='
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-white
                       '/>

                      <span className='
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#e59a38]
                      " />
                    </div>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            /* EMPTY SEARCH */
            <div
              data-aos="fade-up"
              className="
                flex
                min-h-[350px]
                flex-col
                items-center
                justify-center
                border
                border-white/10
                text-center
              "
            >
              <Search
                size={30}
                className="mb-5 text-[#e59a38]"
              />

              <h2 className="
                text-2xl
                font-black
                uppercase
              ">
                No products found
              </h2>

              <p className="
                mt-2
                text-xs
                text-white/30
              ">
                Try another search or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  bg-[#e59a38]
                  px-5
                  py-3
                  text-[8px]
                  font-black
                  uppercase
                  tracking-widest
                  text-black
                "
              >
                View all products
                <ArrowRight size={14} />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ================================================= */}
      {/* SHOP CTA */}
      {/* ================================================= */}

      <section className="
        border-t
        border-white/10
        bg-[#160a06]
        px-6
        py-20
        md:px-12
        md:py-28
        lg:px-16
      ">
        <div
          data-aos="zoom-in"
          className="
            mx-auto
            max-w-[1500px]
            text-center
          "
        >

          <p className="
            mb-5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.35em]
            text-[#e59a38]
          ">
            Nothing Pass God
          </p>

          <h2 className="
            text-5xl
            font-black
            uppercase
            leading-[0.8]
            tracking-[-0.07em]
            sm:text-6xl
            md:text-8xl
          ">
            Own The
            <br />
            <span className="text-white/20">
              Street.
            </span>
          </h2>

          <p className="
            mx-auto
            mt-7
            max-w-md
            text-xs
            leading-6
            text-white/35
          ">
            Your style. Your energy. Your statement.
            Wear NPG your way.
          </p>

          <a
            href="/collections"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-5
              border
              border-white/20
              px-7
              py-4
              text-[9px]
              font-black
              uppercase
              tracking-[0.25em]
              transition
              hover:border-[#e59a38]
              hover:bg-[#e59a38]
              hover:text-black
            "
          >
            Explore collections

            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </a>

        </div>
      </section>

    </main>
  );
}