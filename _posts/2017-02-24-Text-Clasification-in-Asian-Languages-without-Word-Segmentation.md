---
layout: post
title: "Text Classification in Asian Languages without Word Segmentation"
date:   2017-02-24
categories: NLP
---

## 1. どんなもの？

アジアの言語に対して、分かち書きを必要としない文字ベースのn-gramとそれを用いた言語モデルを用いて文書分類を行う。

## 2. 先行研究と比べてどこがすごいの？

英語は単語と単語の間にスペースがあり、分かち書きがしやすい。しかしながら日本語や中国語といったアジアの言語は単語の切れ目が明確ではなく、分かち書きを行っても結果が正しいとは限らない。本研究では分かち書きを必要としない文字レベルのn-gramを用いたベイズベースの言語モデルを文書分類に適用することで、単語レベルのベクトルを入力したAd hoc n-gram分類器やSVMより良い精度を出した。

## 3. 技術や手法の"キモ"はどこにある？

* 文字レベルのn-gramを用いて分かち書き
* ベイズベースの言語モデルの使用
* 複数のsmoothing手法で実験(Add-one、Linear、Absolute、Good-Turing、Witten-Bell smoothing)

## 4. どうやって有効だと検証した？

日本語及び中国語のデータセットに対して評価を行った。日本語のデータセットは先行研究で用いられているNTCIR-J1を日本語に翻訳したもので、中国語のデータセットはTREC-5 People's Daily news corpusを用いている。n-gramのnの値を1から4まで変化させ、複数のsmoothing手法を比較している。従来の単語ベースの特徴を用いたSVMやad hoc n-gramと比較し、より良い結果を出している。

## 5. 議論はあるか？

* 文字ベースのn-gramのnを小さすぎる場合は情報をうまく捉えられずに性能は良くない。
* またnの値をある一定以上大きくしてしまうと性能が落ちてしまう。これはスパースなデータを扱うようになってしまうためである。
* Add-one smoothing以外のsmoothing手法は同程度の性能を出している。Add-one smoothingのみが少し悪い結果になっている。

## 6. 次に読むべき論文はあるか？

日本語や中国語の文書分類についての先行研究。

* [Aizawa, Akiko N. "Linguistic Techniques to Improve the Performance of Automatic Text Categorization." NLPRS. Vol. 1. 2001.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.331.1455&rep=rep1&type=pdf)

### 論文情報・リンク

* [Peng, Fuchun, et al. "Text classification in Asian languages without word segmentation." Proceedings of the sixth international workshop on Information retrieval with Asian languages-Volume 11. Association for Computational Linguistics, 2003.](https://www.aclweb.org/anthology/W/W03/W03-1106.pdf)
