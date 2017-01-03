# Distributed Representations of Words and Phrases and their Compositionally

## 1. どんなもの？

word2vecの手法において、複数の手法を提案して高速化した。

## 2. 先行研究と比べてどこがすごいの？

[Mikolovの先行研究](https://arxiv.org/abs/1301.3781)で提案されているword2vecの手法は、語彙数が多い場合に計算時間が膨大になってしまう。Hierarchical SoftmaxやNegative Sampling、Subsamplingといったものを適用し、先行研究の提案手法を高速化することに成功した。

## 3. 技術や手法の"キモ"はどこにある？

* Hierarchical Softmaxは単語を用いて木構造を構成し、ルートから対象となる単語までの各ノードのベクトルの内積を計算し、シグモイドの積を計算する。これにより計算時間は単語数の対数時間になる。
* Negative Samplingは単語群からk個サンプルを取得して近似する方法。
* 単語の出現頻度を基準としたSubsamplingでは、よく出現する"a"や"the"といった単語をカウントして打ち消すようにする。

## 4. どうやって有効だと検証した？

[Mikolovの先行研究](https://arxiv.org/abs/1301.3781)で用いられたanalogical reasoning taskで評価を行った。

* Negative SamplingはHierarchical Softmaxよりも高精度が出ている。
* Subsamplingも効果的である。

## 5. 議論はあるか？

* word2vecが吐き出したベクトルは結局何を示しているのか
* ベクトルの足し算や引き算は何を表しているのか

## 6. 次に読むべき論文はあるか？

* [Tomas Mikolov, Kai Chen, Greg Corrado, and Jeffrey Dean. Efficient estimation of word representations in vector space. ICLR Workshop, 2013.](https://arxiv.org/abs/1301.3781)

### 論文情報・リンク

* [Tomas Mikolov, Ilya Sutskever, Kai Chen, Greg Corrado and Jeffrey Dean, "Distributed Representations of Words and Phrases and their Compositionally," Advances in Neural Information Processing Systems 26 (NIPS 2013)](https://arxiv.org/abs/1310.4546)
