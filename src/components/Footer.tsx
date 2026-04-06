import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-widest">ON STORE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              당신의 특별한 순간을 더욱 빛나게 해줄<br />
              프리미엄 주얼리 컬렉션.
            </p>
          </div>

          {/* CS Center */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest">CS CENTER</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="text-2xl font-bold text-white mb-4">1588-0000</p>
              <p>MON-FRI 09:00 - 18:00</p>
              <p>LUNCH 12:00 - 13:00</p>
              <p>SAT, SUN, HOLIDAY OFF</p>
            </div>
          </div>

          {/* Bank Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest">BANK INFO</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>국민은행 000-000-000000</p>
              <p>농협은행 000-0000-0000-00</p>
              <p>예금주: (주)온스토어</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-widest">ABOUT US</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#none" className="hover:text-white transition-colors">회사소개</a></li>
              <li><a href="#none" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#none" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#none" className="hover:text-white transition-colors">이용안내</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>
            COMPANY. (주)온스토어 | OWNER. 홍길동 | BUSINESS NO. 000-00-00000<br />
            ADDRESS. 서울특별시 동작구 보라매로0길 00 | E-MAIL. admin@onstore.com
          </p>
          <p className="mt-4 md:mt-0">
            © 2026 ON STORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
