---
layout: post
title:  "Deep Subspace Clustering Netoworks"
date:   2018-02-19
categories: CV
---

## 1. どんなもの？

本研究では教師なしサブスペースクラスタリングのためのDeep neural networkアーキテクチャを提案している。本アーキテクチャは入力データを潜在空間に非線形で写像するDeep auto-encoderをベースとしている。本研究での重要なポイントとして、従来のサブスペースクラスタリングで効果的であると証明されている「Self-expressiveness」という特性を模倣するため、EncoderとDecoderとの間に新しくSelf expressiveレイヤーを導入している点が挙げられる。

本研究で導入されたSelf expressiveレイヤーは、一般的なBackpropagationを通じてすべてのデータ点間の類似性をシンプルかつ効果的に学習するものとなっている。またこのレイヤーは非線形であるため、本研究のアーキテクチャは複雑な構造を持つデータ点を容易にクラスタリングできる。加えて、Subspace clutering networkのパラメータを効率的に学習させるためのPre-trainingとFine-tuningを提案している。Subspace clustering networkが先行研究の教師なしサブスペースクラスタリング手法よりも遥かに優れていることを示している。

![Figure 1]({{ site.baseurl }}/assets/img/cv/Deep-Subspace-Clustering-Networks/figure1.png)

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [Ji, Pan, et al. "Deep subspace clustering networks." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/6608-deep-subspace-clustering-network)
