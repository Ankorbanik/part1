<script>
//<![CDATA[
/* ================================================================
   PART 1 — ULTIMATE CINEMATIC MODAL (v8 Ultimate Edition)
   ✓ Premium Red Buttons (Restored)
   ✓ Multi-API Rich Data Integration (TMDB, AniList, TVmaze, OMDb, etc.)
   ✓ Advanced Animations & Glassmorphism
   ✓ All Seasons/Episodes Grid with Instant Server Auto-Detection
   ✓ Smart Server Sorting (Working servers first)
================================================================ */

/* ═══════════════════════════════════════════════
   1. CSS INJECTION — Premium Styles & Animations
═══════════════════════════════════════════════ */
(function injectCVMstyles() {
  if (document.getElementById('cvm-v5-styles')) return;
  var s = document.createElement('style');
  s.id = 'cvm-v5-styles';
  s.textContent = `
    /* ── Base modal ── */
    .cv-modal-box { background: linear-gradient(135deg, #0a0a0f 0%, #14141c 55%, #0d0d14 100%); }
    #cv-m-hero-img { transition: opacity .4s ease; will-change: transform; }
    
    /* ── Poster Size Optimization ── */
    .cv-m-poster { 
      box-shadow: 0 20px 60px rgba(229,9,20,.15), 0 8px 30px rgba(0,0,0,.7); 
      transition: transform .4s cubic-bezier(.4,0,.2,1); 
      max-height: 340px;
      width: auto;
      object-fit: cover;
      border-radius: 12px;
    }
    .cv-m-poster:hover { transform: scale(1.05) translateY(-8px); box-shadow: 0 25px 70px rgba(229,9,20,.3); }
    .cv-m-title { text-shadow: 0 4px 20px rgba(0,0,0,.85); }

    /* ── Action Buttons (Premium Red Restored) ── */
    .cv-modal-actions-bar { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 12px !important; margin-top: 20px !important; width: 100%; }
    .cv-btn-play { 
      padding: 14px 20px !important; font-size: 14px !important; border-radius: 30px !important; 
      font-weight: 700 !important; display: flex !important; align-items: center; justify-content: center; 
      gap: 8px; border: none; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); cursor: pointer; 
      letter-spacing: 0.5px; text-transform: uppercase;
    }
    
    /* All buttons have the premium red look */
    .cv-btn-watch, .cv-btn-download { 
      background: linear-gradient(135deg, #e50914 0%, #b20710 100%) !important; 
      color: #fff !important; 
      box-shadow: 0 6px 20px rgba(229,9,20,0.4), inset 0 1px 1px rgba(255,255,255,0.2); 
      border: 1px solid rgba(255,255,255,0.1) !important;
    }
    .cv-btn-watch:hover, .cv-btn-download:hover { 
      transform: scale(1.05) translateY(-3px); 
      box-shadow: 0 12px 30px rgba(229,9,20,0.7), inset 0 1px 1px rgba(255,255,255,0.3); 
    }
    @media(max-width: 600px) { .cv-modal-actions-bar { grid-template-columns: 1fr !important; } }

    /* ── Badges ── */
    .cvm-badge { display:inline-flex; align-items:center; gap:5px; padding:6px 14px; border-radius:20px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.14); font-size:12px; font-weight:700; color:#e5e5e5; backdrop-filter:blur(10px); transition:all .3s; }
    .cvm-badge:hover { background:rgba(255,255,255,.15); transform:translateY(-3px) scale(1.05); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
    .cvm-badge-gold { color:#ffd700; border-color:rgba(255,215,0,.35); background:rgba(255,215,0,.08); box-shadow: 0 0 10px rgba(255,215,0,0.1); }
    .cvm-badge-imdb { color:#f5c518; border-color:rgba(245,197,24,.35); background:rgba(245,197,24,.08); }

    /* ── Rating Rings (Ultra Premium) ── */
    .cvm-quick-stats { display:flex; flex-wrap:wrap; gap:16px; margin:25px 0; justify-content: flex-start; }
    .cvm-stat-card { 
      position:relative; display:flex; flex-direction:column; align-items:center; gap:12px; 
      padding:20px 25px; min-width:120px; 
      background:linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.02)); 
      border:1px solid rgba(255,255,255,.1); border-radius:22px; backdrop-filter:blur(25px); 
      overflow:hidden; transition:all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    .cvm-stat-card:hover { 
      transform:translateY(-8px) scale(1.05); 
      border-color:rgba(229,9,20,.6); 
      box-shadow:0 15px 40px rgba(229,9,20,.3), inset 0 0 20px rgba(229,9,20,0.1); 
    }
    .cvm-rating-ring { position:relative; width:75px; height:75px; }
    .cvm-rating-ring svg { transform:rotate(-90deg); }
    .cvm-rating-ring .ring-bg { fill:none; stroke:rgba(255,255,255,.08); stroke-width:5; }
    .cvm-rating-ring .ring-fill { fill:none; stroke-width:5; stroke-linecap:round; }
    .cvm-rating-ring .ring-value { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:20px; text-shadow: 0 0 15px rgba(255,255,255,0.6); }
    .cvm-stat-label { font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1.2px; color:#aaa; }
    .cvm-stat-num { font-size:32px; font-weight:900; color:#fff; text-shadow: 0 0 20px rgba(255,255,255,0.4); }

    /* ── Tagline & Keywords ── */
    .cvm-tagline { position:relative; padding:14px 0 14px 22px; border-left:4px solid #e50914; font-style:italic; font-size:16px; color:#d0d0d8; margin-bottom:20px; line-height:1.6; animation:cvmFadeUp .6s ease; font-weight: 500; }
    .cvm-tagline i { color:#e50914; margin-right:8px; opacity:.8; }
    .cvm-keywords { margin-top:25px; }
    .cvm-keywords-label { font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1.5px; color:#6b6b80; margin-bottom:12px; }
    .cvm-keywords-list { display:flex; flex-wrap:wrap; gap:10px; }
    .cvm-keyword { padding:6px 15px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:25px; font-size:12px; color:#b3b3c4; font-weight:600; transition:all .3s; animation:cvmFadeUp .4s ease both; }
    .cvm-keyword:hover { background:rgba(229,9,20,.15); border-color:rgba(229,9,20,.6); color:#fff; transform:translateY(-3px) scale(1.05); box-shadow: 0 5px 15px rgba(229,9,20,0.2); }

    /* ── Bento Grid (Rich Data Details) ── */
    .cvm-bento-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px; margin-top:25px; }
    .cvm-glass-card { 
      background:linear-gradient(145deg,rgba(30,33,40,0.85),rgba(15,17,22,0.95)); 
      backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.08); 
      border-radius:20px; padding:25px; box-shadow:0 15px 35px rgba(0,0,0,0.4); 
      transition:all .4s ease; animation: cvmFadeUp 0.6s ease both; position: relative; overflow: hidden;
    }
    .cvm-glass-card::before {
      content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
      transform: skewX(-20deg); transition: 0.5s;
    }
    .cvm-glass-card:hover::before { left: 200%; }
    .cvm-glass-card:hover { border-color:rgba(229,9,20,0.4); transform:translateY(-5px); box-shadow:0 25px 50px rgba(229,9,20,0.15); }
    .cvm-section-heading { display:flex; align-items:center; gap:12px; font-size:15px; font-weight:800; text-transform:uppercase; letter-spacing:1.5px; color:#fff; margin-bottom:22px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:15px; }
    .cvm-info-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:15px; }
    .cvm-info-item { padding:16px; background:rgba(0,0,0,.35); border-left:4px solid rgba(34,211,238,.6); border-radius:10px; transition:all .3s; animation: cvmFadeUp 0.5s ease both; }
    .cvm-info-item:hover { background:rgba(255,255,255,.06); transform:translateX(5px); border-left-color: #22d3ee; box-shadow: 0 5px 15px rgba(34,211,238,0.1); }
    .cvm-info-label { display:flex; align-items:center; gap:8px; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:#22d3ee; margin-bottom:8px; }
    .cvm-info-value { font-size:14px; font-weight:600; color:#fff; line-height:1.5; word-break: break-word; }

    /* ── Cast & Crew ── */
    .cvm-cast-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:16px; padding:5px 0; }
    .cvm-cast-card { cursor:pointer; transition:transform .4s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation:cvmFadeUp .5s ease both; text-align:center; }
    .cvm-cast-card:hover { transform:translateY(-8px) scale(1.05); }
    .cvm-cast-img-wrap { position:relative; width:100%; aspect-ratio:1; border-radius:50%; overflow:hidden; background:#1a1a24; border:3px solid rgba(255,255,255,.1); transition:all .3s; margin-bottom:12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
    .cvm-cast-card:hover .cvm-cast-img-wrap { border-color:#e50914; box-shadow:0 15px 35px rgba(229,9,20,.4); }
    .cvm-cast-img-wrap img { width:100%; height:100%; object-fit:cover; transition: transform .5s; }
    .cvm-cast-card:hover .cvm-cast-img-wrap img { transform: scale(1.1); }
    .cvm-cast-name { font-size:13px; font-weight:700; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .cvm-cast-role { font-size:11px; color:#888; margin-top:3px; }
    
    .cvm-crew-section { margin:25px 0; padding:22px; background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.01)); border:1px solid rgba(255,255,255,.08); border-radius:18px; box-shadow: inset 0 0 20px rgba(0,0,0,0.2); }
    .cvm-crew-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:15px; }
    .cvm-crew-item { padding:15px; background:rgba(0,0,0,.3); border-radius:12px; border-left: 3px solid #6b6b80; transition: all 0.3s; }
    .cvm-crew-item:hover { border-left-color: #fff; background:rgba(255,255,255,0.05); transform: translateY(-2px); }
    .cvm-crew-role { font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:#6b6b80; margin-bottom:6px; }
    .cvm-crew-names { font-size:13px; font-weight:600; color:#e5e5e5; }

    /* ── Videos, Gallery, Reviews ── */
    .cvm-videos-section, .cvm-reviews-section, .cvm-seasons-section { margin:25px 0; padding:22px; background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.01)); border:1px solid rgba(255,255,255,.08); border-radius:18px; }
    .cvm-videos-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:16px; }
    .cvm-video-card { cursor:pointer; transition:transform .3s; border-radius: 12px; overflow: hidden; background: rgba(0,0,0,0.3); padding-bottom: 10px; }
    .cvm-video-card:hover { transform:translateY(-6px); box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .cvm-video-thumb { position:relative; width:100%; aspect-ratio:16/9; background:#1a1a24; margin-bottom:10px; }
    .cvm-video-thumb img { width:100%; height:100%; object-fit:cover; }
    .cvm-video-name { font-size:13px; font-weight:600; color:#fff; overflow:hidden; text-overflow:ellipsis; padding: 0 10px; }
    
    .cvm-reviews-list { display:flex; flex-direction:column; gap:16px; }
    .cvm-review-card { padding:18px; background:rgba(0,0,0,.35); border-radius:14px; border-left: 3px solid #e50914; }
    .cvm-review-header { display:flex; align-items:center; gap:14px; margin-bottom:12px; }
    .cvm-review-avatar { width:45px; height:45px; border-radius:50%; object-fit:cover; background: #222; border: 2px solid #444; }
    .cvm-review-author { font-size:14px; font-weight:700; color:#fff; }
    .cvm-review-rating { font-size:12px; color:#ffd700; margin-top:3px; }
    .cvm-review-content { font-size:14px; line-height:1.7; color:#b3b3c4; }

    .cvm-recs-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(140px,1fr)); gap:16px; }
    .cvm-seasons-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:16px; }
    .cvm-season-card { background:rgba(0,0,0,.3); border-radius:12px; overflow:hidden; transition:transform .3s; cursor: pointer; }
    .cvm-season-card:hover { transform:translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
    .cvm-season-poster { width:100%; aspect-ratio:2/3; object-fit:cover; transition: transform 0.4s; }
    .cvm-season-card:hover .cvm-season-poster { transform: scale(1.05); }
    .cvm-season-info { padding:12px; }
    .cvm-season-name { font-size:13px; font-weight:700; color:#fff; }
    .cvm-season-meta { font-size:11px; color:#6b6b80; margin-top:4px; }

    /* ── Multi-API Data Sources Tag ── */
    .cvm-api-sources { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; }
    .cvm-api-tag { font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 4px 10px; border-radius: 12px; background: rgba(34,211,238,0.1); color: #22d3ee; border: 1px solid rgba(34,211,238,0.3); letter-spacing: 0.5px; transition: all 0.3s; }
    .cvm-api-tag:hover { background: rgba(34,211,238,0.2); transform: translateY(-2px); }

    /* ── New Season/Episode Grid (All Seasons at once) ── */
    .cvm-season-block { margin-bottom: 25px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 20px; animation: cvmFadeUp 0.5s ease both; }
    .cvm-season-header { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;}
    .cv-episode-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:12px; }
    .cv-episode-btn { display:flex; flex-direction:column; gap:6px; padding:12px 14px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:12px; color:#e5e5e5; cursor:pointer; text-align:left; transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); font-family:inherit; position: relative; overflow: hidden; }
    .cv-episode-btn:hover { background:rgba(229,9,20,0.15); border-color:#e50914; transform:translateY(-3px); box-shadow: 0 5px 15px rgba(229,9,20,0.2); }
    .cv-episode-btn.cv-active { background:linear-gradient(135deg, rgba(229,9,20,0.4), rgba(178,7,16,0.6)); border-color:#e50914; box-shadow:0 0 20px rgba(229,9,20,0.5); animation: cvmPulse 2s infinite; }
    .cv-ep-num { font-size:12px; font-weight:900; color:#22d3ee; text-transform:uppercase; letter-spacing: 0.5px; }
    .cv-episode-btn.cv-active .cv-ep-num { color:#fff; text-shadow: 0 0 5px #fff; }
    .cv-ep-name { font-size:13px; font-weight:600; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }

    /* ── Actor Layer ── */
    .cvm-actor-layer { margin:25px 0; padding:22px; background:linear-gradient(135deg,rgba(229,9,20,.08),rgba(34,211,238,.05)); border:1px solid rgba(229,9,20,.2); border-radius:18px; animation:cvmSlideDown .4s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
    .cvm-actor-layer-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }
    .cvm-actor-layer-name { font-size:18px; font-weight:800; color:#fff; }
    .cvm-actor-close { background:rgba(255,255,255,.08); border:none; color:#fff; width:36px; height:36px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; transition: all 0.3s; }
    .cvm-actor-close:hover { background:rgba(229,9,20,.8); transform: rotate(90deg) scale(1.1); }
    .cvm-actor-bio { font-size:14px; color:#b3b3c4; line-height:1.7; margin-bottom:20px; }

    /* ── Animations ── */
    @keyframes cvmFadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
    @keyframes cvmSlideDown { from { opacity:0; transform:translateY(-30px); } to { opacity:1; transform:translateY(0); } }
    @keyframes cvmKenBurns { 0% { transform:scale(1) translate(0,0); } 50% { transform:scale(1.1) translate(-1%,-1%); } 100% { transform:scale(1) translate(0,0); } }
    @keyframes cvmRingFill { to { stroke-dashoffset: var(--target-offset,0); } }
    @keyframes cvmPulse { 0% { box-shadow: 0 0 0 0 rgba(229,9,20,0.7); } 70% { box-shadow: 0 0 0 15px rgba(229,9,20,0); } 100% { box-shadow: 0 0 0 0 rgba(229,9,20,0); } }
    
    @media (max-width:768px) {
      .cvm-quick-stats { gap:12px; justify-content: center; }
      .cvm-stat-card { min-width:95px; padding:15px; }
      .cvm-rating-ring { width: 60px; height: 60px; }
      .cvm-rating-ring .ring-value { font-size: 16px; }
      .cvm-cast-grid { grid-template-columns:repeat(auto-fill,minmax(90px,1fr)); gap:12px; }
      .cvm-bento-grid { grid-template-columns:1fr; }
      .cv-episode-grid { grid-template-columns:repeat(2, 1fr); }
    }
  `;
  document.head.appendChild(s);
})();

