---
layout: post
title:  "Skin Lesion Analysis Toward Melanoma Detection: A Challenge at the 2017 International Symposium on Biomedical Imaging (ISBI), Hosted by the International Skin Imaging Collaboration (ISIC)
"
date:   2018-06-03
categories: Others
---

## 1. どんなもの？

ISIC2017で行われたメラノーマ画像の分析チャレンジの内容をまとめたもの

## 2. 先行研究と比べてどこがすごい？

- ISIC2017では3種類のタスクが公開された
  - Lesion Segmentation Task
  - Dermoscopic Feature Classification
  - Disease Classification Task
    - 3カテゴリ (melanoma, nevus, seborrheic keratosis) をそれぞれ分類するタスク
    - melanoma (train: 374, val: 30, test: 117)
    - nevus (train: 1372, val: 78, test: 393)
     - seborrheic keratosis (train: 254, val: 42, test: 90)
- データセットは以下から入手できる
  - [http://challenge2017.isic-archive.com/](http://challenge2017.isic-archive.com/)

## 3. 技術や手法のキモはどこ？

- 平均スコアがベストだったモデル
  - [Matsunaga, Kazuhisa, et al. "Image classification of melanoma, nevus and seborrheic keratosis by deep neural network ensemble." arXiv preprint arXiv:1703.03108 (2017).](https://arxiv.org/abs/1703.03108)
- Melanoma予測精度がベストだったモデル
  - [Díaz, Iván González. "Incorporating the knowledge of dermatologists to convolutional neural networks for the diagnosis of skin lesions." arXiv preprint arXiv:1703.01976 (2017).](https://arxiv.org/abs/1703.01976)
- Seborrheic keratosis予測精度がベストだったモデル
  - [Menegola, Afonso, et al. "RECOD titans at ISIC challenge 2017." arXiv preprint arXiv:1703.04819 (2017).](https://arxiv.org/abs/1703.04819)

### 予測モデルのトレンド
- 深層学習モデルを複数アンサンブルしている
  - 学習データに追加で外部データを用いている
- Seborrheic keratosiの分類はMelanomaの分類に比べて容易な傾向だった
  - 病気の性質・データの偏りから生じたものでは
  - 一番ベストなモデルを作ったチームは追加でヒューリスティックなラベリングを追加で行っている
- 平均スコアがベストだったモデルは、各カテゴリ分類ではベストなモデルではなかった
- 一番複雑なモデルはパフォーマンスを下げており、シンプルなモデルは全体のパフォーマンスを上げている
- 予測の閾値は重要そう。確率的なスコア標準化(Probablistic score normalization)はsensitivityおよびspecificityのスコアをあげるために効果がありそう [[Codella+](http://ieeexplore.ieee.org/abstract/document/8030303/), [Marchetti+](https://www.jaad.org/article/S0190-9622(17)32202-8/fulltext)]。

## 4. どうやって有効だと検証した？

- 評価尺度
  - AUC, specificity (melanoma classification)

## 5. 議論はある？

- Classficationタスクについて
  - モデルのアンサンブルと追加の外部データ使用が高いパフォーマンスを出すカギになる

## 6. 次に読むべき論文は？

- [Matsunaga, Kazuhisa, et al. "Image classification of melanoma, nevus and seborrheic keratosis by deep neural network ensemble." arXiv preprint arXiv:1703.03108 (2017).](https://arxiv.org/abs/1703.03108)
- [Díaz, Iván González. "Incorporating the knowledge of dermatologists to convolutional neural networks for the diagnosis of skin lesions." arXiv preprint arXiv:1703.01976 (2017).](https://arxiv.org/abs/1703.01976)
- [Menegola, Afonso, et al. "RECOD titans at ISIC challenge 2017." arXiv preprint arXiv:1703.04819 (2017).](https://arxiv.org/abs/1703.04819)
- [Codella, Noel CF, et al. "Deep learning ensembles for melanoma recognition in dermoscopy images." IBM Journal of Research and Development 61.4 (2017): 5-1.](http://ieeexplore.ieee.org/abstract/document/8030303/)
- [Marchetti, Michael A., et al. "Results of the 2016 International Skin Imaging Collaboration International Symposium on Biomedical Imaging challenge: Comparison of the accuracy of computer algorithms to dermatologists for the diagnosis of melanoma from dermoscopic images." Journal of the American Academy of Dermatology 78.2 (2018): 270-277.](https://www.jaad.org/article/S0190-9622(17)32202-8/fulltext)

## 論文情報・リンク    

- [Codella, Noel CF, et al. "Skin lesion analysis toward melanoma detection: A challenge at the 2017 international symposium on biomedical imaging (isbi), hosted by the international skin imaging collaboration (isic)." arXiv preprint arXiv:1710.05006 (2017).](https://arxiv.org/abs/1710.05006)
