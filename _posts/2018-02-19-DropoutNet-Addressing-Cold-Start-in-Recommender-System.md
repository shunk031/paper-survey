---
layout: post
title:  "DropoutNet: Addressing Cold Start in Recommender Systems"
date:   2018-02-19
categories: CV
---

## 1. どんなもの？

潜在的な意味を捉えるモデルは、精度の良さやスケーラビリティを有するため、レコメンドシステムを導入する際にデフォルトの選択肢の1つとなっている。しかしながらレコメンドといった分野の先行研究では、主にユーザーとアイテムの関係をモデル化したものが多く、データが少ない場合に起こる「コールドスタート問題」に対する解決策を提示しているモデルは少ない。Deep learningは近年様々な入力に対して優れた成功を収めている。そういったモデルを利用し、レコメンドシステムにおけるコールドスタート問題を解決するため、ニューラルネットワークベースのDropoutNetを提案している。

コンテンツベースの目的関数を追加した既存の手法と異なり、本研究では最適化手法に焦点を当てたのと、Dropoutを応用して明示的にコールドスタートに対してモデルのトレーニングを行う方法を示している。提案モデルは既存のモデルに対して適用することができ、コールドスタートに対して効果を発揮している。コールドスタート問題を解決しているかを評価できるCiteULikeデータセットやACM RecSys 2017 challengeデータセットを用いて、提案モデルが優れた結果を出していることを確認している。

![Figure 1]({{ site.baseurl }}/assets/img/cv/DropoutNet-Addressing-Cold-Start-in-Recommender-System/figure1.png)

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

- [Volkovs, Maksims, Guangwei Yu, and Tomi Poutanen. "DropoutNet: Addressing Cold Start in Recommender Systems." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/7081-dropoutnet-addressing-cold-start-in-recommender-systems.pdf)
