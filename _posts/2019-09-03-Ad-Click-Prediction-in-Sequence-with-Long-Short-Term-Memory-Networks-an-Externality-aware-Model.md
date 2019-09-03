---
layout: post
title:  "Ad Click Prediction in Sequence with Long Short-Term Memory Networks: an Externality-aware Model"
date:   2019-09-03
categories: Others
---

## 1. どんなもの？
ユーザーの閲覧行動と現在の広告の品質の影響を考慮して、広告の CTR を時系列ベースで予測する新しいアプローチを提案

## 2. 先行研究と比べてどこがすごいの？
検索連動型広告は、最も効果的で収益性の高い広告アプローチの 1 つである。
本研究の目標は、検索連動型広告を主としたオンライン広告の品質が他の広告のクリック率にどのように影響するかを分析することである。
通常、広告は複数個同時に表示され、これら広告の表示順は広告の配信効果に影響があるとされている。

本研究ではこうした広告群に対して時系列でクリックされる確率 `pClick` スコアを予測するモデルを構築した。
また pClick スコアをもとにトップに表示される広告とそれ以外の広告との間にある `Externality` を用いて広告の品質を考慮するモデルを構築した。

## 3. 技術や手法の"キモ"はどこにある？

表示されている広告の順番を考慮するため、LSTM に表示された順 $$\textrm{ML}{1}, \cdots, \textrm{ML}_{4}$$ に広告の特徴量 $$X_{1}, \cdots, X_{4}$$ を入力する。

<img src="{{ site.baseurl }}/assets/img/others/Ad-Click-Prediction-in-Sequence-with-Long-Short-Term-Memory-Networks-an-Externality-aware-Model/figure2.png" width="400px" alt="Figure 2">

先行研究の DNN ベースのベースラインモデルに加えて `Externality` を考慮した特徴量を入力する。

<img src="{{ site.baseurl }}/assets/img/others/Ad-Click-Prediction-in-Sequence-with-Long-Short-Term-Memory-Networks-an-Externality-aware-Model/figure5.png" width="400px" alt="Figure 5">

## 広告の表示順 (externality) を考慮したモデリング
LSTM を使用する代わりに、externality を表す特徴量を導入する。
トップに表示される広告 $$\textrm{ML}_{1}$$ の pClick スコアをそれ以降に表示される広告の externality 特徴として利用する。

## 4. どうやって有効だと検証した？
Microsoft の Bing から 1 週間分のユーザー閲覧履歴データを取得し訓練用データセットとして利用した。また次週のデータを評価用データセットとして用いた。
評価指標は AUC と Relative Information Gain (RIG) を使用した。

## 5. 議論はあるか？

### 広告の表示順に対する CTR の上下の分析
トップに表示される広告 $$\textrm{ML}_{1}$$ とそれ以降に表示された広告に対する分析がされている。
- $$\textrm{ML}_{1}$$ の CTR が上昇すると、それ以降に表示された広告の CTR も上昇し、 $$\textrm{ML}_{1}$$ の CTR が下落すると、それを追うように以降の広告の CTR も下落する。
- $$\textrm{ML}_{1}$$ の予測 CTR が低いと、それ以降に表示された広告の予測 CTR も低くなってしまう。逆も同じ。
トップに表示される広告の品質が他の広告の CTR に影響を与えている。
$$\textrm{ML}_{1}$$の品質が低い場合、ユーザーは 2 番目以降の広告を見る可能性が高くなり、クリックされやすくなる。
逆に$$\textrm{ML}_{1}$$がユーザーを満足させてしまう場合には、2 番目以降の広告は無視されてしまう可能性が高く、クリックされにくくなる。

| ベースラインモデルの比較 | RNN モデルの比較 | DNN+externality モデルの比較 |
|------|------|------|
| ![Figure 1]({{ site.baseurl }}/assets/img/others/Ad-Click-Prediction-in-Sequence-with-Long-Short-Term-Memory-Networks-an-Externality-aware-Model/figure1.png) | ![Figure 4]({{ site.baseurl }}/assets/img/others/Ad-Click-Prediction-in-Sequence-with-Long-Short-Term-Memory-Networks-an-Externality-aware-Model/figure4.png) | ![Figure 6]({{ site.baseurl }}/assets/img/others/Ad-Click-Prediction-in-Sequence-with-Long-Short-Term-Memory-Networks-an-Externality-aware-Model/figure6.png) |

## 計算コストの削減
RNN をベースとした LSTM は大規模データになればなるほど計算コストが増えてしまう。
また LSTM を用いた予測 CTR を特徴量 (pClick) として用いるためにこうしたコストを削減しなければレスポンスに影響が出てしまう。
今回以下の用にトップに表示された広告の予測 CTR スコア (pClick) とポジションバイアスの差として定義する用いることで高速化を行なった。

$$
\begin{eqnarray}
    \textrm{pClick}_{ML_{x}} &=& \sigma(\textrm{externality} + \textrm{positionBias}_{ML_{x}} + \textrm{otherSum}) \\
    &=& \sigma(\textrm{externality} + \textrm{positionBias}_{ML_{x}} + \sigma^{-1}(\textrm{pClick}_{ML_{1}} - \textrm{positionBias}_{ML_{1}}))
\end{eqnarray}

$$

[$ \begin{eqnarray} \textrm{pClick}_{ML_{x}} &=& \sigma(\textrm{externality} + \textrm{positionBias}_{ML_{x}} + \textrm{otherSum}) \\ &=& \sigma(\textrm{externality} + \textrm{positionBias}_{ML_{x}} + \sigma^{-1}(\textrm{pClick}_{ML_{1}} - \textrm{positionBias}_{ML_{1}})) \end{eqnarray} ]

## 6. 次に読むべき論文はあるか？

- Externality を考慮した先行研究について
  - [Xu, Wanhong, Eren Manavoglu, and Erick Cantu-Paz. "Temporal click model for sponsored search." Proceedings of the 33rd international ACM SIGIR conference on Research and development in information retrieval. ACM, 2010.](https://dl.acm.org/citation.cfm?id=1835470)
  - [Zhang, Yuyu, et al. "Sequential click prediction for sponsored search with recurrent neural networks." Twenty-Eighth AAAI Conference on Artificial Intelligence. 2014.](https://arxiv.org/abs/1404.5772)
- ベースラインのモデルについて
  - [Ling, Xiaoliang, et al. "Model ensemble for click prediction in bing search ads." Proceedings of the 26th International Conference on World Wide Web Companion. International World Wide Web Conferences Steering Committee, 2017.](https://dl.acm.org/citation.cfm?id=3041021.3054192)
- ポジションを考慮したモデルについて
  - [Palangi, Hamid, et al. "Deep sentence embedding using long short-term memory networks: Analysis and application to information retrieval." IEEE/ACM Transactions on Audio, Speech and Language Processing (TASLP) 24.4 (2016): 694-707.](https://arxiv.org/abs/1502.06922)
  
### 論文情報・リンク

- [Deng, Weiwei, et al. "Ad Click Prediction in Sequence with Long Short-Term Memory Networks: an Externality-aware Model." The 41st International ACM SIGIR Conference on Research & Development in Information Retrieval. ACM, 2018.](https://dl.acm.org/citation.cfm?id=3210071)q
