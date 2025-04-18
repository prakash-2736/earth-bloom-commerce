
import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
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
  );
};

export default Contact;
