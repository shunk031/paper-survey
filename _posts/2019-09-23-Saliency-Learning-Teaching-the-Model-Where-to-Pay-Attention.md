---
layout: post
title:  "Saliency Learning: Teaching the Model Where to Pay Attention"
date:   2019-09-23
categories: NLP
---

## 1. どんなもの？

モデルの訓練時に予測根拠となる部分を明示的に学習させることで、予測時に正確な予測根拠を提示する学習法を提案。

## 2. 先行研究と比べてどこがすごいの？

バイアスのあるデータでモデルを学習させてしまうと意味をなさなかったり、害のある予測をしてしまう場合がある。
特に深層学習ベースのモデルはブラックボックスとして扱われることが多く、こうしたバイアス由来の誤った予測を検知しづらい。

先行研究ではブラックボックスになりがちな深層学習ベースの手法に対し、gradient/saliency を元にしたモデルの正則化手法が提案されている。

本研究は先行研究を受けて、モデルがどの部分に注視すべきかを明示的に与える saliency learning を提案し、
複数データセットに対して説明性に寄与する情報に摂動を与えた時の感度について検証を行っている。

## 3. 技術や手法の"キモ"はどこにある？

### Saliency-based Explanation Learning

通常の損失関数 $$\mathcal{L}$$ に加えて、単語列 $$X$$ どの単語が説明性を持つかを表す ground-truth explanation $$Z$$ とした、hinge loss ベースの以下の損失関数を最小化する。

$$
    \mathcal{C}(\theta, X, y, Z) = \mathcal{L}(\theta, X, y) + \lambda \sum_{i=1}^{n} \max{\left(0, -Z_{i} \sum_{j=1}^{d} \frac{\partial f_{\theta}(X, y)}{\partial X_{i,j}} \right)}
$$

## 4. どうやって有効だと検証した？

文中の各単語に対して説明性のアノテーションを付与するのは難しい。そこで `event extraction` タスクと `cloze-style question answering` タスクを元に説明性のアノテーションをシミュレーションした。
Event extraction タスクでは `ACE2005` と `Rich ERE 2015` を使用した。また cloze-style question answering タスクでは `Children Book Test Named Entity` (CBT-NE) と `Common Noun` (CBT-CN) を使用した。

## 5. 議論はあるか？

提案する saliency learning を導入することにより予測精度の向上が見られ、説明性のアノテーションを元に適切な学習がされていることを確認した。
また説明性のアノテーション $$Z$$ と positive な gradient の位置を元に計算される saliency accuracy を定義し、ベースラインとの比較を行った。

Saliency learning で獲得された重要語を意図的に落とした場合にどの程度の予測精度の低下が見られるかを確認した。
ベースラインと比べると精度の落差は大きく、学習から得られた説明性のある単語が予測に重要であることを示した。

![Table 3]({{ site.baseurl }}/assets/img/nlp/Saliency-Learning-Teaching-the-Model-Where-to-Pay-Attention/table3.png)

## 6. 次に読むべき論文はあるか？

- 勾配ベースの説明性の学習手法
  - [Ross, Andrew Slavin, Michael C. Hughes, and Finale Doshi-Velez. "Right for the right reasons: training differentiable models by constraining their explanations." Proceedings of the 26th International Joint Conference on Artificial Intelligence. AAAI Press, 2017.](https://arxiv.org/abs/1703.03717)

### 論文情報・リンク

- [Ghaeini, Reza, et al. "Saliency Learning: Teaching the Model Where to Pay Attention." Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers). 2019.](https://arxiv.org/abs/1902.08649)
