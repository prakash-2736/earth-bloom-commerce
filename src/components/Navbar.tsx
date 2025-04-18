
import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">EarthBloom</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/#products" className="text-foreground hover:text-primary transition-colors">Products</Link>
          <Link to="/#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</Link>
          <Link to="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Desktop User Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          
          {currentUser ? (
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/dashboard">
                  <User className="h-5 w-5 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-b border-border">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#products" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/#benefits" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              to="/#contact" 
              className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {currentUser ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/cart" 
                  className="px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart
                </Link>
                <Button variant="outline" onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}>
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button variant="outline" asChild onClick={() => setIsMenuOpen(false)}>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild onClick={() => setIsMenuOpen(false)}>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
