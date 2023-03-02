fetch('config/config-umami.json')
  .then(response => response.json())
  .then(config => {
    const umamiScript = document.createElement('script');
    umamiScript.async = true;
    umamiScript.defer = true;
    umamiScript.dataset.websiteId = config.websiteId;
    umamiScript.src = `${config.umamiUrl}:${config.umamiPort}/umami.js`;
    document.head.appendChild(umamiScript);
  });
