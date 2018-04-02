var CACHE_NAME = '20180402090817';

self.addEventListener('install',event => {
  event.waitUntil(caches.open(CACHE_NAME)
  .then(cache => cache.addAll([
    '/paper-survey/404.html',
    '/paper-survey/about/',
    
    '/paper-survey/category/cv',
    '/paper-survey/category/nlp',
    '/paper-survey/category/others',
    '/paper-survey/summary/',
    '/paper-survey/',
    
    
    
    
    '/paper-survey/summary/2/',
    '/paper-survey/summary/3/',
    '/paper-survey/summary/4/',
    '/paper-survey/summary/5/',
    '/paper-survey/summary/6/',
    '/paper-survey/summary/7/',
    '/paper-survey/summary/8/',
    '/paper-survey/summary/9/',
    '/paper-survey/summary/10/',
    '/paper-survey/summary/11/',
    '/paper-survey/summary/12/',
    '/paper-survey/summary/13/',
    '/paper-survey/summary/14/',
    '/paper-survey/summary/15/',
    '/paper-survey/summary/16/',
    '/paper-survey/summary/17/',
    '/paper-survey/summary/18/',
    '/paper-survey/summary/19/',
    '/paper-survey/summary/20/',
    '/paper-survey/summary/21/',
    '/paper-survey/summary/22/',
    '/paper-survey/summary/23/',
    '/paper-survey/summary/24/',
    '/paper-survey/summary/25/',
    '/paper-survey/summary/26/',
    
    
    
    '/paper-survey/summary/nlp/Learning-to-Compute-Word-Embeddings-On-the-Fly','/paper-survey/summary/nlp/Glyph-aware-Embedding-of-Chinese-Characters','/paper-survey/summary/nlp/A-New-Method-of-Region-Embedding-for-Text-Classification','/paper-survey/summary/others/Variable-Importance-Using-Decision-Trees','/paper-survey/summary/others/Unsupervised-Learning-of-Disentangled-and-Interpretable-Representations-from-Sequential-Data','/paper-survey/summary/cv/Sparse-Embedded-k-Means-Clustering','/paper-survey/summary/cv/SVD-Softmax-Fast-Sotfmax-Approximation-on-Large-Vocabulary-Neural-Networks','/paper-survey/summary/cv/Regularizing-Deep-Neural-Networks-by-Noise-Its-Interpretation-and-Optimization','/paper-survey/summary/cv/Few-Shot-Adversarial-Domain-Adaptation',
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
        }).catch(() => caches.match('/paper-survey/'))
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
