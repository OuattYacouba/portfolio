/* Portfolio Yacouba Ouattara — logique du site (aucune dépendance) */
(function () {
  'use strict';

  var C = window.CONFIG || {};
  var state = {
    lang: readStore('yo-portfolio-lang') || C.defaultLang || 'fr',
    filter: 'all'
  };

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function readStore(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function writeStore(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function t(key) { return (window.T[state.lang] || window.T.fr)[key] || ''; }
  function visibleProjects() { return window.PROJECTS.filter(function (p) { return !p.draft; }); }

  /* ── Textes statiques ── */
  function renderStatic() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    var lt = $('#langToggle');
    lt.textContent = t('langSwitch');
    lt.setAttribute('aria-label', t('langAria'));
    lt.setAttribute('lang', state.lang === 'fr' ? 'en' : 'fr');
    $('.skip-link').textContent = state.lang === 'fr' ? 'Aller au contenu' : 'Skip to content';
    renderThemeLabel();
  }

  /* ── Liens externes (masqués s'ils ne sont pas renseignés) ── */
  function renderLinks() {
    ['github', 'linkedin'].forEach(function (k) {
      var url = C[k];
      $$('[data-link="' + k + '"]').forEach(function (a) {
        a.hidden = !url;
        if (url) {
          a.href = url;
          if (a.getAttribute('data-label')) a.textContent = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
        }
      });
      $$('[data-wrap="' + k + '"]').forEach(function (w) { w.hidden = !url; });
    });
  }

  /* ── Nuage de rôles ── */
  function renderRoles() {
    var sizes = [30, 22, 26, 20, 32, 22, 20, 26];
    $('#roles').innerHTML = window.ROLES.map(function (n, i) {
      var color = i % 3 === 1 ? 'var(--color-accent-2)' : i % 3 === 2 ? 'var(--color-text)' : 'var(--color-accent)';
      return '<span style="font-size:' + sizes[i % 8] + 'px;font-style:' + (i % 2 ? 'italic' : 'normal') +
        ';font-weight:' + (i % 3 === 0 ? 600 : 400) + ';color:' + color + '">' + esc(n) + '</span>';
    }).join('');
  }

  /* ── Projets + filtres ── */
  function renderFilters() {
    var used = {};
    visibleProjects().forEach(function (p) { p.tags.forEach(function (tg) { used[tg] = true; }); });
    var keys = ['all'].concat(window.FILTERS.filter(function (f) { return used[f]; }));
    var box = $('#filters');
    box.setAttribute('aria-label', t('filterLabel'));
    box.innerHTML = keys.map(function (k) {
      return '<button type="button" class="chip" data-filter="' + esc(k) + '" aria-pressed="' + (state.filter === k) + '">' +
        esc(k === 'all' ? t('filterAll') : k) + '</button>';
    }).join('');
  }

  function dashLabel(p) { return t('dashboard') + ' ' + p.dashboard.tool + ' ↗'; }

  function renderProjects() {
    var list = visibleProjects().filter(function (p) { return state.filter === 'all' || p.tags.indexOf(state.filter) !== -1; });
    if (!list.length) { $('#projectList').innerHTML = '<p class="empty-note">' + esc(t('noProject')) + '</p>'; return; }
    $('#projectList').innerHTML = list.map(function (p) {
      var L = p[state.lang];
      return '<article class="card">' +
        '<span class="card-kicker">' + esc(L.kicker) + '</span>' +
        '<h3 class="card-title"><a href="#/projet/' + esc(p.id) + '" style="color:inherit;text-decoration:none">' + esc(L.title) + '</a></h3>' +
        '<p class="card-body">' + esc(L.summary) + '</p>' +
        '<div class="tags">' + p.tags.map(function (tg) { return '<span class="tag">' + esc(tg) + '</span>'; }).join('') + '</div>' +
        '<div class="card-actions">' +
          '<a class="btn btn-ghost btn-flush" href="#/projet/' + esc(p.id) + '">' + esc(t('caseCta')) + '</a>' +
          (p.dashboard.url ? '<a class="btn btn-ghost btn-flush" href="' + esc(p.dashboard.url) + '" target="_blank" rel="noopener">' + esc(dashLabel(p)) + '</a>' : '') +
        '</div>' +
      '</article>';
    }).join('');
  }

  /* ── Compétences, parcours, certifications, veille ── */
  function renderSkills() {
    $('#skills').innerHTML = window.SKILLS[state.lang].map(function (g) {
      return '<div><h3 class="eyebrow">' + esc(g.title) + '</h3><ul class="plain-list">' +
        g.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
  }

  function renderPath() {
    $('#experience').innerHTML = window.EXPERIENCE[state.lang].map(function (e) {
      return '<div><p class="date">' + esc(e.date) + '</p><h4>' + esc(e.role) + '</h4><p class="org">' + esc(e.org) + '</p><p class="body">' + esc(e.body) + '</p></div>';
    }).join('');
    $('#education').innerHTML = window.EDUCATION[state.lang].map(function (d) {
      return '<div><p class="date">' + esc(d.date) + '</p><h4 style="font-size:18px">' + esc(d.degree) + '</h4><p class="org">' + esc(d.school) + '</p></div>';
    }).join('');
  }

  function renderCerts() {
    $('#certs').innerHTML = window.CERTS.map(function (c) {
      var L = c[state.lang];
      return '<div class="card" style="gap:10px">' +
        '<span class="card-kicker">' + esc(L.status) + '</span>' +
        '<h3 class="card-title" style="font-size:19px">' + esc(c.name) + (c.code ? ' <span style="font-weight:400;color:var(--color-neutral-800)">(' + esc(c.code) + ')</span>' : '') + '</h3>' +
        (c.score ? '<p class="cert-score">' + esc(c.score) + '<small> / ' + esc(c.scoreMax) + '</small></p>' : '') +
        '<p class="card-body">' + esc(L.detail) + '</p>' +
        '<p class="org">' + esc(c.org) + '</p>' +
        (C.credly ? '<a class="btn btn-ghost btn-flush" href="' + esc(C.credly) + '" target="_blank" rel="noopener">' + esc(t('certVerify')) + '</a>' : '') +
      '</div>';
    }).join('');
  }

  function renderNotes() {
    var sec = $('#veille');
    sec.hidden = !C.showNotes;
    if (!C.showNotes) return;
    $('#notes').innerHTML = window.NOTES[state.lang].map(function (n) {
      var title = n.url ? '<a href="' + esc(n.url) + '" target="_blank" rel="noopener" style="color:inherit">' + esc(n.title) + '</a>' : esc(n.title);
      return '<div><p class="overline" style="color:var(--color-accent-2-700)">' + esc(n.tag) + '</p><h3 style="font-size:20px;margin-bottom:8px">' + title + '</h3><p class="card-body">' + esc(n.body) + '</p></div>';
    }).join('');
  }

  /* ── Étude de cas ── */
  function cmyk(n) {
    return '<div class="cmyk-num"><span class="paper">' + esc(n) + '</span>' +
      '<span class="plate plate-c" aria-hidden="true">' + esc(n) + '</span>' +
      '<span class="plate plate-m" aria-hidden="true">' + esc(n) + '</span>' +
      '<span class="plate plate-y" aria-hidden="true">' + esc(n) + '</span></div>';
  }

  function renderCase(p) {
    var L = p[state.lang];
    var html = '';
    html += '<a class="btn btn-ghost btn-flush" href="#projets" style="margin-bottom:40px">' + esc(t('back')) + '</a>';
    html += '<p class="kicker" style="margin-bottom:20px">' + esc(L.kicker) + '</p>';
    html += '<h1>' + esc(L.title) + '</h1>';
    html += '<p class="case-context">' + esc(L.context) + '</p>';
    html += '<div class="case-meta">';
    if (p.dashboard.url) html += '<a class="btn btn-primary" href="' + esc(p.dashboard.url) + '" target="_blank" rel="noopener">' + esc(dashLabel(p)) + '</a>';
    if (p.repo) html += '<a class="btn btn-secondary" href="' + esc(p.repo) + '" target="_blank" rel="noopener">' + esc(t('code')) + '</a>';
    html += p.stack.map(function (s) { return '<span class="tag tag-accent">' + esc(s) + '</span>'; }).join('');
    html += '</div>';

    html += '<section class="steps" aria-label="Démarche">' + L.steps.map(function (st) {
      return '<div>' + cmyk(st.n) + '<h3>' + esc(st.title) + '</h3><p>' + esc(st.body) + '</p></div>';
    }).join('') + '</section>';

    if (p.hasPipeline) {
      html += '<section class="case-section"><h2>' + esc(t('archTitle')) + '</h2><p class="lead">' + esc(t('archLead')) + '</p><div class="pipeline">' +
        window.PIPELINE[state.lang].map(function (l) {
          return '<div class="layer"><p class="layer-name" style="color:' + l.ink + '">' + esc(l.layer) + '</p><h4>' + esc(l.name) + '</h4><p>' + esc(l.body) + '</p></div>';
        }).join('') + '</div></section>';
    }

    if (p.shots && p.shots.length) {
      html += '<section class="case-section"><h2 style="margin-bottom:30px">' + esc(t('deliverables')) + '</h2><div class="shots">' +
        p.shots.map(function (src, i) {
          return '<figure><div class="shot"><img src="assets/' + esc(src) + '" alt="' + esc(L.title) + ' — ' + (i + 1) + '" loading="lazy"></div></figure>';
        }).join('') + '</div></section>';
    }

    html += '<section class="case-section"><h2 style="margin-bottom:24px">' + esc(t('resultsTitle')) + '</h2><ul class="results">' +
      L.results.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' +
      '<div class="cta-row" style="margin-top:44px">' +
        '<a class="btn btn-primary" href="#projets">' + esc(t('backProjects')) + '</a>' +
        '<a class="btn btn-secondary" href="mailto:ouattara.yacouba111@gmail.com">' + esc(t('ctaMail')) + '</a>' +
      '</div></section>';

    $('#case').innerHTML = html;
    document.title = L.title + ' — Yacouba Ouattara';
  }

  /* ── Routage par ancre : #/projet/<id> = étude de cas, sinon accueil ── */
  var lastSection = null;
  function route() {
    var m = location.hash.match(/^#\/projet\/([\w-]+)/);
    var p = m && visibleProjects().filter(function (x) { return x.id === m[1]; })[0];
    if (p) {
      $('#home').hidden = true;
      $('#case').hidden = false;
      lastSection = 'projets';
      $$('.main-nav a').forEach(function (a) { a.setAttribute('aria-current', a.getAttribute('href') === '#projets' ? 'true' : 'false'); });
      renderCase(p);
      window.scrollTo(0, 0);
      return;
    }
    var wasCase = !$('#case').hidden;
    $('#home').hidden = false;
    $('#case').hidden = true;
    document.title = 'Yacouba Ouattara — Data Analyst · Business Intelligence';
    var id = location.hash.replace(/^#\/?/, '');
    var target = id && document.getElementById(id);
    if (target) {
      // depuis une étude de cas, on attend le réaffichage avant de défiler
      if (wasCase) requestAnimationFrame(function () { target.scrollIntoView(); });
    } else if (wasCase || location.hash === '#/') {
      window.scrollTo(0, 0);
    }
  }

  /* ── Thème ── */
  function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
  function renderThemeLabel() { $('#themeToggle').textContent = isDark() ? t('themeLight') : t('themeDark'); }
  function toggleTheme() {
    var d = !isDark();
    if (d) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    writeStore('yo-portfolio-theme', d ? 'dark' : 'light');
    renderThemeLabel();
  }

  /* ── Divers ── */
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-on');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el.classList.remove('is-on'); }, 2200);
  }

  function setupReveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  function setupScrollSpy() {
    var header = $('#header');
    var links = $$('.main-nav a');
    var ids = links.map(function (a) { return a.getAttribute('href').slice(1); });
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      if (!$('#case').hidden) return;
      var cur = null;
      ids.forEach(function (id) { var s = document.getElementById(id); if (s && s.getBoundingClientRect().top < 140) cur = id; });
      if (cur !== lastSection) {
        lastSection = cur;
        links.forEach(function (a) { a.setAttribute('aria-current', a.getAttribute('href') === '#' + cur ? 'true' : 'false'); });
      }
    }, { passive: true });
  }

  function renderAll() {
    renderStatic(); renderLinks(); renderFilters(); renderProjects();
    renderSkills(); renderPath(); renderCerts(); renderNotes();
    if (!$('#case').hidden) route();
  }

  /* ── Événements ── */
  document.addEventListener('click', function (e) {
    var chip = e.target.closest('[data-filter]');
    if (chip) { state.filter = chip.getAttribute('data-filter'); renderFilters(); renderProjects(); return; }
  });
  $('#themeToggle').addEventListener('click', toggleTheme);
  $('#langToggle').addEventListener('click', function () {
    state.lang = state.lang === 'fr' ? 'en' : 'fr';
    writeStore('yo-portfolio-lang', state.lang);
    renderAll();
  });
  $('#copyMail').addEventListener('click', function () {
    var mail = 'ouattara.yacouba111@gmail.com';
    if (navigator.clipboard) navigator.clipboard.writeText(mail).then(function () { toast(t('copied')); }, function () { toast(mail); });
    else toast(mail);
  });
  window.addEventListener('hashchange', route);

  renderRoles();
  renderAll();
  route();
  setupReveal();
  setupScrollSpy();
})();
