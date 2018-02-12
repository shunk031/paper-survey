---
layout: post
title: "UNITN: Training Deep Convolutional Neural Network for Twitter Sentiment Classification"
date:   2017-03-05
categories: NLP
---

## 1. どんなもの？

Convolutional Neural Network(CNN)の重みパラメータの初期化を工夫し、Twitterデータにおける感情分析で公式ランキング1位を獲得。

## 2. 先行研究と比べてどこがすごいの？

先行研究では畳み込み層に単語ベクトルを入力する際はskip-gramをベースとするword2vecでの学習済みベクトルを入力することが多い。本研究では[Distant Supervision](http://www.academia.edu/download/34632156/Twitter_Sentiment_Classification_using_Distant_Supervision.pdf)と呼ばれる手法で獲得したembeddingを用いることで、Twitterコーパスの感情分析において公式ランキングで1位を獲得することができている。

## 3. 技術や手法の"キモ"はどこにある？

* Single level CNNアーキテクチャ
* 活性化関数にはReLUを用いて学習のスピードアップを図る
* Max Poolingを使用(先行研究では語の順序が保存されるk-max poolingを用いているものが多い)
* DropoutやL2正則化などの正則化で可学習を抑える
* 学習済みの単語ベクトルを入力

## 4. どうやって有効だと検証した？

Semeval-2015というTwitterのデータをメインとしたデータセットを用いて、フレーズレベルのものとメッセージレベルのデータで感情分析タスクを解いている。重みパラメータの3つの初期化方法(Random、word2vec、distant supervision)のうちDistant supervisionでの学習済み単語ベクトルを用いた場合が一番良い結果であり、公式のランキングで1位のスコアを獲得している。

## 5. 議論はあるか？

個人的に本論文のCNNアーキテクチャの図がわかりやすかった。

![Figure 1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/NLP/UNITN_Training_Deep_Convolutional_Neural_Network_for_Twitter_Sentiment_Classification/figure1.png)

## 6. 次に読むべき論文はあるか？

先行研究で用いられているSingle levelのCNNアーキテクチャについて。
* [Kim, Yoon. “Convolutional neural networks for sentence classification.” arXiv preprint arXiv:1408.5882 (2014).](https://arxiv.org/abs/1408.5882)

Distant Supervisionについて。
* [Go, Alec, Richa Bhayani, and Lei Huang. "Twitter sentiment classification using distant supervision." CS224N Project Report, Stanford 1.12 (2009).](http://www.academia.edu/download/34632156/Twitter_Sentiment_Classification_using_Distant_Supervision.pdf)

### 論文情報・リンク

* [Severyn, Aliaksei, and Alessandro Moschitti. "Unitn: Training deep convolutional neural network for twitter sentiment classification." Proceedings of the 9th International Workshop on Semantic Evaluation (SemEval 2015), Association for Computational Linguistics, Denver, Colorado. 2015.](http://www.aclweb.org/anthology/S/S15/S15-2.pdf#page=506)
