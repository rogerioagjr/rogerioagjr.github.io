// Opens all external (absolute URL) links in a new tab. Internal site links
// always use relative paths, so any anchor pointing to an absolute http(s)
// URL is treated as external.
(function () {
  function markExternalLinks() {
    var anchors = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');

    anchors.forEach(function (link) {
      link.setAttribute('target', '_blank');

      var relValues = (link.getAttribute('rel') || '').split(' ').filter(Boolean);
      ['noopener', 'noreferrer'].forEach(function (value) {
        if (relValues.indexOf(value) === -1) {
          relValues.push(value);
        }
      });
      link.setAttribute('rel', relValues.join(' '));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markExternalLinks);
  } else {
    markExternalLinks();
  }
})();
