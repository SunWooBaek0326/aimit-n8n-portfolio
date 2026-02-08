/**
 * Video Lightbox - 전역 확대 보기 (바닐라 JS)
 * /assets/videos/workflow_{ID}.mp4 규칙 준수
 */
(function () {
  'use strict';

  var OVERLAY_ID = 'video-lightbox-overlay';

  function createOverlay() {
    var existing = document.getElementById(OVERLAY_ID);
    if (existing) return existing;

    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.className = 'video-lightbox-overlay';

    var content = document.createElement('div');
    content.className = 'video-lightbox-content';

    var video = document.createElement('video');
    video.setAttribute('controls', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');

    var closeBtn = document.createElement('button');
    closeBtn.className = 'video-lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', '닫기');

    content.appendChild(video);
    overlay.appendChild(content);
    overlay.appendChild(closeBtn);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
    closeBtn.addEventListener('click', closeLightbox);

    document.body.appendChild(overlay);
    return overlay;
  }

  function openLightbox(src) {
    var overlay = createOverlay();
    var video = overlay.querySelector('video');
    video.src = src;
    video.muted = false;
    video.play();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
  }

  function closeLightbox() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;
    var video = overlay.querySelector('video');
    if (video) {
      video.pause();
      video.muted = true;
      video.src = '';
    }
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKeyDown);
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') closeLightbox();
  }

  function init() {
    var videos = document.querySelectorAll('video[src*="/assets/videos/workflow_"]');
    videos.forEach(function (video) {
      var src = video.getAttribute('src');
      if (!src || !src.match(/\/assets\/videos\/workflow_[a-zA-Z0-9]+\.mp4/)) return;

      var container = video.parentElement;
      if (!container) return;

      container.classList.add('video-lightbox-trigger');
      container.style.cursor = 'zoom-in';

      container.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openLightbox(src);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
