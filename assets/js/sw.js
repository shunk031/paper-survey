---
permalink: /sw.js
---
var CACHE_NAME = '{{ site.time | date: '%Y%m%d%H%M%S' }}';

self.addEventListener('install',event => {
  event.waitUntil(caches.open(CACHE_NAME)
  .then(cache => cache.addAll([
    {% for page in site.pages %}{% if page.layout %}'{{ page.url | prepend: site.baseurl }}',{% endif %}
    {% endfor %}{% for post in site.posts limit:9 %}'{{ post.url | prepend: site.baseurl }}',{% endfor %}
  ]))
);
});

self.addEventListener('fetch',event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) return response;

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(response => {
          if (!response || response.status != 200 || response.type !== 'basic')
            return response;

          var responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache =>
            cache.put(event.request, responseToCache)
          );
          return response;
        }).catch(() => caches.match('{{ site.baseurl }}/'))
    }));
});

self.addEventListener('activate',event => {
  var chacheWhiteList=[CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList => {
        return Promise.all(keyList.map(key => {
          if (chacheWhiteList.indexOf(key) === -1)
            return caches.delete(key);
        }));
      })
  );
});