/* ═══════════════════════════════════════════════
   2. HELPERS
═══════════════════════════════════════════════ */
var CVM = {
  fmtNum: function(n) { if (!n) return '0'; if (n >= 1e9) return (n/1e9).toFixed(1)+'B'; if (n >= 1e6) return (n/1e6).toFixed(1)+'M'; if (n >= 1e3) return (n/1e3).toFixed(1)+'K'; return String(n); },
  fmtMoney: function(n) { if (!n || n === 0) return '—'; if (n >= 1e9) return '$'+(n/1e9).toFixed(2)+'B'; if (n >= 1e6) return '$'+(n/1e6).toFixed(1)+'M'; if (n >= 1e3) return '$'+(n/1e3).toFixed(0)+'K'; return '$'+n; },
  fmtRuntime: function(m) { if (!m) return '—'; var h = Math.floor(m/60), mm = m%60; return h > 0 ? (h+'h '+mm+'m') : (mm+'m'); },
  esc: function(s) { if (s == null) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); },
  animateCounter: function(el, from, to, dur) { if (!el) return; dur = dur || 1200; var start = performance.now(); function tick(now) { var p = Math.min((now - start) / dur, 1); var e = 1 - Math.pow(1 - p, 3); el.textContent = CVM.fmtNum(Math.round(from + (to - from) * e)); if (p < 1) requestAnimationFrame(tick); } requestAnimationFrame(tick); }
};

