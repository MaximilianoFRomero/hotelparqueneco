import { Card, CardContent } from "@/components/ui/Card";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < review.rating ? "text-secondary" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-text mb-4 italic">&ldquo;{review.content}&rdquo;</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-text">{review.author}</span>
          <span className="text-sm text-muted">{review.date}</span>
        </div>
      </CardContent>
    </Card>
  );
}
