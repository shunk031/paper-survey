---
layout: post
title:  "Putting Fairness Principles into Practice Challenges Metrics and Improvements"
date:   2019-08-14
categories: Others
---

## 1. どんなもの？

機械学習における公正性に向けて、プロダクション環境へ適用可能でグループ間のバイアスに頑健となる absolute correlation regularization を提案。

## 2. 先行研究と比べてどこがすごいの？


ユーザの特徴を用いた学習データには偏りが存在する場合があり、こうした偏りは公正な予測の妨げとなる。
特に機械学習システムをプロダクション環境で運用する際には、公正な予測を提供する必要がある。

![Figure 1]({{ site.baseurl }}/assets/img/others/Putting-Fairness-Principles-into-Practice-Challenges-Metrics-and-Improvements/figure1.png)

あるデータセットにおいて従来手法で予測した場合、センシティブな属性で分かれるあるグループとそれ以外のグループの間に予測のバイアスが観測される例がある (左図)。
本来なら右図のようにグループ間で予測の差は現れないはずである。
こうした予測のバイアスを解消するため、Adversarial training を用いたグループ間の偏りに頑健な学習が提案されているが、学習時に不安定であったり、そもそも学習が難しい場合が多い。

本研究ではあるグループにおける公正性、特にグループ間の `False Positive` の比較に焦点を当て、こうした false positive を抑制する新たな正則化手法である absolute correlation regularization を提案している。

## 3. 技術や手法の"キモ"はどこにある？

Deep Neural Network (DNN) に通常の損失関数に加えて `absolute correlation regularization` を導入。

### Absolute correlation regularization

$$
    \min_{f} \left[\sum_{(\mathbf{x}_i,y_i) \in \mathcal{X}}^{} \textrm{L}(y_i, f(\mathbf{x}_i))\right] + \lambda |Corr_{\mathcal{X}^{-}}|
$$

ここで $$Corr_{\mathcal{X}^{-}}$$ は予測値 $$\hat{y}$$ とセンシティブな属性 $$s$$ との相対的な相関を最小化する:

$$
    Corr_{\mathcal{X}^{-}} = \frac{(\sum_{\mathbf{X}_i \in \mathcal{X}^{-}}^{} f(\mathbf{x}_i) - \mu_{\hat{y}}) (\sum_{s_i \in \mathcal{X}^{-}}^{} s_i - \mu_s)}{\sigma_{\hat{y}} \sigma_s}
$$

## 4. どうやって有効だと検証した？

線形モデル、DNN、DNN w/ adversarial training、DNN w/ absolute correlation regularization の 4 つのモデルを適用した結果を比較している。

| | |
|------|------|
| ![Figure 3-1]({{ site.baseurl }}/assets/img/others/Putting-Fairness-Principles-into-Practice-Challenges-Metrics-and-Improvements/figure3-1.png) | ![Figure 3-2]({{ site.baseurl }}/assets/img/others/Putting-Fairness-Principles-into-Practice-Challenges-Metrics-and-Improvements/figure3-2.png) |
| ![Figure 3-3]({{ site.baseurl }}/assets/img/others/Putting-Fairness-Principles-into-Practice-Challenges-Metrics-and-Improvements/figure3-3.png) | ![Figure 3-4]({{ site.baseurl }}/assets/img/others/Putting-Fairness-Principles-into-Practice-Challenges-Metrics-and-Improvements/figure3-4.png) |

比較対象のモデルに対して、absolute correlation regularization を導入した DNN の予測はグループ間で偏りが小さいことを確認した。

## 5. 議論はあるか？

モデルの予測とセンシティブな属性との相関を無相関にすることで、結果的に予測結果のバイアスが取り除かれるように学習が進むと考えられる。

## 6. 次に読むべき論文はあるか？

- Adversarial training を用いたグループ間の偏りに頑健な学習
  - [Beutel, Alex, et al. "Data decisions and theoretical implications when adversarially learning fair representations." arXiv preprint arXiv:1707.00075 (2017).](https://arxiv.org/abs/1707.00075)

### 論文情報・リンク

- [Beutel, Alex, et al. "Putting fairness principles into practice: Challenges, metrics, and improvements." arXiv preprint arXiv:1901.04562 (2019).](https://arxiv.org/abs/1901.04562)
