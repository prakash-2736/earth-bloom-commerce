
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Download, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Instructions = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Application Instructions</h1>
        <p className="text-muted-foreground">
          Learn how to properly apply our Bio-Decomposer Spray for maximum effectiveness
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Instruction Manual</h3>
          <p className="text-muted-foreground mb-4">
            Download our detailed PDF guide for step-by-step instructions
          </p>
          <Button variant="outline" className="mt-auto">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <PlayCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
          <p className="text-muted-foreground mb-4">
            Watch our application videos for visual demonstration
          </p>
          <Button className="mt-auto">
            Watch Videos
          </Button>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.9998 7C11.9998 5.34315 10.6567 4 8.99984 4C7.34299 4 5.99984 5.34315 5.99984 7C5.99984 8.65685 7.34299 10 8.99984 10C9.8635 10 10.6382 9.63505 11.1715 9.04995C12.0119 11.3486 14.1547 13 16.6665 13C19.9797 13 22.6665 10.3137 22.6665 7C22.6665 3.68629 19.9797 1 16.6665 1C13.3533 1 10.6665 3.68629 10.6665 7C10.6665 7.35107 10.6959 7.6957 10.7525 8.0312C10.8568 8.01648 10.9632 8.00195 11.0715 7.99023C11.0247 7.66739 10.9998 7.33714 10.9998 7ZM14.6665 7C14.6665 9.20914 15.4574 11.2181 16.7546 12.7342C20.3334 12.385 23.0831 9.45318 22.9997 5.84213C22.9162 2.23108 19.9305 -0.493583 16.3225 0.0464291C12.7145 0.586441 10.0486 3.88825 10.6665 7.5C11.9345 6.02577 13.6665 5 15.6665 5C16.2188 5 16.6665 4.55228 16.6665 4C16.6665 3.44772 16.2188 3 15.6665 3C12.4632 3 9.77211 5.27598 9.10874 8.32603C8.34636 9.37225 6.95333 10 5.41663 10C2.47014 10 0.0832996 12.3868 0.0832996 15.3333C0.0832996 18.2799 2.47014 20.6667 5.41663 20.6667C5.96891 20.6667 6.41663 20.219 6.41663 19.6667C6.41663 19.1144 5.96891 18.6667 5.41663 18.6667C3.57471 18.6667 2.08329 17.1753 2.08329 15.3333C2.08329 13.4914 3.57471 12 5.41663 12C6.74166 12 7.89557 11.2189 8.48295 10.0793C8.82394 10.0272 9.15531 9.93982 9.47255 9.82162C8.53343 13.2633 5.39131 15.825 1.66663 15.9912C1.114 15.9956 0.673351 16.4428 0.677723 16.9954C0.682095 17.5481 1.12924 17.9887 1.6819 17.9843C6.44493 17.7761 10.4301 14.1881 11.5361 9.5536C13.1099 10.4551 14.3332 12.0834 14.3332 14C14.3332 14.5523 14.7809 15 15.3332 15C15.8855 15 16.3332 14.5523 16.3332 14C16.3332 12.0584 15.6432 10.3053 14.5226 8.97492C14.6294 8.33214 14.6665 7.67441 14.6665 7Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Expert Support</h3>
          <p className="text-muted-foreground mb-4">
            Get personalized advice from our agricultural experts
          </p>
          <Button variant="outline" className="mt-auto">
            Contact Support
          </Button>
        </div>
      </div>
      
      <div className="bg-card rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Step-by-Step Application Guide</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="step1">
            <AccordionTrigger className="text-lg font-medium">
              1. Prepare the Solution
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 p-4">
              <p>
                Mix 1 liter of EarthBloom bio-decomposer with 100 liters of water in a clean sprayer tank. 
                This solution covers approximately 1 acre of land.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use clean water free from contaminants</li>
                <li>Ideally, water should be at a neutral pH (6.5-7.5)</li>
                <li>Mix thoroughly to ensure even distribution of the solution</li>
                <li>Prepare fresh solution each time; don't store mixed solution</li>
              </ul>
              <div className="bg-muted p-4 rounded-md mt-4">
                <p className="font-medium">Pro Tip:</p>
                <p>
                  For smaller areas, mix in proportion: 10ml of product per liter of water.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step2">
            <AccordionTrigger className="text-lg font-medium">
              2. Field Preparation
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 p-4">
              <p>
                Ensure the field is in optimal condition before application for best results.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remove any plastic, metal, or non-biodegradable materials</li>
                <li>Ensure stubble is evenly spread across the field</li>
                <li>Lightly till the soil if it's highly compacted (optional)</li>
                <li>For best results, apply after the harvesting of crops</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step3">
            <AccordionTrigger className="text-lg font-medium">
              3. Application Method
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 p-4">
              <p>
                The method of application significantly impacts the effectiveness of the solution.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use a boom sprayer or knapsack sprayer for even distribution</li>
                <li>Apply in the late afternoon to minimize UV exposure</li>
                <li>Ensure complete coverage of all stubble</li>
                <li>Apply at a consistent walking pace</li>
                <li>Avoid application during high winds or rainfall</li>
              </ul>
              <div className="bg-muted p-4 rounded-md mt-4">
                <p className="font-medium">Important:</p>
                <p>
                  Do not mix EarthBloom with herbicides, pesticides, or chemical fertilizers 
                  during application as it may reduce effectiveness.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step4">
            <AccordionTrigger className="text-lg font-medium">
              4. Post-Application Care
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 p-4">
              <p>
                Proper care after application ensures optimal decomposition of stubble.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintain soil moisture (not waterlogged) throughout the decomposition period</li>
                <li>If there's no rainfall, irrigate lightly every 5-7 days</li>
                <li>Avoid disturbing the treated area for at least 2 weeks</li>
                <li>Do not apply any chemicals for at least 10 days after application</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="step5">
            <AccordionTrigger className="text-lg font-medium">
              5. Monitoring & Results
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4 p-4">
              <p>
                Know what to expect and how to monitor the decomposition process.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Decomposition typically completes within 15-20 days</li>
                <li>Stubble will darken and become fragile as decomposition progresses</li>
                <li>Soil will become more friable and rich in organic matter</li>
                <li>Earthworm activity may increase, which is a positive sign</li>
              </ul>
              <div className="bg-muted p-4 rounded-md mt-4">
                <p className="font-medium">When to Replant:</p>
                <p>
                  You can start preparing the field for the next crop after 3 weeks from application. 
                  The decomposed stubble serves as excellent organic matter for your soil.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="bg-card rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Safety Precautions</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            While EarthBloom Bio-Decomposer is an organic product, follow these safety measures:
          </p>
          
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Keep out of reach of children and pets</li>
            <li>Avoid direct contact with eyes and skin</li>
            <li>Wash hands thoroughly after handling</li>
            <li>Store in a cool, dry place away from direct sunlight</li>
            <li>Do not ingest; if accidentally ingested, seek medical attention</li>
            <li>Use gloves and face masks during application as a general precaution</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
