---
layout: post
title:  "A Discriminative Feature Learning Approach for Deep Face Recognition"
date:   2017-07-27
categories: CV
---

## 1. どんなもの？

特徴空間上で効果的に各クラスを分離するよう学習を行う，「Center Loss」を提案．

## 2. 先行研究と比べてどこがすごいの？

![Figure 1]({{ site.baseurl }}/assets/img/cv/A-Discriminative-Feature-Learning-Approach-for-Deep-Face-Recognition/figure1.png)

Convolutional Neural Networks(CNN)を用いた一般的な画像認識ではSoftmax Lossを用いたクラスラベルの予測を行うことが多い．この方法は最後の全結合層で線形分類器のような振る舞いでDeep Featureを分類している．

顔認識の場合，Deep Featureを単純に分離するのではなく，より際立って区別する必要がある．しかしながらSoftmax Lossのみでは単純に区別するだけである．

より効果的に分離するよう学習を行うContrastive LossやTriplet Lossなどが提案されている．これらは画像のペアを用いて学習するものであるが，学習データが劇的に増えてしまう問題点などがある．

本研究では簡単に実装ができ，先行研究の問題点を解決したCenter Lossを提案している．

## 3. 技術や手法の"キモ"はどこにある？

* Center Loss
  * 異なるクラスの特徴を分離可能に保ちながら、クラス内の変動を最小にする
    - $$m$$ : ミニバッチのサイズ
    - $$c_{y_i} \in \mathbb{R} $$ : クラス $$y_i$$ のDeep Featureの中心

	$$
      \begin{align*}
        \mathcal{L}_{C} = \frac{1}{2} \sum_{i=1}^{m} \|{\bf x_i} - {\bf c_{y_i}}\|^{2}_{2}
      \end{align*}
    $$
  
  * 勾配計算や中心点の更新が容易

  $$
  \begin{align*}
    \frac{\partial \mathcal{L}_C}{\partial x_i} = {\bf x_i} - {\bf c_{y_i}}
  \end{align*}
  $$
  
  $$
  \begin{align*}
    \Delta c_j = \frac{\sum_{i=1}^{m} \delta (y_i = j) \cdot (c_j - x_i)}{1 + \sum_{i=1}^{m} \delta (y_i = j)}
  \end{align*}
  $$

  $$
  \left\{
    \begin{array}{ll}
	  \delta ({\rm condition}) = 1 & {\rm condition}を満たしている場合 \\
	  \delta ({\rm condition}) = 0 & それ以外
    \end{array}
  \right.
  $$

## 4. どうやって有効だと検証した？

顔認識のデータセットであるLabeled Faces in the Wild(YFW)，Youtube Faces(YTF)，MegaFace Challengeを使っている．LeNetをベースとしたモデルにSoftmax Lossのみを用いた場合と，Softmax LossとCenter Loss両方を用いた場合で効果を検証している．

これらのデータセットを用いた画像認識タスクにおいて最先端の結果を出していることが分かる．

## 5. 議論はあるか？

Softmax Lossの場合，特徴空間では単純に線形分離が可能な形で学習されている．

![Figure 2]({{ site.baseurl }}/assets/img/cv/A-Discriminative-Feature-Learning-Approach-for-Deep-Face-Recognition/figure2.png)

Softmax LossにCenter Lossを加えた場合，クラスの特徴を線形に分離する状態を保ちつつ，クラス内の変動が小さくなっていることが分かる．またCenter Lossの効果を調整するハイパーパラメータλの値を変えることで，クラス内の変動の度合いを制限することができる．

![Figure 3]({{ site.baseurl }}/assets/img/cv/A-Discriminative-Feature-Learning-Approach-for-Deep-Face-Recognition/figure3.png)

## 6. 次に読むべき論文はあるか？

Constrastive Lossについて
* [Sun, Yi, et al. "Deep learning face representation by joint identification-verification." Advances in neural information processing systems. 2014.](http://papers.nips.cc/paper/5416-deep-learning-face-representation-by-joint-identification-verification.pdf)
* [Wen, Yandong, Zhifeng Li, and Yu Qiao. "Latent factor guided convolutional neural networks for age-invariant face recognition." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2016.](http://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Wen_Latent_Factor_Guided_CVPR_2016_paper.pdf)

Triplet Lossについて
* [Schroff, Florian, Dmitry Kalenichenko, and James Philbin. "Facenet: A unified embedding for face recognition and clustering." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2015.](http://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Schroff_FaceNet_A_Unified_2015_CVPR_paper.pdf)

### 論文情報・リンク

* [Wen, Yandong, et al. "A discriminative feature learning approach for deep face recognition." European Conference on Computer Vision. Springer International Publishing, 2016.](http://ydwen.github.io/papers/WenECCV16.pdf)
