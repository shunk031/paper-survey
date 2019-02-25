---
layout: post
title:  "SC-FEGAN: Face Editing Generative Adversarial Networks with User's Sketch and Color"
date:   2019-02-21
categories: CV
---

## 1. どんなもの？

ユーザーのインタラクティブなスケッチや色指定が可能なニューラルネットワークベースの顔画像編集システム SC-FEGAN を提案。

## 2. 先行研究と比べてどこがすごいの？

従来の Generative Adversarial Network (GAN) を用いた顔画像編集システムは低画質でエッジを適切に捉えるのが難しかった。
また顔編集を行う際のユーザの入力に対して質の高い応答を返すのは困難であった。

Deepfillv2 や Guided inpainting はこうしたユーザーが入力するマスキングや他の画像を入力として編集を可能としたが、編集時の色の指定ができなかったり、詳細な細かい復元が可能ではなかった。

本研究では UNet ベースのアーキテクチャに対して gated convolutional layer を導入したネットワークアーキテクチャをベースにユーザーのスケッチや色指定を可能とした、
自由で高品質な顔編集システムである SC-FEGAN を提案した。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 2]({{ site.baseurl }}/assets/img/cv/SC-FEGAN-Face-Editing-Generative-Adversarial-Networks-with-Users-Sketch-and-Color/figure2.png)

### 学習データに対する処理
- 高品質な瞳の編集
  - 学習時にランダムに目周辺にマスキングを適用することで細かい瞳の復元を可能とする
  - 同時に generative face completion (GFC) を適用する
- ユーザーが入力するスケッチや色指定への対応
  - FaceShop と同様の手法を導入
    - スケッチデータをビットマップからベクターへと変換する[AutoTrace](http://autotrace.sourceforge.net/)は用いていない
  - HED によるエッジ検出器を使用して、ユーザーの入力からスケッチデータを生成

### 提案顔編集システムのアーキテクチャ

![Figure 3]({{ site.baseurl }}/assets/img/cv/SC-FEGAN-Face-Editing-Generative-Adversarial-Networks-with-Users-Sketch-and-Color/figure3.png)

- Generator
  - U-net ベースの generator を採用
    - すべての畳み込み層に gated convolution を導入している
    - 畳み込みの後に local signal normalization (LRN)を用いている
    - 入力は$$512 \times 512 \times 9$$である
      - `RGB (3 チャンネル)`、`マスク (1 チャンネル)`、`スケッチ(1 チャンネル)`、`色指定マップ(3 チャンネル)`、`ノイズ(1 チャンネル)`
    
- Discriminator
  - SN-patchGAN ベースの discriminator を採用
    - 複数の loss 関数を最小化する
      - `per-pixcel loss`、`perceptual loss`、`style loss`、`total variance loss`

## 4. どうやって有効だと検証した？

CelebA-HO データセットにおいてランダムに学習用とテスト用で分割したものに対して提案システムである SC-FEGAN による顔編集の質を検討している。

## 5. 議論はあるか？

### Generator の違いによる瞳の編集精度

![Figure 4]({{ site.baseurl }}/assets/img/cv/SC-FEGAN-Face-Editing-Generative-Adversarial-Networks-with-Users-Sketch-and-Color/figure4.png)
- Generator を U-net と Coarse-Refined net で変えたときに、瞳領域をマスクして復元したときの結果。U-net 構造のほうが細かい瞳の復元に成功している

### Perceptual loss の有無による編集精度

![Figure 5]({{ site.baseurl }}/assets/img/cv/SC-FEGAN-Face-Editing-Generative-Adversarial-Networks-with-Users-Sketch-and-Color/figure5.png)
- Perceptual loss である VGG loss を導入することにより、髪部分が正確に編集できている

### 先行研究との復元精度の比較

![Figure 6]({{ site.baseurl }}/assets/img/cv/SC-FEGAN-Face-Editing-Generative-Adversarial-Networks-with-Users-Sketch-and-Color/figure6.png)
- 先行研究の Deepfillv1 に対して提案システムである SC-FEGAN による復元精度が高いことがわかる

### アクセサリーなどの小さい物体に対する編集の可能性

![Figure 8]({{ site.baseurl }}/assets/img/cv/SC-FEGAN-Face-Editing-Generative-Adversarial-Networks-with-Users-Sketch-and-Color/figure8.png)
- HED をもとにマスキング領域を拡張して学習することにより、イヤリングと共に顔の画像を生成するという特別な結果を得ることができた
- ネットワークが小さな詳細を学習し、小さな入力に対しても妥当な結果を生み出すことができることを示している

## 6. 次に読むべき論文はあるか？

- Deepfillv2 (SN-patchGAN, gated convolutional layer) について
  - [Yu, Jiahui, et al. "Free-form image inpainting with gated convolution." arXiv preprint arXiv:1806.03589 (2018).](https://arxiv.org/abs/1806.03589)
- Guided inpainting について
  - [Zhao, Yinan, et al. "Guided image inpainting: Replacing an image region by pulling content from another image." arXiv preprint arXiv:1803.08435 (2018).]
- Generative Face Completion (GFC) について
  - [Li, Yijun, et al. "Generative face completion." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2017.](http://openaccess.thecvf.com/content_cvpr_2017/html/Li_Generative_Face_Completion_CVPR_2017_paper.html)
- FaceShop について
  - [Portenier, Tiziano, et al. "Faceshop: Deep sketch-based face image editing." ACM Transactions on Graphics (TOG) 37.4 (2018): 99.](https://arxiv.org/abs/1804.08972)
- U-net について
  - [Ronneberger, Olaf, Philipp Fischer, and Thomas Brox. "U-net: Convolutional networks for biomedical image segmentation." International Conference on Medical image computing and computer-assisted intervention. Springer, Cham, 2015.](http://www.cs.cmu.edu/~jeanoh/16-785/papers/ronnenberger-miccai2015-u-net.pdf)

### 論文情報・リンク

- [Youngjoo Jo, Jongyoul Park. SC-FEGAN: Face Editing Generative Adversarial Network with User's Sketch and Color. arXiv:1902.06838, 2019](https://arxiv.org/abs/1902.06838)
