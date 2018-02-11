---
layout: post
title: "Modelling, Visualising and Summarising Documents with a Single Convolutional Neural Network"
date:   2017-03-13
categories: NLP
---

## 1. どんなもの？

Convolutional Neural Network(CNN)をベースにしたモデルを用いて、単語や文の順序を維持しつつ低次元のベクトル空間にembeddingすることで、感情分析や文書の要約を可能にしている。

## 2. 先行研究と比べてどこがすごいの？

[Dynamic Convolutional Neural Network(DCNN)](https://shunk031.github.io/paper-survey/paper-summary/NLP/A_Convolutional_Neural_Network_for_Modelling_Sentences)を用いた先行研究では、可変長である文を扱えるCNNを提案し、感情分析や質問応答分類などで素晴らしい結果を残している。加えて、コンピュータビジョン分野におけるCNNのパラメータの可視化を行った先行研究がある。本研究ではDCNNをベースとしたモデルをトレーニングし、CNNのパラメータの可視化時のテクニックを自然言語処理にも適用することで、文書の要約を実現している。

## 3. 技術や手法の"キモ"はどこにある？

* Dynamic k-max poolingを利用し可変長の文のインプットを可能としたDynamic Convolutional Neural Networkをベースとしたモデルを利用している。
* DCNNとの相違点はemneddingの次元をチャンネル数として扱っていて、1次元のConvolution操作となっている。
* この相違点によってDCNNよりパラメータ数が減っている。
* 単語embeddingを組み合わせて文embeddingを生成し、その文embeddingを他の文embeddingと組み合わせて文書embeddingを生成している。
* CNNパラメータの可視化テクニックを用いて、saliency map(要点マップ)を生成する。これは文書内の文に対して重要度を付与したもので、重要度が高い順にk個だけ文を取り出したものを要約としている。

## 4. どうやって有効だと検証した？

本研究ではTwitterのデータと、IMDBの映画レビューデータで感情分析を行っている。Twitterのデータを用いた感情分析においては、提案手法のモデルは先行研究のDCNNよりパラメータ数が少ないにもかかわらず、同程度の結果を出している。IMDBの映画レビュー出たを用いた感情分析では、規模の小さいデータセットであるにもかかわらず、過学習を起こさずに良い精度を記録している。

提案手法を用いて生成された要約の評価については、予めIMDBのデータセットでトレーニングしておいたNaive Bayes分類器を用いて生成した要約文の分類を行うことで評価を行っている。比較対象として、文書内からランダムに文を取り出したものを要約としたものの結果も掲載されているが、提案手法の要約がとても良い結果になっていることがわかる。

## 5. 議論はあるか？

パラグラフの最初と最後の文を取り出したものを要約とした結果も掲載されているが、あまり良い結果ではない。これは映画レビューにおいては最初もしくは最後の文が要旨を捉えていなかったからだと考えられている。

## 6. 次に読むべき論文はあるか？

Dynamic Convolutional Neural Networkについて。
* [Kalchbrenner, Nal, Edward Grefenstette, and Phil Blunsom. “A convolutional neural network for modelling sentences.” arXiv preprint arXiv:1404.2188 (2014).](https://arxiv.org/pdf/1404.2188.pdf?utm_content=bufferee286&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer)

CNNのパラメータ可視化テクニックについて。
* [Zeiler, Matthew D., and Rob Fergus. "Visualizing and understanding convolutional networks." European conference on computer vision. Springer International Publishing, 2014.](https://arxiv.org/pdf/1311.2901)
* [Simonyan, Karen, Andrea Vedaldi, and Andrew Zisserman. "Deep inside convolutional networks: Visualising image classification models and saliency maps." arXiv preprint arXiv:1312.6034 (2013).](https://arxiv.org/pdf/1312.6034)

### 論文情報・リンク

* [Denil, Misha, et al. "Modelling, visualising and summarising documents with a single convolutional neural network." arXiv preprint arXiv:1406.3830 (2014).](https://arxiv.org/pdf/1406.3830)
