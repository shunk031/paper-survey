---
layout: post
title:  "ABCNN: Attention-Based Convolutional Neural Network for Modeling Sentence Pairs"
date:   2017-01-05
categories: NLP
---

## 1. どんなもの？

NLPの主なタスクとして、「AS(Answer Selection: 回答を選択するタスク)」、「PI(Paraphrase Identification: 言い換えを識別するタスク)」、「TE(Textual Entailment: 含意関係を識別するタスク)」といったものがある。これらは対となるセンテンスを扱うモデルであり、AttentionをベースとしたConvolutional Neural Network(CNN)を構築してこれらのタスクを解いてみたところ、各々のタスクで最高精度を達成することができた。

## 2. 先行研究と比べてどこがすごいの？

NLPの分野において、CNNにAttentionを導入した最初の論文である。従来は対となるセンテンスから特徴量を抽出しなければならないが、CNNでは自動的に2つのセンテンスから有効な特徴量を抽出することができる。先行研究ではbigram CNNやLSTMを用いた研究があるが、今回のアプローチでは、独立した2つのネットワークを用いてセンテンスのモデル化をするのではなく、Attentionを用いて相互に依存するセンテンスをモデル化している。

## 3. 技術や手法の"キモ"はどこにある？

* Siamese構造
* 2つの重みパラメータを共有するCNN
* 入力はword2vecでトレーニングしたベクトル
* average pooling
* 対となる文を入力を畳み込んだ後に、マッチする部分を用いてAttention matrixを生成する

## 4. どうやって有効だと検証した？

ASについてはWikiQA、PIについてはMicrosoft Research Paraphrase(MSRP) corpus、TEについてはSICK dataについて提案モデルを評価した結果、各々についてbaselineを超える精度を記録した。

## 5. 議論はあるか？

* 共通の指示対象を持つ2つの単語の文法的関係を認識することができている。
* 対となる文中に現れる対象物を推論することができている。
* CNNにおけるAtenntionでも効果がある。

## 6. 次に読むべき論文はあるか？



### 論文情報・リンク

* [W. Yin, H. Schutze, B. Xiang, and B. Zhou. ABCNN: Attention-Based Convolutional Neural Network for Modeling Sentence Pairs. CoRR, abs/1512.05193, 2015.](https://arxiv.org/abs/1512.05193)
