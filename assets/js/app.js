/* ================================================================
   嵊方志 · 核心引擎  app.js
   路由系统 / 公共组件 / LocalStorage管理 / 主题管理
   ================================================================ */

var SFZ = (function() {
  'use strict';

  /* ===== 路由表 ===== */
  var routes = {};
  var currentPage = null;
  var tabBarVisible = true;

  /* ===== 注册路由 ===== */
  function route(path, handler) {
    routes[path] = handler;
  }

  /* ===== 解析hash ===== */
  function parseHash() {
    var hash = location.hash.replace(/^#\/?/, '') || '';
    var parts = hash.split('/');
    var path = parts[0] || 'home';
    var params = parts.slice(1);
    return { path: path, params: params, raw: hash };
  }

  /* ===== 路由跳转 ===== */
  function navigate(path) {
    if (!path.startsWith('#/')) path = '#/' + path;
    location.hash = path;
  }

  /* ===== 渲染页面 ===== */
  function render() {
    var r = parseHash();
    var handler = routes[r.path] || routes['home'];
    var showTab = ['home', 'search', 'map', 'mine'].indexOf(r.path) >= 0;

    // 清空app
    var app = document.getElementById('app');
    app.innerHTML = '';

    // 渲染页面内容
    var pageEl = document.createElement('div');
    pageEl.className = 'page' + (showTab ? '' : ' no-tab');
    pageEl.id = 'page-' + r.path;

    handler(pageEl, r.params);

    app.appendChild(pageEl);

    // 渲染TabBar
    if (showTab) {
      renderTabBar(app, r.path);
    }

    currentPage = r.path;
    tabBarVisible = showTab;

    // 滚动到顶部
    pageEl.scrollTop = 0;

    // 触发页面onShow
    if (typeof SFZ_PAGES.onShow === 'function') {
      SFZ_PAGES.onShow(r.path);
    }
  }

  /* ===== TabBar ===== */
  function renderTabBar(app, activePath) {
    var tabs = [
      { path: 'home', label: '首页', icon: 'ic-home' },
      { path: 'search', label: '方志馆', icon: 'ic-arch' },
      { path: 'map', label: '地图', icon: 'ic-map' },
      { path: 'mine', label: '我的', icon: 'ic-user' }
    ];
    var bar = document.createElement('div');
    bar.className = 'tabbar';
    bar.innerHTML = tabs.map(function(t) {
      var cls = t.path === activePath ? 'tab active' : 'tab';
      return '<div class="' + cls + '" data-path="' + t.path + '">' +
        '<svg><use href="#' + t.icon + '"/></svg>' +
        '<div class="lb">' + t.label + '</div></div>';
    }).join('');
    bar.querySelectorAll('.tab').forEach(function(el) {
      el.addEventListener('click', function() {
        navigate(el.getAttribute('data-path'));
      });
    });
    app.appendChild(bar);
  }

  /* ===== SVG图标HTML ===== */
  function icon(name, cls) {
    return '<svg class="' + (cls || '') + '"><use href="#' + name + '"/></svg>';
  }

  /* ===== Toast ===== */
  function toast(msg, duration) {
    var el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(function() {
      el.classList.remove('show');
    }, duration || 2000);
  }

  /* ===== Loading ===== */
  function showLoading() {
    document.getElementById('loading').style.display = 'grid';
  }
  function hideLoading() {
    document.getElementById('loading').style.display = 'none';
  }

  /* ===== LocalStorage管理 ===== */
  var store = {
    get: function(key, def) {
      try {
        var v = localStorage.getItem('sfz_' + key);
        return v ? JSON.parse(v) : (def !== undefined ? def : null);
      } catch(e) { return def; }
    },
    set: function(key, val) {
      try { localStorage.setItem('sfz_' + key, JSON.stringify(val)); } catch(e) {}
    },
    remove: function(key) {
      try { localStorage.removeItem('sfz_' + key); } catch(e) {}
    }
  };

  /* ===== 收藏管理 ===== */
  var favorites = {
    getAll: function() { return store.get('favorites', []); },
    add: function(item) {
      var list = this.getAll();
      var exists = list.find(function(f) { return f.id === item.id; });
      if (!exists) { list.push(item); store.set('favorites', list); }
      return !exists;
    },
    remove: function(id) {
      var list = this.getAll().filter(function(f) { return f.id !== id; });
      store.set('favorites', list);
    },
    has: function(id) {
      return this.getAll().some(function(f) { return f.id === id; });
    },
    toggle: function(item) {
      if (this.has(item.id)) {
        this.remove(item.id);
        toast('已取消收藏');
        return false;
      } else {
        this.add(item);
        toast('收藏成功');
        return true;
      }
    }
  };

  /* ===== 阅读历史 ===== */
  var history = {
    getAll: function() { return store.get('history', []); },
    add: function(item) {
      var list = this.getAll().filter(function(h) { return h.id !== item.id; });
      list.unshift({ id: item.id, title: item.title, type: item.typeLabel, time: Date.now() });
      if (list.length > 50) list = list.slice(0, 50);
      store.set('history', list);
    },
    clear: function() { store.set('history', []); }
  };

  /* ===== 搜索历史 ===== */
  var searchHistory = {
    getAll: function() { return store.get('searchHistory', []); },
    add: function(keyword) {
      var list = this.getAll().filter(function(k) { return k !== keyword; });
      list.unshift(keyword);
      if (list.length > 15) list = list.slice(0, 15);
      store.set('searchHistory', list);
    },
    remove: function(keyword) {
      store.set('searchHistory', this.getAll().filter(function(k) { return k !== keyword; }));
    },
    clear: function() { store.set('searchHistory', []); }
  };

  /* ===== 主题管理 ===== */
  function getTheme() { return store.get('theme', 'light'); }
  function setTheme(theme) {
    store.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
  function toggleTheme() {
    var current = getTheme();
    setTheme(current === 'light' ? 'dark' : 'light');
    toast('已切换' + (current === 'light' ? '夜间' : '日间') + '模式');
  }

  /* ===== 阅读设置 ===== */
  var readerSettings = {
    get: function() {
      return store.get('readerSettings', { fontSize: 'medium', theme: 'auto' });
    },
    set: function(settings) {
      store.set('readerSettings', settings);
    }
  };

  /* ===== 面板/弹窗管理 ===== */
  function showSheet(content) {
    // 移除已有sheet
    closeSheet();
    var overlay = document.createElement('div');
    overlay.className = 'sheet-overlay';
    overlay.id = 'sheet-overlay';
    overlay.addEventListener('click', closeSheet);

    var sheet = document.createElement('div');
    sheet.className = 'sheet';
    sheet.id = 'sheet';
    sheet.innerHTML = '<div class="sheet-grip"></div>' + content;
    sheet.addEventListener('click', function(e) { e.stopPropagation(); });

    document.body.appendChild(overlay);
    document.body.appendChild(sheet);

    requestAnimationFrame(function() {
      overlay.classList.add('show');
      sheet.classList.add('show');
    });
  }

  function closeSheet() {
    var overlay = document.getElementById('sheet-overlay');
    var sheet = document.getElementById('sheet');
    if (overlay) overlay.remove();
    if (sheet) sheet.remove();
  }

  /* ===== 数据查询 ===== */
  function getBook(id) {
    return SFZ_DATA.books.find(function(b) { return b.id === id; });
  }
  function getTopic(id) {
    return SFZ_DATA.topics.find(function(t) { return t.id === id; });
  }
  function getMapPoint(id) {
    return SFZ_DATA.mapPoints.find(function(m) { return m.id === id; });
  }
  function getVideo(id) {
    return SFZ_DATA.videos.find(function(v) { return v.id === id; });
  }
  function getAudio(id) {
    return SFZ_DATA.audios.find(function(a) { return a.id === id; });
  }
  function searchBooks(keyword, type) {
    return SFZ_DATA.books.filter(function(b) {
      var matchKeyword = !keyword || b.title.indexOf(keyword) >= 0 || b.summary.indexOf(keyword) >= 0;
      var matchType = !type || type === 'all' || b.type === type;
      return matchKeyword && matchType;
    });
  }

  /* ===== 格式化时间 ===== */
  function formatTime(ts) {
    var diff = Date.now() - ts;
    if (diff < 60000) return '刚刚';
    if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前';
    if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前';
    if (diff < 2592000000) return Math.floor(diff / 86400000) + '天前';
    var d = new Date(ts);
    return (d.getMonth() + 1) + '月' + d.getDate() + '日';
  }

  /* ===== HTML转义 ===== */
  function esc(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ===== 初始化 ===== */
  function init() {
    // 应用主题
    setTheme(getTheme());

    // 注册路由（页面在pages.js中注册）
    if (typeof SFZ_PAGES !== 'undefined' && SFZ_PAGES.register) {
      SFZ_PAGES.register(route);
    }

    // 监听hash变化
    window.addEventListener('hashchange', render);

    // 首次渲染
    if (!location.hash) {
      navigate('home');
    } else {
      render();
    }
  }

  /* ===== 导出API ===== */
  return {
    init: init,
    navigate: navigate,
    render: render,
    icon: icon,
    toast: toast,
    showLoading: showLoading,
    hideLoading: hideLoading,
    showSheet: showSheet,
    closeSheet: closeSheet,
    store: store,
    favorites: favorites,
    history: history,
    searchHistory: searchHistory,
    getTheme: getTheme,
    setTheme: setTheme,
    toggleTheme: toggleTheme,
    readerSettings: readerSettings,
    getBook: getBook,
    getTopic: getTopic,
    getMapPoint: getMapPoint,
    getVideo: getVideo,
    getAudio: getAudio,
    searchBooks: searchBooks,
    formatTime: formatTime,
    esc: esc
  };
})();
