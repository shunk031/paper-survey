---
layout: post
title:  "Semi-supervised Deep Learning by Metric Embedding"
date:   2018-08-25
categories: CV
---

## 1. どんなもの？

少ないラベル付きデータとラベルなしデータを元に距離埋め込み (neighbor embedding) を学習する、半教師あり学習を提案

## 2. 先行研究と比べてどこがすごいの？

従来のニューラルネットワークの学習では学習データに対してラベルを推定する枠組みであったが、ラベル付きの学習データが少ない場合に容易に過学習を引き起こす。
本研究ではラベル付きの学習データに対して距離埋め込み (neighbor embedding) を推定する枠組みを導入することで、ラベルなしデータも含めて学習を行い精度を向上させた。

## 3. 技術や手法の"キモ"はどこにある？

- Embedding同士の距離比較による学習 (neighbor embedding)
  - 学習データ $$x \in \mathcal{X}$$ バッチサイズ分サンプリング
  - $$c$$ クラスのラベル付きデータ $$z_1, \cdots, z_c \in X_L$$ を各クラス1サンプルずつサンプリング
  - 学習データをembeddingした $$F(x)$$ と ラベル付きデータをembeddingした $$F(z_1), \cdots, F(z_c) $$ に対してそれぞれ `L2 norm squared` の逆数を計算
  - 計算した距離の逆数に対して `softmax` 値を計算
  
  $$
    P(x; z_1, \cdots, z_c)_{i} = \frac{e^{-||F(x) - F(z_i)||^2}}{\sum_{j=1}^{c} e^{-||F(x) - F(z_i)||^2}}, i \in \{1 \cdots c \}
  $$

  - `softmax` 値と学習データの教師ラベルとの `cross entropy` を計算する。

- 半教師あり学習への応用
  - ラベルなしデータ群 $$X_U$$ からサンプリングして以下を計算

  $$
    L(x, z_1, \cdots, z_c)_U = - \sum_{i=1}^{c} \frac{ e^{-||F(x) - F(z_i)||^2} }{ \sum_{j=1}^{c} e^{-||F(x) - F(z_j)||^2} } \cdot \log{\frac{ e^{-||F(x) - F(z_i)||^2} }{ \sum_{j=1}^{c} e^{-||F(x) - F(z_j)||^2}}}
  $$
  
## 4. どうやって有効だと検証した？

MNISTおよびCIFAR10に対して先行研究のモデル(EmbedCNN, SWWAE, Ladder network, Conv-CatGAN / Spike-and-Slab Sparse Coding, View-Invariant k-means, Exampler-CNN, Ladder network, Conv-CatGan, Improved GAN)と提案手法の比較を行っている。

MNISTに対しては各クラス100枚ずつにのみ教師ラベルを付与し、CIFAR10に対しては各クラス400枚ずつにのみ教師ラベルを付与し実験を行っている。

学習時にdata agumentationは行わず、テスト時には出力したembeddingに対してk-NNを用いてk={1, 3, 5}の場合の予測結果をaveragingしている。

## 5. 議論はあるか？

MNISTデータセットに対して、実験で使用したモデルに2次元のembeddingを出力する全結合層を追加し、可視化を行った結果である。色付きの点は教師ラベルありのサンプルであり、グレーの点は教師ラベルなしのサンプルである。
ラベルありデータは1つのクラスタを形成しており、ラベルなしデータは大部分において各クラスタに属するような形で分布していることがわかる。

![Figure 1]({{ site.baseurl }}/assets/img/cv/Semi-supervised-deep-learning-by-metric-embedding/figure1.png)

## 6. 次に読むべき論文はあるか？

- EmbedCNNについて
  - [Weston, Jason, et al. "Deep learning via semi-supervised embedding." Neural Networks: Tricks of the Trade. Springer, Berlin, Heidelberg, 2012. 639-655.](https://link.springer.com/chapter/10.1007/978-3-642-35289-8_34)
- SWWAEについて
  - [Zhao, J., et al. "Stacked What-Where Auto-encoders. arXiv 2015." arXiv preprint arXiv:1506.02351.](https://arxiv.org/abs/1506.02351)
- Ladder networkについて
  - [Rasmus, Antti, et al. "Semi-supervised learning with ladder networks." Advances in Neural Information Processing Systems. 2015.](http://papers.nips.cc/paper/5947-semi-supervised-learning-with-ladder-networks)
- Conv-CatGANについて
  - [Springenberg, Jost Tobias. "Unsupervised and semi-supervised learning with categorical generative adversarial networks." arXiv preprint arXiv:1511.06390 (2015).](https://arxiv.org/abs/1511.06390)
- Spike-and-Slab Sparse Codingについて
  - [Goodfellow, Ian, Aaron Courville, and Yoshua Bengio. "Large-scale feature learning with spike-and-slab sparse coding." arXiv preprint arXiv:1206.6407 (2012).](https://arxiv.org/abs/1206.6407)
- View-Invatiant k-meansについて
  - [Hui, Ka Yu. "Direct modeling of complex invariances for visual object features." International Conference on Machine Learning. 2013.](http://www.jmlr.org/proceedings/papers/v28/yuhui13.pdf)
- Exampler-CNNについて
  - [Dosovitskiy, Alexey, et al. "Discriminative unsupervised feature learning with exemplar convolutional neural networks." IEEE transactions on pattern analysis and machine intelligence 38.9 (2016): 1734-1747.](https://ieeexplore.ieee.org/abstract/document/7312476/)
- ImprovedGanについて
  - [Salimans, Tim, et al. "Improved techniques for training gans." Advances in Neural Information Processing Systems. 2016.](https://arxiv.org/abs/1606.03498)
  
### 論文情報・リンク

- [Hoffer, Elad, and Nir Ailon. "Semi-supervised deep learning by metric embedding." arXiv preprint arXiv:1611.01449 (2016).](https://arxiv.org/abs/1611.01449)
