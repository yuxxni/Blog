import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';

interface Post {
  id: number;
  authorId: number;
  title: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  dislikeCount: number;
}

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<Post>(`/v1/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('게시글 조회 실패:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleLike = async () => {
    try {
      await axios.post(`/v1/posts/${id}/like`);
      setPost(prevPost => prevPost ? { ...prevPost, likeCount: prevPost.likeCount + 1 } : null);
    } catch (error) {
      console.error('좋아요 실패:', error);
    }
  };

  const handleDislike = async () => {
    try {
      await axios.post(`/v1/posts/${id}/dislike`);
      setPost(prevPost => prevPost ? { ...prevPost, dislikeCount: prevPost.dislikeCount + 1 } : null);
    } catch (error) {
      console.error('싫어요 실패:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <div>
        <button onClick={handleLike}>좋아요 {post.likeCount}</button>
        <button onClick={handleDislike}>싫어요 {post.dislikeCount}</button>
      </div>
      <CommentsList postId={post.id} />
      <CommentForm postId={post.id} onCommentAdded={() => { /* 댓글 추가 시 필요한 액션 */ }} />
    </div>
  );
};

export default PostDetail;
