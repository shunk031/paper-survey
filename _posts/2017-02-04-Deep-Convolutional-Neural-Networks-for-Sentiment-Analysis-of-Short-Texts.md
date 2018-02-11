---
layout: post
title: "Deep Convolutional Neural Networks for Sentiment Analysis of Short Texts"
date:   2017-02-04
categories: NLP
---

## 1. どんなもの？

映画のレビューやTwitterのデータについて、CharSCNNという新しいCNNのアーキテクチャを適用することで、感情分析を行う。

## 2. 先行研究と比べてどこがすごいの？

感情分析においては、再帰的な手法がメインとなっている。先行研究では再帰的なAutoencoderを用いた半教師あり学習やMatrix-Vectorを用いた再帰的ニューラルネットワーク、Recursive Neural Tensor Network(RNTN)などが提案されている。今回提案しているCharSCNNはこれら再帰的な手法とは異なり、フィードフォワード・ニューラルネットワークを元にしている。また統語構造を必要としない。 

## 3. 技術や手法の"キモ"はどこにある？

* 単語(word)レベルと文字(character)レベルのembeddingsから文(sentence)のベクトル表現を構築する
* 単語レベルのembeddingはword2vecを利用
* 文字レベルのembeddingを合わせることで、より短い文にについて感情を捉えることができる
* 単語レベルと文字レベルのembeddingを用いることで、否定的な文の要素を検出できている
* 文のベクトル表現を入力することで、スコアを出力するようネットワークを構築

## 4. どうやって有効だと検証した？

Stanford Sentiment Treebank(SSTb)という映画のレビューデータセットと、Twitter Sentiment corpus(STS)というツイッターのコーパスを利用している。提案手法であるCharSCNNとword embeddingだけを伝搬させたSCNN、先行研究であるRNTNやSVMといったモデルを用いて実験した結果、提案手法において最高精度を記録した。

## 5. 議論はあるか？

SSTbコーパスにおいてはCharSCNNとSCNNの精度の違いはほとんど見られなかった。これはSSTbコーパスにおいては文字レベルの情報はあまり効果がなかったと言える。STSコーパスについては、文字レベルの情報を付加しているCharSCNNがSCNNよりも高い精度を出しているため、より短い文において文字レベルの情報が効いていることがわかる。

## 6. 次に読むべき論文はあるか？

* [Collobert, Ronan. "Deep Learning for Efficient Discriminative Parsing." AISTATS. Vol. 15. 2011.](http://www.jmlr.org/proceedings/papers/v15/collobert11a/collobert11a.pdf)  
  意味役割付与(semantic role labeling task)についてCNNを使用している。CharSCNNはこの論文を元に構築されている。

* [dos Santos, Cícero Nogueira, and Bianca Zadrozny. "Learning Character-level Representations for Part-of-Speech Tagging." ICML. 2014.](http://www.jmlr.org/proceedings/papers/v32/santos14.pdf)  
  Twitterデータの感情分析のタスクでは、ハッシュタグにおいて「ly」で終わる単語に有益な情報が付与されている。これらを畳み込みのアプローチを用いて考察している。

### 論文情報・リンク

* [Dos Santos, Cícero Nogueira, and Maira Gatti. "Deep Convolutional Neural Networks for Sentiment Analysis of Short Texts." COLING. 2014.](https://pdfs.semanticscholar.org/b0ac/a3e7877c3c20958b0fae5cbf2dd602104859.pdf)
