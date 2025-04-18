
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Application = () => {
  return (
    <>
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
    </>
  );
};

export default Application;
