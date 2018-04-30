---
layout: post
title:  "Realistic Evaluation of Semi-Supervised Learning Algorithms"
date:   2018-04-28
categories: CV
---

## 1. どんなもの？

現在SoTAである半教師あり学習のアルゴリズムについて、平等なテスト環境で性能を比較した。

## 2. 先行研究と比べてどこがすごいの？

Deep neural networkを学習させるためには大量の教師データが必要になるが、実際はデータが取りづらかったり、コストがかかる。
そこで教師ラベルのないデータセットも有効に活用する、半教師あり学習(SSL)が提案されている。

![Figure 1]({{ site.baseurl }}/assets/img/cv/Realistic-Evaluation-of-Semi-Supervised-Learning-Algorithms/figure1.png)

先行研究で成果を上げているモデルは実際の使用環境を想定したモデルになっているかが疑問点としてあげられている。
本研究では現在デファクトスタンダートである半教師あり学習アルゴリズムに対して、それぞれ現実世界を想定した平等なテスト環境で性能を比較している。

## 3. 技術や手法の"キモ"はどこにある？

従来の半教師あり学習の評価方法を見直し、現実世界での適用を想定した以下の評価方法を用いて先行研究のモデルを評価した。

- Shared Implementation
  - パラメータの初期化方法やデータの前処理、augmentation、正則化等を標準化する
- High-Quality Supervised Baseline
  - SSLのゴールは $$\mathcal{D}$$ と $$\mathcal{D}_{UL}$$ を用いて学習させたモデルが、 $$\mathcal{D}$$ のみを用いて学習したモデルより良い精度を出すことである
  - そこで比較対象であるベースラインのモデルは $$\mathcal{D}$$ のみを用いて学習させるべき
  - ベースラインのモデルのパラメータ探索もSSLモデルと同様の回数探索するように設定
- Comparison to Transfer Learning
  - 学習済みモデルをfine-tuningした結果はあまり報告されないので、本研究ではベースラインとして精度を報告する
- Consider Class Distribution Mismatch
  - ラベル付きデータとラベルなしデータの分布の違いによる影響について報告する
- Varying the Amount of Labeled and Unlabeled Data
  - ラベルなしデータは巨大である(インターネット上から取得)場合か、医療画像のようにデータの規模が小さい場合が考えられる
- Realistically Small Validation Set
  - 先行研究ではtrainingセットの中から一部ラベルを落としたデータを用いて学習させ、validationセットでモデルのチューニングをしていた。このときラベル有りデータの数はvalidationセットのほうが遥かに多い
  - 現実世界ではラベルを多く含むデータセットで学習を行うため、先行研究の評価方法では実践的な評価ができていないため、本研究ではtrainingセットより小さいvalidationセットを用いてパラメータをチューニングする

## 4. どうやって有効だと検証した？

### 使用したSSLアルゴリズムについて

| Method                       | Type                       | Author |
|------------------------------|----------------------------|--------|
| Stochastic Perturbations     | Consistency Regularization | [Sajjadi et al., 2016](http://papers.nips.cc/paper/6332-regularization-with-stochastic-transformations-and-perturbations-for-deep-semi-supervised-learning) |
| Ⅱ-Model                      | Consistency Regularization | [Laine & Aila, 2017](https://arxiv.org/abs/1610.02242) |
| Temporal Embsembling         | Consistency Regularization | [Laine & Aila, 2017](https://arxiv.org/abs/1610.02242) |
| Mean Teacher                 | Consistency Regularization | [Tarvainen & Valpola, 2017](http://papers.nips.cc/paper/6719-mean-teachers-are-better-role-models-weight-averaged-consistency-targets-improve-semi-supervised-deep-learning-results) |
| Virtual Adversarial Training | Consistency Regularization | [Miyato et al., 2017](https://arxiv.org/abs/1704.03976) |
| Entropy-Based                | Entropy-Based              | [Grandvalet & Bengio, 2005](http://papers.nips.cc/paper/2740-semi-supervised-learning-by-entropy-minimization.pdf) |
| Pseudo-Labeling              | Pseudo-Labeling            | [Lee, 2013](https://www.kaggle.com/blobs/download/forum-message-attachment-files/746/pseudo_label_final.pdf) | 

### 評価方法について

- Reproduction
  - ベースモデルにWide ResNet (WRN-28-2) を使用
  - Google Cloud Machine Learning's hyperparameter tuning serviceを用いてGaussian Process-based black box optimizationを行った
  - 評価用データセットとしてSVHNとCIFAR-10を使用
- Fully-Supervised Baselines
- Transfer Learning
- Class Distribution Mismatch
- Varying Data Amounts
- Small Validation Sets

## 5. 議論はあるか？

- SSLの各アルゴリズムに対して分布が違うラベルなしデータを学習に使うと学習が上手く進まなかった
- ラベルありデータと同様の分布からサンプリングされるラベルなしデータをしようすべきである

## 6. 次に読むべき論文はあるか？

- Stochastic Perturbationsについて
  - [Sajjadi, Mehdi, Mehran Javanmardi, and Tolga Tasdizen. "Regularization with stochastic transformations and perturbations for deep semi-supervised learning." Advances in Neural Information Processing Systems. 2016.](http://papers.nips.cc/paper/6332-regularization-with-stochastic-transformations-and-perturbations-for-deep-semi-supervised-learning)
- Ⅱ-Model / Temporal Ensemblingについて
  - [Laine, Samuli, and Timo Aila. "Temporal ensembling for semi-supervised learning." arXiv preprint arXiv:1610.02242 (2016).](https://arxiv.org/abs/1610.02242)
- Mean Teacherについて
  - [Tarvainen, Antti, and Harri Valpola. "Mean teachers are better role models: Weight-averaged consistency targets improve semi-supervised deep learning results." Advances in neural information processing systems. 2017.](http://papers.nips.cc/paper/6719-mean-teachers-are-better-role-models-weight-averaged-consistency-targets-improve-semi-supervised-deep-learning-results)
- Virtual Adversarial Trainingについて
  - [Miyato, Takeru, et al. "Virtual adversarial training: a regularization method for supervised and semi-supervised learning." arXiv preprint arXiv:1704.03976 (2017).](https://arxiv.org/abs/1704.03976)
- Entropy-basedな手法について
  - [Grandvalet, Yves, and Yoshua Bengio. "Semi-supervised learning by entropy minimization." Advances in neural information processing systems. 2005.](http://papers.nips.cc/paper/2740-semi-supervised-learning-by-entropy-minimization.pdf)
- Pseudo-Labelingについて
  - [Lee, Dong-Hyun. "Pseudo-label: The simple and efficient semi-supervised learning method for deep neural networks." Workshop on Challenges in Representation Learning, ICML. Vol. 3. 2013.](https://www.kaggle.com/blobs/download/forum-message-attachment-files/746/pseudo_label_final.pdf)

### 論文情報・リンク

- [Oliver, Avital, et al. "Realistic Evaluation of Semi-Supervised Learning Algorithms." arXiv preprint arXiv:1804.09170 (2018).](https://arxiv.org/abs/1804.09170)
