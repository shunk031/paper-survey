# A Convolutional Neural Network for Modelling Sentences

## 1. どんなもの？

可変長である文を扱うことができるDynamic Convolutional Neural Network(DCNN)を用いて感情分析や質問応答分類などを行う。

## 2. 先行研究と比べてどこがすごいの？

画像認識で素晴らしい結果を残しているConvolutional Neural Network(CNN)は固定長である画像の入力を想定している。自然言語処理においては、入力となる文を構成している単語数は可変であり、可変長のベクトルをCNNに入力することはできない。
先行研究ではこうした可変長の文を入力することができるMax-Time-Delay Neural Network(Max-TDNN)という手法が提案されている。これは文中の単語の中から特徴が最大となるような単語を定数個取得することで、固定長のベクトルを畳み込み層の入力としている。また先行研究と比べてWide Convolutionを用いることで、幅や文の長さに関係なく常に有効な結果を算出することができる。

## 3. 技術や手法の"キモ"はどこにある？

* Max-TDNNアーキテクチャを利用した可変長文への対応
* Zero-paddingを用いることでベクトルの端や文の長さに関係なく有効に動作するWide Convolution
* 幅広い範囲から高次の特徴を得ることができるDynamic k-Max poolingの適用

## 4. どうやって有効だと検証した？

まず初めに映画レビューのデータセットであるStanford Sentiment Treebankの付与されている感情ラベルを持ちに2クラス及び5クラス分類の実験を行った。その後TREC question datasetを用いて質問応答の分類問題の実験を行った。最後にTwitterのデータを用いた感情分析を行った。従来の感情分析や質問応答分類は多種多様な特徴量を用いてモデルを構築するものが多かったが、提案手法であるDCNNはそれらのモデルより優れたパフォーマンスを出している。

## 5. 議論はあるか？

DCNNの第1層目については、入力文のような連続的なn-gramを表していて、より後段の層では別個のn-gramを複数合わせたような特徴を表していた。

## 6. 次に読むべき論文はあるか？

CNNをベースとしたTDNNを用いた先行研究。
* [Collobert, Ronan, and Jason Weston. "A unified architecture for natural language processing: Deep neural networks with multitask learning." Proceedings of the 25th international conference on Machine learning. ACM, 2008.](http://www.thespermwhale.com/jaseweston/papers/unified_nlp.pdf)
* [Socher, Richard, et al. "Semi-supervised recursive autoencoders for predicting sentiment distributions." Proceedings of the conference on empirical methods in natural language processing. Association for Computational Linguistics, 2011.](http://www.anthology.aclweb.org/D/D11/D11-1014.pdf)
* [Kalchbrenner, Nal, and Phil Blunsom. "Recurrent Continuous Translation Models." EMNLP. Vol. 3. No. 39. 2013.](http://anthology.aclweb.org/D/D13/D13-1176.pdf)

TDNNの先行研究。
* [Hinton, Geoffrey E. "Connectionist learning procedures." Artificial intelligence 40.1-3 (1989): 185-234.](http://files.eric.ed.gov/fulltext/ED294889.pdf)

### 論文情報・リンク

* [Kalchbrenner, Nal, Edward Grefenstette, and Phil Blunsom. "A convolutional neural network for modelling sentences." arXiv preprint arXiv:1404.2188 (2014).](https://arxiv.org/pdf/1404.2188.pdf?utm_content=bufferee286&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer)
