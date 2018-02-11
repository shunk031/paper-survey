---
layout: post
title: "Semi-supervised Convolutional Neural Networks for Text Categorization via Region Embedding"
date:   2017-02-20
categories: NLP
---

## 1. どんなもの？

文書分類のためのConvolutional Neural Networks(CNNs)を用いた半教師あり学習フレームワークを提案する。

## 2. 先行研究と比べてどこがすごいの？

CNNsを用いた文書分類における先行研究では、word2vecなどを利用し事前に学習を行ったword embeddingを入力していた。本研究では教師なしのテキストデータからtv-embeddingという手法を用いてembeddingを学習したのち、教師あり学習時の入力の一部として利用している。実験結果では先行研究の結果より優れたパフォーマンスを実現している。

## 3. 技術や手法の"キモ"はどこにある？

* ラベルがついていないテキストからtv-embeddingを得る
* 得られたtv-embeddingを教師あり学習で用いるCNNsの畳み込み層の入力の一部に利用する

## 4. どうやって有効だと検証した？

ポジティブ・ネガティブのラベルが付与された映画レビューデータセットIMDBとAmazonでの電子機器のレビューデータセットElec、ニュースデータセットRCV1を用いて実験を行っている。IMDBにはラベルが付与されていないデータが含まれており、Elecでは同様のソースから200,000レビューを取得してきてラベル無しテキストとして扱っている。従来手法であるSVMや、先行研究で提案されているCNNベースの文書分類の結果より優れたパフォーマンスを実現している。

## 5. 議論はあるか？

感情分析(IMDB、Elec)においては、tv-embeddingで学習するテキスト領域を3から5にしているが良い結果が出ている。ラベル無しデータがテキスト領域を大きくしても有効に働いていることを示している。しかしながら教師あり学習時にデータのスパース性が原因で精度が落ちる可能性もある。

## 6. 次に読むべき論文はあるか？

著者らの先行研究。ラベルのないデータは用いず、教師あり学習でのみテキスト分類をした際にどれだけ有効かを議論している。
* [Johnson, Rie, and Tong Zhang. "Effective use of word order for text categorization with convolutional neural networks." arXiv preprint arXiv:1412.1058 (2014).](https://arxiv.org/abs/1412.1058)

tv-embeddingについての研究。
* [Ando, Rie Kubota, and Tong Zhang. "Two-view feature generation model for semi-supervised learning." Proceedings of the 24th international conference on Machine learning. ACM, 2007.](http://machinelearning.wustl.edu/mlpapers/paper_files/icml2007_AndoZ07.pdf)

### 論文情報・リンク

* [Johnson, Rie, and Tong Zhang. "Semi-supervised convolutional neural networks for text categorization via region embedding." Advances in neural information processing systems. 2015.](http://papers.nips.cc/paper/5849-semi-supervised-convolutional-neural-networks-for-text-categorization-via-region-embedding.pdf)