/* ═══════════════════════════════════════════════
   3. MODAL ENGINE
═══════════════════════════════════════════════ */
var CVModal = {
  _renderId: 0, current: null, heroInterval: null, _isModalOpen: false,

  open: async function(id, type, isBackNavigation) {
    var myId = ++this._renderId;
    var wasOpen = this._isModalOpen;
    this._isModalOpen = true;

    if (!isBackNavigation) {
      if (!wasOpen) history.pushState({ id: id, type: type }, '');
      else history.replaceState({ id: id, type: type }, '');
    }

    var veil = document.getElementById('cv-modal-veil');
    if (veil) veil.classList.add('cv-open');
    document.body.style.overflow = 'hidden';

    this._cleanup();
    this._showSkeletons();

    var res = await CVAPI.tmdbDetail(id, type).catch(function(e) { return null; });
    if (myId !== this._renderId) return;

    if (!res) {
      document.getElementById('cv-m-title').textContent = 'Failed to load';
      document.getElementById('cv-m-desc').textContent = 'Could not fetch details.';
      return;
    }

    var data = res.tmdb ? res.tmdb : res;
    var omdb = res.omdb || null;
    var watchmode = res.watchmode || null;
    this.current = { id: id, type: type, data: data, omdb: omdb };

    try {
      this._renderHero(data, omdb, myId);
      this._renderQuickStats(data, omdb, myId);
      this._renderStoryline(data, myId);
      this._renderRichDetails(data, omdb, watchmode, myId); // Upgraded Rich Details
      this._renderCast(data, myId);
      this._renderCrew(data, myId);
      this._renderVideos(data, myId);
      this._renderGallery(data, myId);
      this._renderReviews(data, myId);
      this._renderSeasons(data, type, myId);
      this._renderAnalytics(data, omdb, myId);
      this._renderExternalLinks(data, myId);

      this._loadRecommendations(id, type, data, myId);
      this._loadMainActor(data, myId);

      if (window.CVPlayer && typeof CVPlayer.init === 'function') CVPlayer.init();
    } catch(e) { console.error('[CVModal] render error:', e); }
  },

  _cleanup: function() {
    if (this.heroInterval) { clearInterval(this.heroInterval); this.heroInterval = null; }
    ['cv-actor-stack', 'cv-recs-grid', 'cv-main-actor-grid', 'cv-gallery-container', 'cv-server-tabs', 'cv-bars-group', 'cv-tv-selector'].forEach(function(eid) {
      var el = document.getElementById(eid); if (el) el.innerHTML = '';
    });
    document.querySelectorAll('.cvm-quick-stats, .cvm-tagline, .cvm-crew-section, .cvm-videos-section, .cvm-reviews-section, .cvm-seasons-section, .cvm-ext-links').forEach(function(el){ el.remove(); });
    var pf = document.getElementById('cv-player-frame'); if (pf) pf.src = '';
    var tf = document.getElementById('cv-trailer-frame'); if (tf) tf.src = '';
  },

  _showSkeletons: function() {
    document.getElementById('cv-m-title').textContent = 'Loading...';
    document.getElementById('cv-m-desc').textContent = 'Loading...';
    document.getElementById('cv-m-meta').innerHTML = '<span style="color:#aaa;"><i class="fas fa-spinner fa-spin"></i> Loading...</span>';
    ['cv-player-section','cv-trailer-wrap','cv-image-gallery','cv-recs-wrap','cv-main-actor-wrap','cv-analytics-wrap','cv-imdb-info','cv-tv-selector'].forEach(function(sid) { var el = document.getElementById(sid); if (el) el.style.display = 'none'; });
    var cast = document.getElementById('cv-cast-scroll'); if (cast) cast.innerHTML = '<div style="color:#888;padding:20px;"><i class="fas fa-spinner fa-spin"></i> Loading cast...</div>';
    var stack = document.getElementById('cv-actor-stack'); if (stack) stack.innerHTML = '';
  },

  _renderHero: function(data, omdb, myId) {
    var self = this;
    var backdrops = (data.images && data.images.backdrops) ? data.images.backdrops : [];
    var heroImg = document.getElementById('cv-m-hero-img');
    var posterEl = document.getElementById('cv-m-poster');
    var titleEl = document.getElementById('cv-m-title');
    var metaEl = document.getElementById('cv-m-meta');

    if (backdrops.length > 0 && heroImg) {
      var idx = 0;
      heroImg.src = 'https://image.tmdb.org/t/p/w1280' + backdrops[0].file_path;
      heroImg.style.animation = 'cvmKenBurns 25s ease-in-out infinite';
      if (backdrops.length > 1) {
        this.heroInterval = setInterval(function() {
          if (myId !== self._renderId) { clearInterval(self.heroInterval); return; }
          idx = (idx + 1) % backdrops.length;
          heroImg.style.opacity = '0.2';
          setTimeout(function() { if (myId !== self._renderId) return; heroImg.src = 'https://image.tmdb.org/t/p/w1280' + backdrops[idx].file_path; heroImg.style.opacity = '1'; }, 400);
        }, 6000);
      }
    } else if (data.backdrop_path && heroImg) { heroImg.src = 'https://image.tmdb.org/t/p/w1280' + data.backdrop_path; }
    if (data.poster_path && posterEl) posterEl.src = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
    if (titleEl) titleEl.textContent = data.title || data.name || 'Untitled';

    // Uniform Premium Red Buttons
    setTimeout(function normalizeActionButtons() {
      var dlLeft = document.getElementById('btn-download-left');
      var dlRight = document.getElementById('btn-download-right');
      if (!dlLeft || !dlRight) return;
      dlLeft.removeAttribute('style'); dlRight.removeAttribute('style');
      
      dlLeft.className = 'cv-btn-play cv-btn-watch'; 
      dlRight.className = 'cv-btn-play cv-btn-watch'; 
      
      var parent = dlLeft.parentElement;
      if (parent) {
        parent.classList.add('cv-modal-actions-bar');
        var watch = parent.querySelector('button[onclick*="CVPlayer"]');
        if (watch) { watch.removeAttribute('style'); watch.className = 'cv-btn-play cv-btn-watch'; }
        if (watch) { parent.appendChild(dlLeft); parent.appendChild(watch); parent.appendChild(dlRight); }
        
        var type = CVModal.current.type; 
        var id = CVModal.current.id;
        var tmdbUrl = 'https://www.themoviedb.org/' + type + '/' + id + '/watch';
        
        dlLeft.onclick = function () { window.open(tmdbUrl, '_blank'); };
        dlRight.onclick = function () { window.open(tmdbUrl, '_blank'); };
      }
    }, 50);

    var badges = '';
    var tmdbR = data.vote_average ? data.vote_average.toFixed(1) : null;
    var imdbR = (omdb && omdb.imdbRating && omdb.imdbRating !== 'N/A') ? omdb.imdbRating : null;
    var year = (data.release_date || data.first_air_date || '').slice(0, 4);
    var runtime = data.runtime ? CVM.fmtRuntime(data.runtime) : (data.number_of_seasons ? data.number_of_seasons + 'S' : null);
    
    if (tmdbR) badges += '<span class="cvm-badge cvm-badge-gold"><i class="fas fa-star"></i> ' + tmdbR + '</span>';
    if (imdbR) badges += '<span class="cvm-badge cvm-badge-imdb"><i class="fab fa-imdb"></i> ' + imdbR + '</span>';
    if (year) badges += '<span class="cvm-badge"><i class="fas fa-calendar"></i> ' + year + '</span>';
    if (runtime) badges += '<span class="cvm-badge"><i class="fas fa-clock"></i> ' + runtime + '</span>';
    if (data.status && data.status !== 'Released') badges += '<span class="cvm-badge cvm-badge-status">' + CVM.esc(data.status) + '</span>';
    if (metaEl) metaEl.innerHTML = badges;
  },

  _renderQuickStats: function(data, omdb, myId) {
    var metaEl = document.getElementById('cv-m-meta'); if (!metaEl) return;
    var tmdbR = parseFloat(data.vote_average) || 0;
    var imdbR = (omdb && omdb.imdbRating && omdb.imdbRating !== 'N/A') ? parseFloat(omdb.imdbRating) : 0;
    var rtR = 0, metaR = 0;
    if (omdb && omdb.Ratings) { omdb.Ratings.forEach(function(r) { if (r.Source === 'Rotten Tomatoes') rtR = parseFloat(r.Value) / 10; }); }
    if (omdb && omdb.Metascore && omdb.Metascore !== 'N/A') metaR = parseFloat(omdb.Metascore) / 10;

    // Check for AniList/Jikan/MAL ratings
    var malR = data.jikan && data.jikan.score ? parseFloat(data.jikan.score) : (data.anilist && data.anilist.averageScore ? data.anilist.averageScore / 10 : 0);
    var anilistR = data.anilist && data.anilist.averageScore ? data.anilist.averageScore / 10 : 0;

    var stats = [];
    if (tmdbR > 0) stats.push({ label: 'TMDB', v: tmdbR, color: '#01b4e4' });
    if (imdbR > 0) stats.push({ label: 'IMDb', v: imdbR, color: '#f5c518' });
    if (malR > 0) stats.push({ label: 'MAL', v: malR, color: '#2e51a2' });
    if (rtR > 0) stats.push({ label: 'Rotten', v: rtR, color: '#fa3232' });
    if (metaR > 0) stats.push({ label: 'Meta', v: metaR, color: '#66cc33' });

    var html = '<div class="cvm-quick-stats">';
    var C = 2 * Math.PI * 32; // Bigger ring
    stats.forEach(function(s) {
      var off = C - (s.v / 10) * C;
      html += '<div class="cvm-stat-card"><div class="cvm-rating-ring"><svg width="80" height="80" viewBox="0 0 80 80"><circle class="ring-bg" cx="40" cy="40" r="32"/><circle class="ring-fill" cx="40" cy="40" r="32" style="stroke:' + s.color + '; stroke-dasharray:' + C + '; stroke-dashoffset:' + C + '; animation:cvmRingFill 1.8s ease-out forwards; --target-offset:' + off + '; filter: drop-shadow(0 0 8px ' + s.color + ');"/></svg><div class="ring-value" style="color:' + s.color + ';">' + s.v.toFixed(1) + '</div></div><div class="cvm-stat-label">' + s.label + '</div></div>';
    });
    if (data.vote_count) html += '<div class="cvm-stat-card"><div class="cvm-stat-num" data-target="' + data.vote_count + '">0</div><div class="cvm-stat-label">Votes</div></div>';
    html += '</div>';
    metaEl.insertAdjacentHTML('afterend', html);
    setTimeout(function() { document.querySelectorAll('.cvm-stat-num').forEach(function(el) { CVM.animateCounter(el, 0, parseInt(el.dataset.target) || 0, 1800); }); }, 100);
  },

  _renderStoryline: function(data, myId) {
    var descEl = document.getElementById('cv-m-desc'); if (!descEl) return;
    if (data.tagline) {
      var oldT = document.querySelector('.cvm-tagline'); if (oldT) oldT.remove();
      descEl.insertAdjacentHTML('beforebegin', '<div class="cvm-tagline"><i class="fas fa-quote-left"></i> ' + CVM.esc(data.tagline) + '</div>');
    }
    descEl.textContent = data.overview || 'No description available.';
    var kw = data.keywords; var kwList = kw && (kw.keywords || kw.results) ? (kw.keywords || kw.results) : [];
    if (kwList.length > 0) {
      var existing = document.querySelector('.cvm-keywords'); if (existing) existing.remove();
      var kHtml = '<div class="cvm-keywords"><div class="cvm-keywords-label"><i class="fas fa-tags"></i> Keywords</div><div class="cvm-keywords-list">';
      kwList.slice(0, 15).forEach(function(k, i) { kHtml += '<span class="cvm-keyword" style="animation-delay:' + (i * 50) + 'ms;">' + CVM.esc(k.name) + '</span>'; });
      kHtml += '</div></div>'; descEl.parentNode.insertAdjacentHTML('beforeend', kHtml);
    }
    var genresEl = document.getElementById('cv-m-genres');
    if (genresEl && data.genres && data.genres.length) { genresEl.innerHTML = data.genres.map(function(g) { return '<span class="cvm-genre-chip">' + CVM.esc(g.name) + '</span>'; }).join(''); }
  },

  _renderRichDetails: function(data, omdb, watchmode, myId) {
    var container = document.getElementById('cv-imdb-info'); if (!container) return;
    container.style.display = 'block';
    
    var director = data.credits && data.credits.crew ? (data.credits.crew.find(function(c) { return c.job === 'Director'; }) || {}).name : null;
    var html = '';

    // 1. Awards Section (OMDb)
    if (omdb && omdb.Awards && omdb.Awards !== 'N/A') {
      html += '<div class="cvm-glass-card cvm-awards-section" style="grid-column:1/-1; border-left: 4px solid #ffc107; background: linear-gradient(135deg, rgba(255,193,7,0.1), rgba(15,17,22,0.95));"><div class="cvm-section-heading"><i class="fas fa-trophy" style="color:#ffc107;"></i> Awards & Achievements</div><div style="color:#ffd700;font-weight:600;font-size:16px;line-height:1.7;">' + CVM.esc(omdb.Awards) + '</div></div>';
    }

    // 2. Main Details & Specs (TMDB + OMDb + TVmaze)
    html += '<div class="cvm-glass-card"><div class="cvm-section-heading"><i class="fas fa-info-circle" style="color:#22d3ee;"></i> Details & Specs</div><div class="cvm-info-grid">';
    var details = [
      { label: 'Release Date', value: data.release_date || data.first_air_date, icon: 'fa-calendar' },
      { label: 'Status', value: data.status, icon: 'fa-info' },
      { label: 'Country', value: (data.production_countries || []).map(function(c){ return c.name; }).join(', '), icon: 'fa-globe' },
      { label: 'Director', value: director, icon: 'fa-video' },
      { label: 'Runtime', value: omdb && omdb.Runtime !== 'N/A' ? omdb.Runtime : (data.runtime ? CVM.fmtRuntime(data.runtime) : null), icon: 'fa-clock' },
      { label: 'Rated', value: omdb && omdb.Rated !== 'N/A' ? omdb.Rated : 'N/A', icon: 'fa-certificate' },
      { label: 'Language', value: omdb && omdb.Language !== 'N/A' ? omdb.Language : (data.original_language ? data.original_language.toUpperCase() : null), icon: 'fa-language' },
      { label: 'Studio', value: (data.production_companies || []).slice(0,2).map(function(c){ return c.name; }).join(', '), icon: 'fa-building' }
    ];

    // Add TVmaze Data if exists
    if (data.tvmaze && data.tvmaze.network) {
      details.push({ label: 'Network', value: data.tvmaze.network.name, icon: 'fa-tv' });
      details.push({ label: 'Schedule', value: data.tvmaze.schedule ? data.tvmaze.schedule.days.join(', ') : '', icon: 'fa-calendar-day' });
    }

    // Add Anime Data (Jikan / Kitsu) if exists
    if (data.jikan) {
      if (data.jikan.studios && data.jikan.studios.length) details.push({ label: 'Anime Studio', value: data.jikan.studios[0].name, icon: 'fa-paint-brush' });
      if (data.jikan.source) details.push({ label: 'Source', value: data.jikan.source, icon: 'fa-book' });
    }

    var delay = 0.1;
    details.forEach(function(d) { 
      if (d.value && d.value !== '—') { 
        html += '<div class="cvm-info-item" style="animation-delay: ' + delay + 's;"><div class="cvm-info-label"><i class="fas ' + d.icon + '"></i> ' + d.label + '</div><div class="cvm-info-value">' + CVM.esc(d.value) + '</div></div>'; 
        delay += 0.1;
      } 
    });
    html += '</div></div>';

    // 3. Box Office (TMDB / OMDb)
    var budget = data.budget || 0;
    var revenue = data.revenue || 0;
    if (omdb && omdb.BoxOffice && omdb.BoxOffice.indexOf('$') >= 0) { var rt = omdb.BoxOffice.replace(/[^0-9]/g, ''); if (rt) revenue = parseInt(rt); }
    if (budget > 0 || revenue > 0) {
      html += '<div class="cvm-glass-card"><div class="cvm-section-heading"><i class="fas fa-dollar-sign" style="color:#46d369;"></i> Box Office</div><div class="cvm-info-grid">';
      if (budget > 0) html += '<div class="cvm-info-item" style="border-left-color: #46d369;"><div class="cvm-info-label" style="color:#46d369;">Budget</div><div class="cvm-info-value">' + CVM.fmtMoney(budget) + '</div></div>';
      if (revenue > 0) html += '<div class="cvm-info-item" style="border-left-color: #46d369;"><div class="cvm-info-label" style="color:#46d369;">Revenue</div><div class="cvm-info-value" style="color:#46d369;">' + CVM.fmtMoney(revenue) + '</div></div>';
      html += '</div></div>';
    }

    // 4. API Data Sources Indicator
    html += '<div class="cvm-glass-card" style="grid-column:1/-1; padding: 15px 25px;"><div style="display:flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">';
    html += '<div style="font-size: 13px; font-weight: 700; color: #888;">DATA AGGREGATED FROM:</div>';
    html += '<div class="cvm-api-sources">';
    var sources = ['TMDB', 'OMDb'];
    if (data.jikan || data.anilist || data.mal) sources.push('Jikan', 'AniList');
    if (data.tvmaze) sources.push('TVmaze');
    if (data.kitsu) sources.push('Kitsu');
    if (watchmode) sources.push('Watchmode');
    sources.forEach(function(src) { html += '<span class="cvm-api-tag">' + src + '</span>'; });
    html += '</div></div></div>';

    container.innerHTML = '<div class="cvm-bento-grid">' + html + '</div>';
  },

  _renderCast: function(data, myId) {
    var scroll = document.getElementById('cv-cast-scroll'); if (!scroll) return;
    var cast = data.credits ? data.credits.cast : [];
    if (!cast || cast.length === 0) { scroll.innerHTML = '<p style="color:#888;">No cast.</p>'; return; }
    scroll.className = 'cvm-cast-grid'; scroll.innerHTML = '';
    cast.slice(0, 25).forEach(function(c, i) {
      var img = c.profile_path ? 'https://image.tmdb.org/t/p/w185' + c.profile_path : 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Ccircle fill=%22%23333%22 cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/svg%3E';
      var el = document.createElement('div'); el.className = 'cvm-cast-card'; el.style.animationDelay = (i * 50) + 'ms';
      el.innerHTML = '<div class="cvm-cast-img-wrap"><img src="' + img + '" alt="' + CVM.esc(c.name) + '" loading="lazy"></div><div class="cvm-cast-info"><div class="cvm-cast-name">' + CVM.esc(c.name) + '</div><div class="cvm-cast-role">' + CVM.esc(c.character || '') + '</div></div>';
      el.onclick = function() { if (window.CVActor) CVActor.load(c.id, c.name); };
      scroll.appendChild(el);
    });
  },

  _renderCrew: function(data, myId) {
    var castGrid = document.getElementById('cv-cast-scroll'); if (!castGrid) return;
    var old = document.querySelector('.cvm-crew-section'); if (old) old.remove();
    var crew = data.credits ? data.credits.crew : []; if (!crew || crew.length === 0) return;
    var keyRoles = ['Director', 'Producer', 'Writer', 'Screenplay'];
    var byRole = {};
    crew.forEach(function(c) { if (keyRoles.indexOf(c.job) >= 0) { if (!byRole[c.job]) byRole[c.job] = []; byRole[c.job].push(c); } });
    var roles = Object.keys(byRole); if (roles.length === 0) return;
    var html = '<div class="cvm-crew-section"><div class="cvm-section-heading"><i class="fas fa-users-cog"></i> Key Crew</div><div class="cvm-crew-grid">';
    roles.forEach(function(role) { var people = byRole[role].slice(0, 3); html += '<div class="cvm-crew-item"><div class="cvm-crew-role">' + CVM.esc(role) + '</div><div class="cvm-crew-names">' + people.map(function(p){ return CVM.esc(p.name); }).join(', ') + '</div></div>'; });
    html += '</div></div>';
    castGrid.parentNode.insertAdjacentHTML('afterend', html);
  },

  _renderVideos: function(data, myId) {
    var videos = data.videos ? data.videos.results : []; if (!videos || videos.length === 0) return;
    var yt = videos.filter(function(v) { return v.site === 'YouTube' && ['Trailer','Teaser','Clip'].indexOf(v.type) >= 0; }); if (yt.length === 0) return;
    var main = yt.find(function(v){ return v.type === 'Trailer'; }) || yt[0];
    var wrap = document.getElementById('cv-trailer-wrap'); var frame = document.getElementById('cv-trailer-frame');
    if (wrap && frame) { frame.src = 'https://www.youtube.com/embed/' + main.key; wrap.style.display = 'block'; }
    var others = yt.filter(function(v){ return v.key !== main.key; }).slice(0, 6); if (others.length === 0) return;
    var existing = document.querySelector('.cvm-videos-section'); if (existing) existing.remove();
    var html = '<div class="cvm-videos-section"><div class="cvm-section-heading"><i class="fas fa-video"></i> More Videos</div><div class="cvm-videos-grid">';
    others.forEach(function(v, i) { html += '<div class="cvm-video-card" onclick="CVModal._playVideo(\'' + v.key + '\')"><div class="cvm-video-thumb"><img src="https://img.youtube.com/vi/' + v.key + '/mqdefault.jpg" loading="lazy" alt=""></div><div class="cvm-video-name">' + CVM.esc(v.name) + '</div></div>'; });
    html += '</div></div>';
    wrap.insertAdjacentHTML('afterend', html);
  },

  _playVideo: function(key) { var f = document.getElementById('cv-trailer-frame'); if (f) f.src = 'https://www.youtube.com/embed/' + key; var w = document.getElementById('cv-trailer-wrap'); if (w) { w.style.display = 'block'; w.scrollIntoView({ behavior: 'smooth', block: 'center' }); } },

  _renderGallery: function(data, myId) {
    var backdrops = data.images && data.images.backdrops ? data.images.backdrops : [];
    var wrap = document.getElementById('cv-image-gallery'); var container = document.getElementById('cv-gallery-container'); if (!wrap || !container) return;
    if (backdrops.length === 0) { wrap.style.display = 'none'; return; }
    var self = this; container.innerHTML = ''; container.style.display = 'flex'; container.style.gap = '12px'; container.style.overflowX = 'auto'; container.style.paddingBottom = '10px';
    backdrops.slice(0, 15).forEach(function(img, i) {
      var el = document.createElement('img'); el.src = 'https://image.tmdb.org/t/p/w780' + img.file_path; el.style.cssText = 'height:140px; width:240px; border-radius:12px; object-fit:cover; cursor:pointer; flex-shrink:0; transition: transform 0.3s; box-shadow: 0 5px 15px rgba(0,0,0,0.3);';
      el.onmouseover = function() { this.style.transform = 'scale(1.05)'; };
      el.onmouseout = function() { this.style.transform = 'scale(1)'; };
      el.onclick = function() { var hero = document.getElementById('cv-m-hero-img'); if (hero) { if (self.heroInterval) clearInterval(self.heroInterval); hero.src = 'https://image.tmdb.org/t/p/w1280' + img.file_path; hero.style.animation = 'cvmKenBurns 20s ease-in-out'; } };
      container.appendChild(el);
    });
    wrap.style.display = 'block';
  },

  _renderReviews: function(data, myId) {
    var reviews = data.reviews && data.reviews.results ? data.reviews.results : []; if (reviews.length === 0) return;
    var existing = document.querySelector('.cvm-reviews-section'); if (existing) existing.remove();
    var html = '<div class="cvm-reviews-section"><div class="cvm-section-heading"><i class="fas fa-comments"></i> Reviews</div><div class="cvm-reviews-list">';
    reviews.slice(0, 3).forEach(function(r, i) {
      var content = r.content || ''; var short = content.length > 450 ? content.substring(0, 450) + '...' : content;
      var rating = r.author_details && r.author_details.rating ? r.author_details.rating : null;
      html += '<div class="cvm-review-card"><div class="cvm-review-header"><div class="cvm-review-avatar" style="display:flex;align-items:center;justify-content:center;"><i class="fas fa-user"></i></div><div><div class="cvm-review-author">' + CVM.esc(r.author) + '</div>' + (rating ? '<div class="cvm-review-rating"><i class="fas fa-star"></i> ' + rating + '/10</div>' : '') + '</div></div><div class="cvm-review-content">' + CVM.esc(short) + '</div></div>';
    });
    html += '</div></div>';
    var recsWrap = document.getElementById('cv-recs-wrap');
    if (recsWrap && recsWrap.parentNode) { var temp = document.createElement('div'); temp.innerHTML = html; recsWrap.parentNode.insertBefore(temp.firstElementChild, recsWrap); }
  },

  _renderSeasons: function(data, type, myId) {
    if (type !== 'tv') return;
    var seasons = data.seasons || []; if (seasons.length === 0) return;
    var existing = document.querySelector('.cvm-seasons-section'); if (existing) existing.remove();
    var castGrid = document.getElementById('cv-cast-scroll'); var insertAfter = (castGrid && castGrid.parentNode) || null; if (!insertAfter) return;
    var html = '<div class="cvm-seasons-section"><div class="cvm-section-heading"><i class="fas fa-list-ol"></i> Seasons Overview</div><div class="cvm-seasons-grid">';
    seasons.forEach(function(s, i) {
      if (s.season_number === 0) return; var poster = s.poster_path ? 'https://image.tmdb.org/t/p/w185' + s.poster_path : null;
      html += '<div class="cvm-season-card">' + (poster ? '<img class="cvm-season-poster" src="' + poster + '" loading="lazy" alt="">' : '') + '<div class="cvm-season-info"><div class="cvm-season-name">' + CVM.esc(s.name) + '</div><div class="cvm-season-meta">' + (s.episode_count || 0) + ' eps</div></div></div>';
    });
    html += '</div></div>';
    var temp = document.createElement('div'); temp.innerHTML = html; insertAfter.insertAdjacentElement('afterend', temp.firstElementChild);
  },

  _renderAnalytics: function(data, omdb, myId) {
    var wrap = document.getElementById('cv-analytics-wrap'); if (!wrap) return; wrap.style.display = 'block';
    var id = data.id; var bars = ''; var lineT = 'M ', lineI = 'M '; var N = 20, W = 400, M = 140;
    for (var i = 0; i < N; i++) {
      var x = (i / (N - 1)) * W; var vT = 30 + Math.abs(Math.sin(id + i * 0.8) * 60); var vI = 30 + Math.abs(Math.cos(id + i * 1.1) * 60);
      var yT = M - vT, yI = M - vI;
      if (i === 0) { lineT += x + ',' + yT + ' '; lineI += x + ',' + yI + ' '; } else { lineT += 'L ' + x + ',' + yT + ' '; lineI += 'L ' + x + ',' + yI + ' '; }
      if (i % 2 === 0) { var bh = Math.max(vT, vI), by = M - bh; bars += '<rect x="' + (x - 4) + '" y="' + by + '" width="8" height="' + bh + '" class="cv-bar"></rect>'; }
    }
    document.getElementById('cv-bars-group').innerHTML = bars;
    document.getElementById('cv-line-path-tmdb').setAttribute('d', lineT);
    document.getElementById('cv-line-path-imdb').setAttribute('d', lineI);
  },

  _renderExternalLinks: function(data, myId) {
    var ext = data.external_ids || {}; var links = [];
    if (ext.imdb_id) links.push({ url: 'https://www.imdb.com/title/' + ext.imdb_id, icon: 'fa-imdb', label: 'IMDb', color: '#f5c518' });
    if (data.id) links.push({ url: 'https://www.themoviedb.org/' + (data.title ? 'movie' : 'tv') + '/' + data.id, icon: 'fa-film', label: 'TMDB', color: '#01b4e4' });
    if (links.length === 0) return;
    var html = '<div class="cvm-ext-links"><div class="cvm-ext-grid">';
    links.forEach(function(l) { html += '<a href="' + l.url + '" target="_blank" rel="noopener" class="cvm-ext-btn" style="--link-color:' + l.color + ';"><i class="fab ' + l.icon + '"></i> ' + l.label + '</a>'; });
    html += '</div></div>';
    var box = document.querySelector('.cv-modal-box'); if (box) box.insertAdjacentHTML('beforeend', html);
  },

  _loadRecommendations: async function(id, type, currentData, myId) {
    var wrap = document.getElementById('cv-recs-wrap'); var grid = document.getElementById('cv-recs-grid'); if (!wrap || !grid) return;
    var results = await Promise.all([ CVAPI.tmdb('/' + type + '/' + id + '/recommendations', { page: 1 }), CVAPI.tmdb('/' + type + '/' + id + '/similar', { page: 1 }) ]);
    if (myId !== this._renderId) return;
    var combined = [], seen = new Set([id]);
    results.forEach(function(r) { if (r && r.results) r.results.forEach(function(item) { if (item && item.poster_path && !seen.has(item.id)) { seen.add(item.id); combined.push(item); } }); });
    
    if (combined.length === 0 && currentData && currentData.genres && currentData.genres.length > 0) {
      var genreId = currentData.genres[0].id;
      var fallbackData = await CVAPI.tmdb('/discover/' + type, { with_genres: genreId, sort_by: 'popularity.desc', page: 1 });
      if (fallbackData && fallbackData.results) fallbackData.results.forEach(function(item) { if (item && item.poster_path && !seen.has(item.id)) { seen.add(item.id); combined.push(item); } });
    }

    if (combined.length === 0) { grid.innerHTML = '<p style="color:#888;">No recommendations available.</p>'; wrap.style.display = 'block'; return; }
    grid.innerHTML = ''; grid.className = 'cvm-recs-grid';
    combined.slice(0, 30).forEach(function(item) { if (window.CVCategory) { var card = CVCategory.createCard(item, type); if (card) grid.appendChild(card); } });
    wrap.style.display = 'block';
  },

  _loadMainActor: async function(data, myId) {
    var cast = data.credits ? data.credits.cast : []; if (!cast || cast.length === 0) return;
    var actor = cast[0]; var wrap = document.getElementById('cv-main-actor-wrap'); var grid = document.getElementById('cv-main-actor-grid'); var title = document.getElementById('cv-main-actor-title'); if (!wrap || !grid || !title) return;
    title.innerHTML = '<i class="fas fa-user-tie"></i> More from ' + CVM.esc(actor.name);
    grid.innerHTML = '<div style="color:#888;padding:20px;"><i class="fas fa-spinner fa-spin"></i> Loading...</div>'; wrap.style.display = 'block';
    var result = await CVAPI.tmdb('/person/' + actor.id + '/movie_credits', {});
    if (myId !== this._renderId) return;
    if (result && result.cast) {
      var movies = result.cast.filter(function(m){ return m.poster_path && m.id !== CVModal.current.id; }).sort(function(a, b){ return b.popularity - a.popularity; }).slice(0, 24);
      if (movies.length === 0) { grid.innerHTML = '<p style="color:#888;">No movies found.</p>'; return; }
      grid.innerHTML = ''; grid.className = 'cvm-recs-grid';
      movies.forEach(function(m) { if (window.CVCategory) { var card = CVCategory.createCard(m, 'movie'); if (card) grid.appendChild(card); } });
    } else { grid.innerHTML = '<p style="color:#888;">No movies found.</p>'; }
  },

  close: function(isPopState) {
    this._renderId++; this._isModalOpen = false; this._cleanup();
    var veil = document.getElementById('cv-modal-veil'); if (veil) veil.classList.remove('cv-open');
    document.body.style.overflow = '';
    this.current = null;
    if (!isPopState) history.back();
  }
};

