import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // 카페24 로그인 페이지로 리다이렉트
    window.location.href = 'https://mongmomang.cafe24.com/member/login.html';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 mt-20">
      <h1 className="text-2xl font-bold mb-8">로그인</h1>

      {/* 1. SNS Login */}
      <div className="w-full max-w-sm mb-8">
        <div className="flex flex-col gap-2">
          <button className="w-full p-3 border rounded bg-[#fee500] font-bold text-sm">Kakao 로그인</button>
          <button className="w-full p-3 border rounded bg-[#03c75a] text-white font-bold text-sm">Naver 로그인</button>
          <button className="w-full p-3 border rounded bg-white font-bold text-sm">Google 로그인</button>
        </div>
      </div>

      {/* 2. Separator */}
      <div className="w-full max-w-sm flex items-center gap-4 mb-8 text-gray-400 text-sm">
        <div className="flex-1 border-t"></div>
        <span>또는</span>
        <div className="flex-1 border-t"></div>
      </div>

      {/* 3. ID/PW Section */}
      <form onSubmit={handleLogin} className="w-full max-w-sm mb-8">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-6 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-4 bg-black text-white rounded font-bold">
          로그인 (카페24로 이동)
        </button>
      </form>
      
      <div className="flex gap-4 text-sm text-gray-600 mb-12">
        <Link to="/find-id" className="hover:underline">아이디 찾기</Link>
        <Link to="/find-password" className="hover:underline">비밀번호 찾기</Link>
        <Link to="/join" className="hover:underline font-bold text-black">회원가입</Link>
      </div>

      {/* 4. Non-member Order Check */}
      <div className="w-full max-w-sm border-t pt-8">
        <h2 className="text-lg font-bold mb-4">비회원 주문조회</h2>
        <p className="text-sm text-gray-500 mb-4">주문번호로 주문조회가 가능합니다.</p>
        <Link to="/order-check" className="block w-full p-4 border border-black text-center rounded font-bold">
          비회원 주문조회
        </Link>
      </div>
    </div>
  );
}
