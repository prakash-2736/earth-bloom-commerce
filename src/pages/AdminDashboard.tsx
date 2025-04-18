
import { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  User, Package, BarChart, Settings, LogOut, Menu, X, Users, ShoppingCart
} from "lucide-react";

// Admin sub-pages
// Admin sub-pages
const ProductManagement = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Product Management</h1>
    <p className="text-muted-foreground">Manage your product inventory, prices, and details.</p>
  </div>
);

const UserManagement = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">User Management</h1>
    <p className="text-muted-foreground">View and manage customer accounts.</p>
  </div>
);

const OrderManagement = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Order Management</h1>
    <p className="text-muted-foreground">Track and process customer orders.</p>
  </div>
);

const Analytics = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
    <p className="text-muted-foreground">View sales, customer, and product analytics.</p>
  </div>
);

const SettingsPage = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold">System Settings</h1>
    <p className="text-muted-foreground">Configure system settings and preferences.</p>
  </div>
);

const AdminDashboard = () => {
  const { logout } = useAuth();
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
    return location.pathname === `/admin${path}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      {/* Admin Header */}
      <header className="bg-card py-2 px-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/admin" className="flex items-center">
            <span className="font-bold text-lg text-gradient ml-2">EarthBloom Admin</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>
      
      <div className="flex-1 flex">
        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
            onClick={toggleSidebar}
          />
        )}
        
        {/* Sidebar */}
        <aside 
          className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 transition-transform fixed md:relative z-50 md:z-0
            top-0 left-0 h-full w-64 bg-sidebar border-r border-border
          `}
        >
          {/* Mobile Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-border md:hidden">
            <span className="font-bold">Admin Menu</span>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation */}
          <nav className="p-4">
            <div className="mb-6">
              <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-2">
                Management
              </p>
              <ul className="space-y-1">
                <li>
                  <Link 
                    to="/admin/products" 
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                      ${isActive('/products') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Package className="h-5 w-5" />
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/admin/users" 
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                      ${isActive('/users') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Users className="h-5 w-5" />
                    <span>Users</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/admin/orders" 
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                      ${isActive('/orders') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Orders</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-2">
                Reports
              </p>
              <ul className="space-y-1">
                <li>
                  <Link 
                    to="/admin/analytics" 
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                      ${isActive('/analytics') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <BarChart className="h-5 w-5" />
                    <span>Analytics</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <p className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-2">
                System
              </p>
              <ul className="space-y-1">
                <li>
                  <Link 
                    to="/admin/settings" 
                    className={`
                      flex items-center space-x-3 px-3 py-2 rounded-md transition-colors
                      ${isActive('/settings') ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}
                    `}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          
          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-sidebar-foreground/60">Administrator</p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/orders" element={<OrderManagement />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
