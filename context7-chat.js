// Context7 documentation chat widget. Loaded globally by Docs7/Mintlify-compatible sites.
(function () {
  if (typeof document === 'undefined') return;
  const src = 'https://context7.com/widget.js';
  if (document.querySelector('script[src="' + src + '"]')) return;

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.dataset.library = '/tkinder221-del/doc';
  script.dataset.color = '#2563EB';
  script.dataset.position = 'bottom-right';
  script.dataset.placeholder = 'Ask about the documentation...';
  script.dataset.welcomeMessage = 'How can I help you with the documentation?';
  document.head.appendChild(script);
})();
