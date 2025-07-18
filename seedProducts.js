import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "./models/productModel.js";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/lpu";

const sampleProducts = [
  {
    productName: "Espresso Coffee",
    description: "Rich and bold single shot espresso made from premium Arabica beans. Perfect for coffee enthusiasts who love strong, concentrated coffee.",
    price: 3.50,
    imgUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop"
  },
  {
    productName: "Cappuccino",
    description: "Classic Italian coffee drink with equal parts espresso, steamed milk, and milk foam. Topped with a sprinkle of cocoa powder.",
    price: 4.25,
    imgUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
  },
  {
    productName: "Latte",
    description: "Smooth and creamy coffee with espresso and steamed milk. Perfect for those who prefer a milder coffee taste.",
    price: 4.00,
    imgUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&h=300&fit=crop"
  },
  {
    productName: "Americano",
    description: "Simple and clean coffee made by adding hot water to espresso. Great for those who enjoy the pure coffee taste.",
    price: 3.75,
    imgUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
  },
  {
    productName: "Mocha",
    description: "Delicious blend of espresso, steamed milk, and chocolate syrup. Topped with whipped cream for extra indulgence.",
    price: 4.50,
    imgUrl: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop"
  },
  {
    productName: "Chocolate Croissant",
    description: "Buttery and flaky croissant filled with rich dark chocolate. Perfect accompaniment to any coffee.",
    price: 3.25,
    imgUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038803a?w=400&h=300&fit=crop"
  },
  {
    productName: "Blueberry Muffin",
    description: "Fresh baked muffin loaded with juicy blueberries. Moist and flavorful with a golden brown top.",
    price: 2.75,
    imgUrl: "https://images.unsplash.com/photo-1607958996332-8c204c4f6a2c?w=400&h=300&fit=crop"
  },
  {
    productName: "Cheesecake Slice",
    description: "Creamy New York style cheesecake with a graham cracker crust. Topped with fresh berries.",
    price: 5.00,
    imgUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop"
  },
  {
    productName: "Green Tea",
    description: "Premium Japanese green tea with a delicate, refreshing taste. Rich in antioxidants and perfect for tea lovers.",
    price: 2.50,
    imgUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
  },
  {
    productName: "Iced Coffee",
    description: "Chilled coffee served over ice with your choice of milk. Refreshing and perfect for hot days.",
    price: 3.75,
    imgUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
  },
  {
    productName: "Bagel with Cream Cheese",
    description: "Fresh baked bagel served with generous portion of cream cheese. Available in plain, sesame, or everything seasoning.",
    price: 3.50,
    imgUrl: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?w=400&h=300&fit=crop"
  },
  {
    productName: "Fruit Smoothie",
    description: "Blend of fresh fruits with yogurt and ice. Available in strawberry, banana, or mixed berry flavors.",
    price: 4.25,
    imgUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop"
  }
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing products
    await productModel.deleteMany({});
    console.log("Cleared existing products");

    // Insert sample products
    const result = await productModel.insertMany(sampleProducts);
    console.log(`Successfully added ${result.length} products to the database`);

    // Display added products
    console.log("\nAdded products:");
    result.forEach((product, index) => {
      console.log(`${index + 1}. ${product.productName} - $${product.price}`);
    });

    console.log("\n✅ Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
};

// Run the seeding function
seedProducts(); 