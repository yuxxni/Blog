import { useState } from 'react';
import axios from 'axios';

interface CommentFormProps {
  postId: number;
  onCommentAdded: () => void;
}

const CommentForm = ({ postId, onCommentAdded }: CommentFormProps) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(`/v1/posts/${postId}/comments`, { content });
      setContent('');
      onCommentAdded();
    } catch (error) {
      console.error('댓글 작성 실패:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="댓글을 작성하세요"
          required 
        />
      </div>
      <button type="submit">댓글 작성</button>
    </form>
  );
};

export default CommentForm;
