---
layout: post
title:  "Tell Me Where to Look: Guided Attention Inference Network"
date:   2019-02-24
categories: CV
---

## 1. どんなもの？

Attention map を用いた弱教師ありセマンティックセグメンテーションを高精度に行う guided attention inference networks (GAIN) を提案。

## 2. 先行研究と比べてどこがすごいの？

クラスラベルをもとに学習し予測することで得られる attention map は局所的な特徴やセグメンテーションの情報を保持している場合が多い。
こうした attention map を利用しセマンティックセグメンテーションといったタスクを解く弱教師あり学習 (weakly supervised learning) の枠組みは先行研究で複数手法が提案されてきた。
しかしながらクラスラベルから classification loss で学習した attention map は分類に必要最低限の領域にのみフォーカスしており、対象となる物体全体をカバーすることは難しい。

また学習データセットのバイアスにより、未知のデータに対して正しくセグメンテーションを行うのは難しい。
具体的には`ボート`と`海`は同時に撮影される場合が多く、高い相関がある。
したがって予測時に海面が移っていない`ボート`のサンプルを正しくセグメンテーションするのは難しい場合が多い。

本研究では end-to-end で attention map を学習し、classification loss に加えて attention の妥当性を考慮する loss を同時に学習する guided attention inference networks (GAIN) を提案している。

## 3. 技術や手法の"キモ"はどこにある？

### GAIN

![Figure 2]({{ site.baseurl }}/assets/img/cv/Tell-Me-Where-to-Look-Guided-Attention-Inference-Network/figure2.png)

- 共通する 2 つのストリーム ($$S_{cl}$$ と $$S_{am}$$)
  - 2 つのストリームにおける conv 層と一部の fc 層のパラメータは共通
  - Classification stream $$S_{cl}$$
    - クラスに分類するために役立つ領域を見つけるよう学習
    - マルチラベル・マルチクラスの `classification loss` を最小化する
  - Attention mining stream $$S_{am}$$
    - クラスの決定に寄与する可能性があるすべての領域が attention に含まれるよう学習
    - 対象クラスに対する attention 領域が大きくならないようにする `attention mining loss` を最小化する
    
### GAIN$$_{\textrm{ext}}$$

![Figure 3]({{ site.baseurl }}/assets/img/cv/Tell-Me-Where-to-Look-Guided-Attention-Inference-Network/figure3.png)

- 追加で小規模のセグメンテーションマスクを学習に利用
  - External stream $$S_{e}$$ を追加
    - 教師となるセグメンテーションマスクから attention map を学習
    - Attention map とセグメンテーションマスクの二乗誤差である `attention loss` を最小化する

## 4. どうやって有効だと検証した？

PASCAL VOC を用いた弱教師ありセグメンテーションタスクで先行研究の SoTA モデルとの mean intersection-over-union (mIoU) のスコアを比較している。
SoTA モデルである SEC に対して attention map を用いた提案手法を適用することにより精度向上が確認されている。

## 5. 議論はあるか？

![Figure 4]({{ site.baseurl }}/assets/img/cv/Tell-Me-Where-to-Look-Guided-Attention-Inference-Network/figure4.png)

SoTA モデルである SEC に対して GAIN を導入することにより、複数物体を正確に広い範囲で捉えることが可能となっている。
また追加でセグメンテーションマスクを用いることで、より精度のよいセグメンテーションが行われている。

![Figure 6]({{ site.baseurl }}/assets/img/cv/Tell-Me-Where-to-Look-Guided-Attention-Inference-Network/figure6.png)

学習データセットにバイアスがある場合にベースラインの Grad-CAM と提案手法の GAIN がどのような予測をするか可視化を行った結果。
Grad-CAM は`海`とともに現れやすい`ボート`に過学習している傾向があるが、GAIN は`ボート`を適切に捉えていることがわかる。
提案手法の GAIN がバイアスのあるデータセットに対してもロバストであることを示している。

## 6. 次に読むべき論文はあるか？

- SEC について
  - [Kolesnikov, Alexander, and Christoph H. Lampert. "Seed, expand and constrain: Three principles for weakly-supervised image segmentation." European Conference on Computer Vision. Springer, Cham, 2016.](https://arxiv.org/abs/1603.06098)
### 論文情報・リンク

- [Li, Kunpeng, et al. "Tell me where to look: Guided attention inference network." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2018.](https://arxiv.org/abs/1802.10171)
