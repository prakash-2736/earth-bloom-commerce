
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Leaf, Droplets, Award, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Home = () => {
  const productRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle anchor links
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section with Nature Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" 
            alt="Nature background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionize Stubble Management with EarthBloom
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Our bio-decomposer spray provides an eco-friendly solution for 
              agricultural waste management, improving soil health while reducing 
              environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/#products">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <Link to="/#benefits">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" ref={productRef} className="py-16 bg-secondary/20">
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
                <Button size="lg">
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" ref={benefitsRef} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of EarthBloom</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-secondary/30 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
              <p className="text-muted-foreground">
                Reduces air pollution caused by stubble burning, protecting local air quality and 
                combating climate change. 100% biodegradable with no harmful residues.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-secondary/30 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Soil Health</h3>
              <p className="text-muted-foreground">
                Improves soil structure, water retention, and nutrient content. Creates nutrient-rich
                humus that enhances productivity for subsequent crops.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-secondary/30 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Economic Value</h3>
              <p className="text-muted-foreground">
                Cost-effective alternative to stubble burning and mechanical removal. Reduces the need
                for chemical fertilizers, lowering input costs for farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section id="application" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Application Guide</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Prepare the Solution</h3>
                  <p className="text-muted-foreground">
                    Mix 1 liter of EarthBloom bio-decomposer with 100 liters of water. For best results, 
                    use clean water at a neutral pH. Stir thoroughly to ensure proper mixing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Spray Application</h3>
                  <p className="text-muted-foreground">
                    Evenly spray the prepared solution over stubble-covered fields using a standard 
                    sprayer. Apply in the late afternoon for optimal results, aiming for complete coverage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Maintain Moisture</h3>
                  <p className="text-muted-foreground">
                    Keep the field moist but not waterlogged during the decomposition period. 
                    Light irrigation every 5-7 days is recommended if there's no natural rainfall.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Monitor Decomposition</h3>
                  <p className="text-muted-foreground">
                    Decomposition typically completes within 15-20 days. Look for darkening of stubble 
                    and easy fragmentation when touched as signs that the process is working.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="rounded-xl overflow-hidden w-full h-full max-h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="Application demonstration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join thousands of farmers who've switched to our sustainable 
            stubble management solution. Your soil will thank you.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/#products">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Have questions about our products or need assistance? Reach out to us using the 
                contact form or through any of the methods below.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@earthbloom.com" className="text-primary hover:underline">
                      info@earthbloom.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+11234567890" className="text-primary hover:underline">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mt-6">
                  <h4 className="font-medium mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-foreground hover:text-primary transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
