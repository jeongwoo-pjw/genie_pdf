// 1920×1080 슬라이드를 각 프레임 폭에 맞춰 비율 그대로 축소/확대
(function () {
  var BASE = 1920;
  var frames = document.querySelectorAll('.frame');
  function fit(frame) {
    frame.style.setProperty('--s', frame.clientWidth / BASE);
  }
  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(function (entries) {
      entries.forEach(function (e) { fit(e.target); });
    });
    frames.forEach(function (f) { ro.observe(f); });
  } else {
    var all = function () { frames.forEach(fit); };
    window.addEventListener('resize', all);
    all();
  }
})();
