
import { Leaf, Droplets, Award } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of EarthBloom</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  );
};

export default Benefits;
