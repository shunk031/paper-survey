---
layout: post
title:  "Regularizing Deep Neural Networks by Noise: Its Interpretation and Optimization"
date:   2018-02-19
categories: CV
---

## 1. どんなもの？

過学習はDeep neural networkの学習における課題の1つであり、汎化性能を向上させるためにさまざまな正則化手法が提案されてきた。中でも学習中にHidden unitに対してノイズを乗せるDropoutは有名な正則化手法として知られているが、こうした正則化手法がなぜ効果があるのかは不明である。

本研究では従来のノイズ付加による正則化手法が真の目的関数の下限に対して最適化すること、Stochastic gradient descentにおいて、より制約の強い下限にフィットするよう複数のノイズを導入する手法を提案している。CIFAR10等のデータセットを用いて提案手法の効果を確かめている。

![Figure 1]({{ site.baseurl }}/assets/img/cv/Regularizing-Deep-Neural-Networks-by-Noise-Its-Interpretation-and-Optimization/figure1.png)

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [Noh, Hyeonwoo, et al. "Regularizing Deep Neural Networks by Noise: Its Interpretation and Optimization." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/7096-regularizing-deep-neural-networks-by-noise-its-interpretation-and-optimization)
