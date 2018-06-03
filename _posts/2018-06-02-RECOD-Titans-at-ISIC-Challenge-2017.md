---
layout: post
title:  "RECOD Titans at ISIC Challenge 2017"
date:   2018-06-02
categories: Others
---

## 1. どんなもの？

ISIC2017メラノーマ画像分析でSeborrheic keratosis分類タスクでベストな精度を出したモデルの解説

## 2. 先行研究と比べてどこがすごい？

- 以前までの問題点
  - 学習データ量が足りない
  - モデルの深さ
  - 計算コスト

これらに対して、外部の追加データの使用・ResNet等の深いネットワークの使用・クラウドベースの計算機を使用している。

## 3. 技術や手法のキモはどこ？

### 外部データを用いて学習データを増やす

| Dataset                         | # of melanoma | # of seborrheic keratoses | # of benign nevi |
|---------------------------------|:-------------:|:-------------------------:|:----------------:|
| ISIC 2017 Challenge             | 374           | 254                       | 1372             |
| ISIC Archive                    | (13000 dermoscopic images) | ---          | ---              |
| Interactive Atlas of Dermoscopy | 270           | 49                        | ---              |
| Dermofit Image Library          | 76            | 257                       | ---              |
| IRMA Skin Lesion Dataset        | 187           | ---                       | ---              |
| PH2 Datset                      | 40            | ---                       | ---              |

- すべてのデータについて、アノテーションされているラベルを考慮してマージする
  - 以下のデータについては除いている
    - ISIC Archiveの診断結果がない画像
    - Atlasの `miscellaneous` クラス
    - IRMAの `benign` クラス
    - PH2の `atypical nevi` クラス
- ISIC Archiveにおいて、benignのデータの多くが15歳の患者だった
  - これらを取り除いたらスコアが微増
- 各データセット間で重複してるデータが存在している
  - trainとvalidationに分けるときに注意しないといけない
- `deploy` データ群と `semi` データ群を学習用に作成
  - `deploy`
    - 6つのデータセットからなる9640枚の学習画像
      - keratosis分類ではこのデータ群で学習したほうがAUCスコアが良かった
  - `semi` 
    - 3つのデータセット (ISIC2017, ISIC Archive, Interactive Atlas) からなる7544枚の学習画像
      - melanoma分類ではこのデータ群で学習したほうがAUCスコアが良かった

### 使用モデル

- ImageNetモデルのfine-tuning
  - ResNet-101
  - Inception-v4
  - ~Inception-ResNet~
    - 計算コストが大きいがスコアは微増しただけだったため使用を見送った
- 各クラス独立に学習を行っていたが、3クラス分類に変更した

## 4. どうやって有効だと検証した？

- ベースラインのVGG16とResNet101やInception-v4を比べる
- 標準的なサイズの画像 (224x224) とより大きな高解像度の画像を入力したときの精度の比較
- class-weightやsample-weightの考慮
- curriculum-learningの有無
  - 最初は簡単なデータで学習させ、学習が進んだら難しいデータで学習させる
- 最終conv層をそのままニューラルネットにするかSVMにするか
- 年齢や性別といった患者データを使うかどうか
- 用いるoptimizerの比較
- 異なるper-sample normalizationnの実施
- アンサンブルやスタッキングの有無

## 5. 議論はある？
### 効果がなかったこと
- 画像の解像度について
  - 高解像度は効果なし
- class-weightやsample-weightについて
  - no weighting was the best weighting
- validationデータにおけるearly stoppingについて
  - 特にスコアに対するインパクトはなかった
- 患者データの利用
  - 効果があるときと無い時がある
- curriculum learningの使用
  - シンプルなトレーニングのほうがよかった
- セグメンテーションの情報の利用
  - 今回は使えなかったけど、使うと効果が出るのではと考えられている

### 効果があったこと
- deepなモデルと規模の大きいデータセットを用いると効果が大きい
- data augmentationは必須
  - テスト時にもdata augmentationするとよい (test time augmentation 的な)
- mean subtractionは有効
  - 標準偏差で割るnormalizationはスコアを悪化させた
  - Inception-v4では確認できた。ResNetについては不明
- Stackingは有効

## 論文情報・リンク

- [Menegola, Afonso, et al. "RECOD titans at ISIC challenge 2017." arXiv preprint arXiv:1703.04819 (2017).](https://arxiv.org/abs/1703.04819)
