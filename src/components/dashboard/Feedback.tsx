
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "@/components/ui/use-toast";
import { Star, MessageSquare } from "lucide-react";

const Feedback = () => {
  const { currentUser } = useAuth();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"general" | "product">("general");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subject || !message || (feedbackType === "product" && rating === 0)) {
      toast({
        title: "Incomplete Submission",
        description: "Please fill in all the required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (!currentUser) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to submit feedback.",
        variant: "destructive",
      });
      return;
    }
    
    setSubmitting(true);
    try {
      await addDoc(collection(db, "feedback"), {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        subject,
        message,
        rating: feedbackType === "product" ? rating : null,
        type: feedbackType,
        createdAt: serverTimestamp(),
        status: "pending",
      });
      
      // Reset form
      setSubject("");
      setMessage("");
      setRating(0);
      
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! We appreciate your input.",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Submission Failed",
        description: "Failed to submit your feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Submit Feedback</h1>
        <p className="text-muted-foreground">
          We value your opinions and suggestions. Help us improve our products and services!
        </p>
      </div>
      
      <div className="bg-card rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Feedback Type</Label>
            <div className="flex flex-wrap gap-4">
              <Button
                type="button"
                variant={feedbackType === "general" ? "default" : "outline"}
                className="flex items-center"
                onClick={() => setFeedbackType("general")}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                General Feedback
              </Button>
              
              <Button
                type="button"
                variant={feedbackType === "product" ? "default" : "outline"}
                className="flex items-center"
                onClick={() => setFeedbackType("product")}
              >
                <Star className="h-5 w-5 mr-2" />
                Product Review
              </Button>
            </div>
          </div>
          
          {feedbackType === "product" && (
            <div className="space-y-2">
              <Label>Rating</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= (hoverRating || rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {rating > 0 ? `${rating} out of 5 stars` : "Select a rating"}
                </span>
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter the subject of your feedback"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts, suggestions, or report issues..."
              rows={6}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </div>
      
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
        <p className="text-muted-foreground mb-4">
          Our team reviews all feedback submissions. For product issues or specific questions, 
          we'll respond to you directly via email within 48 hours.
        </p>
        <p className="text-muted-foreground">
          Your feedback helps us improve our products and services. Thank you for taking the time 
          to share your thoughts with us!
        </p>
      </div>
    </div>
  );
};

export default Feedback;
