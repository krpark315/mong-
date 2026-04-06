import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    // 카페24 회원가입 페이지로 리다이렉트
    window.location.href = 'https://mongmomang.cafe24.com/member/join.html';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      <form onSubmit={handleJoin} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-black text-white rounded">
          가입하기 (카페24로 이동)
        </button>
      </form>
    </div>
  );
}
