import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const banners = [
  {
    text: '몽 모망 in 조약돌 마을 수원행궁점 소품샵 입점',
    href: '/promotion/flagship.html',
  },
  {
    text: '회원가입 고객 15,000원 쿠폰 지급',
    href: '/member/login.html?noMemberOrder&returnUrl=/index.html',
  },
];

export default function TopBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 bg-black text-white relative overflow-hidden">
      {banners.map((banner, index) => (
        <Link
          key={index}
          to={banner.href}
          className={`absolute w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out ${
            index === activeIndex ? 'top-0 opacity-100' : 'top-full opacity-0'
          }`}
        >
          <h2 className="text-xs font-bold tracking-widest uppercase">{banner.text}</h2>
        </Link>
      ))}
    </div>
  );
}
