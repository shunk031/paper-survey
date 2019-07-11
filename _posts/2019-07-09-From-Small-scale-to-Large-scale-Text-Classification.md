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

先行研究ではカテゴリ数の多い大規模なデータに対する研究はあるが、これらの手法は単語間の意味的類似性の重要度を考慮せずに、用語に対する重み付け手法のみを考慮している。
また、十分なデータ数が確保できない場合に対してマルチタスク学習を適用する研究はあるが、カテゴリ数の非常に多い大規模なテキスト分類に対する研究はとても少ない。

本研究では大規模および小規模なテキスト分類のために、タスク間で有効な特徴を共有するマルチタスク学習と、各タスクに有効な特徴を選択する gate 構造 を導入した convolutional neural network (CNN) ベースのネットワークを提案している。

## 3. 技術や手法の"キモ"はどこにある？

<img src="{{ site.baseurl }}/assets/img/nlp/From-Small-scale-to-Large-scale-Text-Classification/figure1.png" width="600px" alt="Figure 1">

### カテゴリ数の多い大規模なテキスト分類に対するマルチタスク学習
#### Shared layer と Private layer
- タスク間で不変な特徴とタスクで独立な特徴をそれぞれ捉えるモデルアーキテクチャ
  - Shared Layer
    - 各タスクに対して共有の畳込み+プーリングを用いて、タスク間で共通の特徴を学習可能
- Private Layer
  - タスク固有の畳み込み+プーリングを用いて、タスク独立な特徴を学習可能

#### Gate 構造
小規模なテキスト分類タスクから大規模テキスト分類タスクへ効果的な特徴を選択する。

$$
    {\bf g} = \sigma({\bf W}_{{\rm small} \to {\rm large}} {\bf z}_{{\rm small}} + {\bf b}_{{\rm small} \to {\rm large}})
$$

- 大規模テキスト分類タスクにおいて、ゲート $${\bf g}$$ を用いて最終的な特徴量を得る

### モデルの学習
#### Joint Traning
- ランダムにタスクを選択する (large-scale or small-scale)
- 選択したタスクに沿った学習データを選択する
- これら学習データをもとに勾配降下法でパラメータを更新する


#### Oversampling
カテゴリ数の多いデータセットの場合、カテゴリごとで分布に差があるため、少ないカテゴリをオーバーサンプリングして対処する。

## 4. どうやって有効だと検証した？
### データセット
- Open Directory Project (ODP)
  - 大規模な木構造の web ページディレクトリ
 	- 15 階層に及び、前処理後には 3000 近くのカテゴリが含まれている。
    - 大分類と小分類が含まれている。
      - `Top/Sports`, `Top/Health`, `Top/Computers` 
      - `Top/Sports/Baseball/Major_League/Teams/Los_Angles_Dogders/News_and_Media` 
    - 学習データとして 23,000 ページを対象
 	  - 小規模テキスト分類タスク用にトップレベルの 13 カテゴリを使用
- New York Times (NYT)
  - ODP の追加テストデータとして、new york times の記事から `art`, `business`, `food`, `health`, `politics`, `sports` なカテゴリをランダムに取得して評価に使用した。

### 評価指標
- F1 score をベースに使用
  - Micro-averaging (Mi-) F1 score
    - テストデータ全体の F1 スコア
      - データ数の多いカテゴリを正確に当てられているか
  - Macro-averaging (Ma-) F1 score
    - 各カテゴリ数に応じた F1 スコア
 	  - データ数の少ないカテゴリを正確に当てられているか
 - NYT データセットに対しては precision@k を使用
   - 記事に対してアノテータが ODP のカテゴリとマッチするように

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

- [Kim, Kang-Min, et al. "From Small-scale to Large-scale Text Classification." The World Wide Web Conference. ACM, 2019.](https://dl.acm.org/citation.cfm?id=3313563)
