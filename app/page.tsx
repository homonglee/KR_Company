"use client";

import { useEffect, useState } from "react";

const work = [
  { tag: "LIVE · CONTENT", title: "현장에서 완성하는\n라이브 콘텐츠", src: "/images/portfolio-01.png", alt: "라이브커머스와 방송 콘텐츠 제작 현장 모음" },
  { tag: "EDUCATION", title: "경험을 나누는\n크리에이터 교육", src: "/images/portfolio-02.png", alt: "나광열 대표의 콘텐츠 제작 교육 현장" },
  { tag: "TALK · LECTURE", title: "사람과 만나는\n강연과 대화", src: "/images/portfolio-03.png", alt: "별마당도서관 강연 현장" },
  { tag: "LOCAL CULTURE", title: "지역의 시간을\n오늘의 이야기로", src: "/images/history-lecture.jpg", alt: "역사 커뮤니케이터와 함께한 별마당도서관 강연" },
];
const services = [
  ["01","콘텐츠 제작","사진·영상·디지털 콘텐츠의 기획과 제작"],
  ["02","크리에이터 교육","경험을 콘텐츠로 바꾸는 실전형 교육"],
  ["03","라이브 커머스","상품과 사람을 연결하는 라이브 기획·진행"],
  ["04","포토 · 커머스","사진의 감도를 담은 맞춤형 결과물 제작"],
  ["05","브랜딩 · 컨설팅","브랜드의 목소리와 콘텐츠 방향 설계"],
  ["06","지역문화 스토리텔링","역사와 시민의 오늘을 미디어로 기록"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <main id="top">
    <header>
      <a className="logo" href="#top" aria-label="KR컴퍼니 처음으로"><b>K</b><i>R</i></a>
      <nav className={menu ? "open" : ""}><a href="#work" onClick={()=>setMenu(false)}>WORK</a><a href="#about" onClick={()=>setMenu(false)}>ABOUT</a><a href="#services" onClick={()=>setMenu(false)}>SERVICE</a><a href="#contact" onClick={()=>setMenu(false)}>CONTACT</a></nav>
      <button className="menu" aria-expanded={menu} aria-label="메뉴 열기" onClick={()=>setMenu(!menu)}><span/><span/></button>
    </header>
    <section className="hero">
      <div className="hero-logo logo"><b>K</b><i>R</i></div>
      <p className="kicker">KR COMPANY · STORY CREATIVE STUDIO</p>
      <h1>사람의 이야기를 콘텐츠로,<br/><span>콘텐츠를 연결로.</span></h1>
      <p className="sub">사진에서 시작한 관찰력으로 브랜드·지역·사람의 이야기를<br/>오래 남는 콘텐츠로 만듭니다.</p>
      <div className="actions"><a className="pill white" href="#work">작업 방식 보기 →</a><a className="pill line" href="#contact">프로젝트 문의 →</a></div>
    </section>
    <section className="showcase" id="work">
      <div className="center-head"><p>WHAT WE CREATE</p><h2>이야기를 발견하고,<br/>가장 알맞은 방식으로 전합니다.</h2></div>
      <div className="work-strip">{work.map((item)=><article className="work-card" key={item.tag}><img src={item.src} alt={item.alt}/><span>{item.tag}</span><h3>{item.title.split("\n").map((v,i)=><span key={i}>{v}</span>)}</h3><i>↗</i></article>)}</div>
    </section>
    <section className="about" id="about">
      <div className="about-intro"><p className="section-tag">ABOUT KR COMPANY</p><h2>우리는 먼저 보고,<br/>오래 듣습니다.</h2></div>
      <div className="about-copy"><strong>좋은 콘텐츠는 화려한 기술보다<br/>사람을 향한 관심에서 시작됩니다.</strong><p>KR컴퍼니는 사진과 미디어를 기반으로 한 나광열 대표의 경험을 중심으로 움직입니다. 현장의 작은 표정과 고유한 이야기를 발견하고, 사진·영상·라이브·교육이라는 가장 알맞은 언어로 세상과 연결합니다.</p><div className="profile"><span>나광열</span><small>KR컴퍼니 대표 · 콘텐츠 크리에이터</small></div></div>
    </section>
    <section className="field-gallery" aria-label="KR컴퍼니 현장 기록">
      <figure><img src="/images/activity-02.jpg" alt="별마당도서관에서 진행된 강연 현장"/><figcaption><span>LECTURE</span><strong>별마당도서관 강연</strong></figcaption></figure>
      <figure><img src="/images/activity-01.jpg" alt="강연과 콘텐츠 활동 현장 사진 모음"/><figcaption><span>FIELD RECORD</span><strong>사람과 현장을 잇는 콘텐츠</strong></figcaption></figure>
    </section>
    <section className="services" id="services">
      <div className="center-head"><p>OUR SERVICES</p><h2>기획부터 전달까지.<br/>한 번에, 선명하게.</h2></div>
      <div className="service-list">{services.map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><span>＋</span></article>)}</div>
    </section>
    <section className="royal">
      <figure className="royal-photo"><img src="/images/naky-portrait-royal.jpg" alt="나광열 대표 프로필과 정조대왕 활동 모습"/><figcaption>나광열 · KR컴퍼니 대표</figcaption></figure>
      <div><p className="section-tag">PUBLIC STORY · SUWON 2026—2027</p><h2>오늘의 수원을<br/>정조의 마음으로 잇다</h2><p>나광열 대표는 2026–2027 정조대왕 능행차 공동재현의 정조대왕 역으로 선발되었습니다. 사진가와 미디어 크리에이터로 쌓아온 경험을 바탕으로 수원의 역사와 시민의 이야기를 더 가까이 전합니다.</p><blockquote>“수원을 새롭게, 시민을 빛나게 하는 데 힘을 보태겠습니다.”</blockquote><a className="pill line" href="https://news.suwon.go.kr/?mode=blog&p=40&page=1&reqIdx=202606080312401643&viewMode=view" target="_blank" rel="noreferrer">공식 소식 보기 →</a></div>
    </section>
    <section className="benefits">
      <div><b>01</b><strong>사람 중심</strong><p>메시지보다 먼저 사람을 봅니다.</p></div><div><b>02</b><strong>통합 제작</strong><p>기획부터 제작·전달까지 연결합니다.</p></div><div><b>03</b><strong>현장 감각</strong><p>실제 경험을 살아 있는 콘텐츠로 만듭니다.</p></div><div><b>04</b><strong>확장 가능한 결과물</strong><p>여러 채널에서 오래 활용할 수 있습니다.</p></div>
    </section>
    <section className="channels">
      <div className="center-head"><p>MEDIA & CHANNELS</p><h2>기록은 계속됩니다.</h2></div>
      <a href="https://brunch.co.kr/@ddaddasi" target="_blank" rel="noreferrer"><span>BRUNCH</span><strong>따뜻한 사진관 — 사람을 바라보는 사진가의 기록</strong><i>↗</i></a>
      <a href="https://news.suwon.go.kr/?mode=blog&p=40&page=1&reqIdx=202606080312401643&viewMode=view" target="_blank" rel="noreferrer"><span>NEWS</span><strong>2026 정조대왕·혜경궁 홍씨 선발 소식</strong><i>↗</i></a>
      <a href="https://m.mbn.co.kr/tv/689/4471/1421584" target="_blank" rel="noreferrer"><span>VIDEO</span><strong>MBN 전국네트워크뉴스 — 정조대왕 선발 현장</strong><i>↗</i></a>
    </section>
    <section className="faq"><div className="center-head"><p>FAQ</p><h2>자주 묻는 질문</h2></div><div className="faq-list"><details><summary>어떤 프로젝트를 의뢰할 수 있나요?<span>＋</span></summary><p>사진·영상 콘텐츠 제작, 크리에이터 교육, 라이브커머스, 브랜딩과 지역문화 스토리텔링 프로젝트를 함께할 수 있습니다.</p></details><details><summary>프로젝트는 어떻게 시작하나요?<span>＋</span></summary><p>이메일이나 전화로 목적과 일정, 필요한 결과물을 알려주시면 대화를 통해 가장 알맞은 진행 방식을 제안합니다.</p></details><details><summary>교육과 강연도 가능한가요?<span>＋</span></summary><p>대상과 교육 목적에 맞춰 콘텐츠 기획·제작과 크리에이터 실무 중심의 프로그램을 협의할 수 있습니다.</p></details></div></section>
    <section className="contact" id="contact"><p>START A CONVERSATION</p><h2>당신의 이야기는<br/><span>어디에서 시작되나요?</span></h2><div className="actions"><a className="pill white" href="mailto:tokyolive@naver.com">이메일 보내기 →</a><a className="pill line" href="tel:+821073737071">전화 문의 →</a></div></section>
    <footer><div className="logo"><b>K</b><i>R</i></div><div><p>KR컴퍼니 · 대표 나광열</p><p>사업자등록번호 135-18-98348 · 통신판매업 신고 2021-수원장안-0506</p></div><p>© 2026 KR COMPANY</p></footer>
  </main>;
}
