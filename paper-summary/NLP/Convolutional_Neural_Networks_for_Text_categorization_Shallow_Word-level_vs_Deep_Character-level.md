# Convolutional Neural Networks for Text Categorization: Shallow Word-level vs. Deep Character-level

## 1. どんなもの？

層の浅いword-levelのConvolutional Neural Networks(word-CNN)と層の深いcharacter-levelのCNN(char-CNN)の性能を比較した。

## 2. 先行研究と比べてどこがすごいの？

先行研究では層が深いCNNのアーキテクチャにcharacter-levelのベクトルを入力することで従来手法よりとても良い結果を出している。しかしながら本研究の著者が提案している、tv-embeddingを用いた層の浅いword-CNNが、先行研究である層の深いchar-CNNより良い結果を出した。char-CNNでは規模の小さいデータセットに対しては線形識別器よりも悪い結果が出てしまうことがあるが、word-CNNでは小さいデータセットに対してもとても良い結果を出している。

## 3. 技術や手法の"キモ"はどこにある？

Very depp character-lebel CNNについて
* 16次元のcharacter embeddingを入力
* feature mapの数が64、128、256、512である29の畳み込み層
* 29の畳み込み層の後に2048個の隠れ層がある2つの全結合層
* k-max pooling層やmax-pooling層を挟む
* Batch normalizationの使用

Shallow word-level CNNについて
* one-hotなconcatenation vectorやbow vectorを入力
* ラベルが付与されていないテキストを用いて獲得できるtv-embedding

## 4. どうやって有効だと検証した？

先行研究で用いられている8つの大規模なデータセットに対して、先行研究のモデルと提案モデルの評価を行っている。提案モデルは先行研究で小規模なデータセットに対しても優れた結果を出しているが、8つの大規模なデータセット全てにおいてchar-CNNより良い結果を出している。特にword-CNNではtv-embeddingのありなし関係なくchar-CNNより良い結果である。

## 5. 議論はあるか？

Yelp.fデータセットにおいて、各モデルの考察。

* Shallow word-CNNはDeep char-CNNより多くのパラメータを持っている  
  これはパラメータの数が語彙数に依存しているからである。word-CNNのパラメータは30Kから200K程度であり、char-CNNのパラメータは72である。

* パラメータが多いにもかかわらず、Shallow word-CNNはDeep char-CNNよりも遥かに高速に計算することできる。
  1. スパースなデータを効率的に扱うために、shallow word-CNNは語彙数の大きさに依存しない。
  2. 文字ベースの手法は、単語ベースの手法より5倍ほど多くのテキスト処理をする必要がある。
  3. より深いネットワークは多くのレイヤーを順番に処理する必要があるため、時間を要する。

* Shallow word-CNNで用いるtv-embeddingの次元数を減らしても、精度は極端に落ちない。
  
## 6. 次に読むべき論文はあるか？

本研究で著者らが提案している手法。
* [Johnson, Rie, and Tong Zhang. "Effective use of word order for text categorization with convolutional neural networks." arXiv preprint arXiv:1412.1058 (2014).](https://arxiv.org/abs/1412.1058)
* [Johnson, Rie, and Tong Zhang. "Semi-supervised convolutional neural networks for text categorization via region embedding." Advances in neural information processing systems. 2015.](http://papers.nips.cc/paper/5849-semi-supervised-convolutional-neural-networks-for-text-categorization-via-region-embedding.pdf)

本研究で比較対象となっている論文。
* [Conneau, Alexis, et al. "Very deep convolutional networks for natural language processing." arXiv preprint arXiv:1606.01781 (2016).](https://arxiv.org/pdf/1606.01781)

### 論文情報・リンク

* [Johnson, Rie, and Tong Zhang. "Convolutional Neural Networks for Text Categorization: Shallow Word-level vs. Deep Character-level." arXiv preprint arXiv:1609.00718 (2016).](https://arxiv.org/pdf/1609.00718)
