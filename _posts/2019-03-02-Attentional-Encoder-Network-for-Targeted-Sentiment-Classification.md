---
layout: post
title:  "Attentional Encoder Network for Targeted Sentiment Classification"
date:   2019-03-01
categories: NLP
---

## 1. どんなもの？

ターゲットに対する感情分析で使われてきた LSTM に変わる self-attention ベースの attentional encoder network (AEN) を提案した。
また付与されている感情ラベルに対する非信頼性に対して label smoothing を行う損失関数を導入した。

## 2. 先行研究と比べてどこがすごいの？

自然言語処理 (NLP) のタスクに対して RNN ベースの LSTM モデルが広く用いられてきたが、
コンテキスト内のターゲットに対する感情を分析する fine-grained なターゲットに対する感情分類 (targeted sentiment classification) に対しては依然として改善の余地が残されている。
先行研究の問題点としてはテキストのモデリングにおいて RNN ベースのモデルに比重がおかれており、また学習速度も遅いことが挙げられる。
感情分類タスクにおいて attention は重要な役割を果たすが、モデルの後段部分でのみしか使用されてこなかった。
また感情分類タスクにおいて付与されている感情ラベルは信頼性が低い場合がある。特に *neutral* な感情ラベルはとてもファジーでモデルの学習を難しくしている。

本研究では fine-grained なターゲットに対する感情分析にタスクに対してターゲットとコンテキストの交互作用を self-attention で捉え、ファジーな感情ラベルに対して効果的な label smoothing を行う損失関数を導入した。

## 3. 技術や手法の"キモ"はどこにある？

Attentional Encoder Network `(AEN)` を提案

![Figure 1]({{ site.baseurl }}/assets/img/nlp/Attentional-Encoder-Network-for-Targeted-Sentiment-Classification/figure1.png)

### Attentional Encoder Layer

- LSTM に代わる並列計算可能なレイヤー
  - コンテキストとターゲットの embedding に対して隠れ状態の表現を計算
  - `Multi-Head Attention` と `Point-wise Convolutional Transformation` から構成される
  
#### Multi-Head Attention (MHA)
入力されるコンテキストとターゲットに対して異なる MHA を適用する。
MHA は RNN と比較して短いネットワークで離れた単語のコンテキストを捉えることが可能。

- Intra-MHA
  - コンテキスト embedding $$\textbf{e}^c$$ を MHA に入力

$$\textbf{e}^{\textrm{intra}} = MHA(\textbf{e}^c, \textbf{e}^c)$$

- Inter-MHA
  - コンテキスト embedding $$\textbf{e}^c$$ と ターゲット embedding $$\textbf{e}^t$$ を MHA に入力
  
$$\textbf{e}^{\textrm{inter}} = MHA(\textbf{e}^c, \textbf{e}^t)$$

#### Point-wise Convolution Transformation (PCT)

- 2 つの 1D convolution と活性化関数から構成される
- MHA で得られた表現に対して位置ごとにコンテキストを学習することが可能
- Intra-MHA と inter-MHA それぞれに対して PCT を適用し、コンテキスト表現を得る

### Label Smoothing Regularization (LSR)

感情分類タスクに対して *neutral* というラベルはとてもファジーであるため、LSR を導入し、過学習を抑制している。
LSR は感情ラベルの分布とモデル予測の分布との KL 距離に等しいため、LSR 項は以下のように表せる。

$$
\mathcal{L}_{lsr} = - D_{\textrm{KL}} (u(k)||p_{\theta})
$$

## 4. どうやって有効だと検証した？

SemEval 2014 Task4 (レストランのレビューデータセット、ラップトップのレビューデータセット)、ACL 14 Twitter データセットの 3 つで比較を行っている。
これらのデータセットには 3 つの感情ラベル (positive/neutral/negative) が付与されている。

ベースラインのモデルとして SVM、Rec-NN、TD-LSTM、ATAE-LSTM、IAN、MemNet、RAM を用いて提案手法の AEN との比較を行っている。

## 5. 議論はあるか？
### Label smoothing regularization の効果
Label smoothing regularization を導入することで、導入していないモデルよりも良い精度であった。
信頼性の低いラベルに対して効果的に過学習を抑制できたと考えられる。

### Recurrence vs.Attention

<img src="{{ site.baseurl }}/assets/img/nlp/Attentional-Encoder-Network-for-Targeted-Sentiment-Classification/table3.png" width="400px" alt="Table 3">

AEN に対して Attention encoder layer を LSTM に代えたネットワークと比較すると同等程度の精度を記録している。
よって LSTM に比べて半数程度の少ないパラメータで同程度の予測精度を達成できるメリットがある。

## 6. 次に読むべき論文はあるか？

- Multi-Head Atteition について
  - [Vaswani, Ashish, et al. "Attention is all you need." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/7181-attention-is-all-you-need)
- Label Smoothing Regularization について
  - [Szegedy, Christian, et al. "Rethinking the inception architecture for computer vision." Proceedings of the IEEE conference on computer vision and pattern recognition. 2016.](https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/Szegedy_Rethinking_the_Inception_CVPR_2016_paper.html)

### 論文情報・リンク

- [Song, Youwei, et al. "Attentional Encoder Network for Targeted Sentiment Classification." arXiv preprint arXiv:1902.09314 (2019).](https://arxiv.org/abs/1902.09314)
