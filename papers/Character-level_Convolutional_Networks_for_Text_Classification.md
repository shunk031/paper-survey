# Character-level Convolutional Networks for Text Classification

## 1. どんなもの？

テキスト中に現れる文字を1次元に量子化したベクトルをCNNに入力して、テキストの分類を行った。

## 2. 先行研究と比べてどこがすごいの？

文字レベルのn-gramを用いた線形識別器や単語レベルのベクトルをCNNに入力した研究があるが、文字レベルのベクトルをCNNに入力しても、とても良い結果を出すことができている。

## 3. 技術や手法の"キモ"はどこにある？

* 1次元で畳み込みを行う
* 文字を量子化して1次元のベクトルとして表す
* シソーラスを用いたData Augmentation

## 4. どうやって有効だと検証した？

とても規模の大きいデータセットに対して今回の提案手法を適応した結果、古典的な手法よりもエラー率が低くなった。

## 5. 議論はあるか？

* 文字レベルのCNNはとても効果的な手法である
* ユーザーが生成したようなデータに対しても良い結果を出している
* 規模の大きいデータセットに対しては大文字や小文字の区別の影響は少なくなる

## 6. 次に読むべき論文はあるか？

* C.D.Santos and B.Zadrozny. Learning character-level representations for part-of-speech tagging. In Proceedings of the 31st International Conference on Machine Learning (ICML-14), pages 1818-1826, 2014.

### 論文情報・リンク

* [Xiang Zhang, Junbo Zhao and Yann LeCunn. Character-level Convlutional Networks for Text Classification](https://arxiv.org/abs/1509.01626)

