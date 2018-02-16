---
layout: post
title: 'Signiture Verification using a "Siamese" Time Delay Neural Network'
date:   2017-04-09
categories: CV
---

## 1. どんなもの？

ペンタブレット上に入力された署名をSiamese Neural Networkで学習し、認証システムとして利用する。

## 2. 先行研究と比べてどこがすごいの？

ペンの軌道に関数を適合させる関数ベースの方法は、より高い性能につながることが分かっている。また入力された署名からいくつかの特徴を抽出するような、パラメータベースの方法は、署名を記憶するためのメモリ空間を小さくするメリットがある。本研究ではニューラルネットベースのモデルにいくつかの前処理を行った特徴量を入力し、署名が入力される間の時間なども考慮しつつ、特徴量を効率よく圧縮する方法を選んでいる。

## 3. 技術や手法の"キモ"はどこにある？

* 2つの入力から類似度を計算するような構造のSiamese networkを利用する。
* Time Delay Neural Networkをサブネットワークとする、Siamese Networkを用いて入力される署名の特徴量を学習する。
* ペンの上下、ペンの位置、各点における速度、ペン先の軌跡などを特徴量として入力している。

## 4. どうやって有効だと検証した？

集められた署名情報を元に検証を行っている。偽造署名を80%認識し、本物の署名については95.5%ほど認識できている。

## 5. 議論はあるか？


## 6. 次に読むべき論文はあるか？

本研究で用いられているSiamese構造を指紋認証について応用しているもの。
* [Baldi, Pierre, and Yves Chauvin. "Neural networks for fingerprint recognition." Neural Computation 5.3 (1993): 402-418.](http://authors.library.caltech.edu/12477/1/BALnc93.pdf)

Time Delay Neural Networkを用いた文字認識・署名認証について。
* [Guyon, Isabelle, et al. "A time delay neural network character recognizer for a touch terminal." Proceedings of the International Neural Network Conference, Paris, June 1990. 1990.](https://nyu.pure.elsevier.com/en/publications/a-time-delay-neural-network-character-recognizer-for-a-touch-term)
* [Yoshimura, Mitsu, et al. "On-line Signature Verification Incorporationg the Direction of Pen Movement." IEICE TRANSACTIONS on Information and Systems 74.7 (1991): 2083-2092.](http://search.ieice.org/bin/summary.php?id=e74-d_7_2083)

### 論文情報・リンク

* [Bromley, Jane, et al. "Signature Verification Using A "Siamese" Time Delay Neural Network." IJPRAI 7.4 (1993): 669-688.](https://papers.nips.cc/paper/769-signature-verification-using-a-siamese-time-delay-neural-network.pdf)
