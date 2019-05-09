---
layout: post
title:  "Attention Convolutional Neural Network for Advertiser level Click through Rate Forcasting"
date:   2019-05-09
categories: Others
---

## 1. どんなもの？

`広告主単位` という新たな視点で CTR 予測を行う Context-aware Attention Convolutional Neural Network を提案した。

## 2. 先行研究と比べてどこがすごいの？

CTR 予測問題はオンライン広告における重要な問題の 1 つである。先行研究では `ユーザ単位` の CTR 予測モデルの提案は複数行われているが、 `広告主単位` での予測は本研究が著者が知りうる限りで初めてである。
通常集計されたログデータをモデルに入力するが、本研究ではログデータを時系列データとみなししてモデルに入力し学習を行う。

本研究では、以下の特徴を持つ context-aware attention convolutional neural network (CACNN) を提案し、実世界のデータセットに対して CTR 予測を行った結果を報告している。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1]({{ site.baseurl }}/assets/img/others/Attention-Convolutional-Neural-Network-for-Advertiser-level-Click-through-Rate-Forcasting/figure1.png)

### Context-aware Attention Convolutional Neural Network (CACNN)
時系列の CTR データに対する Attention CNN とコンテキストデータ対する MLP からなるネットワーク構造を持つ。

- 時系列の CTR データに対する Attention CNN
  - 畳み込みで得られた特徴マップに対して attention weight を掛ける
    - 局所的な非線形性や季節性の傾向を適切に捉えることが可能
- コンテキストデータに対する MLP
  - 本研究では配信対象の国とデバイスタイプを使用する
    - 実際の CTR と国・デバイスタイプは相関関係にあるため、これらの情報を適切に捉えることが重要
    - 通常こうした特徴量は同一空間上には存在しないが、複数の全結合層を経て concat することにより、同一の潜在空間で扱うことが可能

## 4. どうやって有効だと検証した？

インターネット企業の主要な広告プラットフォームから 30 日分の広告キャンペーンデータ 20 万件程度を取得し、これらを元に評価を行っている。
ベースラインのモデルとして古典的な手法 (exponential moving average 系)と深層学習ベースの手法 (CNN, CNN with Attention 等)と提案手法である CACNN の比較を行っている。

### 学習方法と評価方法について
- train として 29 日分のデータを使用した。
  - 28 日目までのデータを使って 29 日目を予測するよう学習を行う。
  - valid として train からランダムに 10%程度サンプリングして使用した。
- test として 30 日目のデータを使用した。

## 5. 議論はあるか？
### 畳み込み操作の効果の確認

![Figure 12]({{ site.baseurl }}/assets/img/others/Attention-Convolutional-Neural-Network-for-Advertiser-level-Click-through-Rate-Forcasting/figure12.png)

- ランダムに時系列の CTR データをサンプリングし、それらに対する畳み込み後の特徴マップの状態を可視化したもの。
  - 異なるカーネルサイズで異なる時系列の特徴を捉えていることが分かる。

### Attention の効果確認

| Figure 13 (a) | Figure 13 (b) |
|---------------|---------------|
| ![Figure 13 (a)]({{ site.baseurl }}/assets/img/others/Attention-Convolutional-Neural-Network-for-Advertiser-level-Click-through-Rate-Forcasting/figure13a.png) | ![Figure 13 (b)]({{ site.baseurl }}/assets/img/others/Attention-Convolutional-Neural-Network-for-Advertiser-level-Click-through-Rate-Forcasting/figure13b.png) |

- Figure 13 (a) : ある特徴マップ 50 個を対象に、それらに対する attention の重みを可視化した図
- Figure 13 (b) : (a)の特徴マップ先頭 3 つを対象に、時系列データを入力したときの特徴マップ値の変化を可視化したもの。

- Figure 13 (a) において、特徴マップ 1 と特徴マップ 3 は attention の重みが似ている。
  - Figure 13 (b) で特徴マップ 1 (赤) と 特徴マップ 3 (青) は時系列データに対して同様の反応をしている。
- 特徴マップ 2 は、1 と 3 と同様の傾向の反応パターンを示しているが、元の時系列データ (黄) と大きさという点では離れている。
  - 大きな誤差に対して学習された attention の重みが小さくなっているため、最終的な予測誤差は小さくなっていると考えられる。

## 6. 次に読むべき論文はあるか？
特になし。

### 論文情報・リンク

- [Gao, Hongchang, et al. "Attention Convolutional Neural Network for Advertiser-level Click-through Rate Forecasting." Proceedings of the 2018 World Wide Web Conference on World Wide Web. International World Wide Web Conferences Steering Committee, 2018.](https://dl.acm.org/citation.cfm?id=3186184)
