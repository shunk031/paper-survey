---
layout: post
title: "Random Erasing Data Augmentation"
date:   2017-10-29
categories: CV
---

## 1. どんなもの？

入力画像に対してランダムに矩形領域をノイズでマスクするRandom Erasingを提案し，モデルの識別精度を向上させる．

## 2. 先行研究と比べてどこがすごいの？

画像認識分野で素晴らしい結果を残しているConvolutional Neural Network(CNN)は多数の複雑なパラメータが存在しているため，
トレーニングデータに対しては良い精度を表し，テストデータに対しては精度が悪くなってしまう「過学習」が問題になっている．

こうした問題に対して先行研究では以下のようなData augmentationや正則化を用いて過学習を抑制するよう提案を行っている．

- Translation
- Rotation
- Random flipping
- Random cropping
- Adding noises
- Dropout
- DropConnect
- Adaptive dropout
- Stochastic Pooling
- DisturbLabel
- PatchShuffle

本研究では以下のような利点があるRandom Erasingを提案している．

- パラメータの学習や省メモリで動く軽量な手法である．既存の学習の枠組みを変えることなく，さまざまなCNNモデルに適用することができる．
- 既存のData augmentationや正則化手法とRandom Erasingを組み合わせることにより，認識性能が更に向上する．
- 画像の一部分が隠されているようなサンプルに対するCNNのロバスト性を向上させる．ランダムに選んだテストデータに対して一部分を隠して推論させた場合においても高い性能を発揮する．

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1](https://github.com/shunk031/paper-survey/blob/master/images/CV/Random_Erasing_Data_Augmentation/figure1.png)

- Random Erasing
  - 入力画像に対してランダムに矩形領域をノイズでマスクする．
	- ハイパーパラメータ
  
	  | パラメータ                                                                                                                                         | 説明                                                       |
	  |----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
	  | ![Erasing probability](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Random_Erasing_Data_Augmentation/algorithm1_p.png) | Random Erasingを使用する確率                               |
	  | ![Area ratio range](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Random_Erasing_Data_Augmentation/algorithm1_s.png)    | マスクする領域の最小/最大比率 (画像全体に対する面積比)     |
	  | ![Aspect ratio range](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Random_Erasing_Data_Augmentation/algorithm1_r.png)  | マスク領域のアスペクト比の最小/最大値                      |

	- アルゴリズムは以下のようになっている．  
	  ![Algorithm 1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Random_Erasing_Data_Augmentation/algorithm1.png)

## 4. どうやって有効だと検証した？

画像分類タスクに対してはCIFAR-10/100，物体識別タスクに対してはPASCAL VOC 2007，人物の認識タスクに対してはMarket-1501，DukeMTMC-reID，CHHK03をそれぞれ利用している．

AlexNetやVGG19，ResNet，Wide ResNet，ResNeXt，FRCN，ASDNなど，さまざまなSoTAモデルに対してRandom Erasingを適用した結果を比較している．

## 5. 議論はあるか？

- Random ErasingはDropoutを画像レベルで適用しているもの似ている．
  - Dropoutと異なる点
	- 連続した矩形領域に対して適用している．
	- ノイズや障害物に対してモデルをよりロバストにすることを重点に置いている．

## 6. 次に読むべき論文はあるか？

Dropoutについて
- [Krizhevsky, Alex, Ilya Sutskever, and Geoffrey E. Hinton. "Imagenet classification with deep convolutional neural networks." Advances in neural information processing systems. 2012.](http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf)

DropConnectについて
- [Varior, Rahul Rama, Mrinal Haloi, and Gang Wang. "Gated siamese convolutional neural network architecture for human re-identification." European Conference on Computer Vision. Springer International Publishing, 2016.](https://arxiv.org/pdf/1607.08378)

Adaptive dropoutについて
- [Ba, Jimmy, and Brendan Frey. "Adaptive dropout for training deep neural networks." Advances in Neural Information Processing Systems. 2013.](http://papers.nips.cc/paper/5032-adaptive-dropout-for-training-deep-neural-networks.pdf)

Stochastic Poolingについて
- [Zeiler, Matthew D., and Rob Fergus. "Stochastic pooling for regularization of deep convolutional neural networks." arXiv preprint arXiv:1301.3557 (2013).](https://arxiv.org/pdf/1301.3557)

DisturbLabelについて
- [Xie, Lingxi, et al. "Disturblabel: Regularizing cnn on the loss layer." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2016.](http://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Xie_DisturbLabel_Regularizing_CNN_CVPR_2016_paper.pdf)

PatchShuffleについて
- [Kang, Guoliang, et al. "PatchShuffle Regularization." arXiv preprint arXiv:1707.07103 (2017).](https://arxiv.org/abs/1707.07103)

### 論文情報・リンク

* [Zhong, Zhun, et al. "Random Erasing Data Augmentation." arXiv preprint arXiv:1708.04896 (2017).](https://arxiv.org/pdf/1708.04896)
