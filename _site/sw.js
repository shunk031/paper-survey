var CACHE_NAME = '20180215005622';

self.addEventListener('install',event => {
  event.waitUntil(caches.open(CACHE_NAME)
  .then(cache => cache.addAll([
    '/paper-survey/404.html',
    '/paper-survey/about/',
    
    '/paper-survey/summary/',
    '/paper-survey/category/nlp',
    '/paper-survey/category/cv',
    '/paper-survey/category/others',
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
    
    
    '/paper-survey/summary/nlp/Radical-level-Ideograph-Encoder-for-RNN-based-Sentiment-Analysis-of-Chinese-and-Japanese','/paper-survey/summary/cv/Dynamic-Routing-Between-Capsules','/paper-survey/summary/cv/Unsupervised-Deep-Embedding-for-Clustering-Analysis','/paper-survey/summary/nlp/Character-level-Intra-Attention-Network-for-Natural-Language-Inference','/paper-survey/summary/cv/Random-Erasing-Data-Augmentation','/paper-survey/summary/nlp/Deconvolutional-Paragraph-Representation-Learning','/paper-survey/summary/cv/Visualizing-and-Understanding-Convolutional-Networks','/paper-survey/summary/nlp/Which-Encoding-is-the-Best-for-Text-Classification-in-Chinese-English-Japanese-and-Korean','/paper-survey/summary/cv/Noisy-Softmax-Improving-the-Generalization-Ability-of-DCNN-via-Postponing-the-Early-Softmax-Saturation',
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
