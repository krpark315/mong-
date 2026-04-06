import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Popup from './Popup';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Cafe24 모듈 초기화 (마운트 시 1회만)
    const timer = setTimeout(() => {
      const win = window as any;
      if (win.EC && typeof win.EC.init === 'function') {
        try {
          win.EC.init();
        } catch (e) {
          console.error("Cafe24 EC.init error:", e);
        }
      }
    }, 100); // 100ms 지연

    return () => clearTimeout(timer);
  }, []); // 의존성 배열을 빈 배열로 변경

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white">
      <Popup />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
