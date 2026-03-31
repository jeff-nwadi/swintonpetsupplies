export interface Product {
  id?: number | string;
  title: string;
  description: string;
  label: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
}

export const dogFoodProducts: Product[] = [
  {
    label: "NATURE'S FEAST",
    title: "Grain-Free Adult Beef & Sweet Potato Recipe",
    rating: 4.8,
    reviews: 324,
    price: 54.99,
    image: "/images/Nature's Feast Dry Food.svg",
    badge: "Best Seller",
    category: "Dog Food",
    description: "Grain-free recipe with high-quality beef and sweet potato for energy and health."
  },
  {
    label: "PRIME PAWS",
    title: "High Protein Puppy Formula with Real Chicken",
    rating: 5.0,
    reviews: 128,
    price: 62.50,
    image: "/images/Prime Paws Puppy.svg",
    category: "Dog Food",
    description: "Specially formulated for puppies with real chicken protein for active growth."
  },
  {
    label: "OCEAN CATCH",
    title: "Wild Salmon & Brown Rice Wet Food Cans",
    rating: 4.2,
    reviews: 86,
    price: 38.00,
    image: "/images/Ocean Catch Wet Food.svg",
    category: "Dog Food",
    description: "Premium wet food with wild-caught salmon and brown rice for shiny coats."
  },
  {
    label: "HAPPY TAILS",
    title: "Organic Peanut Butter Training Treats",
    rating: 4.7,
    reviews: 512,
    price: 14.99,
    image: "/images/Healthy Bites Treats.svg",
    category: "Dog Food",
    description: "Organic, bite-sized peanut butter treats perfect for training and rewarding."
  },
  {
    label: "VITALITY DIET",
    title: "Weight Management Senior Recipe",
    rating: 4.9,
    reviews: 215,
    price: 48.50,
    image: "/images/Vitality Senior Food.svg",
    badge: "Sale",
    category: "Dog Food",
    description: "Low-calorie formula designed for senior dogs to maintain a healthy weight."
  },
  {
    label: "FLUFF & TUFF ESSENTIALS",
    title: "Natural Dental Chews for Fresh Breath",
    rating: 4.6,
    reviews: 189,
    price: 22.00,
    image: "/images/Natural Dental Chews.svg",
    category: "Dog Food",
    description: "Natural chews that help reduce plaque and freshen your dog's breath."
  },
];

export const accessoryProducts: Product[] = [
  {
    title: "Classic Leather Collar",
    category: "Collars & Leashes",
    price: 24.00,
    image: "/images/Classic Leather Collar.svg",
    badge: "Best Seller",
    label: "Luxury Pet",
    description: "Handcrafted top-grain leather collar with durable brass hardware."
  },
  {
    title: "Reflective Nylon Leash",
    category: "Collars & Leashes",
    price: 18.50,
    image: "/images/Reflective Nylon Leash.svg",
    label: "Safety First",
    description: "High-visibility reflective stitching for safe nighttime walks with your dog."
  },
  {
    title: "Orthopedic Dog Bed",
    category: "Beds & Bowls",
    price: 89.00,
    image: "/images/Orthopedic Dog Bed.svg",
    label: "Comfort Zone",
    description: "Memory foam bed designed to support joints and provide ultimate comfort."
  },
  {
    title: "Interactive Puzzle Toy",
    category: "Toys",
    price: 22.00,
    image: "/images/Interactive Puzzle Toy.svg",
    badge: "New",
    label: "Brain Games",
    description: "Challenging puzzle toy to stimulate your pet's mind and reward play."
  },
  {
    title: "Stainless Steel Bowl Set",
    category: "Beds & Bowls",
    price: 35.00,
    image: "/images/Stainless Steel Bowl Set.svg",
    label: "Dine Well",
    description: "Non-slip, double-walled stainless steel bowls for clean and easy feeding."
  },
  {
    title: "Adventure Harness",
    category: "Collars & Leashes",
    price: 45.00,
    image: "/images/Waterproof Adventure Harness.svg",
    label: "Active Pet",
    description: "No-pull harness with padded breathability for hiking and long adventures."
  },
  {
    title: "Plush Squeaky Bone",
    category: "Toys",
    price: 12.00,
    image: "/images/Plush Squeaky Bone.svg",
    label: "Soft Play",
    description: "Soft plush toy with a built-in squeaker for hours of gentle indoor fun."
  },
  {
    title: "Travel Water Bottle",
    category: "Travel & Grooming",
    price: 15.99,
    image: "/images/Travel Water Bottle.svg",
    label: "On the Go",
    description: "Portable, leak-proof water dispenser with an integrated drinking bowl."
  },
  {
    title: "Grooming Brush Set",
    category: "Travel & Grooming",
    price: 14.50,
    image: "/images/Grooming Brush Set.svg",
    label: "Grooming Pro",
    description: "Complete brush set for detangling and smoothing all pet fur types."
  },
  {
    title: "Cotton Plaid Bandana",
    category: "Apparel",
    price: 9.99,
    image: "/images/Cotton Plaid Bandana.svg",
    label: "Fashion Pet",
    description: "Stylish and breathable cotton bandana for a classic pet look."
  },
  {
    title: "Backseat Car Cover",
    category: "Travel & Grooming",
    price: 55.00,
    image: "/images/Backseat Car Cover.svg",
    badge: "Best Seller",
    label: "Travel Safe",
    description: "Waterproof backseat protector for keeping your car clean during pet trips."
  },
  {
    title: "Poop Bag Dispenser",
    category: "Travel & Grooming",
    price: 8.50,
    image: "/images/Eco Poop Bag Dispenser.svg",
    label: "Clean Up",
    description: "Compact and durable dispenser with a clip for easy leash attachment."
  }
];

