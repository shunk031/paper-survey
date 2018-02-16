---
layout: post
title: "Robust Convolutional Neural Networks Under Adversarial Noise"
date:   2017-04-12
categories: CV
---

## 1. どんなもの？

Convolutional Neural Network(CNN)を欺くようなノイズを付加することでロバストなモデルを提案する。

## 2. 先行研究と比べてどこがすごいの？

CNNは画像認識分野において、そのモデルの表現力からとても素晴らしい成功を収めている。しかしながらそのモデルの表現力ゆえに、ノイズに対しても敏感に反応してしまうことがある。

本研究ではCNNを欺くような確率的な分布に従ったノイズを画像に付加し、それを元に学習することで頑健性を向上させている。

## 3. 技術や手法の"キモ"はどこにある？

* 入力画像に正規分布に従うノイズを付加する
* 確率的(Stochastic)なReLUやMax-Poolingを適用した"Stochastic feedforward"

## 4. どうやって有効だと検証した？

CIFAR-10とImageNetのvalidationデータセットを用いて評価を行っている。Adversarial noiseを加えない場合、Stochastic feedforward学習を適用したCNNは通常の学習方法で学習させたCNNに僅かに劣るが、Adversarial noiseを加えた場合は優れたパフォーマンスを発揮していることがわかる。

## 5. 議論はあるか？

* ノイズを加えないスタンダードなCNNとノイズを加える本手法のCNNをアンサンブルするとよりよいパフォーマンスを発揮することが分かっている

## 6. 次に読むべき論文はあるか？

モデルを騙すような例(Adversarial examples)を導入する
* [Goodfellow, Ian J., Jonathon Shlens, and Christian Szegedy. "Explaining and harnessing adversarial examples." arXiv preprint arXiv:1412.6572 (2014).](https://arxiv.org/pdf/1412.6572)

### 論文情報・リンク

* [Jin, Jonghoon, Aysegul Dundar, and Eugenio Culurciello. "Robust Convolutional Neural Networks under Adversarial Noise." arXiv preprint arXiv:1511.06306 (2015).](https://arxiv.org/pdf/1511.06306)
