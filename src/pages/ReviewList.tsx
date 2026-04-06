import React from 'react';

export default function ReviewList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">상품 리뷰</h2>
      {/* 카페24 리뷰 게시판 모듈 (게시판 번호 3번 가정) */}
      <div dangerouslySetInnerHTML={{ __html: '<div module="board_list_3"></div>' }} />
    </div>
  );
}