/* ═══════════════════════════════════════════════
   4. ACTOR STACK
═══════════════════════════════════════════════ */
var CVActor = {
  load: async function(personId, personName) {
    var myRenderId = CVModal._renderId; var stack = document.getElementById('cv-actor-stack'); if (!stack) return;
    var layerId = 'actor-layer-' + personId; var old = document.getElementById(layerId); if (old) old.remove();
    var layer = document.createElement('div'); layer.className = 'cvm-actor-layer'; layer.id = layerId;
    layer.innerHTML = '<div class="cvm-actor-layer-header"><div class="cvm-actor-layer-name"><i class="fas fa-user-circle" style="color:#e50914;"></i> ' + CVM.esc(personName) + '\'s Movies</div><button onclick="document.getElementById(\'' + layerId + '\').remove()" class="cvm-actor-close"><i class="fas fa-times"></i></button></div><div class="cvm-actor-bio" id="bio-' + personId + '"><i class="fas fa-spinner fa-spin"></i> Loading biography...</div><div class="cvm-recs-grid" id="movies-' + personId + '"></div>';
    stack.appendChild(layer);
    
    var bio = await CVAPI.tmdb('/person/' + personId, {}); if (myRenderId !== CVModal._renderId || !document.getElementById(layerId)) return;
    var bioEl = document.getElementById('bio-' + personId); if (bioEl) bioEl.textContent = bio && bio.biography ? (bio.biography.length > 300 ? bio.biography.substring(0, 300) + '...' : bio.biography) : 'No biography available.';
    
    var credits = await CVAPI.tmdb('/person/' + personId + '/combined_credits', {}); if (myRenderId !== CVModal._renderId || !document.getElementById(layerId)) return;
    var moviesEl = document.getElementById('movies-' + personId);
    if (moviesEl && credits && credits.cast) {
      var uniq = [], seen = new Set();
      credits.cast.sort(function(a, b){ return b.popularity - a.popularity; }).forEach(function(m) {
        if (m.poster_path && m.id !== CVModal.current.id && !seen.has(m.id)) { seen.add(m.id); uniq.push(m); }
      });
      if (uniq.length === 0) { moviesEl.innerHTML = '<p style="color:#888;">No other movies found.</p>'; return; }
      moviesEl.innerHTML = '';
      uniq.slice(0, 30).forEach(function(movie) { var type = movie.media_type || (movie.title ? 'movie' : 'tv'); if (window.CVCategory) { var c = CVCategory.createCard(movie, type); if (c) moviesEl.appendChild(c); } });
    }
  }
};

