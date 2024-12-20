import { useEffect, useState } from 'react';
import axios from 'axios';

interface Comment {
  id: number;
  postId: number;
  authorId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface CommentsListProps {
  postId: number;
}

const CommentsList = ({ postId }: CommentsListProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment[]>(`/v1/posts/${postId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('댓글 조회 실패:', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      <h2>댓글</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <small>{new Date(comment.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
