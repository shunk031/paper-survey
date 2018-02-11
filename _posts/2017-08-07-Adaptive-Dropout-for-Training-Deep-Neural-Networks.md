---
layout: post
title:  "Adaptive Dropout for Training Deep Neural Networks"
date:   2017-08-07
categories: CV
---

## 1. どんなもの？

Drooutを行うDeep Networkの他にDropout率を求めるBinary Belief Networkを用意し，入力に適応したDropout率を求める．

## 2. 先行研究と比べてどこがすごいの？

Neural Networkの過学習を抑えるDrooutでは，一般的に0.5という一定のDropout率を採用している．

本研究ではBinary Belief Networkを用いてDropout率を適応的に決定するアーキテクチャ"Stand Out"を提案している．

## 3. 技術や手法の"キモ"はどこにある？

* Stand Out
  * Deep Networkとは別にネットワークを用意する
  * Binary Belief Networkのように振る舞う
  * 元のネットワークとパラメータを共有している
  * Dropoutマスクm，ネットワークのパラメータw．Dropout率πとしたとき，以下のように学習を行う
	* Binary Belief Networkで生成される分布P(m\|π,w)を事後分布に近づける
	* 尤度L(m, w)を最大化する

## 4. どうやって有効だと検証した？

MNISTデータセットとNORBデータセットでStand Outの効果を検証している．

教師なしのfeature learning手法であるRBMやDeep AE，通常のDropout率固定のAEとStand Outを用いたAEでエラー率を比較している．

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [Ba, Jimmy, and Brendan Frey. "Adaptive dropout for training deep neural networks." Advances in Neural Information Processing Systems. 2013.](http://papers.nips.cc/paper/5032-adaptive-dropout-for-training-deep-neural-networks)
