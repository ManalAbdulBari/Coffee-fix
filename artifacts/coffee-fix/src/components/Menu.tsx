import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Signature Coffee" | "Hot Drinks" | "Cold Coffee" | "Desserts" | "Snacks";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: Exclude<Category, "All">;
}

const menuItems: MenuItem[] = [
  { name: "Signature Espresso", description: "Bold single-origin shot with rich crema", price: "Rs 350", image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80", category: "Signature Coffee" },
  { name: "Caramel Macchiato", description: "Velvety steamed milk, espresso, and caramel drizzle", price: "Rs 550", image: "https://images.unsplash.com/photo-1485808191679-5f86510bd9a8?w=400&q=80", category: "Signature Coffee" },
  { name: "Hazelnut Latte", description: "Smooth espresso with hazelnut syrup and steamed milk", price: "Rs 500", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", category: "Signature Coffee" },
  { name: "Classic Cappuccino", description: "Rich espresso topped with perfectly foamed milk", price: "Rs 400", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80", category: "Hot Drinks" },
  { name: "Hot Chocolate", description: "Creamy Belgian chocolate with steamed milk", price: "Rs 450", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80", category: "Hot Drinks" },
  { name: "Masala Chai Latte", description: "Traditional spiced chai blended with steamed milk", price: "Rs 380", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80", category: "Hot Drinks" },
  { name: "Iced Caramel Latte", description: "Espresso, cold milk, caramel syrup over ice", price: "Rs 580", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80", category: "Cold Coffee" },
  { name: "Cold Brew", description: "12-hour steeped premium cold brew coffee", price: "Rs 520", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", category: "Cold Coffee" },
  { name: "Frappuccino", description: "Blended coffee, cream, and chocolate drizzle", price: "Rs 620", image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80", category: "Cold Coffee" },
  { name: "Tiramisu", description: "Classic Italian coffee dessert, made fresh daily", price: "Rs 650", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80", category: "Desserts" },
  { name: "Chocolate Lava Cake", description: "Warm molten chocolate center, vanilla ice cream", price: "Rs 700", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80", category: "Desserts" },
  { name: "Cheesecake Slice", description: "New York style with fresh berry compote", price: "Rs 600", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80", category: "Desserts" },
  { name: "Club Sandwich", description: "Grilled chicken, fresh veggies, toasted bread", price: "Rs 750", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80", category: "Snacks" },
  { name: "Loaded Fries", description: "Crispy fries with cheese sauce and jalapeños", price: "Rs 550", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80", category: "Snacks" },
  { name: "Bruschetta", description: "Toasted baguette with fresh tomato and herbs", price: "Rs 480", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80", category: "Snacks" },
];

const categories: Category[] = ["All", "Signature Coffee", "Hot Drinks", "Cold Coffee", "Desserts", "Snacks"];

export default function Menu() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-4 block">
            Crafted with Passion
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every item on our menu is crafted with premium ingredients and served with love.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-testid={`filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-amber-500 text-amber-950 shadow-md shadow-amber-500/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-amber-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                data-testid={`card-menu-${i}`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-amber-400 backdrop-blur-sm border border-amber-500/20">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-semibold text-amber-500 whitespace-nowrap text-sm">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
