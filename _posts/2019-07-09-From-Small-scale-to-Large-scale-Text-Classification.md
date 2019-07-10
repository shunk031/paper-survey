---
layout: post
title:  "From Small-scale to Large-scale Text Classification"
date:   2019-07-09
categories: NLP
---

## 1. どんなもの？

カテゴリ数の多い大規模なテキスト分類と小規模なテキスト分類を同時に行うマルチタスクなモデルアーキテクチャを提案。

## 2. 先行研究と比べてどこがすごいの？

Web 検索のパーソナライズやレコメンドシステムなど、カテゴリ数が非常に多い大規模なテキスト分類は学習時に各カテゴリを捉えられるよう大規模なデータセットが必要である。

先行研究ではカテゴリ数の多い大規模なデータに対する研究はあるが、これらの手法は単語間の意味的類似性の重要性を考慮せずに、用語重み付け手法のみを考慮している。
また、十分なデータ数が確保できない場合に対してマルチタスク学習を適用する研究はあるが、カテゴリ数の非常に多い大規模なテキスト分類に対する研究はとても少ない。

本研究では大規模および小規模なテキスト分類のために、タスク間で有効な特徴を球友するマルチタスク学習と、各タスクに有効な特徴を選択する gate 構造を導入した
convolutional neural network (CNN) ベースのネットワークを提案している。

## 3. 技術や手法の"キモ"はどこにある？

<img src="{{ site.baseurl }}/assets/img/nlp/From-Small-scale-to-Large-scale-Text-Classification/figure1.png" width="600px" alt="Figure 1">

### カテゴリ数の多い大規模なテキスト分類に対するマルチタスク学習


#### Shared layer と Private layer

Large-scale および small-scale なテキスト分類に対して

- Shared layer
  - large-scale と small-scale でタスクに共通する特徴を捉える
- Private layer
  - large-scale と small-scale でタスクに独立なの特徴を捉える

#### Gate 構造
  
### モデルの学習
#### Joint Traning
- ランダムにタスクを選択する (;arge-scale or small-scale)
- 選択したタスクに沿った学習データを選択する
- これら学習データをもとに勾配降下法でパラメータを更新する

#### Fine Tuning


#### Oversampling
大規模でカテゴリ数の多いデータセットの場合、カテゴリごとで分布に差があるので over-sampling を行う。

## 4. どうやって有効だと検証した？
- Open Directory Project (ODP)
  - `Top/Sports`, `Top/Health`, `Top/Computers` といった大分類と、 `Top/Sports/Baseball/Major_League/Teams/Los_Angles_Dodgers/News_and_Media` といった小分類から構成されている。
- NYT

### 評価指標


### ベースラインモデルとの比較
- MC (Merge-Centroid)
- CNN
- LSTM
- BiLSTM
- PV
- fastText
- MT-DNN
- MT-CNN
- FS-LSTM
- SP-LSTM
- SPG-CNN

## 5. 議論はあるか？

### Gate 構造の比較
### 事前学習済み単語ベクトルの比較


## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [著者，"タイトル，" ジャーナル名，voluem，no.，ページ，年](論文リンク)
