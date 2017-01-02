# Deep learning

## 1. どんなもの？

* 複数のレイヤーで構成された計算モデルを使用して、複数レベルの抽象化を行い、入力されたデータの表現を学習することができる。
* 各層の前の層からパラメータを機械的に決定するbackpropagationを利用して、大きなデータの集合から複雑な構造を見つける。
* これらの方法は、音声認識における最先端技術を劇的に改善し、視覚的物体認識、物体検出、および創薬およびゲノミクスのような多くの他の領域においても素晴らしい結果を出している。

## 2. 先行研究と比べてどこがすごいの？

* 従来の機械学習手法では自然な生のデータに対して技術的な制限があった。
* 機械学習を適用する領域の専門家が特徴量を決定し、注意深いエンジニアリングが必要であったが、Deep Learningではそういった特徴量を自動で決定する。

## 3. 技術や手法の"キモ"はどこにある？

* 大規模なデータ
* Backpropagation
* Stochastic gradient decent
* ReLU
* dropout
* GPUs

## 4. どうやって有効だと検証した？

Deep learningの一種であるConvolutional neural network(ConvNets)は画像認識で有名なImage Netsという大会で優勝した。
同様にRecurrent neural networks(RNN)やその発展であるLong short-term memory(LSTM)は従来では難しかった機械翻訳や対話文生成などの精度を飛躍的に向上させた。

## 5. 議論はあるか？

* Deep LearningにおけるUnsupervised learningはこれからの数年で発展するだろう。
* ConvNetsやRNNと強化学習を組み合わせたアプリケーションが提案されるであろう。
* ルールベースの記号式の操作を大規模なベクトルに対する操作で置き換えるには、新しいパラダイムが必要。

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [Yann LeCun, Yoshua Bengio and Geoffrey Hinton, "Deep Learning," Nature 521, 436-444. 2015](http://www.nature.com/nature/journal/v521/n7553/full/nature14539.html)
