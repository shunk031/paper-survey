var CACHE_NAME = '20190223054236';

self.addEventListener('install',event => {
  event.waitUntil(caches.open(CACHE_NAME)
  .then(cache => cache.addAll([
    '/paper-survey/404.html',
    '/paper-survey/about/',
    
    '/paper-survey/category/nlp',
    '/paper-survey/category/others',
    '/paper-survey/summary/',
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
    
    
    
    '/paper-survey/summary/cv/SC-FEGAN-Face-Editing-Generative-Adversarial-Networks-with-Users-Sketch-and-Color','/paper-survey/summary/others/Field-aware-Probabilistic-Embedding-Neural-Network-for-CTR-Prediction','/paper-survey/summary/nlp/Context-Dependent-Sentiment_analysis-in-User-Genereted-Videos','/paper-survey/summary/cv/Semi-supervised-deep-learning-by-metric-embedding','/paper-survey/summary/nlp/Joint-Embedding-of-Words-and-Labels-for-Text-Classification','/paper-survey/summary/cv/Learn-to-Pay-Attention','/paper-survey/summary/others/Skin-Lesion-Analysis-Toward-Melanoma-Detection-A-Challenge-at-the-2017-International-Symposium-on-Biomedical-Imaging-ISBI-Hosted-by-the-International-Skin-Imaging-Collaboration-ISIC','/paper-survey/summary/others/RECOD-Titans-at-ISIC-Challenge-2017','/paper-survey/summary/nip/Contextual-Augmentation-Data-Augmentation-by-Words-with-Paradigmatic-Relations',
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