export const shopProducts: Product[] = [
  ...dogFoodProducts,
  ...accessoryProducts.slice(0, 6)
];

export const blogs = [
  {
    id: 1,
    category: "NUTRITION",
    date: "Oct 12, 2025",
    title: "The Ultimate Guide to Grain-Free Diets for Dogs",
    excerpt: "Thinking about switching your pup to a grain-free diet? We break down the pros, cons, and essential vitamins your dog needs to thrive without grains in their bowl.",
    image: "/images/Blog Cover.png",
    author: {
      name: "Sarah Jenkins",
      role: "Canine Nutritionist",
      avatar: "/images/User.png"
    },
    featured: true
  },
  {
    id: 2,
    category: "LIFESTYLE",
    date: "Oct 08, 2025",
    title: "Top 10 Indestructible Toys for Heavy Chewers",
    excerpt: "Say goodbye to shredded plushies in five minutes. Here are the toughest, safest toys that will actually survive...",
    image: "/images/Blog Cover(1).png"
  },
  {
    id: 3,
    category: "HEALTH",
    date: "Sep 29, 2025",
    title: "How to Safely Transition Your Puppy to Adult Food",
    excerpt: "Changing your dog's food too fast can cause an upset tummy. Learn the 7-day transition rule to make meal...",
    image: "/images/Blog Cover(2).png"
  },
  {
    id: 4,
    category: "GROOMING",
    date: "Sep 21, 2025",
    title: "Grooming 101: Brushing Techniques by Coat Type",
    excerpt: "Whether your dog has short hair, a double coat, or curly locks, using the right brush prevents painful mats and...",
    image: "/images/Blog Cover.png"
  },
  {
    id: 5,
    category: "HEALTH",
    date: "Aug 15, 2025",
    title: "Summer Safety: Keeping Your Dog Cool in Heatwaves",
    excerpt: "Dogs don't sweat like we do. Discover the signs of heatstroke and practical ways to keep your best friend...",
    image: "/images/Blog Cover(1).png"
  },
  {
    id: 6,
    category: "HEALTH",
    date: "Jul 30, 2025",
    title: "Why Dental Health is Crucial for Older Dogs",
    excerpt: "Bad breath isn't just unpleasant—it could be a sign of dental disease. Here's how to care for a senior dog's...",
    image: "/images/Blog Cover(2).png"
  },
  {
    id: 7,
    category: "TRAINING",
    date: "Jul 11, 2025",
    title: "Fun Indoor Games for Rainy Afternoons",
    excerpt: "Stuck inside? Burn off that excess canine energy with these mentally stimulating puzzles and hide-and-seek...",
    image: "/images/Blog Cover.png"
  }
];

export const categories = [
  { name: 'Dry food', icon: '/images/Dry food.svg', count: 28 },
  { name: 'Treats', icon: '/images/Treats.svg', count: 14 },
  { name: 'Care', icon: '/images/Care.svg', count: 11 },
  { name: 'Toys', icon: '/images/Toys.svg', count: 17 },
];

export const productDetails = {
  'yora-complete-dry-food': {
    image: "/images/Nature's Feast Dry Food.svg",
    category: 'Dry food',
    title: 'NATURE\'S FEAST Complete Dry Food',
    description: 'High-protein recipe for adult dogs with gentle digestion support. Balanced with healthy oats, potato, and seaweed, this recipe provides everything your dog needs for a healthy life.',
    price: 45.00,
    oldPrice: 52.00,
    rating: 4.8,
    reviews: 124,
  },
};

export const cartItems = [
  {
    id: 'salmon-recipe-dry-food',
    title: 'Salmon Recipe Dry Food',
    description: 'Nourishing formula for adult dogs',
    price: 38.00,
    image: "/images/Ocean Catch Wet Food.svg",
    tags: ['4 lb bag', 'Grain free', 'Autoship eligible'],
    quantity: 1,
    arrival: 'Tuesday'
  },
  {
    id: 'soft-chew-bone-toy',
    title: 'Soft Chew Bone Toy',
    description: 'Lightweight daily play essential',
    price: 16.00,
    image: "/images/Plush Squeaky Bone.svg",
    tags: ['Sand', 'Medium'],
    quantity: 2,
    inStock: true
  },
  {
    id: 'ceramic-feeding-bowl',
    title: 'Ceramic Feeding Bowl',
    description: 'Easy-clean bowl with non-slip base',
    price: 24.00,
    image: "/images/Stainless Steel Bowl Set.svg",
    tags: ['Cream', 'One size'],
    quantity: 1,
    giftReady: true
  }
];

export const defaultAddress = {
  firstName: 'Amelia',
  lastName: 'Brooks',
  street: '148 Waverly Lane, Apt 4B',
  city: 'Brooklyn',
  postalCode: '11201',
};

export const faqs = [
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase for unopened items. Please contact our support team to initiate a fast and easy return process."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within the US and Canada. We hope to expand our shipping destinations globally in the near future."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships out from our facility, you will receive a confirmation email with a unique tracking number and a link to track your package."
  },
  {
    question: "Are your products grain-free?",
    answer: "We offer both grain-inclusive and grain-free options tailored to your dog's diet. You can easily filter our shop by \"Grain-free\" to find what you need."
  }
];


