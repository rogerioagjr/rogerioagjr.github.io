// Opens external links (any domain other than this site's own domains) in a
// new tab. The CV link is always opened in a new tab too, even though it's
// hosted on the same domain, since it's a PDF file rather than a site page.
(function () {
  var internalHosts = [
    'rogeriojr.com',
    'www.rogeriojr.com',
    'rogerioagjr.github.io',
    'localhost',
    '127.0.0.1'
  ];

  function isCvLink(pathname) {
    return /\/files\/CV\.pdf$/i.test(pathname);
  }

  function markExternalLinks() {
    var anchors = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');

    anchors.forEach(function (link) {
      var url;
      try {
        url = new URL(link.href);
      } catch (e) {
        return;
      }

      var isInternal = internalHosts.indexOf(url.hostname) !== -1;
      if (isInternal && !isCvLink(url.pathname)) {
        return;
      }

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
