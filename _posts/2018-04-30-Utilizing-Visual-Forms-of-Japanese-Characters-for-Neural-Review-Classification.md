---
layout: post
title:  "Utilizing Visual Forms of Japanese Characters for Neural Review Classification"
date:   2018-04-30
categories: NLP
---

## 1. どんなもの？

文字の見た目を考慮した文字embeddingを用いて日本語の評判分析を行う

## 2. 先行研究と比べてどこがすごいの？

日本語や中国語の文字は表意文字であり、文字自身が意味を持っている。通常の自然言語処理の手法では、文字の見た目の情報は無視し、文字IDの羅列として扱う。
本研究では表意文字や記号の形状を考慮した日本語の評判分析を行うモデルを提案している。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 2]({{ site.baseurl }}/assets/img/nlp/Utilizing-Visual-Forms-of-Japanese-Characters-for-Neural-Review-Classification/figure2.png)

- Character-based Hierarchal Attention Networks (HAN) をベースとしたモデル
  - HANと比べて文字embeddingのパラメータ数が大幅に減少している
- 文字を文字画像に変換し、そこからConvolutional Neural Networks (CNN) を通して文字の形状情報を捉えた文字embeddingを取り出す

## 4. どうやって有効だと検証した？

6段階の評価と7カテゴリが付与されている[Raluten Travel review](https://www.nii.ac.jp/dsc/idr/en/rakuten/rakuten.html)を用いて提案手法の性能を評価している。
ベースラインとして先行研究のHANを利用し、前処理として[neologdn](https://github.com/ikegami-yukino/neologdn)を用いてNFKCのユニコード標準化を行っている。

## 5. 議論はあるか？

- Visual attentionを適用して評判分析の際に文字のどの部分に着目しているのか可視化したい
- 従来の部首の辞書を用いた特徴を利用すれば未知の文字に対しても有効に特徴を取得できるのではないだろうか

## 6. 次に読むべき論文はあるか？

- HANについて
  - [Yang, Zichao, et al. "Hierarchical attention networks for document classification." Proceedings of the 2016 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies. 2016.](http://www.aclweb.org/anthology/N16-1174)

### 論文情報・リンク

- [Toyama, Yota, Makoto Miwa, and Yutaka Sasaki. "Utilizing Visual Forms of Japanese Characters for Neural Review Classification." Proceedings of the Eighth International Joint Conference on Natural Language Processing (Volume 2: Short Papers). Vol. 2. 2017.](http://www.aclweb.org/anthology/I17-2064)
