<script>
//<![CDATA[
/* ================================================================
   PART 1 — ULTIMATE CINEMATIC MODAL (v5 Final + TV Player Merged)
   ✓ Glassmorphism + Bento Grid
   ✓ Watchmode Integration (Worker)
   ✓ Fallback Recommendations
   ✓ Filtered Actor Stack
   ✓ Uniform Action Buttons
   ✓ TV Season/Episode Selector (MERGED)
   ✓ Auto-Health Server Check (MERGED)
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
    .cv-m-poster { box-shadow: 0 20px 60px rgba(229,9,20,.15), 0 8px 30px rgba(0,0,0,.7); transition: transform .4s cubic-bezier(.4,0,.2,1); }
    .cv-m-poster:hover { transform: scale(1.03) translateY(-5px); }
    .cv-m-title { text-shadow: 0 4px 20px rgba(0,0,0,.85); }

    /* ── Action Buttons (Uniform) ── */
    .cv-modal-actions-bar { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 10px !important; margin-top: 15px !important; width: 100%; }
    .cv-btn-play { padding: 12px 18px !important; font-size: 13px !important; border-radius: 25px !important; font-weight: 700 !important; display: flex !important; align-items: center; justify-content: center; gap: 8px; border: none; transition: all 0.3s; cursor: pointer; }
    .cv-btn-watch { background: linear-gradient(135deg, #e50914 0%, #b20710 100%) !important; color: #fff !important; box-shadow: 0 4px 15px rgba(229,9,20,0.4); }
    .cv-btn-watch:hover { transform: scale(1.05); box-shadow: 0 8px 25px rgba(229,9,20,0.6); }
    .cv-btn-download { background: rgba(255,255,255,0.08) !important; color: #fff !important; border: 1px solid rgba(255,255,255,0.15) !important; }
    .cv-btn-download:hover { background: rgba(255,255,255,0.15) !important; transform: translateY(-2px); }
    @media(max-width: 600px) { .cv-modal-actions-bar { grid-template-columns: 1fr !important; } }

    /* ── Badges ── */
    .cvm-badge { display:inline-flex; align-items:center; gap:5px; padding:5px 11px; border-radius:20px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.14); font-size:11px; font-weight:700; color:#e5e5e5; backdrop-filter:blur(10px); transition:all .25s; }
    .cvm-badge:hover { background:rgba(255,255,255,.14); transform:translateY(-2px); }
    .cvm-badge-gold { color:#ffd700; border-color:rgba(255,215,0,.35); background:rgba(255,215,0,.08); }
    .cvm-badge-imdb { color:#f5c518; border-color:rgba(245,197,24,.35); background:rgba(245,197,24,.08); }

    /* ── Rating Rings ── */
    .cvm-quick-stats { display:flex; flex-wrap:wrap; gap:12px; margin:22px 0; }
    .cvm-stat-card { position:relative; display:flex; flex-direction:column; align-items:center; gap:8px; padding:16px 20px; min-width:92px; background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.01)); border:1px solid rgba(255,255,255,.08); border-radius:16px; backdrop-filter:blur(20px); overflow:hidden; transition:all .35s; }
    .cvm-stat-card:hover { transform:translateY(-4px); border-color:rgba(229,9,20,.4); box-shadow:0 10px 30px rgba(229,9,20,.18); }
    .cvm-rating-ring { position:relative; width:60px; height:60px; }
    .cvm-rating-ring svg { transform:rotate(-90deg); }
    .cvm-rating-ring .ring-bg { fill:none; stroke:rgba(255,255,255,.08); stroke-width:4; }
    .cvm-rating-ring .ring-fill { fill:none; stroke-width:4; stroke-linecap:round; }
    .cvm-rating-ring .ring-value { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; }
    .cvm-stat-label { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.6px; color:#888; }
    .cvm-stat-num { font-size:24px; font-weight:800; color:#fff; }

    /* ── Tagline & Keywords ── */
    .cvm-tagline { position:relative; padding:12px 0 12px 20px; border-left:3px solid #e50914; font-style:italic; font-size:15px; color:#d0d0d8; margin-bottom:16px; line-height:1.5; animation:cvmFadeUp .6s ease; }
    .cvm-tagline i { color:#e50914; margin-right:6px; opacity:.5; }
    .cvm-keywords { margin-top:22px; }
    .cvm-keywords-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#6b6b80; margin-bottom:10px; }
    .cvm-keywords-list { display:flex; flex-wrap:wrap; gap:8px; }
    .cvm-keyword { padding:5px 13px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:20px; font-size:12px; color:#b3b3c4; font-weight:500; transition:all .25s; animation:cvmFadeUp .4s ease both; }
    .cvm-keyword:hover { background:rgba(229,9,20,.15); border-color:rgba(229,9,20,.5); color:#fff; transform:translateY(-2px); }

    /* ── Bento Grid (Details) ── */
    .cvm-bento-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:16px; margin-top:15px; }
    .cvm-glass-card { background:linear-gradient(145deg,rgba(30,33,40,0.7),rgba(18,20,25,0.9)); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:20px; box-shadow:0 10px 30px rgba(0,0,0,0.2); transition:all .3s; }
    .cvm-glass-card:hover { border-color:rgba(229,9,20,0.3); transform:translateY(-2px); }
    .cvm-section-heading { display:flex; align-items:center; gap:10px; font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:1.2px; color:#fff; margin-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:10px; }
    .cvm-info-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:12px; }
    .cvm-info-item { padding:12px 14px; background:rgba(0,0,0,.25); border-left:3px solid rgba(34,211,238,.5); border-radius:6px; transition:all .25s; }
    .cvm-info-label { display:flex; align-items:center; gap:6px; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.6px; color:#6b6b80; margin-bottom:5px; }
    .cvm-info-value { font-size:13px; font-weight:600; color:#e5e5e5; line-height:1.4; }

    /* ── Watch Providers ── */
    .cvm-wtw-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(140px,1fr)); gap:12px; }
    .cvm-wtw-item { display:flex; align-items:center; gap:10px; padding:10px 12px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.08); border-radius:10px; text-decoration:none; color:#fff; transition:all .25s; }
    .cvm-wtw-item:hover { background:rgba(255,255,255,.08); border-color:rgba(34,211,238,.4); transform:translateY(-2px); }
    .cvm-wtw-item img { width:32px; height:32px; border-radius:8px; object-fit:cover; }
    .cvm-wtw-name { font-size:12px; font-weight:700; color:#fff; }
    .cvm-wtw-type { font-size:10px; color:#6b6b80; text-transform:uppercase; letter-spacing:.5px; }

    /* ── Cast & Crew ── */
    .cvm-cast-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:14px; padding:4px 0; }
    .cvm-cast-card { cursor:pointer; transition:transform .35s; animation:cvmFadeUp .5s ease both; text-align:center; }
    .cvm-cast-card:hover { transform:translateY(-6px) scale(1.03); }
    .cvm-cast-img-wrap { position:relative; width:100%; aspect-ratio:1; border-radius:50%; overflow:hidden; background:#1a1a24; border:2px solid rgba(255,255,255,.1); transition:border-color .3s; margin-bottom:10px; }
    .cvm-cast-card:hover .cvm-cast-img-wrap { border-color:#e50914; box-shadow:0 10px 30px rgba(229,9,20,.3); }
    .cvm-cast-img-wrap img { width:100%; height:100%; object-fit:cover; }
    .cvm-cast-name { font-size:12px; font-weight:700; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .cvm-cast-role { font-size:10px; color:#888; margin-top:2px; }
    .cvm-crew-section { margin:24px 0; padding:20px; background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.01)); border:1px solid rgba(255,255,255,.06); border-radius:16px; }
    .cvm-crew-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:14px; }
    .cvm-crew-item { padding:12px; background:rgba(0,0,0,.25); border-radius:8px; }
    .cvm-crew-role { font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:#6b6b80; margin-bottom:5px; }
    .cvm-crew-names { font-size:13px; font-weight:600; color:#e5e5e5; }

    /* ── Videos, Gallery, Reviews, Seasons ── */
    .cvm-videos-section, .cvm-reviews-section, .cvm-seasons-section { margin:24px 0; padding:20px; background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.01)); border:1px solid rgba(255,255,255,.06); border-radius:16px; }
    .cvm-videos-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:14px; }
    .cvm-video-card { cursor:pointer; transition:transform .3s; }
    .cvm-video-card:hover { transform:translateY(-4px); }
    .cvm-video-thumb { position:relative; width:100%; aspect-ratio:16/9; border-radius:10px; overflow:hidden; background:#1a1a24; margin-bottom:8px; }
    .cvm-video-thumb img { width:100%; height:100%; object-fit:cover; }
    .cvm-video-name { font-size:12px; font-weight:600; color:#fff; overflow:hidden; text-overflow:ellipsis; }
    
    .cvm-reviews-list { display:flex; flex-direction:column; gap:14px; }
    .cvm-review-card { padding:16px; background:rgba(0,0,0,.3); border-radius:12px; }
    .cvm-review-header { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
    .cvm-review-avatar { width:40px; height:40px; border-radius:50%; object-fit:cover; }
    .cvm-review-author { font-size:13px; font-weight:700; color:#fff; }
    .cvm-review-rating { font-size:11px; color:#ffd700; margin-top:2px; }
    .cvm-review-content { font-size:13px; line-height:1.6; color:#b3b3c4; }

    .cvm-recs-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:14px; }
    .cvm-seasons-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(140px,1fr)); gap:14px; }
    .cvm-season-card { background:rgba(0,0,0,.3); border-radius:10px; overflow:hidden; transition:transform .3s; }
    .cvm-season-card:hover { transform:translateY(-3px); }
    .cvm-season-poster { width:100%; aspect-ratio:2/3; object-fit:cover; }
    .cvm-season-info { padding:10px; }
    .cvm-season-name { font-size:12px; font-weight:700; color:#fff; }
    .cvm-season-meta { font-size:10px; color:#6b6b80; margin-top:3px; }

    /* ── Actor Layer ── */
    .cvm-actor-layer { margin:24px 0; padding:20px; background:linear-gradient(135deg,rgba(229,9,20,.05),rgba(34,211,238,.03)); border:1px solid rgba(229,9,20,.15); border-radius:16px; animation:cvmSlideDown .4s ease; }
    .cvm-actor-layer-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; }
    .cvm-actor-layer-name { font-size:16px; font-weight:800; color:#fff; }
    .cvm-actor-close { background:rgba(255,255,255,.08); border:none; color:#fff; width:32px; height:32px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; }
    .cvm-actor-close:hover { background:rgba(229,9,20,.5); }
    .cvm-actor-bio { font-size:13px; color:#b3b3c4; line-height:1.6; margin-bottom:16px; }

    /* ── Animations ── */
    @keyframes cvmFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes cvmSlideDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes cvmKenBurns { 0% { transform:scale(1) translate(0,0); } 50% { transform:scale(1.08) translate(-1%,-1%); } 100% { transform:scale(1) translate(0,0); } }
    @keyframes cvmRingFill { to { stroke-dashoffset: var(--target-offset,0); } }
    
    @media (max-width:768px) {
      .cvm-quick-stats { gap:8px; }
      .cvm-stat-card { min-width:70px; padding:12px 14px; }
      .cvm-cast-grid { grid-template-columns:repeat(auto-fill,minmax(85px,1fr)); gap:10px; }
      .cvm-bento-grid { grid-template-columns:1fr; }
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
      this._renderImdbDetails(data, omdb, watchmode, myId);
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
    ['cv-actor-stack', 'cv-recs-grid', 'cv-main-actor-grid', 'cv-gallery-container', 'cv-server-tabs', 'cv-bars-group'].forEach(function(eid) {
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
    ['cv-player-section','cv-trailer-wrap','cv-image-gallery','cv-recs-wrap','cv-main-actor-wrap','cv-analytics-wrap','cv-imdb-info','cv-wtw-section'].forEach(function(sid) { var el = document.getElementById(sid); if (el) el.style.display = 'none'; });
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
      heroImg.style.animation = 'cvmKenBurns 22s ease-in-out infinite';
      if (backdrops.length > 1) {
        this.heroInterval = setInterval(function() {
          if (myId !== self._renderId) { clearInterval(self.heroInterval); return; }
          idx = (idx + 1) % backdrops.length;
          heroImg.style.opacity = '0.3';
          setTimeout(function() { if (myId !== self._renderId) return; heroImg.src = 'https://image.tmdb.org/t/p/w1280' + backdrops[idx].file_path; heroImg.style.opacity = '1'; }, 350);
        }, 5000);
      }
    } else if (data.backdrop_path && heroImg) { heroImg.src = 'https://image.tmdb.org/t/p/w1280' + data.backdrop_path; }
    if (data.poster_path && posterEl) posterEl.src = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
    if (titleEl) titleEl.textContent = data.title || data.name || 'Untitled';

    // Fix Buttons Uniformity
    setTimeout(function normalizeActionButtons() {
      var dlLeft = document.getElementById('btn-download-left');
      var dlRight = document.getElementById('btn-download-right');
      if (!dlLeft || !dlRight) return;
      dlLeft.removeAttribute('style'); dlRight.removeAttribute('style');
      dlLeft.className = 'cv-btn-play cv-btn-download'; dlRight.className = 'cv-btn-play cv-btn-download';
      var parent = dlLeft.parentElement;
      if (parent) {
        parent.classList.add('cv-modal-actions-bar');
        var watch = parent.querySelector('button[onclick*="CVPlayer"]');
        if (watch) { watch.removeAttribute('style'); watch.className = 'cv-btn-play cv-btn-watch'; }
        if (watch) { parent.appendChild(dlLeft); parent.appendChild(watch); parent.appendChild(dlRight); }
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

    var stats = [];
    if (tmdbR > 0) stats.push({ label: 'TMDB', v: tmdbR, color: '#01b4e4' });
    if (imdbR > 0) stats.push({ label: 'IMDb', v: imdbR, color: '#f5c518' });
    if (rtR > 0) stats.push({ label: 'Rotten', v: rtR, color: '#fa3232' });
    if (metaR > 0) stats.push({ label: 'Meta', v: metaR, color: '#66cc33' });

    var html = '<div class="cvm-quick-stats">';
    var C = 2 * Math.PI * 24;
    stats.forEach(function(s) {
      var off = C - (s.v / 10) * C;
      html += '<div class="cvm-stat-card"><div class="cvm-rating-ring"><svg width="60" height="60" viewBox="0 0 60 60"><circle class="ring-bg" cx="30" cy="30" r="24"/><circle class="ring-fill" cx="30" cy="30" r="24" style="stroke:' + s.color + '; stroke-dasharray:' + C + '; stroke-dashoffset:' + C + '; animation:cvmRingFill 1.4s ease-out forwards; --target-offset:' + off + ';"/></svg><div class="ring-value" style="color:' + s.color + ';">' + s.v.toFixed(1) + '</div></div><div class="cvm-stat-label">' + s.label + '</div></div>';
    });
    if (data.vote_count) html += '<div class="cvm-stat-card"><div class="cvm-stat-num" data-target="' + data.vote_count + '">0</div><div class="cvm-stat-label">Votes</div></div>';
    html += '</div>';
    metaEl.insertAdjacentHTML('afterend', html);
    setTimeout(function() { document.querySelectorAll('.cvm-stat-num').forEach(function(el) { CVM.animateCounter(el, 0, parseInt(el.dataset.target) || 0, 1500); }); }, 100);
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
      kwList.slice(0, 15).forEach(function(k, i) { kHtml += '<span class="cvm-keyword" style="animation-delay:' + (i * 40) + 'ms;">' + CVM.esc(k.name) + '</span>'; });
      kHtml += '</div></div>'; descEl.parentNode.insertAdjacentHTML('beforeend', kHtml);
    }
    var genresEl = document.getElementById('cv-m-genres');
    if (genresEl && data.genres && data.genres.length) { genresEl.innerHTML = data.genres.map(function(g) { return '<span class="cvm-genre-chip">' + CVM.esc(g.name) + '</span>'; }).join(''); }
  },

  _renderImdbDetails: function(data, omdb, watchmode, myId) {
    var container = document.getElementById('cv-imdb-info'); if (!container) return;
    container.style.display = 'block';
    
    var director = data.credits && data.credits.crew ? (data.credits.crew.find(function(c) { return c.job === 'Director'; }) || {}).name : null;
    var html = '';

    if (omdb && omdb.Awards && omdb.Awards !== 'N/A') {
      html += '<div class="cvm-glass-card cvm-awards-section" style="grid-column:1/-1;"><div class="cvm-section-heading"><i class="fas fa-trophy" style="color:#ffc107;"></i> Awards</div><div style="color:#ffc107;font-weight:500;">' + CVM.esc(omdb.Awards) + '</div></div>';
    }

    html += '<div class="cvm-glass-card"><div class="cvm-section-heading"><i class="fas fa-info-circle" style="color:#22d3ee;"></i> Details</div><div class="cvm-info-grid">';
    var details = [
      { label: 'Release', value: data.release_date || data.first_air_date, icon: 'fa-calendar' },
      { label: 'Country', value: (data.production_countries || []).map(function(c){ return c.name; }).join(', '), icon: 'fa-globe' },
      { label: 'Director', value: director, icon: 'fa-video' },
      { label: 'Runtime', value: omdb && omdb.Runtime !== 'N/A' ? omdb.Runtime : (data.runtime ? CVM.fmtRuntime(data.runtime) : null), icon: 'fa-clock' },
      { label: 'Rated', value: omdb && omdb.Rated !== 'N/A' ? omdb.Rated : null, icon: 'fa-certificate' },
      { label: 'Language', value: omdb && omdb.Language !== 'N/A' ? omdb.Language : (data.original_language ? data.original_language.toUpperCase() : null), icon: 'fa-language' }
    ];
    details.forEach(function(d) { if (d.value) { html += '<div class="cvm-info-item"><div class="cvm-info-label"><i class="fas ' + d.icon + '"></i> ' + d.label + '</div><div class="cvm-info-value">' + CVM.esc(d.value) + '</div></div>'; } });
    html += '</div></div>';

    var budget = data.budget || 0;
    var revenue = data.revenue || 0;
    if (omdb && omdb.BoxOffice && omdb.BoxOffice.indexOf('$') >= 0) { var rt = omdb.BoxOffice.replace(/[^0-9]/g, ''); if (rt) revenue = parseInt(rt); }
    if (budget > 0 || revenue > 0) {
      html += '<div class="cvm-glass-card"><div class="cvm-section-heading"><i class="fas fa-dollar-sign" style="color:#46d369;"></i> Box Office</div><div class="cvm-info-grid">';
      if (budget > 0) html += '<div class="cvm-info-item"><div class="cvm-info-label">Budget</div><div class="cvm-info-value">' + CVM.fmtMoney(budget) + '</div></div>';
      if (revenue > 0) html += '<div class="cvm-info-item"><div class="cvm-info-label">Revenue</div><div class="cvm-info-value" style="color:#46d369;">' + CVM.fmtMoney(revenue) + '</div></div>';
      html += '</div></div>';
    }

    var wp = data['watch/providers'];
    var region = wp && wp.results ? (wp.results.US || wp.results.GB || null) : null;
    if (watchmode && watchmode.length > 0) {
       html += '<div class="cvm-glass-card" style="grid-column:1/-1;"><div class="cvm-section-heading"><i class="fas fa-tv" style="color:#e50914;"></i> Where to Watch</div><div class="cvm-wtw-grid">';
       var seenP = new Set();
       watchmode.forEach(function(p) {
         if(!seenP.has(p.name)) { seenP.add(p.name); html += '<a class="cvm-wtw-item" href="' + (p.web_url || '#') + '" target="_blank" rel="noopener"><img src="' + (p.logo_100px || '') + '" alt=""><div><div class="cvm-wtw-name">' + CVM.esc(p.name) + '</div><div class="cvm-wtw-type">Stream</div></div></a>'; }
       });
       html += '</div></div>';
    } else if (region && (region.flatrate || region.rent || region.buy)) {
       var items = []; if (region.flatrate) items = items.concat(region.flatrate);
       html += '<div class="cvm-glass-card" style="grid-column:1/-1;"><div class="cvm-section-heading"><i class="fas fa-tv" style="color:#e50914;"></i> Where to Watch</div><div class="cvm-wtw-grid">';
       var seen = new Set();
       items.forEach(function(it) {
         if(!seen.has(it.provider_id)) { seen.add(it.provider_id); html += '<a class="cvm-wtw-item" href="' + (region.link || '#') + '" target="_blank"><img src="https://image.tmdb.org/t/p/w92' + it.logo_path + '" alt=""><div><div class="cvm-wtw-name">' + CVM.esc(it.provider_name) + '</div><div class="cvm-wtw-type">Stream</div></div></a>'; }
       });
       html += '</div></div>';
    }

    container.innerHTML = '<div class="cvm-bento-grid">' + html + '</div>';
  },

  _renderCast: function(data, myId) {
    var scroll = document.getElementById('cv-cast-scroll'); if (!scroll) return;
    var cast = data.credits ? data.credits.cast : [];
    if (!cast || cast.length === 0) { scroll.innerHTML = '<p style="color:#888;">No cast.</p>'; return; }
    scroll.className = 'cvm-cast-grid'; scroll.innerHTML = '';
    cast.slice(0, 25).forEach(function(c, i) {
      var img = c.profile_path ? 'https://image.tmdb.org/t/p/w185' + c.profile_path : 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Ccircle fill=%22%23333%22 cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3C/svg%3E';
      var el = document.createElement('div'); el.className = 'cvm-cast-card'; el.style.animationDelay = (i * 40) + 'ms';
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
    var html = '<div class="cvm-crew-section"><div class="cvm-section-heading"><i class="fas fa-users-cog"></i> Key Crew</div><div class="cvm-info-grid">';
    roles.forEach(function(role) { var people = byRole[role].slice(0, 3); html += '<div class="cvm-info-item"><div class="cvm-info-label">' + CVM.esc(role) + '</div><div class="cvm-info-value">' + people.map(function(p){ return CVM.esc(p.name); }).join(', ') + '</div></div>'; });
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
    var self = this; container.innerHTML = ''; container.style.display = 'flex'; container.style.gap = '10px'; container.style.overflowX = 'auto';
    backdrops.slice(0, 15).forEach(function(img, i) {
      var el = document.createElement('img'); el.src = 'https://image.tmdb.org/t/p/w780' + img.file_path; el.style.cssText = 'height:120px; width:200px; border-radius:10px; object-fit:cover; cursor:pointer; flex-shrink:0;';
      el.onclick = function() { var hero = document.getElementById('cv-m-hero-img'); if (hero) { if (self.heroInterval) clearInterval(self.heroInterval); hero.src = 'https://image.tmdb.org/t/p/w1280' + img.file_path; hero.style.animation = 'cvmKenBurns 18s ease-in-out'; } };
      container.appendChild(el);
    });
    wrap.style.display = 'block';
  },

  _renderReviews: function(data, myId) {
    var reviews = data.reviews && data.reviews.results ? data.reviews.results : []; if (reviews.length === 0) return;
    var existing = document.querySelector('.cvm-reviews-section'); if (existing) existing.remove();
    var html = '<div class="cvm-reviews-section"><div class="cvm-section-heading"><i class="fas fa-comments"></i> Reviews</div><div class="cvm-reviews-list">';
    reviews.slice(0, 3).forEach(function(r, i) {
      var content = r.content || ''; var short = content.length > 400 ? content.substring(0, 400) + '...' : content;
      var rating = r.author_details && r.author_details.rating ? r.author_details.rating : null;
      html += '<div class="cvm-review-card"><div class="cvm-review-header"><div class="cvm-review-avatar" style="background:#333;display:flex;align-items:center;justify-content:center;"><i class="fas fa-user"></i></div><div><div class="cvm-review-author">' + CVM.esc(r.author) + '</div>' + (rating ? '<div class="cvm-review-rating"><i class="fas fa-star"></i> ' + rating + '/10</div>' : '') + '</div></div><div class="cvm-review-content">' + CVM.esc(short) + '</div></div>';
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
    var html = '<div class="cvm-seasons-section"><div class="cvm-section-heading"><i class="fas fa-list-ol"></i> Seasons</div><div class="cvm-seasons-grid">';
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
    grid.innerHTML = '<div style="color:#888;padding:15px;"><i class="fas fa-spinner fa-spin"></i> Loading...</div>'; wrap.style.display = 'block';
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
    var bioEl = document.getElementById('bio-' + personId); if (bioEl) bioEl.textContent = bio && bio.biography ? (bio.biography.length > 250 ? bio.biography.substring(0, 250) + '...' : bio.biography) : 'No biography available.';
    
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
   5. PLAYER — v3 MERGED (TV Episodes + Auto-Health Check)
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

    var defaultId = (window.CV_CONFIG && CV_CONFIG.defaultServer) || 'vidsrc-net';
    var defIdx = -1;
    for (var i = 0; i < window.CV_SERVERS.length; i++) {
      if (window.CV_SERVERS[i].id === defaultId) { defIdx = i; break; }
    }
    this.activeServer = defIdx >= 0 ? defIdx : 0;
    this._renderServerTabs();
  },

  _renderServerTabs: function() {
    var tabs = document.getElementById('cv-server-tabs');
    if (!tabs) return;
    tabs.innerHTML = '';
    var self = this;
    var health = window.CVServerHealth;

    window.CV_SERVERS.forEach(function(s, i) {
      var t = document.createElement('button');
      t.className = 'cv-server-tab' + (i === self.activeServer ? ' cv-active' : '');
      t.textContent = s.name;
      if (health && health.workingServers && health.workingServers.find(function(w){ return w.id === s.id; })) {
        t.innerHTML = CVM.esc(s.name) + ' <span style="color:#22c55e;font-size:10px;">●</span>';
      }
      t.dataset.id = s.id;
      t.onclick = function() {
        if (self.deadServers[s.id]) { if (window.CVUtils) CVUtils.toast('Server unavailable'); return; }
        self.activeServer = i;
        document.querySelectorAll('.cv-server-tab').forEach(function(b, j){ b.classList.toggle('cv-active', j === i); });
        self.load(false);
      };
      tabs.appendChild(t);
    });
  },

  open: async function() {
    var s = document.getElementById('cv-player-section');
    if (s) { s.style.display = 'block'; s.classList.add('cv-active'); }

    // ১. TV হলে Season/Episode Selector দেখাও
    if (CVModal.current && CVModal.current.type === 'tv') {
      this._renderTVSelector(CVModal.current.id, CVModal.current.data);
    }

    // ২. Auto-Health Check (only if CVServerHealth module exists)
    if (!this._serverTestingDone) {
      this._serverTestingDone = true;
      var health = window.CVServerHealth;
      if (health && typeof health.testAll === 'function' && CVModal.current) {
        var tabs = document.getElementById('cv-server-tabs');
        if (tabs) tabs.innerHTML = '<div style="color:#aaa;font-size:12px;padding:10px;"><i class="fas fa-spinner fa-spin"></i> Checking best servers...</div>';
        try {
          await health.testAll(CVModal.current.type, CVModal.current.id, this.currentSeason, this.currentEpisode);
          if (typeof health.getSortedServers === 'function') {
            var sorted = health.getSortedServers();
            if (sorted && sorted.length) {
              window.CV_SERVERS = sorted;
              this.activeServer = 0;
            }
          }
        } catch(e) { console.warn('[CVPlayer] Health check failed:', e); }
        this._renderServerTabs();
      } else {
        this._renderServerTabs();
      }
    }

    this.load(true);
  },

  _renderTVSelector: function(id, data) {
    var wrap = document.getElementById('cv-tv-selector');
    if (!wrap) {
      var player = document.getElementById('cv-player-section');
      if (!player) return;
      wrap = document.createElement('div');
      wrap.id = 'cv-tv-selector';
      wrap.style.cssText = 'margin-bottom:15px;';
      var tabs = document.getElementById('cv-server-tabs');
      if (tabs && tabs.parentNode) tabs.parentNode.insertBefore(wrap, tabs);
      else player.insertBefore(wrap, player.firstChild);
    }

    var seasons = data.seasons || [];
    var validSeasons = seasons.filter(function(s) {
      if (!window.CV_CONFIG || !CV_CONFIG.tv || !CV_CONFIG.tv.showSpecialSeasons) { if (s.season_number === 0) return false; }
      return s.season_number > 0;
    });
    if (validSeasons.length === 0) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';

    var self = this;
    var html = '<div class="cv-tv-controls">';
    html += '<div class="cv-season-row">';
    html += '<label class="cv-select-label"><i class="fas fa-list"></i> Season</label>';
    html += '<select id="cv-season-select" class="cv-season-select">';
    validSeasons.forEach(function(s) {
      var sel = s.season_number === self.currentSeason ? ' selected' : '';
      html += '<option value="' + s.season_number + '"' + sel + '>' + CVM.esc(s.name) + ' · ' + (s.episode_count || 0) + ' episodes</option>';
    });
    html += '</select></div>';
    html += '<div class="cv-episode-row">';
    html += '<label class="cv-select-label"><i class="fas fa-play-circle"></i> Episodes</label>';
    html += '<div id="cv-episode-grid" class="cv-episode-grid"><div style="color:#888;padding:15px;text-align:center;"><i class="fas fa-spinner fa-spin"></i> Loading...</div></div>';
    html += '</div></div>';
    wrap.innerHTML = html;

    var sel = document.getElementById('cv-season-select');
    if (sel) {
      sel.onchange = function() {
        var newSeason = parseInt(this.value);
        self.currentSeason = newSeason;
        self.currentEpisode = 1;
        self._loadEpisodes(id, newSeason);
        self.load(false);
      };
    }
    this._loadEpisodes(id, this.currentSeason);
  },

  _loadEpisodes: async function(tvId, seasonNum) {
    var grid = document.getElementById('cv-episode-grid');
    if (!grid) return;
    grid.innerHTML = '<div style="color:#888;padding:15px;text-align:center;"><i class="fas fa-spinner fa-spin"></i> Loading episodes...</div>';

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
          var isActive = (seasonNum === this.currentSeason && i === this.currentEpisode);
          html += '<button class="cv-episode-btn' + (isActive ? ' cv-active' : '') + '" onclick="CVPlayer.selectEpisode(' + seasonNum + ', ' + i + ')">' +
            '<span class="cv-ep-num">E' + i + '</span></button>';
        }
        grid.innerHTML = html;
      } else {
        grid.innerHTML = '<div style="color:#888;padding:15px;text-align:center;">No episodes found.</div>';
      }
      return;
    }

    var html = '';
    var self = this;
    data.episodes.forEach(function(ep) {
      var isActive = (seasonNum === self.currentSeason && ep.episode_number === self.currentEpisode);
      var stillUrl = ep.still_path ? 'https://image.tmdb.org/t/p/w300' + ep.still_path : null;
      html += '<button class="cv-episode-btn' + (isActive ? ' cv-active' : '') + '" onclick="CVPlayer.selectEpisode(' + seasonNum + ', ' + ep.episode_number + ')">' +
        (stillUrl ? '<div class="cv-ep-thumb" style="background-image:url(\'' + stillUrl + '\')"></div>' : '') +
        '<span class="cv-ep-num">E' + ep.episode_number + '</span>' +
        '<span class="cv-ep-name">' + CVM.esc(ep.name || ('Episode ' + ep.episode_number)) + '</span>' +
        (ep.overview ? '<span class="cv-ep-desc">' + CVM.esc(ep.overview.substring(0, 60)) + '...</span>' : '') +
        '</button>';
    });
    grid.innerHTML = html;
  },

  selectEpisode: function(season, episode) {
    this.currentSeason = season;
    this.currentEpisode = episode;
    document.querySelectorAll('.cv-episode-btn').forEach(function(b) { b.classList.remove('cv-active'); });
    var ev = window.event;
    if (ev && ev.currentTarget) ev.currentTarget.classList.add('cv-active');
    this.load(false);
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

/* ★ TV Selector CSS */
(function() {
  if (document.getElementById('cv-tv-selector-styles')) return;
  var s = document.createElement('style');
  s.id = 'cv-tv-selector-styles';
  s.textContent = `
    .cv-tv-controls { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:16px; }
    .cv-season-row { display:flex; align-items:center; gap:12px; margin-bottom:14px; flex-wrap:wrap; }
    .cv-select-label { font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:#22d3ee; display:flex; align-items:center; gap:6px; }
    .cv-season-select { flex:1; min-width:200px; padding:10px 14px; border-radius:10px; background:#0d0d14; border:1px solid rgba(255,255,255,0.15); color:#fff; font-size:13px; font-weight:600; cursor:pointer; outline:none; }
    .cv-season-select:hover, .cv-season-select:focus { border-color:#22d3ee; }
    .cv-episode-row { display:flex; flex-direction:column; gap:10px; }
    .cv-episode-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:8px; max-height:280px; overflow-y:auto; padding:4px; }
    .cv-episode-btn { display:flex; flex-direction:column; gap:4px; padding:10px 12px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:10px; color:#e5e5e5; cursor:pointer; text-align:left; transition:all 0.2s; font-family:inherit; }
    .cv-episode-btn:hover { background:rgba(255,255,255,0.08); border-color:rgba(34,211,238,0.4); transform:translateY(-1px); }
    .cv-episode-btn.cv-active { background:rgba(229,9,20,0.15); border-color:#e50914; box-shadow:0 4px 15px rgba(229,9,20,0.3); }
    .cv-ep-thumb { width:100%; height:60px; border-radius:6px; background-size:cover; background-position:center; margin-bottom:6px; }
    .cv-ep-num { font-size:11px; font-weight:800; color:#22d3ee; text-transform:uppercase; }
    .cv-episode-btn.cv-active .cv-ep-num { color:#fff; }
    .cv-ep-name { font-size:12px; font-weight:600; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .cv-ep-desc { font-size:10px; color:#888; overflow:hidden; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; }
    @media (max-width: 600px) { .cv-episode-grid { grid-template-columns:repeat(2, 1fr); max-height:220px; } .cv-ep-thumb { height:50px; } }
  `;
  document.head.appendChild(s);
})();

/* ═══════════════════════════════════════════════
   6. HISTORY
═══════════════════════════════════════════════ */
window.addEventListener('popstate', function(e) {
  if (e.state && e.state.id && e.state.type) { CVModal.open(e.state.id, e.state.type, true); }
  else { CVModal.close(true); var fp = document.getElementById('cv-full-page'); if (fp && fp.classList.contains('active') && window.CVCategory) CVCategory.closeFullPage(true); }
});

console.info('[CineVault] ✓ Part 1 v5 Final + TV Player Merged loaded');
//]]>
</script>
