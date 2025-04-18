
import { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { 
  User, ShoppingBag, FileText, MessageSquare, LogOut, Menu, 
  ChevronRight, Package, Truck, CheckCircle, X
} from "lucide-react";

// Dashboard sub-pages
import Profile from "@/components/dashboard/Profile";
import Orders from "@/components/dashboard/Orders";
import Instructions from "@/components/dashboard/Instructions";
import Feedback from "@/components/dashboard/Feedback";

const UserDashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Helper to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === `/dashboard${path}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden p-4 border-b border-border">
          <Button variant="outline" onClick={toggleSidebar} className="w-full justify-between">
            Dashboard Menu {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
        
        {/* Sidebar */}
        <aside 
          className={`
            ${isSidebarOpen ? 'block' : 'hidden'} 
            md:block bg-sidebar border-r border-border w-full md:w-64 flex-shrink-0
          `}
        >
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h2 className="font-bold text-xl">User Dashboard</h2>
            <ModeToggle />
          </div>
          
          {/* User Info */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 rounded-full p-2">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{currentUser?.email}</p>
                <p className="text-sm text-sidebar-foreground/70">Customer</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="p-2">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/dashboard" 
                  className={`
                    flex items-center space-x-3 px-4 py-2 rounded-md transition-colors
                    ${isActive('') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                  `}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/orders" 
                  className={`
                    flex items-center space-x-3 px-4 py-2 rounded-md transition-colors
                    ${isActive('/orders') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                  `}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/instructions" 
                  className={`
                    flex items-center space-x-3 px-4 py-2 rounded-md transition-colors
                    ${isActive('/instructions') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                  `}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FileText className="h-5 w-5" />
                  <span>Application Instructions</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/feedback" 
                  className={`
                    flex items-center space-x-3 px-4 py-2 rounded-md transition-colors
                    ${isActive('/feedback') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                  `}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Submit Feedback</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Logout */}
          <div className="p-2 mt-auto border-t border-border">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-sidebar-foreground" 
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Button>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserDashboard;
