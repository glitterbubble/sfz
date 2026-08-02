/* ================================================================
   嵊方志 · 页面模块  pages.js
   实现1+5+N全部页面：首页/检索/地图/我的/读/看/听/礼/专题/阅读器
   ================================================================ */

var SFZ_PAGES = (function() {
  'use strict';

  var register = function(route) {

    /* ========== 首页 ========== */
    route('home', function(el) {
      el.innerHTML = renderHome();
      bindHome(el);
    });

    /* ========== 检索/数字方志馆 ========== */
    route('search', function(el, params) {
      el.innerHTML = renderSearch(params);
      bindSearch(el);
    });

    /* ========== 地情地图 ========== */
    route('map', function(el) {
      el.innerHTML = renderMap();
      bindMap(el);
    });

    /* ========== 我的 ========== */
    route('mine', function(el) {
      el.innerHTML = renderMine();
      bindMine(el);
    });

    /* ========== 剡好读（志书列表） ========== */
    route('read', function(el) {
      el.innerHTML = renderRead();
      bindRead(el);
    });

    /* ========== 阅读器 ========== */
    route('reader', function(el, params) {
      var bookId = params[0] || 'b001';
      el.innerHTML = renderReader(bookId);
      bindReader(el, bookId);
    });

    /* ========== 剡好看（视听） ========== */
    route('watch', function(el) {
      el.innerHTML = renderWatch();
      bindWatch(el);
    });

    /* ========== 剡好听（讲堂/音频） ========== */
    route('listen', function(el) {
      el.innerHTML = renderListen();
      bindListen(el);
    });

    /* ========== 剡好礼（文创） ========== */
    route('gift', function(el) {
      el.innerHTML = renderGift();
    });

    /* ========== 专题详情 ========== */
    route('topic', function(el, params) {
      var topicId = params[0] || 'tangshi';
      el.innerHTML = renderTopic(topicId);
    });

    /* ========== 志书详情 ========== */
    route('book', function(el, params) {
      var bookId = params[0] || 'b001';
      el.innerHTML = renderBookDetail(bookId);
    });
  };

  /* ============================================================
     首页渲染
     ============================================================ */
  function renderHome() {
    var D = SFZ_DATA;
    var h = '';

    // 头部
    h += '<div class="home-header">';
    h += '<div class="top-row">';
    h += '<div class="logo" onclick="SFZ.navigate(\'search\')">';
    h += '<div class="seal">嵊</div>';
    h += '<div class="name">嵊方志<small>SHENGZHOU</small></div>';
    h += '</div>';
    h += '<div class="top-icons">';
    h += '<div class="ic-box" onclick="SFZ.toast(\'扫码功能开发中\')">' + SFZ.icon('ic-scan') + '</div>';
    h += '<div class="ic-box" onclick="SFZ.toast(\'消息功能开发中\')">' + SFZ.icon('ic-msg') + '</div>';
    h += '</div>';
    h += '</div>';
    h += '<div class="home-search" onclick="SFZ.navigate(\'search\')">';
    h += SFZ.icon('ic-search');
    h += '<input placeholder="搜志书 / 年鉴 / 地名…" readonly>';
    h += '</div>';
    h += '</div>';

    // Banner轮播
    h += '<div class="banner ' + D.banners[0].color + '" id="home-banner" data-idx="0">';
    h += '<div class="bn-content">';
    h += '<div class="zhuan">' + D.banners[0].text + '<span class="accent">' + D.banners[0].accent + '</span></div>';
    h += '<p>' + D.banners[0].sub + '</p>';
    h += '<span class="tag">' + D.banners[0].tag + '</span>';
    h += '</div>';
    h += '<div class="dots">' + D.banners.map(function(b, i) {
      return '<span class="' + (i === 0 ? 'on' : '') + '"></span>';
    }).join('') + '</div>';
    h += '</div>';

    // 金刚区
    h += '<div class="quick-grid">';
    D.quickEntries.forEach(function(q) {
      h += '<div class="quick-item" onclick="SFZ.navigate(\'' + q.target + '\')">';
      h += '<div class="qi-ico ' + q.color + '">' + SFZ.icon(q.icon) + '</div>';
      h += '<div class="qi-lb">' + q.label + '</div>';
      h += '</div>';
    });
    h += '</div>';

    // 数字方志馆入口
    h += '<div class="section-h"><h3>数字方志馆</h3><span class="more" onclick="SFZ.navigate(\'search\')">全部 →</span></div>';
    h += '<div class="archive-entry">';
    h += '<div class="ae-card" onclick="SFZ.navigate(\'search\')">';
    h += '<div class="ae-icon">' + SFZ.icon('ic-arch') + '</div>';
    h += '<div class="ae-info">';
    h += '<div class="ae-title">三级志书 · 全文检索</div>';
    h += '<div class="ae-sub">16000+ 册馆藏 · 所搜即所得</div>';
    h += '</div>';
    h += '<div class="ae-btn">进入</div>';
    h += '</div>';
    h += '</div>';

    // 为你推荐
    h += '<div class="section-h"><h3>为你推荐</h3><span class="more" onclick="SFZ.navigate(\'read\')">更多 →</span></div>';
    h += '<div class="rec-cards">';
    D.recommendations.forEach(function(rec) {
      var b = SFZ.getBook(rec.bookId);
      if (b) {
        h += '<div class="rec-card" onclick="SFZ.navigate(\'book/' + b.id + '\')">';
        h += '<div class="thumb" style="background:' + b.thumbColor + '">' + b.title.substring(0, 4) + '</div>';
        h += '<div class="info">';
        h += '<span class="badge bg-' + rec.badgeType + '">' + rec.badgeText + '</span>';
        h += '<h4>' + SFZ.esc(b.title) + '</h4>';
        h += '<p>' + SFZ.esc(b.summary) + '</p>';
        h += '<div class="meta"><span>' + b.year + '</span><span>' + b.words + '</span></div>';
        h += '</div>';
        h += '</div>';
      }
    });
    h += '</div>';

    // 特色专题
    h += '<div class="section-h"><h3>特色专题</h3><span class="more">全部 →</span></div>';
    h += '<div class="topic-row">';
    D.topics.forEach(function(t) {
      h += '<div class="topic-card ' + t.color + '" onclick="SFZ.navigate(\'topic/' + t.id + '\')">';
      h += '<div class="tc-title">' + t.title + '</div>';
      h += '<div class="tc-sub">' + t.subtitle + '</div>';
      h += '</div>';
    });
    h += '</div>';

    h += '<div style="height: 20px;"></div>';
    return h;
  }

  function bindHome(el) {
    // Banner轮播
    var banner = el.querySelector('#home-banner');
    if (banner) {
      var idx = 0;
      var dots = banner.querySelectorAll('.dots span');
      var bn = SFZ_DATA.banners;
      banner.addEventListener('click', function() {
        SFZ.navigate(bn[idx].target);
      });
      var timer = setInterval(function() {
        idx = (idx + 1) % bn.length;
        updateBanner();
      }, 4000);

      function updateBanner() {
        var b = bn[idx];
        banner.className = 'banner ' + b.color;
        var content = banner.querySelector('.bn-content');
        content.innerHTML = '<div class="zhuan">' + b.text + '<span class="accent">' + b.accent + '</span></div>' +
          '<p>' + b.sub + '</p><span class="tag">' + b.tag + '</span>';
        dots.forEach(function(d, i) { d.className = i === idx ? 'on' : ''; });
      }
    }
  }

  /* ============================================================
     检索/数字方志馆页
     ============================================================ */
  function renderSearch(params) {
    var keyword = params[0] ? decodeURIComponent(params[0]) : '';
    var h = '';

    h += '<div class="search-header">';
    h += '<div class="sh-top">';
    h += '<div class="back-btn" onclick="SFZ.navigate(\'home\')">' + SFZ.icon('ic-back') + '</div>';
    h += '<span class="sh-title">数字方志馆</span>';
    h += '</div>';
    h += '<div class="search-bar-2" style="background:rgba(255,255,255,.95);border-radius:999px;padding:9px 14px;display:flex;align-items:center;gap:10px;">';
    h += SFZ.icon('ic-search');
    h += '<input id="search-input" placeholder="搜志书 / 年鉴 / 地名…" value="' + SFZ.esc(keyword) + '" style="flex:1;border:none;outline:none;background:transparent;font-size:14px;color:var(--text);">';
    h += '</div>';
    h += '</div>';

    if (keyword) {
      // 有搜索关键词，显示结果
      var results = SFZ.searchBooks(keyword);
      h += '<div class="filter-chips">';
      var types = [
        { key: 'all', label: '全部' },
        { key: 'xianzhi', label: '县志' },
        { key: 'shizhi', label: '市志' },
        { key: 'nianjian', label: '年鉴' },
        { key: 'zhuanti', label: '专题' },
        { key: 'kanwu', label: '刊物' }
      ];
      types.forEach(function(t) {
        h += '<div class="chip ' + (t.key === 'all' ? 'active' : '') + '" data-type="' + t.key + '">' + t.label + '</div>';
      });
      h += '</div>';

      h += '<div class="result-count">找到 <b style="color:var(--seal)">' + results.length + '</b> 条相关结果</div>';
      h += '<div class="result-list">';
      results.forEach(function(b) {
        h += renderResultCard(b);
      });
      h += '</div>';
    } else {
      // 无关键词，显示热门搜索和搜索历史
      var history = SFZ.searchHistory.getAll();
      if (history.length > 0) {
        h += '<div class="search-history">';
        h += '<div class="sh-head"><h4>搜索历史</h4><span class="clear" onclick="clearSearchHistory()">清空</span></div>';
        h += '<div class="history-tags">';
        history.forEach(function(k) {
          h += '<span class="history-tag" onclick="doSearch(\'' + SFZ.esc(k) + '\')">' + SFZ.esc(k) + '</span>';
        });
        h += '</div>';
        h += '</div>';
      }

      h += '<div class="hot-search">';
      h += '<h4>' + SFZ.icon('ic-hot') + ' 热门搜索</h4>';
      h += '<div class="hot-tags">';
      SFZ_DATA.hotSearches.forEach(function(item) {
        h += '<div class="hot-tag" onclick="doSearch(\'' + SFZ.esc(item.keyword) + '\')">';
        h += '<span class="num">' + item.rank + '</span>' + item.keyword;
        h += '</div>';
      });
      h += '</div>';
      h += '</div>';

      // 馆藏统计
      h += '<div class="section-h"><h3>馆藏资源</h3></div>';
      h += '<div style="margin:0 16px;" class="card">';
      h += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">';
      h += '<div style="font-family:var(--serif);font-size:32px;color:var(--ink);font-weight:900;">' + SFZ_DATA.archiveStats.totalBooks.toLocaleString() + '</div>';
      h += '<div style="font-size:12px;color:var(--muted);">册馆藏地方文献<br>纵贯古今 · 横陈百科</div>';
      h += '</div>';
      h += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
      SFZ_DATA.archiveStats.categories.forEach(function(c) {
        h += '<span class="hot-tag" style="cursor:default;">' + c.name + ' ' + c.count + '册</span>';
      });
      h += '</div>';
      h += '</div>';
    }

    h += '<div style="height: 20px;"></div>';
    return h;
  }

  function renderResultCard(b) {
    var h = '<div class="result-card" onclick="SFZ.navigate(\'book/' + b.id + '\')">';
    h += '<div class="rc-top">';
    h += '<span class="rc-badge bg-' + b.type + '">' + b.typeLabel + '</span>';
    h += '<span class="rc-year">' + b.year + '</span>';
    h += '</div>';
    h += '<h4>' + SFZ.esc(b.title) + '</h4>';
    h += '<p>' + SFZ.esc(b.summary) + '</p>';
    h += '<div class="rc-foot">';
    h += '<span class="words">' + b.words + ' · ' + b.format + '</span>';
    h += '<span class="read-btn">在线阅读 →</span>';
    h += '</div>';
    h += '</div>';
    return h;
  }

  function bindSearch(el) {
    var input = el.querySelector('#search-input');
    if (input) {
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          var kw = input.value.trim();
          if (kw) {
            SFZ.searchHistory.add(kw);
            SFZ.navigate('search/' + encodeURIComponent(kw));
          }
        }
      });
      // 自动聚焦
      setTimeout(function() { input.focus(); }, 300);
    }

    // 筛选chip
    el.querySelectorAll('.chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        el.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var type = chip.getAttribute('data-type');
        var keyword = input ? input.value : '';
        var results = SFZ.searchBooks(keyword, type);
        var list = el.querySelector('.result-list');
        var count = el.querySelector('.result-count b');
        if (count) count.textContent = results.length;
        if (list) {
          list.innerHTML = results.map(function(b) { return renderResultCard(b); }).join('');
        }
      });
    });
  }

  /* ============================================================
     地情地图页
     ============================================================ */
  function renderMap() {
    var h = '';
    h += '<div class="map-page" id="map-page">';

    // SVG底图
    h += '<svg class="map-svg" viewBox="0 0 390 680" preserveAspectRatio="xMidYMid slice">';
    h += '<rect width="390" height="680" fill="#e8ede4"/>';
    // 山脉等高线
    h += '<path d="M0,120 Q60,80 120,110 T240,90 T390,120 L390,200 Q300,180 200,200 T0,180 Z" fill="#d4dccd" opacity=".5"/>';
    h += '<path d="M0,300 Q80,260 160,290 T390,280 L390,360 Q280,340 180,360 T0,340 Z" fill="#d4dccd" opacity=".4"/>';
    h += '<path d="M0,480 Q70,440 150,470 T390,460 L390,540 Q280,520 180,540 T0,520 Z" fill="#d4dccd" opacity=".3"/>';
    // 剡溪
    h += '<path d="M60,40 Q80,120 50,200 Q90,280 70,360 Q110,440 80,520 Q120,600 100,680" stroke="#7eb8d8" stroke-width="14" fill="none" opacity=".5" stroke-linecap="round"/>';
    h += '<path d="M60,40 Q80,120 50,200 Q90,280 70,360 Q110,440 80,520 Q120,600 100,680" stroke="#a8d4ec" stroke-width="8" fill="none" opacity=".7" stroke-linecap="round"/>';
    // 唐诗之路虚线
    h += '<path d="M20,500 Q80,450 140,420 Q200,390 260,350 Q320,310 370,260" stroke="#c0392b" stroke-width="3" fill="none" stroke-dasharray="8,5" opacity=".6"/>';
    // 文字标注
    h += '<text x="200" y="100" font-size="11" fill="#8a857a" font-family="serif" opacity=".6">剡 溪</text>';
    h += '<text x="280" y="250" font-size="10" fill="#c0392b" font-family="serif" opacity=".5">唐诗之路</text>';
    h += '<text x="50" y="600" font-size="10" fill="#8a857a" opacity=".4">嵊 州 城 区</text>';
    h += '</svg>';

    // 顶部搜索
    h += '<div class="map-header" style="position:absolute;top:calc(var(--safe-top) + 8px);left:0;right:0;z-index:10;padding:0 16px;display:flex;align-items:center;gap:10px;">';
    h += '<div class="back-btn" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.92);display:grid;place-items:center;box-shadow:var(--shadow-sm);cursor:pointer;" onclick="SFZ.navigate(\'home\')">' + SFZ.icon('ic-back') + '</div>';
    h += '<div class="search-box" style="flex:1;background:rgba(255,255,255,.92);box-shadow:var(--shadow-sm);">';
    h += SFZ.icon('ic-search');
    h += '<input placeholder="搜索地名 / 人物 / 遗迹…" readonly onclick="SFZ.toast(\'地图搜索开发中\')">';
    h += '</div>';
    h += '</div>';

    // 筛选
    h += '<div class="map-filters">';
    var filters = ['全部', '人物', '遗迹', '景点', '唐诗之路'];
    filters.forEach(function(f, i) {
      h += '<div class="mf-chip ' + (i === 0 ? 'active' : '') + '" data-filter="' + f + '">' + f + '</div>';
    });
    h += '</div>';

    // 唐诗之路标签
    h += '<div class="route-label" onclick="SFZ.navigate(\'topic/tangshi\')">' + SFZ.icon('ic-route') + ' 浙东唐诗之路</div>';

    // 标记点
    SFZ_DATA.mapPoints.forEach(function(p) {
      h += '<div class="marker" style="left:' + p.x + '%;top:' + p.y + '%;" data-id="' + p.id + '">';
      h += '<div class="pin ' + p.pinType + '"><span>' + p.typeLabel.substring(0, 1) + '</span></div>';
      h += '<div class="label">' + p.name + '</div>';
      h += '</div>';
    });

    // 底部信息卡（默认显示第一个）
    var firstPoint = SFZ_DATA.mapPoints[0];
    h += '<div class="map-info show" id="map-info">';
    h += '<div class="mi-grip"></div>';
    h += '<div class="mi-head">';
    h += '<span class="mi-badge bg-' + firstPoint.badgeType + '">' + firstPoint.typeLabel + '</span>';
    h += '<h4>' + firstPoint.name + '</h4>';
    h += '<span class="mi-dist">距您 ' + firstPoint.dist + '</span>';
    h += '</div>';
    h += '<p>' + SFZ.esc(firstPoint.desc) + '</p>';
    h += '<div class="mi-actions">';
    h += '<div class="mi-btn mi-btn-outline" onclick="showMapPointDetail(\'' + firstPoint.id + '\')">查看详情</div>';
    h += '<div class="mi-btn mi-btn-primary" onclick="SFZ.toast(\'导航功能开发中\')">导航前往</div>';
    h += '</div>';
    h += '</div>';

    h += '</div>';
    return h;
  }

  function bindMap(el) {
    el.querySelectorAll('.marker').forEach(function(m) {
      m.addEventListener('click', function() {
        var id = m.getAttribute('data-id');
        var point = SFZ.getMapPoint(id);
        if (!point) return;

        // 更新信息卡
        var info = el.querySelector('#map-info');
        var html = '<div class="mi-grip"></div>';
        html += '<div class="mi-head">';
        html += '<span class="mi-badge bg-' + point.badgeType + '">' + point.typeLabel + '</span>';
        html += '<h4>' + point.name + '</h4>';
        html += '<span class="mi-dist">距您 ' + point.dist + '</span>';
        html += '</div>';
        html += '<p>' + SFZ.esc(point.desc) + '</p>';
        html += '<div class="mi-actions">';
        html += '<div class="mi-btn mi-btn-outline" onclick="showMapPointDetail(\'' + point.id + '\')">查看详情</div>';
        html += '<div class="mi-btn mi-btn-primary" onclick="SFZ.toast(\'导航功能开发中\')">导航前往</div>';
        html += '</div>';
        info.innerHTML = html;
      });
    });

    // 筛选
    el.querySelectorAll('.mf-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        el.querySelectorAll('.mf-chip').forEach(function(c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var filter = chip.getAttribute('data-filter');
        el.querySelectorAll('.marker').forEach(function(m) {
          var id = m.getAttribute('data-id');
          var point = SFZ.getMapPoint(id);
          if (filter === '全部' || point.typeLabel === filter) {
            m.style.display = '';
          } else {
            m.style.display = 'none';
          }
        });
      });
    });
  }

  /* ============================================================
     我的页
     ============================================================ */
  function renderMine() {
    var favs = SFZ.favorites.getAll();
    var hist = SFZ.history.getAll();
    var subs = ['tangshi', 'yueju']; // 模拟订阅
    var h = '';

    // 头部
    h += '<div class="mine-header">';
    h += '<div class="mh-top">';
    h += '<div class="ic-box" onclick="SFZ.toggleTheme()">' + SFZ.icon('ic-gear') + '</div>';
    h += '<div class="ic-box" onclick="SFZ.toast(\'消息功能开发中\')">' + SFZ.icon('ic-bell') + '</div>';
    h += '</div>';
    h += '<div class="mine-profile">';
    h += '<div class="avatar">剡</div>';
    h += '<div class="mp-info">';
    h += '<h3>剡溪漫客</h3>';
    h += '<p>ID: SZ_20250701 · 嵊州·剡湖街道</p>';
    h += '<span class="mp-tag">方志达人 · Lv.3</span>';
    h += '</div>';
    h += '</div>';
    h += '</div>';

    // 统计
    h += '<div class="mine-stats">';
    h += '<div class="ms-item" onclick="SFZ.navigate(\'mine-favorites\')">';
    h += '<div class="ms-num">' + favs.length + '<small>册</small></div>';
    h += '<div class="ms-lb">我的收藏</div>';
    h += '</div>';
    h += '<div class="ms-item" onclick="SFZ.navigate(\'mine-history\')">';
    h += '<div class="ms-num">' + hist.length + '<small>篇</small></div>';
    h += '<div class="ms-lb">阅读历史</div>';
    h += '</div>';
    h += '<div class="ms-item">';
    h += '<div class="ms-num">' + subs.length + '<small>个</small></div>';
    h += '<div class="ms-lb">订阅专题</div>';
    h += '</div>';
    h += '</div>';

    // 菜单
    h += '<div class="mine-menu">';
    var menus = [
      { icon: 'ic-star', color: 'mm-ico-1', title: '我的收藏', sub: '志书、专题、视听内容', badge: favs.length > 0 ? favs.length : '' },
      { icon: 'ic-clock', color: 'mm-ico-2', title: '阅读历史', sub: '最近阅读的方志内容', badge: '' },
      { icon: 'ic-bell', color: 'mm-ico-3', title: '订阅专题', sub: '浙东唐诗之路 · 越剧之乡', badge: '' },
      { icon: 'ic-user', color: 'mm-ico-4', title: '关注地情人物', sub: '王羲之 · 袁雪芬 · 马寅初', badge: '' },
      { icon: 'ic-edit', color: 'mm-ico-5', title: '我的笔记', sub: '阅读时记录的方志笔记', badge: '' }
    ];
    menus.forEach(function(m) {
      h += '<div class="mm-item" onclick="SFZ.toast(\'' + m.title + ' - 功能开发中\')">';
      h += '<div class="mm-ico ' + m.color + '">' + SFZ.icon(m.icon) + '</div>';
      h += '<div class="mm-text"><h4>' + m.title + '</h4><p>' + m.sub + '</p></div>';
      if (m.badge) h += '<span class="mm-badge">' + m.badge + '</span>';
      h += '<span class="mm-arrow">›</span>';
      h += '</div>';
    });
    h += '</div>';

    // 方志足迹
    h += '<div class="mine-footprint">';
    h += '<div class="mf-head"><h4>方志足迹</h4><span class="mf-tag">本周</span></div>';
    h += '<div class="mf-bars">';
    SFZ_DATA.userFootprint.forEach(function(f, i) {
      h += '<div class="mf-bar ' + (f.value >= 80 ? 'peak' : '') + '" style="height:' + f.value + '%"></div>';
    });
    h += '</div>';
    h += '<div class="mf-labels">';
    SFZ_DATA.userFootprint.forEach(function(f) {
      h += '<span>' + f.day + '</span>';
    });
    h += '</div>';
    h += '</div>';

    h += '<div style="height: 20px;"></div>';
    return h;
  }

  function bindMine(el) {
    // 主题切换已在onclick中处理
  }

  /* ============================================================
     剡好读（志书列表页）
     ============================================================ */
  function renderRead() {
    var h = '';
    h += renderHeader('剡好读', 'home');
    h += '<div class="search-box" style="margin:12px 16px 0;" id="read-search">';
    h += SFZ.icon('ic-search');
    h += '<input placeholder="搜索志书 / 年鉴…" id="read-input">';
    h += '</div>';
    h += '<div class="filter-chips">';
    var types = [
      { key: 'all', label: '全部' },
      { key: 'xianzhi', label: '县志' },
      { key: 'shizhi', label: '市志' },
      { key: 'nianjian', label: '年鉴' },
      { key: 'diming', label: '地名志' },
      { key: 'kanwu', label: '刊物' },
      { key: 'guanang', label: '馆藏' }
    ];
    types.forEach(function(t, i) {
      h += '<div class="chip ' + (i === 0 ? 'active' : '') + '" data-type="' + t.key + '">' + t.label + '</div>';
    });
    h += '</div>';

    h += '<div class="result-list" id="read-list">';
    SFZ_DATA.books.forEach(function(b) {
      h += renderResultCard(b);
    });
    h += '</div>';

    // 分隔线
    h += '<div class="divider-deco"><span>— 嵊州方志馆藏 —</span></div>';

    // 年鉴列表
    h += '<div class="section-h"><h3>嵊州年鉴</h3></div>';
    h += '<div class="result-list">';
    SFZ_DATA.yearbooks.forEach(function(y) {
      h += '<div class="result-card" onclick="SFZ.toast(\'年鉴阅读开发中\')">';
      h += '<div class="rc-top"><span class="rc-badge bg-nianjian">年鉴</span><span class="rc-year">' + y.year + '年</span></div>';
      h += '<h4>' + y.title + '</h4>';
      h += '<p>逐年编纂的综合性年鉴，全面记录' + y.year + '年度嵊州发展成就。</p>';
      h += '<div class="rc-foot"><span class="words">' + y.words + ' · 全文</span><span class="read-btn">在线阅读 →</span></div>';
      h += '</div>';
    });
    h += '</div>';

    h += '<div style="height: 20px;"></div>';
    return h;
  }

  function bindRead(el) {
    var input = el.querySelector('#read-input');
    var list = el.querySelector('#read-list');
    var currentType = 'all';

    function updateList() {
      var kw = input ? input.value.trim() : '';
      var results = SFZ_DATA.books.filter(function(b) {
        var matchKw = !kw || b.title.indexOf(kw) >= 0 || b.summary.indexOf(kw) >= 0;
        var matchType = currentType === 'all' || b.type === currentType;
        return matchKw && matchType;
      });
      list.innerHTML = results.map(function(b) { return renderResultCard(b); }).join('');
    }

    if (input) {
      input.addEventListener('input', updateList);
    }

    el.querySelectorAll('.chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        el.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('active'); });
        chip.classList.add('active');
        currentType = chip.getAttribute('data-type');
        updateList();
      });
    });
  }

  /* ============================================================
     阅读器
     ============================================================ */
  function renderReader(bookId) {
    var b = SFZ.getBook(bookId);
    if (!b) return '<div class="empty-state"><p>志书不存在</p></div>';

    // 记录阅读历史
    SFZ.history.add(b);

    var h = '';
    // 工具栏
    h += '<div class="reader-toolbar" id="reader-toolbar">';
    h += '<div class="tb-btn" onclick="history.back()">' + SFZ.icon('ic-back') + '</div>';
    h += '<div class="tb-title">' + SFZ.esc(b.title) + '</div>';
    h += '<div class="tb-btn" onclick="toggleToc()">' + SFZ.icon('ic-list') + '</div>';
    h += '<div class="tb-btn" onclick="toggleReaderSettings()">' + SFZ.icon('ic-text-size') + '</div>';
    h += '</div>';

    // 阅读内容
    var settings = SFZ.readerSettings.get();
    var fontSize = settings.fontSize === 'large' ? '18px' : settings.fontSize === 'small' ? '14px' : '16px';
    var isDark = settings.theme === 'dark' || (settings.theme === 'auto' && SFZ.getTheme() === 'dark');

    h += '<div class="reader-content" id="reader-content" style="font-size:' + fontSize + ';">';
    h += '<h1>' + SFZ.esc(b.title) + '</h1>';
    h += '<div class="subtitle">' + b.author + ' · ' + b.publisher + ' · ' + b.year + '</div>';

    b.content.forEach(function(c) {
      if (c.level === 1) {
        h += '<h2 id="' + c.id + '">' + c.title + '</h2>';
      } else {
        h += '<h3 id="' + c.id + '">' + c.title + '</h3>';
      }
      h += '<p>' + c.text + '</p>';
    });

    h += '</div>';

    // 目录侧栏
    h += '<div class="reader-toc" id="reader-toc">';
    h += '<div class="toc-head">目 录</div>';
    h += '<div class="toc-body">';
    b.content.forEach(function(c, i) {
      h += '<div class="toc-item ' + (c.level === 2 ? 'lvl-2' : '') + '" data-id="' + c.id + '">' + c.title + '</div>';
    });
    h += '</div>';
    h += '</div>';

    // 阅读设置面板
    h += '<div class="reader-settings" id="reader-settings">';
    h += '<div class="rs-head"><h4>阅读设置</h4><div class="close" onclick="toggleReaderSettings()">' + SFZ.icon('ic-close') + '</div></div>';
    h += '<div class="rs-group"><div class="rs-label">字号</div><div class="rs-btns">';
    ['small', 'medium', 'large'].forEach(function(s) {
      h += '<div class="rs-btn ' + (s === settings.fontSize ? 'active' : '') + '" data-size="' + s + '">' + (s === 'small' ? '小' : s === 'medium' ? '中' : '大') + '</div>';
    });
    h += '</div></div>';
    h += '<div class="rs-group"><div class="rs-label">主题</div><div class="rs-btns">';
    [['light','日间'],['dark','夜间'],['auto','跟随']].forEach(function(t) {
      h += '<div class="rs-btn ' + (t[0] === settings.theme ? 'active' : '') + '" data-theme="' + t[0] + '">' + t[1] + '</div>';
    });
    h += '</div></div>';
    h += '</div>';

    // 遮罩
    h += '<div class="sheet-overlay" id="reader-overlay" onclick="closeAllPanels()"></div>';

    return h;
  }

  function bindReader(el, bookId) {
    // 目录点击跳转
    el.querySelectorAll('.toc-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var id = item.getAttribute('data-id');
        var target = el.querySelector('#' + id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        closeAllPanels();
      });
    });

    // 字号设置
    el.querySelectorAll('.rs-btn[data-size]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        el.querySelectorAll('.rs-btn[data-size]').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var size = btn.getAttribute('data-size');
        var settings = SFZ.readerSettings.get();
        settings.fontSize = size;
        SFZ.readerSettings.set(settings);
        var px = size === 'large' ? '18px' : size === 'small' ? '14px' : '16px';
        var content = el.querySelector('#reader-content');
        if (content) content.style.fontSize = px;
      });
    });

    // 主题设置
    el.querySelectorAll('.rs-btn[data-theme]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        el.querySelectorAll('.rs-btn[data-theme]').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var theme = btn.getAttribute('data-theme');
        var settings = SFZ.readerSettings.get();
        settings.theme = theme;
        SFZ.readerSettings.set(settings);
        if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (theme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      });
    });
  }

  /* ============================================================
     剡好看（视听页）
     ============================================================ */
  function renderWatch() {
    var h = '';
    h += renderHeader('剡好看', 'home');
    h += '<div class="section-h"><h3>越剧影像</h3></div>';

    SFZ_DATA.videos.forEach(function(v, i) {
      if (v.cat === '越剧') {
        h += renderVideoCard(v);
      }
    });

    h += '<div class="section-h"><h3>书圣文化</h3></div>';
    SFZ_DATA.videos.forEach(function(v) {
      if (v.cat === '书圣文化') {
        h += renderVideoCard(v);
      }
    });

    h += '<div class="section-h"><h3>唐诗之路</h3></div>';
    SFZ_DATA.videos.forEach(function(v) {
      if (v.cat === '唐诗之路') {
        h += renderVideoCard(v);
      }
    });

    h += '<div class="section-h"><h3>非遗影像</h3></div>';
    SFZ_DATA.videos.forEach(function(v) {
      if (v.cat === '非遗' || v.cat === '产业地情' || v.cat === '茶文化') {
        h += renderVideoCard(v);
      }
    });

    h += '<div style="height: 20px;"></div>';
    return h;
  }

  function renderVideoCard(v) {
    var h = '<div class="video-card" onclick="SFZ.toast(\'视频播放开发中：' + v.title + '\')">';
    h += '<div class="vc-thumb" style="background:' + v.thumbColor + ';">';
    h += '<div class="vc-play">' + SFZ.icon('ic-play') + '</div>';
    h += '<div class="vc-duration">' + v.duration + '</div>';
    h += '</div>';
    h += '<div class="vc-info">';
    h += '<h4>' + SFZ.esc(v.title) + '</h4>';
    h += '<p>' + v.cat + ' · ' + v.desc + '</p>';
    h += '</div>';
    h += '</div>';
    return h;
  }

  function bindWatch(el) {}

  /* ============================================================
     剡好听（讲堂/音频页）
     ============================================================ */
  function renderListen() {
    var h = '';
    h += renderHeader('剡好听', 'home');
    h += '<div class="section-h"><h3>嵊州讲堂</h3></div>';

    SFZ_DATA.audios.forEach(function(a) {
      if (a.cat === '讲堂') {
        h += renderAudioCard(a);
      }
    });

    h += '<div class="section-h"><h3>口述史</h3></div>';
    SFZ_DATA.audios.forEach(function(a) {
      if (a.cat === '口述史') {
        h += renderAudioCard(a);
      }
    });

    h += '<div class="section-h"><h3>方言音频</h3></div>';
    SFZ_DATA.audios.forEach(function(a) {
      if (a.cat === '方言' || a.cat === '地名') {
        h += renderAudioCard(a);
      }
    });

    h += '<div class="section-h"><h3>越剧唱段</h3></div>';
    SFZ_DATA.audios.forEach(function(a) {
      if (a.cat === '越剧') {
        h += renderAudioCard(a);
      }
    });

    // 底部播放器（占位）
    h += '<div class="audio-player" id="audio-player" style="display:none;">';
    h += '<div class="ap-thumb" style="background:var(--ink);">' + SFZ.icon('ic-volume') + '</div>';
    h += '<div class="ap-info"><h4 id="ap-title">--</h4><p id="ap-speaker">--</p></div>';
    h += '<div class="ap-controls">';
    h += '<div class="ap-btn" id="ap-play">' + SFZ.icon('ic-play') + '</div>';
    h += '</div>';
    h += '</div>';

    h += '<div style="height: 80px;"></div>';
    return h;
  }

  function renderAudioCard(a) {
    var h = '<div class="audio-card" onclick="playAudio(\'' + a.id + '\')">';
    h += '<div class="ac-thumb" style="background:' + a.thumbColor + ';">' + SFZ.icon('ic-volume') + '</div>';
    h += '<div class="ac-info"><h4>' + SFZ.esc(a.title) + '</h4><p>' + a.speaker + ' · ' + a.duration + '</p></div>';
    h += '<div class="ac-play">' + SFZ.icon('ic-play') + '</div>';
    h += '</div>';
    return h;
  }

  function bindListen(el) {
    // 音频播放函数在全局定义
  }

  /* ============================================================
     剡好礼（文创页）
     ============================================================ */
  function renderGift() {
    var h = '';
    h += renderHeader('剡好礼', 'home');

    h += '<div class="section-h"><h3>方志文创</h3></div>';
    h += '<div class="gift-grid">';
    SFZ_DATA.gifts.forEach(function(g) {
      h += '<div class="gift-card" onclick="SFZ.toast(\'' + g.title + ' - 详情开发中\')">';
      h += '<div class="gc-img" style="background:' + g.thumbColor + ';">';
      if (g.badge) h += '<div class="gc-badge">' + g.badge + '</div>';
      h += '<span style="font-family:var(--serif);color:#fff;font-size:24px;font-weight:900;">礼</span>';
      h += '</div>';
      h += '<div class="gc-info">';
      h += '<h4>' + SFZ.esc(g.title) + '</h4>';
      h += '<div class="gc-price">';
      if (g.price > 0) {
        h += '¥' + g.price;
        if (g.original) h += '<span class="original">¥' + g.original + '</span>';
      } else {
        h += '<span style="color:var(--ink-3);">免费/定制</span>';
      }
      h += '</div>';
      h += '</div>';
      h += '</div>';
    });
    h += '</div>';

    h += '<div class="divider-deco"><span>— 把方志带回家 —</span></div>';

    // 地情书单
    h += '<div class="section-h"><h3>地情书单</h3></div>';
    h += '<div class="rec-cards">';
    SFZ_DATA.books.slice(0, 3).forEach(function(b) {
      h += '<div class="rec-card" onclick="SFZ.navigate(\'book/' + b.id + '\')">';
      h += '<div class="thumb" style="background:' + b.thumbColor + '">' + b.title.substring(0, 4) + '</div>';
      h += '<div class="info">';
      h += '<span class="badge bg-' + b.type + '">' + b.typeLabel + '</span>';
      h += '<h4>' + SFZ.esc(b.title) + '</h4>';
      h += '<p>' + SFZ.esc(b.summary) + '</p>';
      h += '</div>';
      h += '</div>';
    });
    h += '</div>';

    h += '<div style="height: 20px;"></div>';
    return h;
  }

  /* ============================================================
     专题详情页
     ============================================================ */
  function renderTopic(topicId) {
    var t = SFZ.getTopic(topicId);
    if (!t) return '<div class="empty-state"><p>专题不存在</p></div>';

    var h = '';
    // Hero
    h += '<div class="topic-hero" style="background:' + t.gradColor + ';">';
    h += '<div class="th-content">';
    h += '<div class="th-title">' + t.title + '</div>';
    h += '<div class="th-sub">' + t.subtitle + '</div>';
    h += '<div class="th-tags">';
    t.tags.forEach(function(tag) {
      h += '<span class="th-tag">' + tag + '</span>';
    });
    h += '</div>';
    h += '</div>';
    h += '</div>';

    // 透明头部
    h += '<div class="app-header transparent" style="position:absolute;top:0;left:0;right:0;">';
    h += '<div class="back-btn" onclick="history.back()">' + SFZ.icon('ic-back') + '</div>';
    h += '<div class="title"></div>';
    h += '<div class="header-action" onclick="SFZ.toast(\'分享功能开发中\')">' + SFZ.icon('ic-share') + '</div>';
    h += '</div>';

    // 简介
    h += '<div class="topic-intro">';
    h += '<h3>专题简介</h3>';
    h += '<p>' + t.intro + '</p>';
    h += '</div>';

    // 时间线
    h += '<div class="section-h"><h3>历史脉络</h3></div>';
    h += '<div class="timeline">';
    t.timeline.forEach(function(item) {
      h += '<div class="timeline-item">';
      h += '<div class="ti-dot"></div>';
      h += '<div class="ti-content">';
      h += '<div class="ti-year">' + item.year + '</div>';
      h += '<div class="ti-text">' + item.text + '</div>';
      h += '</div>';
      h += '</div>';
    });
    h += '</div>';

    // 关联志书
    var relatedBooks = [];
    if (topicId === 'tangshi') relatedBooks = ['b001', 'b005', 'b006'];
    else if (topicId === 'yueju') relatedBooks = ['b001', 'b002'];
    else if (topicId === 'shusheng') relatedBooks = ['b006', 'b001'];
    else if (topicId === 'lingdai') relatedBooks = ['b002', 'b004'];
    else if (topicId === 'chaye') relatedBooks = ['b001', 'b005'];

    if (relatedBooks.length > 0) {
      h += '<div class="section-h"><h3>关联志书</h3></div>';
      h += '<div class="rec-cards">';
      relatedBooks.forEach(function(bid) {
        var b = SFZ.getBook(bid);
        if (b) {
          h += '<div class="rec-card" onclick="SFZ.navigate(\'book/' + b.id + '\')">';
          h += '<div class="thumb" style="background:' + b.thumbColor + '">' + b.title.substring(0, 4) + '</div>';
          h += '<div class="info">';
          h += '<span class="badge bg-' + b.type + '">' + b.typeLabel + '</span>';
          h += '<h4>' + SFZ.esc(b.title) + '</h4>';
          h += '<p>' + SFZ.esc(b.summary) + '</p>';
          h += '</div>';
          h += '</div>';
        }
      });
      h += '</div>';
    }

    // 关联地图点位
    if (topicId === 'tangshi' || topicId === 'shusheng' || topicId === 'yueju') {
      h += '<div class="section-h"><h3>相关地点</h3><span class="more" onclick="SFZ.navigate(\'map\')">查看地图 →</span></div>';
      h += '<div style="margin:0 16px;" class="card">';
      SFZ_DATA.mapPoints.forEach(function(p) {
        h += '<div class="list-item" onclick="showMapPointDetail(\'' + p.id + '\')">';
        h += '<div class="li-icon ic-bg-seal">' + SFZ.icon('ic-location') + '</div>';
        h += '<div class="li-text"><h4>' + p.name + '</h4><p>' + p.typeLabel + ' · ' + p.dist + '</p></div>';
        h += '<span class="li-arrow">›</span>';
        h += '</div>';
      });
      h += '</div>';
    }

    h += '<div style="height: 20px;"></div>';
    return h;
  }

  /* ============================================================
     志书详情页
     ============================================================ */
  function renderBookDetail(bookId) {
    var b = SFZ.getBook(bookId);
    if (!b) return '<div class="empty-state"><p>志书不存在</p></div>';

    var isFav = SFZ.favorites.has(b.id);
    var h = '';

    // Hero
    h += '<div class="detail-hero" style="background:' + b.thumbColor + ';">';
    h += '<div class="dh-content">';
    h += '<span class="badge bg-' + b.type + '" style="font-size:12px;padding:3px 10px;">' + b.typeLabel + '</span>';
    h += '<div class="dh-title">' + SFZ.esc(b.title) + '</div>';
    h += '<div class="dh-meta"><span style="color:rgba(255,255,255,.7);font-size:12px;">' + b.year + ' · ' + b.words + ' · ' + b.format + '</span></div>';
    h += '</div>';
    h += '</div>';

    // 透明头部
    h += '<div class="app-header transparent" style="position:absolute;top:0;left:0;right:0;">';
    h += '<div class="back-btn" onclick="history.back()">' + SFZ.icon('ic-back') + '</div>';
    h += '<div class="title"></div>';
    h += '<div class="header-action" onclick="SFZ.toast(\'分享功能开发中\')">' + SFZ.icon('ic-share') + '</div>';
    h += '</div>';

    // 基本信息
    h += '<div class="detail-body">';
    h += '<h3>志书信息</h3>';
    h += '<p><strong>编纂者：</strong>' + b.author + '</p>';
    h += '<p><strong>出版者：</strong>' + b.publisher + '</p>';
    h += '<p><strong>出版年：</strong>' + b.year + '</p>';
    h += '<p><strong>字数：</strong>' + b.words + '</p>';
    h += '<p><strong>格式：</strong>' + b.format + '</p>';

    // 内容摘要
    h += '<h3>内容摘要</h3>';
    h += '<p>' + SFZ.esc(b.summary) + '</p>';

    // 目录
    h += '<h3>目 录</h3>';
    h += '<div class="card" style="padding:0;overflow:hidden;">';
    b.content.forEach(function(c, i) {
      h += '<div class="list-item" onclick="SFZ.navigate(\'reader/' + b.id + '\')">';
      h += '<div class="li-icon ic-bg-' + (i % 2 ? 'blue' : 'ink') + '">' + SFZ.icon('ic-book') + '</div>';
      h += '<div class="li-text">';
      h += '<h4 style="' + (c.level === 2 ? 'font-size:13px;color:var(--muted);' : '') + '">' + c.title + '</h4>';
      h += '<p>' + c.text.substring(0, 40) + '…</p>';
      h += '</div>';
      h += '<span class="li-arrow">›</span>';
      h += '</div>';
    });
    h += '</div>';
    h += '</div>';

    // 操作栏
    h += '<div class="action-bar">';
    h += '<div class="ab-icon-btn ' + (isFav ? 'active' : '') + '" id="fav-btn" onclick="toggleFav(\'' + b.id + '\',\'' + SFZ.esc(b.title) + '\',\'' + b.type + '\',\'' + b.typeLabel + '\')">' + SFZ.icon('ic-heart') + '</div>';
    h += '<div class="ab-icon-btn" onclick="SFZ.toast(\'分享功能开发中\')">' + SFZ.icon('ic-share') + '</div>';
    h += '<div class="ab-btn-primary" onclick="SFZ.navigate(\'reader/' + b.id + '\')">开始阅读</div>';
    h += '</div>';

    return h;
  }

  /* ============================================================
     通用：头部渲染
     ============================================================ */
  function renderHeader(title, backTarget) {
    var h = '<div class="app-header">';
    h += '<div class="back-btn" onclick="SFZ.navigate(\'' + backTarget + '\')">' + SFZ.icon('ic-back') + '</div>';
    h += '<div class="title">' + title + '</div>';
    h += '<div class="header-action"></div>';
    h += '</div>';
    return h;
  }

  /* ============================================================
     全局函数（onclick调用）
     ============================================================ */
  window.doSearch = function(keyword) {
    SFZ.searchHistory.add(keyword);
    SFZ.navigate('search/' + encodeURIComponent(keyword));
  };

  window.clearSearchHistory = function() {
    SFZ.searchHistory.clear();
    SFZ.toast('搜索历史已清空');
    setTimeout(function() { SFZ.render(); }, 800);
  };

  window.showMapPointDetail = function(id) {
    var p = SFZ.getMapPoint(id);
    if (!p) return;
    var html = '<div class="sheet-title">' + p.name + '</div>';
    html += '<div class="sheet-body">';
    html += '<div style="margin-bottom:12px;"><span class="badge bg-' + p.badgeType + '">' + p.typeLabel + '</span> <span style="font-size:12px;color:var(--muted);">距您 ' + p.dist + '</span></div>';
    html += '<p style="font-size:14px;line-height:1.8;color:var(--text-2);">' + p.desc + '</p>';
    html += '<div class="quote-block" style="margin-top:14px;">' + p.detail + '</div>';
    html += '<div style="display:flex;gap:10px;margin-top:16px;">';
    html += '<div class="mi-btn mi-btn-outline" style="flex:1;" onclick="SFZ.closeSheet()">关闭</div>';
    html += '<div class="mi-btn mi-btn-primary" style="flex:1;" onclick="SFZ.toast(\'导航功能开发中\');SFZ.closeSheet();">导航前往</div>';
    html += '</div>';
    html += '</div>';
    SFZ.showSheet(html);
  };

  window.toggleToc = function() {
    var toc = document.getElementById('reader-toc');
    var overlay = document.getElementById('reader-overlay');
    if (toc) toc.classList.toggle('show');
    if (overlay) overlay.classList.toggle('show');
  };

  window.toggleReaderSettings = function() {
    var s = document.getElementById('reader-settings');
    var overlay = document.getElementById('reader-overlay');
    if (s) s.classList.toggle('show');
    if (overlay) overlay.classList.toggle('show');
  };

  window.closeAllPanels = function() {
    var toc = document.getElementById('reader-toc');
    var settings = document.getElementById('reader-settings');
    var overlay = document.getElementById('reader-overlay');
    if (toc) toc.classList.remove('show');
    if (settings) settings.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
  };

  window.toggleFav = function(id, title, type, typeLabel) {
    SFZ.favorites.toggle({ id: id, title: title, type: type, typeLabel: typeLabel });
    var btn = document.getElementById('fav-btn');
    if (btn) {
      if (SFZ.favorites.has(id)) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  };

  window.playAudio = function(id) {
    var a = SFZ.getAudio(id);
    if (!a) return;
    SFZ.toast('播放：' + a.title);
  };

  return { register: register };
})();
