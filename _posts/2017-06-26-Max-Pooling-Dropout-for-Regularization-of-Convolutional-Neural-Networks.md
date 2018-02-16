---
layout: post
title:  "Max-Pooling Dropout for Regularization of Convolutional Neural Networks"
date:   2017-06-26
categories: CV
---

## 1. どんなもの？

Max-pooling層の前にDropoutする「Max-Pooling Dropout」を提案し，学習時に活性化後の特徴量を多項分布に従ってサンプリングしていることと同等であることを示した．

## 2. 先行研究と比べてどこがすごいの？

Dropoutは最近Deep Learningに導入された正則化技術であり，通常全結合層に対して適用される．先行研究ではStochastic poolingやMaxout Networkといった，Dropoutにインスパイアされた正則化技術が提案されている．

本研究では通常全結合層の直前で用いるDropoutを，Max-pooling層の前で適用することで，学習時に活性化後の特徴量を多項分布に従ってサンプリングしていることと同値であることを示している．

またテスト時にProbabilistic Weighted Poolingを用いることで，トレーニングしたDropoutネットワークを平均化するより正確な近似を得ることができる．

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1]({{ site.baseurl }}/assets/img/cv/Max-Pooling-Dropout-for-Regularization-of-Convolutional-Neural-Networks/figure1.png)

* Max-Pooling Dropout
  * 学習時にMax-Poolingする前にDropoutさせる
  * 活性化後の特徴量を多項分布に従ってサンプリングしていることと同値
  
* Probabilistic Weighted Pooling
  * 学習時にMax-Pooling Dropoutを適用したネットワークに対し，より正確なネットワークの平均を近似できる

## 4. どうやって有効だと検証した？

MNIST，CIFAR-10およびCIFAR-100データセットについて評価を行っている．

* Probabilistic Weighted PoolingとMax-Poolingをそれぞれ適用したモデルの比較実験
  * dropout率が高い場合に提案手法のProbabilistic Weighted Poolingが優れたパフォーマンスを出している．

* Max-Pooling DropoutとStochastic Poolingをそれぞれ適用したモデルの比較実験
  * dropout率0.5付近においてMax-Pooling DropoutがStochastic Poolingを超える結果を出している．

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

Stocastic Poolingについて
* [Zeiler, Matthew D., and Rob Fergus. "Stochastic pooling for regularization of deep convolutional neural networks." arXiv preprint arXiv:1301.3557 (2013).](https://arxiv.org/abs/1301.3557)

Maxout Networkについて
* [Goodfellow, Ian J., et al. "Maxout networks." arXiv preprint arXiv:1302.4389 (2013).](http://www.jmlr.org/proceedings/papers/v28/goodfellow13.pdf)

### 論文情報・リンク

* [Wu, Haibing, and Xiaodong Gu. "Max-pooling dropout for regularization of convolutional neural networks." International Conference on Neural Information Processing. Springer International Publishing, 2015.](https://arxiv.org/pdf/1512.01400.pdf)
