---
layout: post
title: "Convolutional Neural Networks for Sentence Classification"
date:   2016-12-17
categories: NLP
---

## 1. どんなもの？

word2vec を用いて単語をベクトル化し、そのベクトルをシンプルなアーキテクチャの CNN に入力し、センテンスの分類を行った。

## 2. 先行研究と比べてどこがすごいの？

画像認識分野でとてもよい結果を題している Convolutional Neural Network を NLP の分野に適用した。

## 3. 技術や手法の"キモ"はどこにある？

* Google News のワードベクトルを用いて pre-training を行い、各タスクに対して fine-tuning をした
* 重みの L2 正則化
* Dropout の適用

## 4. どうやって有効だと検証した？

CNN の重みの初期化方法を変えたり、pre-training をしたり、チャンネル数を変えたりして実験を行っている。

## 5. 議論はあるか？

* Multichannel か Single Channel のモデルどちらがよいか
  * 規模の小さいデータセットに対しては multichannel のモデルは過学習を防ぐことができた。規模の大きいデータセットに対しては fine-tuning をしなくてはならない。
  
* Static か Non-static の表現方法どちらがよいか
  * Non-static な Single channel モデルと同様に、Non-static な multicannel モデルでも fine-tuning することで、タスクごとにより意味のある結果を出すことができる。
  
## 6. 次に読むべき論文はあるか？

* [Razavian, H. Azizpour, J. Sullivan, S. Carlsson 2014. "CNN Features off-the-shelf: an Astounding Baseline." CoRR, abs/1403.6382.](https://arxiv.org/abs/1403.6382)

### 論文情報・リンク

* [Kim, Yoon. 2014. Convolutional neural networks for sentence classification. arXiv preprint arXiv:1408.5882.](https://arxiv.org/abs/1408.5882)
