
import { motion } from "framer-motion";
import { ChefHat, ArrowRight, Coffee, Sandwich, CookingPot, CakeSlice, GlassWater, Star, ThumbsUp } from "lucide-react";

const categories = [
  { icon: Coffee, name: "Breakfast", color: "bg-theme-orange/10 text-theme-orange" },
  { icon: Sandwich, name: "Lunch", color: "bg-theme-yellow/10 text-theme-yellow" },
  { icon: CookingPot, name: "Dinner", color: "bg-theme-green/10 text-theme-green" },
  { icon: CakeSlice, name: "Desserts", color: "bg-theme-bright/10 text-theme-bright" },
  { icon: GlassWater, name: "Drinks", color: "bg-theme-red/10 text-theme-red" },
  { icon: Star, name: "Reviews", color: "bg-theme-orange/10 text-theme-orange" },
  { icon: ThumbsUp, name: "Tips", color: "bg-theme-green/10 text-theme-green" }
];

const recipes = [
  {
    category: "Breakfast",
    title: "Perfect Morning Pancakes",
    description: "Fluffy, golden pancakes topped with maple syrup and fresh berries.",
    icon: Coffee,
    color: "text-theme-orange",
    ingredients: [
      { name: "All-purpose flour", amount: "1½ cups" },
      { name: "Fresh milk", amount: "1¼ cups" },
      { name: "Eggs", amount: "2 large" },
      { name: "Butter", amount: "3 tbsp" },
    ],
    reviews: [
      { author: "Sarah M.", rating: 5, comment: "Best pancakes ever! So fluffy!" },
      { author: "John D.", rating: 4, comment: "Great recipe, very easy to follow." }
    ]
  },
  {
    category: "Lunch",
    title: "Mediterranean Quinoa Bowl",
    description: "Fresh and healthy bowl packed with proteins and vegetables.",
    icon: Sandwich,
    color: "text-theme-yellow",
    ingredients: [
      { name: "Quinoa", amount: "1 cup" },
      { name: "Cherry tomatoes", amount: "1 cup" },
      { name: "Cucumber", amount: "1 medium" },
      { name: "Feta cheese", amount: "½ cup" },
    ],
    reviews: [
      { author: "Maria G.", rating: 5, comment: "So fresh and healthy!" },
      { author: "Alex P.", rating: 5, comment: "Perfect summer lunch!" }
    ]
  },
  {
    category: "Dinner",
    title: "Herb-Crusted Salmon",
    description: "Perfectly baked salmon with a crispy herb crust.",
    icon: CookingPot,
    color: "text-theme-green",
    ingredients: [
      { name: "Salmon fillet", amount: "6 oz" },
      { name: "Fresh herbs", amount: "¼ cup" },
      { name: "Breadcrumbs", amount: "½ cup" },
      { name: "Olive oil", amount: "2 tbsp" },
    ],
    reviews: [
      { author: "Michael R.", rating: 5, comment: "Restaurant quality at home!" },
      { author: "Emma S.", rating: 4, comment: "Delicious and easy to make." }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img 
            src="/lovable-uploads/6a69a380-81a9-4933-9983-6bff0387d291.png" 
            alt="Plated Pleasures Logo" 
            className="h-12"
          />
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">Home</a>
            <a href="#recipes" className="text-gray-600 hover:text-primary-500 transition-colors">Recipes</a>
            <a href="#about" className="text-gray-600 hover:text-primary-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ChefHat size={16} />
              Welcome to Plated Pleasures
            </span>
            <h1 className="font-inter text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Where Every Dish Tells a Story
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join us on a culinary journey through flavors, techniques, and traditions.
              Discover recipes that bring joy to your table.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Explore Recipes
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover recipes for every occasion and craving
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <motion.a
                key={category.name}
                href={`#${category.name.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${category.color} rounded-xl p-4 text-center transition-shadow hover:shadow-md`}
              >
                <category.icon className="mx-auto mb-3 h-8 w-8" />
                <span className="font-medium">{category.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="recipes">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Recipes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of delicious recipes that will inspire your next culinary adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-gray-900/0" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full bg-gray-200 transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <recipe.icon className={`h-4 w-4 ${recipe.color}`} />
                    <span className={`text-sm font-medium ${recipe.color}`}>{recipe.category}</span>
                  </div>
                  <h3 className="font-inter text-xl font-semibold mb-3">{recipe.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {recipe.description}
                  </p>
                  
                  {/* Ingredients Section */}
                  <div className="mb-6">
                    <h4 className="font-inter text-lg font-semibold mb-3 text-theme-green">Ingredients</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <div 
                          key={idx}
                          className="bg-theme-green/5 rounded-lg p-2 text-sm"
                        >
                          <p className="font-medium text-theme-green">{ingredient.name}</p>
                          <p className="text-gray-600">{ingredient.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reviews Section */}
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-inter text-lg font-semibold mb-3 text-theme-orange">Reviews</h4>
                    <div className="space-y-3">
                      {recipe.reviews.map((review, idx) => (
                        <div key={idx} className="bg-theme-orange/5 rounded-lg p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-theme-orange">{review.author}</span>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star 
                                  key={i}
                                  className="w-4 h-4 fill-theme-yellow text-theme-yellow"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <a href="#" className="inline-flex items-center text-theme-green font-medium hover:text-theme-green/80">
                      View Full Recipe
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Tricks Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips & Tricks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master the art of cooking with our expert tips
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Perfect your knife skills",
              "Master temperature control",
              "Elevate your plating game"
            ].map((tip, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
              >
                <ThumbsUp className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="font-inter text-lg font-semibold mb-2">{tip}</h3>
                <p className="text-gray-600">
                  Learn professional techniques to enhance your cooking skills.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-inter text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for the latest recipes, cooking tips, and culinary inspiration.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/6a69a380-81a9-4933-9983-6bff0387d291.png" 
                alt="Plated Pleasures Logo" 
                className="h-12 mb-4"
              />
              <p className="text-gray-400">
                Bringing culinary excellence to your kitchen.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#recipes" className="text-gray-400 hover:text-white transition-colors">Recipes</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Plated Pleasures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
