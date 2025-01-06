"use client";

import { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call and success
    setTimeout(() => {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        text: newComment.trim(),
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setIsSubmitting(false);
      alert("Your comment has been posted!");
    }, 1000);
  };

  return (
    <div className="max-w-[1450px] mx-auto w-full bg-gray-100 p-6 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-5">Comments</h2>

      {/* Comments Display */}
      <div className="space-y-4 mb-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow-sm text-gray-800"
            >
              {comment.text}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full h-32 p-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c4ee4]"
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full py-2 text-white font-semibold rounded-lg transition ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#7c4ee4] hover:bg-purple-700"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentSection;