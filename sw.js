var CACHE_NAME = '20190904013048';

self.addEventListener('install',event => {
  event.waitUntil(caches.open(CACHE_NAME)
  .then(cache => cache.addAll([
    '/paper-survey/404.html',
    '/paper-survey/about/',
    
    '/paper-survey/summary/',
    '/paper-survey/category/others',
    '/paper-survey/category/nlp',
    '/paper-survey/category/cv',
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
    '/paper-survey/summary/27/',
    '/paper-survey/summary/28/',
    '/paper-survey/summary/29/',
    '/paper-survey/summary/30/',
    '/paper-survey/summary/31/',
    '/paper-survey/summary/32/',
    '/paper-survey/summary/33/',
    '/paper-survey/summary/34/',
    '/paper-survey/summary/35/',
    
    
    
    '/paper-survey/summary/others/Ad-Click-Prediction-in-Sequence-with-Long-Short-Term-Memory-Networks-an-Externality-aware-Model','/paper-survey/summary/others/Personalized-Fashion-Recommendation-with-Visual-Explanations-based-on-Multimodal-Attention-Network','/paper-survey/summary/others/Putting-Fairness-Principles-into-Practice-Challenges-Metrics-and-Improvements','/paper-survey/summary/nlp/DropAttention-A-Regularization-Method-for-Fully-Connected-Self-Attention-Networks','/paper-survey/summary/nlp/From-Small-scale-to-Large-scale-Text-Classification','/paper-survey/summary/others/Content-Based-Citation-Recommendation','/paper-survey/summary/cv/Class-Balanced-Loss-Based-on-Effective-Number-of-Samples','/paper-survey/summary/others/Attention-Convolutional-Neural-Network-for-Advertiser-level-Click-through-Rate-Forecasting','/paper-survey/summary/others/Beyond-News-Contents-The-Role-of-Social-Context-for-Fake-News-Detection',
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
