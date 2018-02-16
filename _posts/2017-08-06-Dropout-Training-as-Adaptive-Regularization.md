---
layout: post
title: "Dropout Training as Adaptive Regularization"
date:   2017-08-06
categories: NLP
---

## 1. どんなもの？

- Dropoutは学習データに対して人工的にノイズを加えることで過学習を抑える働きがある．
- 一般化線形モデル(GLM)の場合，Dropoutは適応的な正則化の働きをする．
- この観点を利用して，Dropout機構はフィッシャー情報行列の逆行列の推定値によって特徴量をスケールした後に適応したL2正則化機構と等価であることを示している．
- 適応的なDropoutとAdaGradとの関係性について言及している．
- Dropoutを用いて適応的な正則化を行う，半教師ありのフレームワークを提案している．
- IMDBレビューデータセットを用いた文書分類タスクに適用している．

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [Wager, Stefan, Sida Wang, and Percy S. Liang. "Dropout training as adaptive regularization." Advances in neural information processing systems. 2013.](http://papers.nips.cc/paper/4882-dropout-training-as-adaptive-regularization)
