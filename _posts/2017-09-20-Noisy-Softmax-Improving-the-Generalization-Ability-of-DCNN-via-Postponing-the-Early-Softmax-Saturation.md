---
layout: post
title: "Noisy Softmax: Improving the Generalization Ability of DCNN via Postponing the Early Softmax Saturation"
date:   2017-09-20
categories: CV
---

## 1. どんなもの？

学習時にsoftmaxへの入力に対して効果的にノイズを加えることで活性化状態の飽和を防ぎ，モデルの汎化性能を上げるNoisy Softmaxを提案．

## 2. 先行研究と比べてどこがすごいの？

Convoluional Neural Networks(CNN)といった層の深いモデルを学習させる場合，勾配消失などが原因で出力が飽和してしまい，悪い局所解に落ちてしまう問題がある．

先行研究では活性化関数のSigmoidやReLUに対してノイズを追加したり，パラメータに対してノイズを加えたりするものがある．またsoftmax後にノイズを追加するDisturbLabelがある．

本研究では全結合層の出力に対して効果的にノイズを追加しsoftmaxに入力を行うことで良い局所解に収束し，汎化性能を向上させるNoisy Softmaxを提案している．

## 3. 技術や手法の"キモ"はどこにある？

* Noisy Softmax
  * annealed noise
	* 学習中の入力とパラメータに対して適応的なノイズの追加
	* パラメータ`W`と入力`X`との角度`θ`を用いることでガウスノイズ`ξ`を適応的に付加
	  ![eq5](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Noisy_Softmax_Improving_the_Generalization_Ability_of_DCNN_via_Postponing_the_Early_Softmax_Saturation/eq5.png)
  * softmaxに対してシンプルな変更で導入可能
	![eq6](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Noisy_Softmax_Improving_the_Generalization_Ability_of_DCNN_via_Postponing_the_Early_Softmax_Saturation/eq6.png)
	
## 4. どうやって有効だと検証した？

通常のsoftmax，および固定で正のノイズを追加するNormal，負のノイズを追加するNegativeと提案手法であるNoisy Softmaxについて比較を行っている．
VGGライクなネットワークに対してノイズを付加する各手法を適用し，MNIST，CIFAR 10/100，LFW，FGLFW，YTFの各データセットを用いて評価を行っている．

## 5. 議論はあるか？

* ノイズの効力を決めるパラメータαについて
  * `α`の値を大きくし過ぎるとbackpropするときに大きな勾配が伝搬してしまい，収束しづらい．
  * `α`の値を小さく設定するとモデルの汎化性能が上がる．
  * 特に`α=0.l`程度で効果が出ている．
* 正のノイズか負のノイズか
  * 正のノイズ`n=σξ`と負のノイズ`n=-σ|ξ|`を比較している．
  * 負のノイズは通常のsoftmaxよりも悪い結果になってしまっている．
* annealed noiseとfixed noiseについて
  * 固定のノイズを付加するfree noise`n=α|ξ|`，amplitude noise`n=α||W||・||X||・|ξ|`とannealed noise`n=α||W||・||X||・(1-cosθ)|ξ|`を比較している．
  * free noise・amplitude noiseは通常のsoftmaxより少しよい精度となっている．
  * amplitude noiseとannealed noiseを比べた場合，annealed noiseはだんだんとノイズの量が減るため，より良い局所解に落ちていくと考えられている．
* 正則化の働きについて
  * 付加されるノイズが新しい学習データとみなすことができ，効果的なdata augmentationとなっている．
 

## 6. 次に読むべき論文はあるか？

ReLUに対してノイズを加える
* [Nair, Vinod, and Geoffrey E. Hinton. "Rectified linear units improve restricted boltzmann machines." Proceedings of the 27th international conference on machine learning (ICML-10). 2010.](http://machinelearning.wustl.edu/mlpapers/paper_files/icml2010_NairH10.pdf)

Sigmoidに対してノイズを加える
* [Gulcehre, Caglar, et al. "Noisy activation functions." International Conference on Machine Learning. 2016.](http://www.jmlr.org/proceedings/papers/v48/gulcehre16.html)

DisturbLabel
* [Xie, Lingxi, et al. "Disturblabel: Regularizing cnn on the loss layer." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2016.](http://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Xie_DisturbLabel_Regularizing_CNN_CVPR_2016_paper.pdf)

### 論文情報・リンク

* [Chen, Binghui, Weihong Deng, and Junping Du. "Noisy Softmax: Improving the Generalization Ability of DCNN via Postponing the Early Softmax Saturation." arXiv preprint arXiv:1708.03769 (2017).](https://arxiv.org/abs/1708.03769)
