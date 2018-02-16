---
layout: post
title: "A Sensitivity Analysis of (and Practitioners' Guide to) Convolutional Neural Networks for Sentence Classification"
date:   2017-02-18
categories: NLP
---

## 1. どんなもの？

Convolutional Neural Networks(CNNs)は近年文書分類においてとても良い結果を達成しているが、先行研究で用いられているモデルはCNNに精通した熟練者がアーキテクチャやハイパーパラメータを設定する必要がある。本研究ではシンプルなCNNを用いてさまざまなパラメータを実験し、検証を行う。

## 2. 先行研究と比べてどこがすごいの？

教師なしの特徴量抽出におけるシンプルなニューラルネットワークの分析や、ニューラルネットワークをトレーニングする際に利用されるSGDに及ぼすハイパーパラメータの影響を調査した先行研究がある。本研究では画像認識や音声認識で最先端の結果を出しているCNNについて、シンプルなアーキテクチャをベースに、文書分類について最適なハイパーパラメータの調査を行っている。

## 3. 技術や手法の"キモ"はどこにある？

今回の調査では以下のパラメータについて吟味している。

* 入力するワードベクトルの効果について
* フィルタサイズの効果について
* 各フィルタサイズに対するfeature mapの数について
* 活性化関数について
* Pooling層の効果について
* 正規化の効果について

## 4. どうやって有効だと検証した？

9つの文書分類用データセット(MR, SST-1, SST-2, Subj, TREC, CR, MPQA, Opi, Irony)を用いている。また、これらのデータセットに対して10-fold cross validationで評価を行っている。様々なアーキテクチャやハイパーパラメータを設定して実験を行っているため、これらの設定で起こるパフォーマンスの「ばらつき」について厳密に評価する必要がある。先行研究ではこういった「ばらつき」が報告されていない。このばらつきはパラメータの初期化の違いで起こっている。このようなばらつきが発生しないよう、実験を行うパラメータのみ変更を行い、10-fold cross validationでの評価の平均値を示している。

## 5. 議論はあるか？

経験的な所見について。

* フィルタサイズはパフォーマンスにとても大きな影響を与えるため、チューニングすべきである。
* feature mapの数もパフォーマンスの向上にとても重要な役割を果たしている。feature mapの数が増えるごとにトレーニングに要する時間も増える。
* 1-max poolingは他のpooling手法よりとても結果を出している。
* 正規化はモデルのパフォーマンスに多少影響している。

具体的なパラメータチューニングについて。

* 入力するベクトルはone-hotなものではなく、non-staticなword2vecやGloVeのベクトルを入力したほうがいい。
* 直線探索を行うことで、最適なフィルタサイズを見つけることができる。
* 各フィルタサイズのfeature mapの数を100から600に変更するときは、0.0から0.5程度のdropout率と最大ノルム制約を使用すること。
* 活性化関数についてはReLUやtanhが他の活性化関数に比べて良い結果を出した。また、今回使用したシンプルなCNNのアーキテクチャではnon activation functionも効果があった。
* feature mapの数を増やしたときにモデルのパフォーマンスが落ちる場合は、dropout率を0.5より大きくしたほうが良い。

## 6. 次に読むべき論文はあるか？

CNNを用いた文書分類における先行研究。

* [Iyyer, Mohit, et al. "Deep Unordered Composition Rivals Syntactic Methods for Text Classification." ACL (1). 2015.](http://www.umiacs.umd.edu/~jbg/docs/2015_acl_dan.pdf)
* [Kalchbrenner, Nal, Edward Grefenstette, and Phil Blunsom. "A convolutional neural network for modelling sentences." arXiv preprint arXiv:1404.2188 (2014).](https://arxiv.org/pdf/1404.2188.pdf?utm_content=bufferee286&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer)
* [Johnson, Rie, and Tong Zhang. "Effective use of word order for text categorization with convolutional neural networks." arXiv preprint arXiv:1412.1058 (2014).](https://arxiv.org/pdf/1412.1058)
* [Kim, Yoon. "Convolutional neural networks for sentence classification." arXiv preprint arXiv:1408.5882 (2014).](https://arxiv.org/pdf/1408.5882)
* [Wang, P., Xu, J., Xu, B., Liu, C. L., Zhang, H., Wang, F., & Hao, H. (2015). Semantic Clustering and Convolutional Neural Network for Short Text Categorization. In ACL (2) (pp. 352-357).](http://www.aclweb.org/old_anthology/P/P15/P15-2058.pdf)
  
ニューラルネットワークモデルにおいて、教師なしの特徴量抽出の要素やSGDのハイパーパラメータ設定を調査している。
  
* [Coates, Adam, Honglak Lee, and Andrew Y. Ng. "An analysis of single-layer networks in unsupervised feature learning." Ann Arbor 1001.48109 (2010): 2.](http://www.jmlr.org/proceedings/papers/v15/coates11a/coates11a.pdf)
* [Breuel, Thomas M. "The effects of hyperparameters on SGD training of neural networks." arXiv preprint arXiv:1508.02788 (2015).](https://arxiv.org/pdf/1508.02788)
  

### 論文情報・リンク

* [Zhang, Ye, and Byron Wallace. "A sensitivity analysis of (and practitioners' guide to) convolutional neural networks for sentence classification." arXiv preprint arXiv:1510.03820 (2015).](https://arxiv.org/pdf/1510.03820)
