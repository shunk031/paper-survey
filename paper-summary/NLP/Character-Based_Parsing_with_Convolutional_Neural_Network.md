# Character-Based Parsing with Convolutional Neural Network

## 1. どんなもの？

Character-levelのConvolutional Neural Network(CNN)を用いて中国語の「語の切れ目」を捉え、その情報を元に構文木を構築する。

## 2. 先行研究と比べてどこがすごいの？

CNNをベースとして言語のモデリングを行っている先行研究の[Dynamic Convolutional Neural Network](https://shunk031.github.io/paper-survey/paper-summary/NLP/A_Convolutional_Neural_Network_for_Modelling_Sentences)は文単位でのタスクに対しとても素晴らしい結果を残している。しかしながら中国語や日本語と行ったアジアの言語は、英語のように語の切れ目が曖昧であるため、英語をターゲットとした先行研究に比べて語の切れ目についてはあまり考慮されていない。本研究で提案されているKMCNNと呼ばれる、k-max pooling層のあるCNNを用いることで、語の切れ目を判定しその情報を元に構文木を生成するものとなっている。

## 3. 技術や手法の"キモ"はどこにある？

* 文中の文字をLookup Tableでembedding
* 入力された文字列が範囲外の場合はゼロとして扱う
* 語の順序情報を捉えられるk-max pooling層
* 最終層でどこが語の切れ目かのスコアを出力する
* 最終層の後にsoftmax層を追加することで、品詞ラベルを予測する処理を追加している
* Dynamic Programming Decodingによって文法的要素を抽出
* 構文木は2分木のような形に変形して扱っている

## 4. どうやって有効だと検証した？

Penn Chinese Treebank 5(CTB-5)という統語構造にラベルが付与されているデータセットを用いて、タスクに依存しない特徴量抽出なしに中国語の構文解析が行えるかの検証をしている。先行研究であるRecurrent Neural Network(RNN)をベースとしたものや、その他の優れた結果を出しているモデルと同程度のパフォーマンスを出している。

## 5. 議論はあるか？

* embeddingする文字の次元を50としたときに、学習速度とパフォーマンスの面で良い結果が出た。
* k-max pooling層のkの値を5より大きくした場合、結果の向上はしたが学習速度がとても遅くなってしまった。

## 6. 次に読むべき論文はあるか？

先行研究であるDCNNについて。
* [Kalchbrenner, Nal, Edward Grefenstette, and Phil Blunsom. "A convolutional neural network for modelling sentences." arXiv preprint arXiv:1404.2188 (2014).](https://arxiv.org/pdf/1404.2188.pdf?utm_content=bufferee286&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer)

### 論文情報・リンク

* [Zheng, Xiaoqing, et al. "Character-Based Parsing with Convolutional Neural Network." IJCAI. 2015.](https://pdfs.semanticscholar.org/6e4c/b2718c584a74359de96fd53a308d1a44e874.pdf)
