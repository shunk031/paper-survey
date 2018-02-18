---
layout: post
title:  "SpectralNet: Spectral Clustering Using Deep Neural Networks"
date:   2018-02-18
categories: CV
---

## 1. どんなもの？

Spectral clusteringのためのDeep learning手法を用いて大規模データセットの適用と埋め込みの一般化を可能にしたSpectralNetを提案した。

## 2. 先行研究と比べてどこがすごいの？

Spectral clusteringはとても有力なクラスタリングアルゴリズムとして知られているが、
大規模なデータセットに対して適用する場合計算量の観点で適用が難しく、
[out-of-sample-extension (OOSE)](https://papers.nips.cc/paper/2461-out-of-sample-extensions-for-lle-isomap-mds-eigenmaps-and-spectral-clustering.pdf) といった問題がある。

![Figure 1]({{ site.baseurl }}/assets/img/cv/SpectralNet-Spectral-Clustering-Using-Deep-Neural-Networks/figure1.png)

先行研究ではdeep learningを用いたクラスタリング手法が多数提案されている。

- k-meansベースのdeep learningアプローチ
  - DCN
  - DEC
  - DEPICT
- variational autoencoderベースのアプローチ
  - VaDE
  - GMVAE
- data augmentationベースのアプローチ
  - IMSAT

これらはk-meansや混合ガウス分布を事前分布としているため、僅かなバイアスがかかってしまっており、*Figure 1*の下段のようにクラスタリングされてしまっている。
対して本研究のSpectralNetのクラスタリング結果 (*Figure 1*上段) から、これらのバイアスに対して頑健であることが分かる。

- spectral clusteringベースのアプローチ
  - autoencoder + graph Laplacian matrix + k-means clustering
  - kernel spectral method

これらは入力データポイントを直接spectral embeddingを学習するものであり、また入力としてgraph Laplacian全体を使うものである。
よってOOSEを解決することができない。

本研究のSpectralNetではstochastic optimizationを用いた大規模データセットの学習を可能とし、
未知のデータポイントに対するspectral embeddingを可能としている。
  
## 3. 技術や手法の"キモ"はどこにある？

- 目的関数最適化によるマップ関数 $$F_{\theta}$$ の教師なし学習
  - 直交性を考慮したスペクトルクラスタリング
  - 大規模なデータセットのミニバッチに分けて学習を行うstochastic training
  - 未知のデータに対しても適用可能
- Siamese Networkを用いた距離関数の教師なし学習
  - Siamese Netを用いることでガウシアンカーネルやユークリッド距離よりも複雑な関係性を捉えることが可能
- 埋め込み空間におけるk-meansクラスタリングによるクラスタ割り当ての学習
  - 学習済みautoencoderを用いて入力をcode spaceに射影したものを使うと性能が向上

## 4. どうやって有効だと検証した？

MNISTデータセット(k=10)とReutersデータセット(k=4)に対して、*unsupervised clustering accuracy* (ACC)と*normalized mutual information* (NMI)を評価指標として評価を行っている。
提案手法であるSpectralNetと先行研究であるDEC、DCN、VaDE、JULE、DEPICT、IMSATを比較している。SpectralNetでは距離関数としてユークリッド距離とSiamese距離それぞれについて評価を行っている。

提案手法であるSpectralNetはDEC、DCN、VaDE、DEPICT、JULEより優れたパフォーマンスを示し、IMSATと同程度の性能を発揮したことが示されている。
また未知のデータに対しても高い精度を示している。

## 5. 議論はあるか？

- SpectralNetに半教師あり学習を導入
  - *Figure 3* (左側) のようにクラスタリングが失敗していた場合においても、2%程度教師データを混ぜることで正しくクラスタリングされるようになった (右側) 
  - クロスエントロピーをSpectralNetのlossに追加することによって実現できる
  
![Figure 3]({{ site.baseurl }}/assets/img/cv/SpectralNet-Spectral-Clustering-Using-Deep-Neural-Networks/figure3.png)
  
## 6. 次に読むべき論文はあるか？

- DCNについて
  - [Yang, Bo, et al. "Towards k-means-friendly spaces: Simultaneous deep learning and clustering." arXiv preprint arXiv:1610.04794 (2016).](https://arxiv.org/abs/1610.04794)
- DECについて
  - [Xie, Junyuan, Ross Girshick, and Ali Farhadi. "Unsupervised deep embedding for clustering analysis." International conference on machine learning. 2016.](http://www.jmlr.org/proceedings/papers/v48/xieb16.pdf)
- DEPICTについて
  - [Dizaji, Kamran Ghasedi, et al. "Deep clustering via joint convolutional autoencoder embedding and relative entropy minimization." 2017 IEEE International Conference on Computer Vision (ICCV). IEEE, 2017.](http://openaccess.thecvf.com/content_ICCV_2017/papers/Dizaji_Deep_Clustering_via_ICCV_2017_paper.pdf)
- VaDEについて
  - [Zheng, Yin, et al. "Variational deep embedding: A generative approach to clustering. arXiv preprint." arXiv preprint arXiv:1611.05148 1.2 (2016): 5.](https://arxiv.org/abs/1611.05148)
- GMVAEについて
  - [Dilokthanakul, Nat, et al. "Deep unsupervised clustering with gaussian mixture variational autoencoders." arXiv preprint arXiv:1611.02648 (2016).](https://arxiv.org/abs/1611.02648)
- IMSATについて
  - [Hu, Weihua, et al. "Learning Discrete Representations via Information Maximizing Self Augmented Training." arXiv preprint arXiv:1702.08720 (2017).](https://arxiv.org/abs/1702.08720)

### 論文情報・リンク

- [Shaham, Uri, et al. "SpectralNet: Spectral Clustering using Deep Neural Networks." arXiv preprint arXiv:1801.01587 (2018).](https://arxiv.org/abs/1801.01587)
