---
layout: post
title:  "Field-aware Probabilistic Embedding Neural Network for CTR Prediction"
date:   2018-12-06
categories: Others
image: /assets/img/others/Field-aware-Probabilistic-Embedding-Neural-Network-for-CTR-Prediction/figure1.png
---

## 1. どんなもの？

確率的埋め込みを導入し特徴表現の確率的振る舞いを学習する CTR 予測のためのモデル Field-aware Probabilistic Embedding Neural Network を提案

## 2. 先行研究と比べてどこがすごいの？

Click Though Rate (CTR) 予測に通常用いられるロジスティック回帰 (LR) や Factorization Machine (FM) は一般的な線形の特徴を捉えることが可能でシンプルな実装であることが知られているが、高次元特徴の表現能力に乏しい。

本件研究では特徴の embedding に対して点推定ではなく分布を推定する Probabilistic Embedding という新たな embedding 手法を提案し、事前知識を導入することで先行研究よりもロバストなモデルを構築した。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1]({{ site.baseurl }}/assets/img/others/Field-aware-Probabilistic-Embedding-Neural-Network-for-CTR-Prediction/figure1.png)

- Field-aware Probabilistic Embedding Neural Networks (FPENN)
  - Field-aware Probabilistic Embedding (FPE) による確率的埋め込みの学習
    - 埋め込み行列 $$V$$ の平均・分散からなる確率分布を用いて確率的な振る舞いを導入
  - 多様な特徴を学習するコンポーネント
    - Linear term (LT)
      - 低次元の相互作用を捉える
    - Quadratic term (QDR)
      - 2 次の相互作用を捉える
    - Deep NN term (DNN)
      - 高次元の相互作用を捉える
  - 埋め込みを確率分布としたときの学習手法の適用
    - Reparameterization trick
      - 埋め込み行列 $$V$$ の平均・分散を持つ正規分布から埋め込み表現をサンプリングする場合誤差逆伝播が不可能
      - Reparameterization trick でこの問題を解決

## 4. どうやって有効だと検証した？

CTR 予測のデータセットとして Avazu dataset と Criteo dataset を用いて提案する FPENN とベースラインの LR や FM、CNN ベースの CCPM や DeepFM と比較を行っている。

## 5. 議論はあるか？

- 提案手法が 50 〜 100 ミリ秒以内に 200 〜 300 アプリの CTR 値を予測との記述あり

## 6. 次に読むべき論文はあるか？

- CCPM について
  - [Liu, Qiang, et al. "A convolutional click prediction model." Proceedings of the 24th ACM International on Conference on Information and Knowledge Management. ACM, 2015.](https://dl.acm.org/citation.cfm?id=2806603)
- DeepFM について
  - [Guo, Huifeng, et al. "Deepfm: a factorization-machine based neural network for ctr prediction." arXiv preprint arXiv:1703.04247 (2017).](https://arxiv.org/abs/1703.04247)

### 論文情報・リンク

- [Weiwen Liu, Ruiming Tang, Jiajin Li, Jinkai Yu, Huifeng Guo, Xiuqiang He, and Shengyu Zhang. 2018. Field-aware probabilistic embedding neural network for CTR prediction. In Proceedings of the 12th ACM Conference on Recommender Systems (RecSys '18). ACM, New York, NY, USA, 412-416.](https://dl.acm.org/citation.cfm?id=3240396)
- [[論文紹介] Field-aware Probabilistic Embedding Neural Network for CTR Prediction [RecSys 2018] / Paper summary of Field-aware Probabilistic Embedding Neural Network for CTR Prediction](https://speakerdeck.com/shunk031/paper-summary-of-field-aware-probabilistic-embedding-neural-network-for-ctr-prediction)
