---
layout: post
title:  "Deep Networks with Stochastic Depth"
date:   2017-08-14
categories: CV
---

## 1. どんなもの？

Residual Blockを確率的にドロップさせることで学習時間の向上や勾配消失を防ぐStochastic Depthを提案．

## 2. 先行研究と比べてどこがすごいの？

層のとても深いResNetといったモデルはBackpropagation時の勾配消失や，各パラメータが有効に学習しない，学習時間の増大などが問題点として上げられている．

本研究ではResNetを対象とした，層の深いネットワークを見かけ上浅いネットワークのように学習を行い，テスト時に元のDeepなネットワークとなるよう振る舞う"Stochastic Depth"を提案している．

## 3. 技術や手法の"キモ"はどこにある？

![Figure 2]({{ site.baseurl }}/assets/img/cv/Deep-Networks-with-Stochastic-Depth/figure2.png)

* Stochastic Depth
  * Residual Blockを確率的にドロップさせる．
	* 学習時間の短縮．
	* モデルのアンサンブルのような働きがある．
	* survival probabilitiesを利用し，より深いResidual Blockをより多くドロップさせるようにする．
	  * 入力に近い，浅いブロックは1(Dropしない)，深いブロックは0.5(50%の確率でDrop)するようにし，中間のブロックはこれらの値を考慮した線形値をドロップ確率としている．
  * Dropoutはネットワークの幅を狭くするものであり，Stochastic Depthはネットワークの深さを浅くするものである．
  * テスト時にはブロックをDropしないようにすることで表現能力の高い深いモデルを利用するようにする．
  
## 4. どうやって有効だと検証した？

CIFAR-10/100．SVHN，ImageNetの各データセットを使用し，ResNet-50と提案手法であるStochastic Depthを導入したResNet-50で比較を行っている．

Stochastic Depthを導入したResNetの学習時間は通常のResNetと比べるとおよそ25%ほど短縮されており，また通常のResNetより精度を出している．

## 5. 議論はあるか？

* survival probabilitiesについて
  * 実験結果からsurvival probabilitiesは0.5が良い結果が出ている．

## 6. 次に読むべき論文はあるか？

ResNetについて
* [He, Kaiming, et al. “Deep residual learning for image recognition.” Proceedings of the IEEE conference on computer vision and pattern recognition. 2016.](http://www.cv-foundation.org/openaccess/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html)

### 論文情報・リンク

* [Huang, Gao, et al. "Deep networks with stochastic depth." European Conference on Computer Vision. Springer International Publishing, 2016.](https://arxiv.org/pdf/1603.09382)
