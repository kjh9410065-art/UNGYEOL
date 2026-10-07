"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays, ChevronDown, Menu, Search, Sparkles, Star, X } from "lucide-react";
import "./page.css";

const categories = [
  ["♡","연애운","마음의 흐름"],["◇","재물운","기회의 흐름"],["✦","직장운","성장의 흐름"],["∞","인간관계","사람의 흐름"],["☼","건강운","몸과 마음"]
];

const features = [
  ["오늘의 운세","오늘 하루의 흐름을 섬세하게 살펴보세요.","https://images.unsplash.com/photo-1534791547706-7b9f5f5f6d3d?auto=format&fit=crop&w=900&q=82"],
  ["타로 카드","한 장의 카드가 전하는 지금의 메시지.","https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=82"],
  ["사주 풀이","타고난 흐름과 앞으로의 방향을 살펴보세요.","https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=82"],
  ["궁합 보기","두 사람 사이의 흐름과 조화를 알아보세요.","https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=82"],
  ["월간 리포트","한 달의 흐름을 한눈에 정리해드립니다.","https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=82"]
];

const fortunes = [
  ["연애운","♡","rose","서두르기보다 서로의 마음을 천천히 확인할수록 좋은 흐름이 만들어집니다."],
  ["재물운","◇","gold","작은 기회를 놓치지 않는 것이 좋습니다. 계획적인 소비가 행운을 키워줍니다."],
  ["직장운","✦","violet","당신의 아이디어가 빛나는 날입니다. 먼저 제안하고 움직이면 흐름이 열립니다."],
  ["건강운","☼","sage","무리한 일정보다 충분한 휴식이 필요합니다. 몸의 작은 신호에도 귀를 기울이세요."]
];

const zodiac = ["전체","쥐띠","소띠","호랑이띠","토끼띠","용띠","뱀띠","말띠","양띠","원숭이띠","닭띠","개띠","돼지띠"];

export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [selectedZodiac,setSelectedZodiac] = useState("전체");

  return <main>
    <section className="hero">
      <div className="hero-bg"/>
      <header className="header">
        <a className="brand" href="#"><strong>UNGYEOL</strong><span>나를 비추는 운명의 빛</span></a>
        <nav className="desktop-nav">{["오늘의 운세","타로","사주","월간 리포트","궁합","운세 캘린더","프리미엄"].map(item=><a href="#fortune" key={item}>{item}</a>)}</nav>
        <div className="header-actions"><button aria-label="검색"><Search size={18}/></button><button className="login">로그인</button><a className="header-cta" href="#fortune">지금 시작하기</a><button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="메뉴">{menuOpen?<X/>:<Menu/>}</button></div>
      </header>
      {menuOpen&&<div className="mobile-nav">{["오늘의 운세","타로","사주","월간 리포트","궁합","운세 캘린더","프리미엄"].map(item=><a href="#fortune" onClick={()=>setMenuOpen(false)} key={item}>{item}<ArrowRight size={16}/></a>)}</div>}
      <div className="hero-inner">
        <div className="hero-copy"><p className="eyebrow">A BRIGHTER YOU</p><h1>오늘, 당신의 이야기를<br/><em>조금 더 빛나게.</em></h1><p className="hero-description">운결은 단순한 운세가 아닌,<br/>당신의 하루를 더 나은 방향으로 이끄는 작은 가이드입니다.</p><a className="primary-btn" href="#fortune">무료 오늘의 운세 보기 <ArrowRight size={17}/></a></div>
        <div className="moon-scene"><div className="moon-halo"/><div className="moon"/><div className="mountains"/><div className="oracle-table"><div className="crystal"><Sparkles size={20}/></div><div className="candle c1"/><div className="candle c2"/></div></div>
      </div>
      <div className="category-strip">{categories.map(([icon,title,sub])=><a href="#fortune" className="category" key={title}><span>{icon}</span><div><b>{title}</b><small>{sub}</small></div></a>)}</div>
    </section>

    <section className="dark-content">
      <div className="section-head"><div><p className="eyebrow">DISCOVER YOUR FLOW</p><h2>당신을 위한 운명의 길잡이</h2></div><p>오늘의 작은 선택부터 앞으로의 큰 흐름까지,<br/>운결이 당신의 이야기를 함께 읽어드립니다.</p></div>
      <div className="feature-grid">{features.map(([title,text,image],i)=><a className="feature-card" href="#fortune" key={title}><div className="feature-image" style={{backgroundImage:"linear-gradient(180deg, transparent 20%, rgba(9,10,27,.9) 100%), url("+image+")"}}/><div className="feature-copy"><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div><span className="round-arrow"><ArrowRight size={18}/></span></a>)}</div>
      <div className="premium"><div className="premium-copy"><p className="eyebrow">UNGYEOL PREMIUM</p><h2>더 깊은 운명의 이야기를<br/><em>만나보세요.</em></h2><p>상세 운세, 월간 리포트, 운세 캘린더,<br/>과거 기록까지. 지금 나만의 운세를 완성하세요.</p><a className="primary-btn" href="#fortune">프리미엄 시작하기 <ArrowRight size={17}/></a></div><div className="premium-art"><div className="tarot-card"><Star size={26}/><span>THE STAR</span><small>XVII</small></div><div className="purple-orb"/></div></div>
    </section>

    <section className="daily" id="fortune">
      <div className="daily-head"><div><p className="eyebrow dark">DAILY FORTUNE</p><h2>오늘의 운세</h2><p>지금 이 순간, 당신에게 전하는 특별한 메시지</p></div><button className="date-picker"><CalendarDays size={18}/> 2026년 10월 8일 <ChevronDown size={16}/></button></div>
      <div className="zodiac-row">{zodiac.map(item=><button className={selectedZodiac===item?"active":""} onClick={()=>setSelectedZodiac(item)} key={item}>{item}</button>)}</div>
      <div className="fortune-grid">{fortunes.map(([title,icon,tone,text])=><article className="fortune-card" key={title}><div className={"fortune-art "+tone}><span>{icon}</span></div><div className="fortune-copy"><span className="mini-label">TODAY'S {title.toUpperCase()}</span><h3>{title}</h3><p>{text}</p><a href="#fortune">자세히 보기 <ArrowRight size={15}/></a></div></article>)}</div>
    </section>
    <footer><div><strong>UNGYEOL</strong><span>나를 비추는 운명의 빛</span></div><p>© 2026 UNGYEOL. All rights reserved.</p></footer>
  </main>;
}