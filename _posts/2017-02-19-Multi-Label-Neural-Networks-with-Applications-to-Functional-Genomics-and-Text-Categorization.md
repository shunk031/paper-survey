---
layout: post
title: "Multi-Label Neural Networks with Applications to Functional Genomics and Text Categorization"
date:   2017-03-19
categories: NLP
---

## 1. どんなもの？

Backpropagation for Multi-Label Learning(BP-MLL)というマルチラベルに対応できるBackpropagationアルゴリズムを提案した。複数のカテゴリラベルが付いているテキストデータに対し、分類を行った。

## 2. 先行研究と比べてどこがすごいの？

マルチラベルでも学習できるようにした確率モデルを元にしたもの、Boosting手法、Decision Treeなどがあるが、本研究では初めてニューラルネットワークについてマルチラベルに対応したものとなっている。

実験結果では先行研究に比べ、6つ以上のカテゴリデータに対して良い結果を出している。

## 3. 技術や手法の"キモ"はどこにある？

* マルチラベルに対応できるように、新たに損失関数を定義し、その損失を最小化する。
* 通常のニューラルネットワークのトレーニングとテストを僅かに変更することで、マルチラベルを学習できるようになっている。
* シングルラベルでの評価手法はAccuracyやPrecision、Recallといった指標があるが、マルチラベルでの評価手法は[この](http://link.springer.com/article/10.1023/A:1007649029923)方法を採用している。
  * hamming loss
  * one-error
  * coverage
  * ranking loss
  * average precision

## 4. どうやって有効だと検証した？

Reuters-21578データセットを用いてテキストのカテゴリ分類を行った。評価手法を元に評価した結果、先行研究に比べ、6つ以上のカテゴリデータに対して良い結果を出している。

## 5. 議論はあるか？

* 先行研究に比べ学習時間が大幅に増えてしまっている。

## 6. 次に読むべき論文はあるか？

* Schapire, Robert E., and Yoram Singer. "BoosTexter: A boosting-based system for text categorization." Machine learning 39.2-3 (2000): 135-168.

### 論文情報・リンク

* [Zhang, Min-Ling, and Zhi-Hua Zhou. "Multilabel neural networks with applications to functional genomics and text categorization." IEEE transactions on Knowledge and Data Engineering 18.10 (2006): 1338-1351.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.130.7318&rep=rep1&type=pdf)
