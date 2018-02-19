---
layout: post
title:  "SVD-Softmax: Fast Softmax Approximation on Large Vocabulary Neural Networks"
date:   2018-02-19
categories: CV
---

## 1. どんなもの？

本研究では特異値分解を利用した、とても大きいボキャブラリを持つSoftmax関数を高速に近似する手法を提案している。SVD-Softmaxはニューラル言語モデルの推論時に最上位となりうる単語について、高速かつ正確に確率推定を行うことを目的としている。提案手法ではSVDを使って出力ベクトルの計算に用いた重み行列を変換する。各単語の近似確率については、いくつかの大きな特異値を使用することで単語の大部分の性質を持たせることができ、これを利用して重み行列を推定できると主張している。

本研究の手法を言語モデリングとニューラル機械翻訳に適用することで、提案手法で導入されている近似手法が効果を発揮していることを検証している。本アルゴリズムでは800,000個の語彙の場合においても、約20%程度の算術演算しか必要とせず、GPUを利用することで3倍以上スピードアップしていることが分かっている。

![Figure 1]({{ site.baseurl }}/assets/img/cv/SVD-Softmax-Fast-Sotfmax-Approximation-on-Large-Vocabulary-Neural-Networks/figure1.png)

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [Shim, Kyuhong, et al. "SVD-Softmax: Fast Softmax Approximation on Large Vocabulary Neural Networks." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/7130-svd-softmax-fast-softmax-approximation-on-large-vocabulary-neural-networks)
