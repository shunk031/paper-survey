---
layout: post
title:  "Unsupervised Learning of Disentangled and Interpretable Representations from Sequential Data"
date:   2018-02-19
categories: Others
---

## 1. どんなもの？

本研究では教師なしの連続データに対して解釈可能な表現を学習するFactrized hierarchical variational autoencoderを提案している。具体的には潜在変数のことなるデータに対し、事前確率としてSequence-dependent priorsとSequence-independent priorsをFactorized hierarchical graphical model内で組み合わせることで、連続データが持つマルチスケールな情報を利用するモデルとなっている。

本モデルは2つの音声コーパスTIMITとAurora-4を用いて評価を行っている。具体的には異なる潜在変数の組を使って、スピーカーや言語コンテンツを変換する能力を定性的に評価している。

![Figure 1]({{ site.baseurl }}/assets/img/others/Unsupervised-Learning-of-Disentangled-and-Interpretable-Representations-from-Sequential-Data/figure1.png)

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [Hsu, Wei-Ning, Yu Zhang, and James Glass. "Unsupervised Learning of Disentangled and Interpretable Representations from Sequential Data." Advances in neural information processing systems. 2017.](http://papers.nips.cc/paper/6784-unsupervised-learning-of-disentangled-latent-representations-from-sequential-data)
