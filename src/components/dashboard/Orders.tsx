
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Package, Truck, CheckCircle } from "lucide-react";

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "shipped":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      case "delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getStatusIcon = () => {
    switch (status.toLowerCase()) {
      case "processing":
        return <Package className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles()}`}>
      {getStatusIcon()}
      <span className="ml-1">{status}</span>
    </span>
  );
};

// Sample order data (to be replaced with actual data from Firestore)
const sampleOrders = [
  {
    id: "ORD-001",
    date: "2023-12-15",
    total: 400,
    items: [{ name: "Bio-Decomposer Spray", quantity: 1, price: 400 }],
    status: "Delivered",
  },
  {
    id: "ORD-002",
    date: "2024-01-20",
    total: 800,
    items: [{ name: "Bio-Decomposer Spray", quantity: 2, price: 400 }],
    status: "Shipped",
  },
  {
    id: "ORD-003",
    date: "2024-03-05",
    total: 1200,
    items: [{ name: "Bio-Decomposer Spray", quantity: 3, price: 400 }],
    status: "Processing",
  },
];

const Orders = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState(sampleOrders);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch orders from Firestore
    // This is commented out since we're using sample data for now
    /*
    const fetchOrders = async () => {
      if (currentUser) {
        try {
          const q = query(
            collection(db, "orders"),
            where("userId", "==", currentUser.uid),
            orderBy("createdAt", "desc")
          );
          
          const querySnapshot = await getDocs(q);
          const orderData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          
          setOrders(orderData);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchOrders();
    */
    
    // Simulate loading with sample data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentUser]);

  if (loading) {
    return <div className="flex justify-center p-8">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Orders</h1>
          <p className="text-muted-foreground">View and track your orders</p>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm p-8 text-center">
          <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
          <h3 className="text-xl font-medium mb-2">No orders yet</h3>
          <p className="text-muted-foreground mb-6">
            You haven't placed any orders yet. Start shopping to see your orders here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Orders</h1>
        <p className="text-muted-foreground">View and track your orders</p>
      </div>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-card rounded-lg shadow-sm overflow-hidden border border-border">
            {/* Order Header */}
            <div className="bg-muted p-4 border-b border-border flex flex-wrap justify-between items-center gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Order ID:</span>{" "}
                <span className="font-medium">{order.id}</span>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Date:</span>{" "}
                <span className="font-medium">{order.date}</span>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Total:</span>{" "}
                <span className="font-medium">₹{order.total}</span>
              </div>
              <StatusBadge status={order.status} />
            </div>
            
            {/* Order Items */}
            <div className="p-4">
              <h3 className="font-medium mb-4">Ordered Items</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-left text-sm text-muted-foreground">
                    <tr className="border-b border-border">
                      <th className="pb-2">Product</th>
                      <th className="pb-2">Quantity</th>
                      <th className="pb-2">Price</th>
                      <th className="pb-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-border">
                        <td className="py-3">{item.name}</td>
                        <td className="py-3">{item.quantity}</td>
                        <td className="py-3">₹{item.price}</td>
                        <td className="py-3">₹{item.quantity * item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Order Actions */}
            <div className="px-4 py-3 bg-muted/50 border-t border-border">
              <div className="flex justify-end space-x-3">
                <button className="text-sm text-primary hover:underline">
                  View Details
                </button>
                <button className="text-sm text-primary hover:underline">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
