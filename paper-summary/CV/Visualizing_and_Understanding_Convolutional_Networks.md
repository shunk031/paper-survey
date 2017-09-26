# Visualizing and Understanding Convolutional Networks

## 1. どんなもの？

学習済みのConvolutional Neural Networks(CNN)における中間層の機能とモデルの動作を洞察することができる可視化手法を提案．

## 2. 先行研究と比べてどこがすごいの？

CNNは画像認識の分野で素晴らしい成果を上げているが，なぜそのようなパフォーマンスが発揮されているか，またどのような過程を経て予測を行っているのかが明らかになっていない．

先行研究ではCNNではないDeepなNeural Networkについて可視化を行っているものや，ネットワークのパラメータに対してヘッセ行列を計算し，どのような振る舞いをしているのか考察を行っているものがある．
これらは上位の層で学習されたとても複雑な不変量に対してのみ行われているものであり，単純な2次近似から特徴を考察しているものである．

本研究ではノンパラメトリックな不変量への考察と，学習データに対する特徴マップの活性化度合いを可視化することで，CNNモデルを理解しようとするものである．

## 3. 技術や手法の"キモ"はどこにある？

### Deconvnetを用いた可視化

![Figure 1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure1.png)

#### Unpooling

#### Rectification

#### Filtering

### CNNの可視化

##### 学習した特徴の可視化

![Figure 2-1-2](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure2-1-2.png)
![Figure 2-3](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure2-3.png)
![Figure 2-4-5](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure2-4-5.png)

##### 学習時に学習される特徴の変化

![Figure 4](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure4.png)

##### 特徴の不変性

![Figure 5](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure5.png)

#### モデルアーキテクチャの選択

![Figure 6](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure6.png)

#### 対象をマスクした場合の挙動

![Figure 7](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure7.png)

### 対応分析

![Figure 8](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Visualizing_and_Understanding_Convolutional_Networks/figure8.png)

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

Deconvnetについて
* [Zeiler, Matthew D., Graham W. Taylor, and Rob Fergus. "Adaptive deconvolutional networks for mid and high level feature learning." Computer Vision (ICCV), 2011 IEEE International Conference on. IEEE, 2011.](http://uoguelph.ca/~gwtaylor/publications/zeilertaylorfergus_iccv2011.pdf)
CNNではないDeepなNeural Networkについて可視化を試みたもの
* [Erhan, Dumitru, et al. "Visualizing higher-layer features of a deep network." University of Montreal 1341 (2009): 3.](https://www.researchgate.net/profile/Aaron_Courville/publication/265022827_Visualizing_Higher-Layer_Features_of_a_Deep_Network/links/53ff82b00cf24c81027da530.pdf)


### 論文情報・リンク

* [Zeiler, Matthew D., and Rob Fergus. "Visualizing and understanding convolutional networks." European conference on computer vision. Springer, Cham, 2014.](https://arxiv.org/pdf/1311.2901)
