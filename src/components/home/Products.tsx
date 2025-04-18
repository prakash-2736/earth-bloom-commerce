
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Products = () => {
  const handleAddToCart = () => {
    toast.success("Product added to cart!", {
      description: "1L Bio-Decomposer Spray added to your cart"
    });
  };

  return (
    <section id="products" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
              alt="Bio-Decomposer Spray Bottle" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Bio-Decomposer Spray</h3>
            <div className="flex items-center">
              <span className="text-3xl font-bold">₹400</span>
              <span className="ml-2 text-muted-foreground">(1 Liter)</span>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Our premium bio-decomposer spray accelerates the decomposition of agricultural stubble,
              converting it into nutrient-rich compost for your soil. Each 1-liter bottle treats up to 
              1 acre of farmland.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>100% organic and environmentally friendly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Breaks down stubble in 15-20 days</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Enriches soil with essential nutrients</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Reduces need for chemical fertilizers</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={handleAddToCart}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/cart">View Cart</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
