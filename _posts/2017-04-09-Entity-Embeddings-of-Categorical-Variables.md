---
layout: post
title: "Entity Embeddings of Categorical Variables"
date:   2017-04-09
categories: Others
---

## 1. どんなもの？

カテゴリ変数からEntity Embeddingを自動的に学習するニューラルネットを用いて、カテゴリ変数間の距離を可視化する。

## 2. 先行研究と比べてどこがすごいの？

カテゴリ変数は質的変数や属性変数と呼ばれ、限られた数のカテゴリまたは異なるグループに分類することができる。例えば赤を1、青を2、黄色を3とした場合、「青は赤より大きい」・「赤と黄色の平均が青」といった情報は基本的には意味をなさない。またこれらのカテゴリ変数をそのままニューラルネットワークに入力すると、正しく機能しないことが多い。

本研究ではニューラルネットワークにEmbedding Layerを導入し、カテゴリ変数から多次元のembeddingを自動的に学習する手法を提案している。またこのembeddingを用いて各カテゴリ変数間の距離を可視化することができる。

## 3. 技術や手法の"キモ"はどこにある？

* Embedding Layerを用いたニューラルネットワーク
* ネットワークの過学習を防ぐ手法として有名なDropoutについては、結果が改善しなかったため今回利用していない

![Figure1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Entity_Embeddings_of_Categorical_Embeddings/figure1.png)

## 4. どうやって有効だと検証した？

KaggleのRossmann Sale Predictionデータセットを用いて、従来のXGBoostやRandom Forest、k-Nearest Neighborといった手法と比較をしている。MAPE(Mean Absolute Percentage Error)の数値が提案手法のモデルについては一番低く、良い結果になっている。

## 5. 議論はあるか？

* ニューラルネットワークの学習から得たカテゴリ変数のEmbeddingを特徴量として他の機械学習手法に入力をしたところ、カテゴリ変数を直接入力した場合に比べてとても良い結果になっている。
* Rossmann Sale Predictionデータセットを学習して得られた曜日のEmbeddingを、t-SNEで2次元に落として可視化すると以下のようになる。平日と休日とで差が出ているのがわかる。

![Figure2](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Entity_Embeddings_of_Categorical_Embeddings/figure2.png)

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [Guo, Cheng, and Felix Berkhahn. "Entity Embeddings of Categorical Variables." arXiv preprint arXiv:1604.06737 (2016).](https://arxiv.org/abs/1604.06737)
