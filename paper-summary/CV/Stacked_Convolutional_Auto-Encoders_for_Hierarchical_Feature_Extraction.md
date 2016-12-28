# Stacked Convolutional Auto-Encoders for Hierarchical Feature Extraction

## 1. どんなもの？

高次元の入力(特に画像のようなデータ)に対しても有効な、階層的な特徴量を抽出できるConvolutional Auto-Encoderを導入する。

## 2. 先行研究と比べてどこがすごいの？

全結合のAuto-EncoderやDenoising Auto-Encoderは2次元の画像情報を無視してしまう。提案手法ではCNNを用いて画像情報の損失を防ぎつつ、特徴量を抽出できるようにし、これらの構造をStackしてDeep Featureを獲得する。

## 3. 技術や手法の"キモ"はどこにある？

CAEのStackは学習段階のCNNを同一のトポロジーとして初期化することができる。

## 4. どうやって有効だと検証した？

MNISTやCIFAR10データセットに対してStackしたCAEを学習させ、その重みを用いてCNNを初期化してデータセットを識別させると、良い結果が得られた。

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [Jonathan Masci, Ueli Meier, Dan Cireşan and Jürgen Schmidhuber. "Stacked Convolutional Auto-Encoders for Hierarchical Feature Extraction", ICANN'11 Proceedings of the 21th international conference on Artificial neural networks - Volume Part I Pages 52-59 ](https://pdfs.semanticscholar.org/1c6d/990c80e60aa0b0059415444cdf94b3574f0f.pdf)
