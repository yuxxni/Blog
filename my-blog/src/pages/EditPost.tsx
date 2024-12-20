import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<Post>(`/v1/posts/${id}`);
        const post = response.data;
        setTitle(post.title);
        setContent(post.content);
        setImageUrl(post.imageUrl || '');
      } catch (error) {
        console.error('게시글 조회 실패:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.patch(`/v1/posts/${id}`, { title, content, imageUrl });
      // 게시글 수정 후 메인 페이지로 이동
      navigate('/main');
    } catch (error) {
      console.error('게시글 수정 실패:', error);
    }
  };

  return (
    <div>
      <h1>게시글 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>내용:</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>이미지 URL:</label>
          <input 
            type="text" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
          />
        </div>
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default EditPost;
