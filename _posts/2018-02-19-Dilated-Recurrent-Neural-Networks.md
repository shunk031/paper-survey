---
layout: post
title:  "Dilated Recurrent Neural Networks"
date:   2018-02-19
categories: NLP
---

## 1. どんなもの？

長い文章等に対してRNNを学習させることはとても難しい問題となっている。特に複雑な依存関係、勾配消失/爆発問題、並列化が難しい点が挙げられている。本研究ではシンプルで効率的なRNNのアーキテクチャであるDilatedRNNを提案している。本アーキテクチャは複数のDilated recurrent skip connectionを組み合わせており、さまざまなRNNセルとフレキシブルに組み合わせることができる。またDilatedRNNは必要なパラメータ数を減らしつつ学習効率を大幅に向上させることができ、とても長いスパンで依存性のあるデータやタスクで優れたパフォーマンスを発揮している。

提案モデルの利点を理論的に定量化するため、Memory capacity measureを導入している。これは長いスキップコネクションを持つRNNに対して既存の指標よりも適していることが示されており、LSTMなど他のRNNアーキテクチャのMemory capacity measureを比較することでDilatedRNNが優れていること証明している。

![Figure 1]({{ site.baseurl }}/assets/img/nlp/Dilated-Recurrent-Neural-Networks/figure1.png)

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [Chang, Shiyu, et al. "Dilated recurrent neural networks." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/6613-dilated-recurrent-neural-networks)
