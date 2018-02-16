---
layout: post
title: "You Only Look Once: Unified, Real-Time Object Detection"
date:   2017-01-04
categories: CV
---

## 1. どんなもの？

入力された画像に対して、物体がどこにあるか、また認識の信頼度はどれくらいかを高速に認識する物体認識のネットワークを構築した。

## 2. 先行研究と比べてどこがすごいの？

物体認識の領域においてはR-CNNやFaster R-CNNが良い精度を出していることが知られている。YOLOはこれらのネットワークに比べてとても高速に物体認識を行うことができている。またリアルタイムでの物体認識においては高速に動作するYOLOが先行研究に比べてとてもよい結果を出した。R-CNNは解像度の高い画像に対してあまり有効でないが、YOLOでは高解像度の画像を扱うことができる。

## 3. 技術や手法の"キモ"はどこにある？

* 複雑な処理の接続が必要なく、end-to-endの処理で高速に動作する。
* 物体の一般的な特徴を学習することができる。
* 入力画像を $S \times S$ のグリッドに分けて、各々のグリッドに対してバウンダリーボックスと信頼度のスコアを表示できる。
* GoogleNetをインスパイアしたネットワークを画像の分類に利用している。
* 独自の損失関数を導入し、最適化を施している。
* 過学習を防ぐため、DropoutやData augmentationをしている。

## 4. どうやって有効だと検証した？

ImageNetの1000-classデータセットを用いて畳み込み層のpre-trainingを行った後、PASCAL VOC 2007データセットを用いて学習させた後にリアルタイムの物体認識を行った。結果先行研究よりも高速に動作し、精度が高いものとなった。

## 5. 議論はあるか？

* YOLOは鳥の群れといった小さい物体のグループに対して正確に認識できていない。また、未知の物体などの認識が難しい。
* R-CNNといったモデルに比べて、YOLOのモデルは正しくローカライズできていないように見える。
* YOLOとR-CNNを組み合わせたモデルにおいては、背景を誤認識しないYOLOのモデルと、精度よくローカライズされるR-CNNの良さを合わせた性質が実験で示されている。しかしながらこれはリアルタイムでの物体認識には適用できない遅さである。
* Picasso DatasetやPeople-Art Datasetなどを利用して、絵に対して物体認識を行ったところ、R-CNNでは精度がとても下がったが、YOLOでは精度が下がらずに認識することができている。これはR-CNNに比べてYOLOが物体を一般化して認識できていることがわかる。

## 6. 次に読むべき論文はあるか？

* [R. Girshick, J. Donahue, T. Darrell, and J. Malik. Rich feature hierarchies for accurate object detection and semantic segmentation. In Computer Vision and Pattern Recognition(CVPR), 2014 IEEE Conference on, pages 580–587. IEEE, 2014.](https://people.eecs.berkeley.edu/~rbg/papers/r-cnn-cvpr.pdf)
* [R. B. Girshick. Fast R-CNN. CoRR, abs/1504.08083, 2015.](https://arxiv.org/abs/1504.08083)

### 論文情報・リンク

* [J. Redmon, S. Divvala, R. Girshick, and A. Farhadi. You only look once: Unified, real-time object detection. arXiv preprint arXiv:1506.02640, 2015](https://arxiv.org/abs/1506.02640)