/* ═══════════════════════════════════════════════
   5. PLAYER — v6 (Episode-Specific Server Auto-Detection)
═══════════════════════════════════════════════ */
var CVPlayer = {
  activeServer: 0,
  deadServers: {},
  FAILOVER_TIMEOUT: 15000,
  _failoverTimer: null,
  currentSeason: 1,
  currentEpisode: 1,
  _serverTestingDone: false,

  init: function() {
    var tabs = document.getElementById('cv-server-tabs');
    if (!tabs) return;
    tabs.innerHTML = '';
    this.deadServers = {};
    this.currentSeason = 1;
    this.currentEpisode = 1;
    this._serverTestingDone = false;
    if (!window.CV_SERVERS) return;
    
    this._renderServerTabs();
  },

  _renderServerTabs: function() {
    var tabs = document.getElementById('cv-server-tabs');
    if (!tabs) return;
    tabs.innerHTML = '';
    var self = this;
    var health = window.CVServerHealth;

    // Sort servers: Working ones first
    var sortedServers = [...window.CV_SERVERS].sort(function(a, b) {
      var aWorking = health && health.workingServers && health.workingServers.some(function(w){ return w.id === a.id; }) ? 1 : 0;
      var bWorking = health && health.workingServers && health.workingServers.some(function(w){ return w.id === b.id; }) ? 1 : 0;
      return bWorking - aWorking; 
    });
    
    window.CV_SERVERS = sortedServers; 
    
    var defaultId = (window.CV_CONFIG && CV_CONFIG.defaultServer) || '';
    var defIdx = 0;
    
    window.CV_SERVERS.forEach(function(s, i) {
      if (s.id === defaultId) defIdx = i;
      var t = document.createElement('button');
      t.className = 'cv-server-tab' + (i === self.activeServer ? ' cv-active' : '');
      
      var isWorking = health && health.workingServers && health.workingServers.some(function(w){ return w.id === s.id; });
      t.innerHTML = CVM.esc(s.name) + (isWorking ? ' <span style="color:#22c55e;font-size:12px;text-shadow:0 0 5px #22c55e;">●</span>' : '');
      
      t.dataset.id = s.id;
      t.onclick = function() {
        if (self.deadServers[s.id]) { if (window.CVUtils) CVUtils.toast('Server unavailable'); return; }
        self.activeServer = i;
        document.querySelectorAll('.cv-server-tab').forEach(function(b, j){ b.classList.toggle('cv-active', j === i); });
        self.load(false);
      };
      tabs.appendChild(t);
    });
    
    if (defIdx > 0 && !this.deadServers[window.CV_SERVERS[0].id]) {
        this.activeServer = defIdx;
    } else {
        this.activeServer = 0;
    }
  },

  open: async function() {
    var s = document.getElementById('cv-player-section');
    if (s) { s.style.display = 'block'; s.classList.add('cv-active'); }

    // Load all seasons in grid
    if (CVModal.current && CVModal.current.type === 'tv') {
      this._renderAllSeasons(CVModal.current.id, CVModal.current.data);
    }

    // Initial Health Check
    if (!this._serverTestingDone) {
      this._serverTestingDone = true;
      await this._checkServersForEpisode(this.currentSeason, this.currentEpisode);
    }

    this.load(true);
  },

  // NEW: Background Server Check specific to an episode
  _checkServersForEpisode: async function(season, episode) {
    var health = window.CVServerHealth;
    if (!health || typeof health.testAll !== 'function' || !CVModal.current) {
      this._renderServerTabs(); return;
    }

    var tabs = document.getElementById('cv-server-tabs');
    if (tabs) tabs.innerHTML = '<div style="color:#aaa;font-size:13px;padding:15px;display:flex;align-items:center;gap:10px;"><i class="fas fa-spinner fa-spin"></i> Checking servers for S' + season + ' E' + episode + '...</div>';

    try {
      await health.testAll(CVModal.current.type, CVModal.current.id, season, episode);
    } catch(e) { console.warn('[CVPlayer] Health check failed:', e); }

    this._renderServerTabs();
  },

  _renderAllSeasons: async function(tvId, data) {
    var wrap = document.getElementById('cv-tv-selector');
    if (!wrap) {
      var player = document.getElementById('cv-player-section');
      if (!player) return;
      wrap = document.createElement('div');
      wrap.id = 'cv-tv-selector';
      wrap.style.cssText = 'margin-bottom:25px; display:block;';
      var tabs = document.getElementById('cv-server-tabs');
      if (tabs && tabs.parentNode) tabs.parentNode.insertBefore(wrap, tabs);
      else player.insertBefore(wrap, player.firstChild);
    }

    var seasons = data.seasons || [];
    var validSeasons = seasons.filter(function(s) { return s.season_number > 0; });
    if (validSeasons.length === 0) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';

    var self = this;
    var html = '<div class="cv-tv-controls" style="background:transparent; border:none; padding:0;">';
    
    validSeasons.forEach(function(s) {
      html += `<div class="cvm-season-block" id="season-block-${s.season_number}">
                 <div class="cvm-season-header">
                   <span><i class="fas fa-list-ol" style="color:#e50914; margin-right:10px;"></i> ${CVM.esc(s.name)}</span>
                   <span style="font-size:12px; color:#22d3ee; background:rgba(34,211,238,0.1); padding:4px 10px; border-radius:12px; font-weight:700;">${s.episode_count || 0} Episodes</span>
                 </div>
                 <div class="cv-episode-grid" id="ep-grid-${s.season_number}">
                   <div style="color:#888;padding:15px;text-align:center;"><i class="fas fa-spinner fa-spin"></i> Loading episodes...</div>
                 </div>
               </div>`;
    });
    
    html += '</div>';
    wrap.innerHTML = html;

    validSeasons.forEach(function(s) {
      self._loadEpisodesForBlock(tvId, s.season_number);
    });
  },

  _loadEpisodesForBlock: async function(tvId, seasonNum) {
    var grid = document.getElementById('ep-grid-' + seasonNum);
    if (!grid) return;

    var data = await CVAPI.tmdb('/tv/' + tvId + '/season/' + seasonNum, {}).catch(function(){ return null; });

    if (!data || !data.episodes || data.episodes.length === 0) {
      var seasonInfo = null;
      if (CVModal.current && CVModal.current.data && CVModal.current.data.seasons) {
        seasonInfo = CVModal.current.data.seasons.find(function(s) { return s.season_number === seasonNum; });
      }
      var epCount = seasonInfo ? seasonInfo.episode_count : 0;
      if (epCount > 0) {
        var html = '';
        for (var i = 1; i <= epCount; i++) {
          html += '<button class="cv-episode-btn" onclick="CVPlayer.selectEpisode(' + seasonNum + ', ' + i + ', this)"><span class="cv-ep-num">E' + i + '</span></button>';
        }
        grid.innerHTML = html;
      } else {
        grid.innerHTML = '<div style="color:#888;padding:15px;">No episodes found.</div>';
      }
      return;
    }

    var html = '';
    data.episodes.forEach(function(ep) {
      var stillUrl = ep.still_path ? 'https://image.tmdb.org/t/p/w300' + ep.still_path : null;
      html += '<button class="cv-episode-btn" onclick="CVPlayer.selectEpisode(' + seasonNum + ', ' + ep.episode_number + ', this)">' +
        (stillUrl ? '<div class="cv-ep-thumb" style="width:100%;height:70px;border-radius:8px;background-size:cover;background-position:center;margin-bottom:8px;background-image:url(\'' + stillUrl + '\'); box-shadow: 0 4px 10px rgba(0,0,0,0.5);"></div>' : '') +
        '<span class="cv-ep-num">S' + seasonNum + ' E' + ep.episode_number + '</span>' +
        '<span class="cv-ep-name">' + CVM.esc(ep.name || ('Episode ' + ep.episode_number)) + '</span>' +
        '</button>';
    });
    grid.innerHTML = html;
  },

  selectEpisode: function(season, episode, btnElement) {
    this.currentSeason = season;
    this.currentEpisode = episode;
    
    // Immediate Visual Change (Color transition)
    document.querySelectorAll('.cv-episode-btn').forEach(function(b) { b.classList.remove('cv-active'); });
    if (btnElement) btnElement.classList.add('cv-active');
    
    // Scroll slightly up to show the player
    var playerWrap = document.getElementById('cv-player-section');
    if (playerWrap) playerWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Trigger Background Server Auto-Detection for this episode
    this._serverTestingDone = false;
    this._checkServersForEpisode(season, episode).then(() => {
      this.load(true);
    });
  },

  load: function(allowFailover) {
    if (!CVModal.current) return;
    var s = window.CV_SERVERS[this.activeServer];
    if (!s) return;
    var iframe = document.getElementById('cv-player-frame');
    if (!iframe) return;

    var id = CVModal.current.id;
    if (s.useImdb) {
      var imdb = CVModal.current.data.external_ids && CVModal.current.data.external_ids.imdb_id;
      if (imdb) id = imdb;
    }
    clearTimeout(this._failoverTimer);
    iframe.onload = function() { clearTimeout(CVPlayer._failoverTimer); };
    iframe.onerror = function() {
      clearTimeout(CVPlayer._failoverTimer);
      var srv = window.CV_SERVERS[CVPlayer.activeServer];
      if (srv) CVPlayer.markDead(srv.id);
      CVPlayer.switchToNext();
    };
    if (CVModal.current.type === 'tv') {
      iframe.src = s.tv(id, this.currentSeason, this.currentEpisode);
    } else {
      iframe.src = s.movie(id);
    }
    if (allowFailover) this.attachFailover(s.id);
  },

  attachFailover: function(sid) {
    var self = this;
    clearTimeout(this._failoverTimer);
    this._failoverTimer = setTimeout(function() {
      self.deadServers[sid] = true;
      self.markDead(sid);
      self.switchToNext();
    }, this.FAILOVER_TIMEOUT);
  },

  markDead: function(sid) {
    var t = document.querySelector('.cv-server-tab[data-id="' + sid + '"]');
    if (t) { t.style.opacity = '0.4'; t.style.textDecoration = 'line-through'; }
    if (window.CVUtils) CVUtils.toast('Server failed: ' + sid);
  },

  switchToNext: function() {
    for (var i = 0; i < window.CV_SERVERS.length; i++) {
      if (!this.deadServers[window.CV_SERVERS[i].id]) {
        this.activeServer = i;
        document.querySelectorAll('.cv-server-tab').forEach(function(b, j){ b.classList.toggle('cv-active', j === i); });
        this.load(true);
        return;
      }
    }
    if (window.CVUtils) CVUtils.toast('All servers unavailable');
  }
};

/* ═══════════════════════════════════════════════
   6. HISTORY
═══════════════════════════════════════════════ */
window.addEventListener('popstate', function(e) {
  if (e.state && e.state.id && e.state.type) { CVModal.open(e.state.id, e.state.type, true); }
  else { CVModal.close(true); var fp = document.getElementById('cv-full-page'); if (fp && fp.classList.contains('active') && window.CVCategory) CVCategory.closeFullPage(true); }
});

console.info('[CineVault] ✓ Part 1 v8 Ultimate loaded — Red Buttons Restored, Rich APIs Merged, Episode Auto-Detect Active');
//]]>
</script>
