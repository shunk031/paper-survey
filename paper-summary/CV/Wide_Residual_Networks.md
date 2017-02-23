# Wide Residual Networks

## 1. どんなもの？

近年発展を見せるResidual Network(ResNet)アーキテクチャについて、層の深さを浅くしフィルタ数を増やしてネットワークの幅を「広くする」手法やResNet Blockのパラメータをいくつか変更して検証を行った。

## 2. 先行研究と比べてどこがすごいの？

ResNetは層を数千まで増やしても、それに合わせてパフォーマンスが向上することで知られている。これとは逆に層の深さを浅くしてフィルタ数を増やし、ネットワークの「幅」を広くすることで、層が深く幅の狭い従来のResNetに比べて良いパフォーマンスを出すことができている。

幅を広くすることに加え、ResNet Blockにおける畳み込み層の種類の違いや数、Dropout入れるなどのチューニングをすることで、より高いパフォーマンスを達成している。

## 3. 技術や手法の"キモ"はどこにある？

* 従来のResNetの深いネットワークから、層を浅くしてフィルタ数を増やすWide Residual Networks(WRNs)を提案。
  * 幅を広くすることでパラメータを増加させ、モデルの表現力を上げている。
  * 計算を並行して行えるため、トレーニングにかかる時間が従来のDeep ResNetに比べ半分近くになっている。
  
* ResNet Block内で畳み込み層の間にDropoutを入れることにより、増加したパラメータが過学習に陥りづらくなる
  
## 4. どうやって有効だと検証した？

CIFAR-10、CIFAR-100、SVHN、Image Netの4つのデータセットについて以下のパラメータの変更を行い、エラー率を求めて評価している。

* 1x1や3x3の畳み込み層をいくつか組み合わせてResBlockを構成
* 3x3の畳み込み層を複数重ねる(1層、2層、…、4層)
* ネットワークの幅を変える(1~12)
* Dropoutを入れる/いれない


## 5. 議論はあるか？

* 著者が提案しているWRNsは従来のDeep ResNetに比べ50分の1のレイヤー数で、2倍高速に動作する。
* Identity関数内にDropoutを導入しても効果がなかった。
* 活性化関数(ReLU)とBatch normalizationの順番を変えてもあまり効果がないことが知られている。
* 畳み込み層のフィルタサイズを大きくすることで表現力が上がるが、今回は効果が認められている1x1の小さいフィルタを用いている。
* Batch normalizationだけの利用は大規模なData augmentationをして過学習を抑制しなければならない。Dropoutを併用することで過学習を抑えることができている。
* 実験の結果、3x3の畳み込み層を2層、幅が10のものが良い結果を出している。層や幅は増やせば増やすほどいいとは限らない。
* 0.3もしくは0.4程度をDropoutさせる。
* Momentum SGDとCross-entropy lossを使用して最適化している。

## 6. 次に読むべき論文はあるか？

ResNetについて。

* [He, Kaiming, et al. "Deep residual learning for image recognition." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2016.](http://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

ResNetの活性化関数の順番について考察している。

* [He, Kaiming, et al. "Identity mappings in deep residual networks." European Conference on Computer Vision. Springer International Publishing, 2016.](https://arxiv.org/pdf/1603.05027)

### 論文情報・リンク

* [Zagoruyko, Sergey, and Nikos Komodakis. "Wide residual networks." arXiv preprint arXiv:1605.07146 (2016).](https://arxiv.org/pdf/1605.07146)
