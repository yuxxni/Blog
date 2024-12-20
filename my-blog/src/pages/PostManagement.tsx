import { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostManagement = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('/v1/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('게시글 조회 실패:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId: number) => {
    try {
      await axios.delete(`/v1/posts/${postId}`);
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('게시글 삭제 실패:', error);
    }
  };

  return (
    <div>
      <h1>게시글 관리</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default PostManagement;
