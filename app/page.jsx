
export default function Home() {
  return (
    <main className="container">
      {/* NAV */}
      <div className="nav">
        <div className="brand">
          <span style={{ fontSize: 18 }}>茲奇製研所</span>
          <span className="badge">Tsuki Design & Innovation Lab</span>
        </div>
        <div className="ctaRow">
          <a className="btn" href="#stellarvision">產品</a>
          <a className="btn" href="#about">理念</a>
          <a className="btn" href="#contact">聯絡</a>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="panel heroMain">
          <h1 className="h1">持續創造的設計研究所</h1>
          <p className="sub">
            溫暖、創造力、活力與生活感的設計實驗室。<br/>
            我們把「專業訓練」做成孩子每天都想玩的任務。
          </p>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="#stellarvision">看 StellarVision</a>
            <a className="btn btnAccent" href="#contact">合作 / 聯絡</a>
          </div>

          <div className="hr" />

          <div className="grid">
            <div className="card">
              <div className="cardTitle">2–8 歲</div>
              <div className="cardText">視覺發展與專注力的關鍵期</div>
            </div>
            <div className="card">
              <div className="cardTitle">多種能力訓練</div>
              <div className="cardText">視覺刺激 × 手眼協調 × 注意力</div>
            </div>
            <div className="card">
              <div className="cardTitle">專業背書</div>
              <div className="cardText">職能治療師與眼科醫師共同把關</div>
            </div>
          </div>
        </div>

        <div className="panel heroSide">
          <img className="heroImg" src="/images/stellarvision.jpg" alt="StellarVision" />
        </div>
      </section>

      {/* PRODUCT */}
      <section id="stellarvision" className="panel section">
        <h2 className="h2">StellarVision</h2>
        <p className="sub" style={{ marginTop: 0 }}>
          2–8 歲兒童視覺訓練與專注力培養教具（已測試）。
          針對家長最常見的痛點：過早近視風險、手眼不協調、注意力不足。
        </p>

        <div className="grid">
          <div className="card">
            <div className="cardTitle">玩得進去</div>
            <div className="cardText">遊戲化設計讓孩子「願意重複練」</div>
          </div>
          <div className="card">
            <div className="cardTitle">練得有效</div>
            <div className="cardText">多模態訓練：視覺、專注、協調一起來</div>
          </div>
          <div className="card">
            <div className="cardTitle">接得上活動</div>
            <div className="cardText">可連結保健課程、校園活動與家庭互動</div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="about" className="panel section">
        <h2 className="h2">為什麼要做這個？</h2>
        <p className="sub" style={{ marginTop: 0 }}>
          數位生活讓孩子更早接觸大量近距離用眼，視覺與專注問題提早出現。
          我們不想再用「說教」解決，而是把專業訓練做成可在家或校園落地的日常遊戲。
        </p>
      </section>

      {/* FIT */}
      <section className="panel section">
        <h2 className="h2">適合誰？</h2>
        <div className="grid">
          <div className="card">
            <div className="cardTitle">孩童</div>
            <div className="cardText">在遊戲中自然訓練視覺能力與專注力</div>
          </div>
          <div className="card">
            <div className="cardTitle">家長</div>
            <div className="cardText">有依據、可理解、可陪玩的專業教具</div>
          </div>
          <div className="card">
            <div className="cardTitle">教育端</div>
            <div className="cardText">可導入課程與活動，形成教學模組</div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="panel section">
        <h2 className="h2">團隊</h2>
        <p className="sub" style={{ marginTop: 0 }}>
          茲奇製研所是一個以設計研究為核心的新創團隊，
          聚焦孩童健康、教育與永續議題，快速迭代、用實測決策。
        </p>
      </section>

      {/* SOCIAL + CONTACT */}
      <section id="contact" className="panel section">
        <h2 className="h2">IG / 社群 & 聯絡</h2>
        <div className="ctaRow">
          {/* 把你的 IG 連結換掉 */}
          <a className="btn" href="https://instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="btn btnPrimary" href="mailto:hello@tsukilab.design">
            hello@tsukilab.design
          </a>
        </div>

        <div className="footer">
          <span>© {new Date().getFullYear()} 茲奇製研所 Tsuki Design & Innovation Lab</span>
          <span className="badge">StellarVision · Prototype Tested</span>
        </div>
      </section>
    </main>
  );
}
