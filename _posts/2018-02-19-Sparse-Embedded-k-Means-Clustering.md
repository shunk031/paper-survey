---
layout: post
title:  "Sparse Embedded k-Means Clustering"
date:   2018-02-19
categories: CV
---

## 1. どんなもの？

K-meansクラスタリングは広く知られている素晴らしいアルゴリズムであるが、高次元のデータに対しては、計算コストの高さゆえに様々な分野への応用を妨げている現状がある。一般的には次元削減の手法を用いて対処することが多いが、近年Random projection(RP)などの手法を用いて高速なK-meansクラスタリングを実現することができる。しかしながらこの手法は他の次元削減手法よりも多くの改善点が存在している。例として特異値分解(SVD)に基づく特徴抽出手法と比較して、RPは近似を行いつつ、データ数 $$ n  $$ で特徴数 $$ d $$ のデータ $$ X \in \mathbb{R}^{n \times d} $$ に対して $$ \min{(n, d)}\epsilon^{2} \frac{\log{(d)}}{k} $$ だけ実行時間を削減している。

これらの改善を経てもなお行列の乗算には $$ \mathcal{O} \left(\frac{ndk}{\epsilon^{2} \log{(d)}} \right)$$ だけ必要であり、特にデータ数 $$ n $$ や特徴数 $$ d $$ が大きい場合にはとても大きな計算コストとなってしまう。これらのボトルネックを解消するために、本研究では $$ \mathcal{O}(nnz(X)) $$ ( $$ nnz(X)$$ は $$ X $$ 内における非ゼロの数を表している) を必要とする高速な行列の乗算を行う枠組みを用いて、スパースな埋め込み表現に対してk-meansクラスタリングを行う手法を提案をしている。また本研究ではRPの近似精度についても改善を行っている。ILSVRC2012等のデータセットに対して従来の次元削減手法を次元を落としてからk-meansクラスタリングをした結果と、提案手法の高速な次元圧縮を利用したクラスタリング結果を比較している。

![Figure 1]({{ site.baseurl }}/assets/img/cv/Sparse-Embedded-k-Means-Clustering/figure1.png)

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [Liu, Weiwei, Xiaobo Shen, and Ivor Tsang. "Sparse Embedded $ k $-Means Clustering." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/6924-sparse-embedded-k-means-clustering.pdf)
