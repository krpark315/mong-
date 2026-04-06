import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 카페24 마이페이지로 리다이렉트
    window.location.href = 'https://mongmomang.cafe24.com/myshop/index.html';
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">마이페이지</h1>
      <p className="mb-4">카페24 마이페이지로 이동 중입니다...</p>
    </div>
  );
}
