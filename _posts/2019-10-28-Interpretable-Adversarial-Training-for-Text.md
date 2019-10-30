---
layout: post
title:  "Interpretable Adversarial Training for Text"
date:   2019-10-28
categories: NLP
---

## 1. どんなもの？

自然言語処理に対する解釈可能な敵対的摂動を生成する sparse projected gradient descent (SPGD) を提案

## 2. 先行研究と比べてどこがすごいの？

### 自然言語処理における敵対的摂動の例

![Figure 1]({{ site.baseurl }}/assets/img/nlp/Interpretable-Adversarial-Training-for-Text/figure1.png)

- 2 つのある単語埋め込み表現 (original embedding と neighbor embedding) 間における敵対的摂動の例
  - Original embedding から 3 ステップ (緑の矢印) 動いて、黄色で示された生の摂動 (raw perturbation)となる
 	- スパース係数 $$\sigma = 0.5$$ の場合、最大ノルムの摂動の 50%が保持される
  - Word A の摂動はコサイン類似度が最も高い最近傍に射影され、赤色で示された摂動 (projected perturbation) となる

先行研究に以下 3 つの問題点が存在する:
- Interpretability
  - なぜそのような敵対的摂動が加えられたか、また加えたあとの embedding を解釈するのは難しい
- Likelihood
  - 敵対的摂動が加えられた単語列は、ground truth と比較してあまり自然なものではない
- Label-Invariance
  - 敵対的摂動が加えられることにより単語列が表す意味が変わってしまい、教師ラベルが反転する余地がある

本研究では先行研究の問題点を以下の視点から解決する `sparse projected gradient descent (SPGD)` を提案:
- Sparsification
  - センテンスレベルに対して L2 ノルムが大きい摂動を選択して加える。ノルムが小さいものは 0 にする
    - スパース化した敵対的摂動を加えることで ground truth と比べても自然な文となる
- Directional Projection
  - 敵対的摂動を加えるときに近傍の単語埋め込み表現と同じ direction に摂動が追加されるように写像する

## 3. 技術や手法の"キモ"はどこにある？

### 先行研究 Vanilla Adversarial Training for Text (AdvT-Text) [[Miyato+ ICLR17]](https://arxiv.org/abs/1605.07725)
- 通常の loss $$\mathcal{L}(\theta)$$ と adversarial loss $$\mathcal{L}_{\textrm{Adv}}$$ を最小化する
  - $$\mathbf{\theta}^{*} = \textrm{arg min}_{\mathbf{\theta}} (\mathcal{L}(\theta) + \lambda \mathcal{L}_{\textrm{Adv}}(\mathbf{\theta}))$$
- Adversarial loss $$\mathcal{L}_{\textrm{Adv}}$$
  - $$\mathcal{L}_{\textrm{Adv}} = \frac{1}{N} \sum^{j=1}_{N} - \log{p(y^{(j)} | \textbf{x}^{(j)} + \textbf{d}^{(j)}}; \mathbf{\theta})$$
- Adversarial noise $$\textbf{d}^{(j)}$$
  - $$\textbf{d}^{(j)} = - \epsilon \frac{\textbf{g}}{||\textbf{g}||}, ~\textrm{where}~ \textbf{g} = \nabla_{\textbf{x}^{(j)}} \log{p(y^{(j)} | \textbf{x}^{(i)}; \mathbf{\hat{\theta}})}$$
    - AdvT-Text で計算される敵対的摂動から得られる単語表現は、元ある単語表現と一致しないため解釈が難しい。

### 先行研究 Interpretable Adversarial Training (iAdvT-Text)] [[Sato+ IJCAI18]](https://arxiv.org/abs/1805.02917)
- Interpretable adversarial noise
  - word embedding $$v_i$$ に対する $$K$$ 個の最近傍の unit-direction vectors $$U_{i}^{K}$$ を用いて $$\textbf{d}$$ を計算
	- $$\textbf{d} = \sum_{k=1}^{K} \alpha_{k} \textbf{u}_{k}^{K}$$
  - direction を持った敵対的摂動 $$\alpha^{*}$$ を以下で計算
    - $$\mathbf{\alpha}^{*} = - \epsilon \frac{\textbf{g}}{||\textbf{g}||}, ~\textrm{where}~ \textbf{g} = \nabla_{\mathbf{\alpha}} \log{p_c(y^{(j)}|\textbf{w}^{(i)}+\textbf{d}; \mathbf{\hat{\theta}})}$$

## 提案手法 Sparsified Projected Gradient Descent
- AdvT-Text において $$M$$ 回生成した摂動 $$r_i$$ に対して
  - unit-direction vector とのコサイン類似度が最大となるような摂動 $$\hat{r}_i$$ を得る
    - $$\mathbf{\hat{r}}_{i} = (\textbf{r}_{i} \cdot \textbf{u}_{i}^{*})\textbf{u}_{i}^{*}, \textrm{where} ~\textbf{u}_{i}^{*} = \textrm{arg max}_{\textbf{u}_{i}^{(j)} \in U_{i}^{K}} (\textbf{r}_{i} \cdot \textbf{u}_{i}^{(j)})$$
  - スパース係数 $$\sigma$$ を用いて、L2 ノルムが $$\lfloor (1 - \sigma)N \rfloor$$ を満たさない摂動は 0 にする

## 4. どうやって有効だと検証した？

- 映画の大規模レビューデータセット IMDB を用いて評価
  - 摂動の解釈性を保持しつつ、先行研究と同等の精度を達成している

![Table 3]({{ site.baseurl }}/assets/img/nlp/Interpretable-Adversarial-Training-for-Text/table3.png)
  
## 5. 議論はあるか？

- AdvT-Text, iAdvT-Text および提案手法の SPGD による生成される adversarial noise の比較
  - もともとの文の意味が壊れること無く adversarial example を生成できている

![Figure 2]({{ site.baseurl }}/assets/img/nlp/Interpretable-Adversarial-Training-for-Text/figure2.png)

## 6. 次に読むべき論文はあるか？

- AdvT-Text
  - [Miyato, Takeru, Andrew M. Dai, and Ian Goodfellow. "Adversarial training methods for semi-supervised text classification." arXiv preprint arXiv:1605.07725 (2016).](https://arxiv.org/abs/1605.07725)
- iAdvT-Text
  - [Sato, Motoki, et al. "Interpretable adversarial perturbation in input embedding space for text." arXiv preprint arXiv:1805.02917 (2018).](https://arxiv.org/abs/1805.02917)

### 論文情報・リンク

- [Barham, Samuel, and Soheil Feizi. "Interpretable Adversarial Training for Text." arXiv preprint arXiv:1905.12864 (2019).](https://arxiv.org/abs/1905.12864)
