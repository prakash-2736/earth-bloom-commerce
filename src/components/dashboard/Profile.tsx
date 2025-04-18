
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Link } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists() && userDoc.data().role === "admin") {
            setIsAdmin(true);
          }
        } catch (error) {
          console.error("Error checking admin status:", error);
        }
      }
    };
    
    checkAdminStatus();
  }, [currentUser]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      
      <div className="bg-card rounded-lg shadow-sm p-6 space-y-4">
        <div>
          <h2 className="font-semibold text-xl">Account Information</h2>
          <div className="grid gap-4 mt-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p>{currentUser?.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Account Type</p>
              <p>{isAdmin ? "Administrator" : "Customer"}</p>
            </div>
          </div>
        </div>
        
        {isAdmin && (
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <h3 className="font-medium text-primary">Admin Access</h3>
            <p className="text-sm text-muted-foreground mt-1">
              You have administrator privileges. You can manage products, users, and other system settings.
            </p>
            <Button asChild className="mt-4" variant="default">
              <Link to="/admin">Go to Admin Dashboard</Link>
            </Button>
          </div>
        )}
        
        <div>
          <h2 className="font-semibold text-xl">Settings</h2>
          <div className="grid gap-4 mt-4">
            <Button variant="outline">Change Password</Button>
            <Button variant="outline">Notification Preferences</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
