import React from 'react';
import { Coffee, MapPin, Phone, Instagram, Clock, Bean, CakeSlice, Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#3D342F] font-serif selection:bg-[#8B5E3C] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full h-24 flex items-center justify-between px-10 z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-[#8B5E3C]/10">
        <div className="flex items-center gap-3">
          <div className="bg-[#8B5E3C] p-2 rounded-lg">
            <Coffee className="w-6 h-6 text-[#FDFCFB]" />
          </div>
          <span className="text-2xl font-black tracking-widest uppercase italic">Cafe Aroma</span>
        </div>
        <div className="hidden md:flex gap-16 text-[10px] font-black tracking-[0.3em] uppercase text-[#8B5E3C]">
          <a href="#about" className="hover:opacity-50 transition-all">About</a>
          <a href="#menu" className="hover:opacity-50 transition-all">Selection</a>
          <a href="#contact" className="hover:opacity-50 transition-all">Location</a>
        </div>
        <button className="bg-[#3D342F] text-[#FDFCFB] px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-[#8B5E3C] transition-all shadow-xl shadow-[#3D342F]/10">
          Order Online
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#8B5E3C]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[#8B5E3C]/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#8B5E3C]/10 text-[#8B5E3C] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
             <Sparkles className="w-4 h-4" /> Roasted Daily In San-cheong
          </div>
          <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter">
            Freshly <br/><span className="italic text-[#8B5E3C]">Roasted.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-60 font-sans tracking-tight">
            매일 아침 직접 볶는 원두의 깊은 향기와 <br className="hidden md:block"/>
            바쁜 일상 속 작은 여유를 선물하는 따뜻하고 아늑한 공간.
          </p>
          <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center font-sans">
             <a href="#menu" className="bg-[#8B5E3C] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-[#3D342F] transition-all shadow-2xl shadow-[#8B5E3C]/20">
               메뉴 둘러보기
             </a>
          </div>
        </div>
      </header>

      {/* Image Block */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto h-[70vh] rounded-[4rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600" className="w-full h-full object-cover hover:scale-105 transition-all duration-1000" alt="Cafe Interior" />
        </div>
      </section>

      {/* Menu Selection */}
      <section id="menu" className="py-32 bg-[#F8F5F2] rounded-[4rem]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-32 space-y-4">
             <h2 className="text-6xl font-bold tracking-tighter">Selection.</h2>
             <p className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 italic underline decoration-[#8B5E3C] decoration-2 underline-offset-8">Curated for your senses</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="space-y-16">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-[#8B5E3C] border-b border-[#8B5E3C]/20 pb-4">Coffee Menu</h3>
              {[
                { name: "Signature Espresso", price: "5.5", desc: "고소한 견과류의 풍미와 적절한 산미의 완벽한 조화" },
                { name: "Creamy Flat White", price: "6.5", desc: "실크처럼 부드러운 우유 거품과 진한 리스트레또" },
                { name: "Hand Drip (Single Origin)", price: "8.0", desc: "매일 엄선된 스페셜티 원두로 내리는 핸드드립 커피" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-4">
                    <h4 className="text-3xl font-bold group-hover:text-[#8B5E3C] transition-colors tracking-tight">{item.name}</h4>
                    <span className="text-xl font-bold text-[#8B5E3C]">{item.price}</span>
                  </div>
                  <p className="text-sm opacity-40 font-sans font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-16">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-[#8B5E3C] border-b border-[#8B5E3C]/20 pb-4">Daily Dessert</h3>
              {[
                { name: "Basque Cheesecake", price: "9.0", desc: "고온에서 빠르게 구워내어 풍부한 풍미와 부드러운 식감" },
                { name: "Classic Butter Scone", price: "5.0", desc: "겉바속촉 수제 스콘과 직접 졸여 만든 계절 과일 잼" },
                { name: "Belgium Brownie", price: "7.5", desc: "최고급 벨기에 초콜릿을 아낌없이 넣은 꾸덕한 브라우니" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-4">
                    <h4 className="text-3xl font-bold group-hover:text-[#8B5E3C] transition-colors tracking-tight">{item.name}</h4>
                    <span className="text-xl font-bold text-[#8B5E3C]">{item.price}</span>
                  </div>
                  <p className="text-sm opacity-40 font-sans font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Location */}
      <footer id="contact" className="bg-[#3D342F] text-[#FDFCFB] pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-end">
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <Coffee className="w-10 h-10 text-[#8B5E3C]" />
              <span className="text-4xl font-black tracking-widest uppercase italic">Cafe Aroma</span>
            </div>
            <p className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Where <br/>Coffee Meets <br/><span className="text-[#8B5E3C]">Culture.</span>
            </p>
          </div>
          <div className="space-y-12 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm font-sans font-bold tracking-widest uppercase opacity-60">
               <div className="space-y-4">
                  <p className="text-[#8B5E3C]">Hours</p>
                  <p>Everyday <br/>08:00 - 22:00</p>
               </div>
               <div className="space-y-4">
                  <p className="text-[#8B5E3C]">Location</p>
                  <p>서울시 종로구 삼청로 456 <br/>카페 아로마빌딩 1F</p>
               </div>
               <div className="space-y-4">
                  <p className="text-[#8B5E3C]">Contact</p>
                  <p>02-999-9999 <br/>@cafearoma_official</p>
               </div>
            </div>
            <div className="flex gap-6 justify-end">
               <a href="#" className="p-4 rounded-full border border-white/10 hover:bg-[#8B5E3C] transition-all"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-40 pt-12 border-t border-white/5 text-center">
           <p className="text-[8px] font-black tracking-[0.5em] uppercase opacity-20 font-sans">© 2026 CAFE AROMA. BREWED WITH PASSION. DESIGNED FOR COMFORT.</p>
        </div>
      </footer>
    </div>
  );
}
