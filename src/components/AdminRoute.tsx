
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { currentUser, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);

  useEffect(() => {
    const checkIfAdmin = async () => {
      if (currentUser) {
        try {
          console.log("Checking admin status for user:", currentUser.uid);
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          
          if (userDoc.exists()) {
            console.log("User document data:", userDoc.data());
            if (userDoc.data().role === "admin") {
              console.log("User is admin!");
              setIsAdmin(true);
            } else {
              console.log("User is not admin. Role:", userDoc.data().role);
            }
          } else {
            console.log("No user document found!");
          }
        } catch (error) {
          console.error("Error checking admin status:", error);
          toast.error("Error verifying admin access");
        }
      }
      setCheckingAdmin(false);
    };

    if (!loading) {
      checkIfAdmin();
    }
  }, [currentUser, loading]);

  if (loading || checkingAdmin) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!currentUser || !isAdmin) {
    console.log("Access denied. User is not admin or not logged in.");
    toast.error("You need admin privileges to access this area");
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

export default AdminRoute;
