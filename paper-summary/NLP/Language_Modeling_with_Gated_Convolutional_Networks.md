# Language Modeling with Gated Convolutional Networks

## 1. どんなもの？

言語モデリングを行う際はLong shot term memory(LSTM)を用いることが多かったが、Convolutional Neural Network(CNN)にGateを導入したネットワークを利用することにより、state-of-the-artなLSTMの結果と同程度の精度を達成することができ、同時に遥かに高い並行処理能力を獲得したGated Convolutional Networks(GCN)を提案。

## 2. 先行研究と比べてどこがすごいの？

LSTMといったRecurrentなネットワーク構造では、次の出力は前の隠れ層からの情報を用いているため、並列処理することが難しかった。この点CNNのネットワーク構造は並列処理に長けているため、遥かに高い計算効率を出している。実験結果ではGPU1枚で学習させたGCNと、GPUを数十から数百使って計算されたLSTMや従来手法を比較しているが、同程度の性能を出していることがわかる。

## 3. 技術や手法の"キモ"はどこにある？

* LSTMにも導入されているGate構造をCNNにも導入した。これにより畳み込んだ結果をGated Liner Unit(GLU)のようなシステムに通すことで、勾配情報の消失を防ぐことができる。
* 予測に*adaptive softmax*を用いることにより、より少ないメモリ量で高速に動作するようにした。
* weight normalizationとgradient clippingを組み合わせることで安定して高速な収束を達成した。
  
## 4. どうやって有効だと検証した？

Google Billion Word dataset(GBW)とWikiText-103を用いて実験を行った。GBWの実験においてはLSTMの20倍程度の応答性を記録している。モデルのパラメータについてもLSTMの7割程度の数でデータを表現することができている。

## 5. 議論はあるか？

* TanhやReLUなどをGLUの代わりとした場合ではあまり予測性能が良くならなかった。
* ネットワークの層を深くすればするほど予測精度が良くなっていった。
* gradient clippingやweight normalizationなどを適用した結果、予測精度が良くなった。

## 6. 次に読むべき論文はあるか？

* Hochreiter, Sepp and Schmidhuber, Jurgen. Long short-term memory. Neural computation, 9(8):1735–1780, 1997.
* Dauphin, Yann N and Grangier, David. Predicting distributions with linearizing belief networks. arXiv preprint arXiv:1511.05622, 2015.
* Grave, E., Joulin, A., Cisse, M., Grangier, D., and J´egou, H. Efficient softmax approximation for GPUs. ArXiv e-prints, September 2016a.
* Oord, Aaron van den, Kalchbrenner, Nal, Vinyals, Oriol, Espeholt, Lasse, Graves, Alex, and Kavukcuoglu, Koray. Conditional image generation with pixelcnn decoders. arXiv preprint arXiv:1606.05328, 2016b.
* Salimans, Tim and Kingma, Diederik P. Weight normalization: A simple reparameterization to accelerate training of deep neural networks. arXiv preprint arXiv:1602.07868, 2016.

### 論文情報・リンク

* [Dauphin, Yann N., et al. "Language Modeling with Gated Convolutional Networks." arXiv preprint arXiv:1612.08083 (2016).](Language Modeling with Gated Convolutional Networks)
