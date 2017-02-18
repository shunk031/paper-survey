# Large Scale Multi-Label Text Classification with Semantic Word Vectors

## 1. どんなもの？

Convolutional Neural Network(CNN)とGated Recurrent Unit(GRU)を導入したRecurrent Neural Networkにそれぞれword embeddingを入力し、マルチラベル分類問題で用いられるBinary Relevanceで複数ラベルが付与されている大規模な文書を分類する。

## 2. 先行研究と比べてどこがすごいの？

ニューラルネットワークにおけるマルチラベル分類では、Backpropagation for Multi-Label Learning(BP-ML)という手法が考案されている。これは従来のニューラルネットの損失関数を新しい物に置き換えることで、ゲノム解析やテキスト分類でとてもよい結果を出した。また、このBP-MLにAdagradやdropout、ReLUを導入することでより良い結果を出している研究もある。しかしながらこれらの入力にはbag-of-wordsを用いており、また頻出する単語のみを扱っている。よって先行研究では単語の順序が考慮されていなかったり、語彙数が少なくなってしまっている。本研究では単語の順序を考慮し、より多くの語彙からセマンティックなword embeddingを用いている。

## 3. 技術や手法の"キモ"はどこにある？

* [Kim(2014)](https://arxiv.org/pdf/1408.5882)と同様のセッティングをしたCNN(staticなword embeddingのみを使用)
* Gated Recurrent Neural Network
* マルチラベル分類問題を解くBinary Relevance手法  
  あるラベルがあるかないか、複数の2値問題に帰着している。
  
## 4. どうやって有効だと検証した？

PubMedに記載されている生物医学のアブストがまとまられたBioASQ Challenge for Large-Scale Biomedical Semantic Indexing from 2014データセットを用いた。このデータセットに登場する、頻出上位1000ラベルを用いて学習・評価を行った。入力するword embeddingはデータセットを提供している大会から与えられているもので、PubMedのアブストで学習したword2vecのベクトルを利用している。評価はmicro-F1 measureを用いている。ベースラインとなる線形識別器に対して提案手法のCNN、GRUともにとても良い結果を出している。

## 5. 議論はあるか？

CNNおよびGRUにword embeddingsを入力し、Binary Relevanceでマルチラベルなテキストを分類したところ、とてもよい結果を出すことができた。

## 6. 次に読むべき論文はあるか？

ニューラルネットワークにおけるマルチラベル分類について。

* [Zhang, Min-Ling, and Zhi-Hua Zhou. “Multilabel neural networks with applications to functional genomics and text categorization.” IEEE transactions on Knowledge and Data Engineering 18.10 (2006): 1338-1351.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.130.7318&rep=rep1&type=pdf)
* [Nam, Jinseok, et al. "Large-scale multi-label text classification—revisiting neural networks." Joint European Conference on Machine Learning and Knowledge Discovery in Databases. Springer Berlin Heidelberg, 2014.](https://arxiv.org/pdf/1312.5419)

CNNを用いた文書分類について。
* [Kim, Yoon. "Convolutional neural networks for sentence classification." arXiv preprint arXiv:1408.5882 (2014).](https://arxiv.org/pdf/1408.5882)

### 論文情報・リンク

* [Berger, Mark J. "Large Scale Multi-label Text Classification with Semantic Word Vectors." (2015).](https://cs224d.stanford.edu/reports/BergerMark.pdf)
