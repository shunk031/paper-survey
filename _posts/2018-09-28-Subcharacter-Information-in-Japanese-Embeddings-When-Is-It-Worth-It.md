---
layout: post
title:  "Subcharacter Information in Japanese Embeddings: When Is It Worth It?"
date:   2018-09-28
categories: NLP
---

## 1. どんなもの？

漢字が有する部首のコンポーネントを分解し、サブキャラクターとして扱った際の言語タスクにおける性能を、新たに提案するデータセットも含めて調査を行った。

## 2. 先行研究と比べてどこがすごいの？

漢字は自身に`へん`や`つくり`といった複数のコンポーネントを有している。
これらサブキャラクターとして埋め込みを学習することで、中国語のいくつかの言語処理タスクで良い精度となることが報告されている。
本研究ではこうしたサブキャラクターの情報を日本語に対して適用した場合の効果を調査している。

中国語で効果のあるサブキャラクター情報が日本語においては限定的であり、
多くの場合 character-level ngram や character-level のモデルが subcharacter-level のモデルよりも良い性能を示す結果となっている。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 2]({{ site.baseurl }}/assets/img/nlp/Subcharacter-Information-in-Japanese-Embeddings-When-Is-It-Worth-It/figure2.png)

### 前処理

- 文字から部首を取り出す
  - 部首データベースである[IDS](https://github.com/cjkvi/cjkvi-ids)を用いる

### 使用モデル

- Skip-gram + kanji モデル (character-level)
  - 入力単語に対して skip-gram で得たベクトルと文字に分割して得たベクトルを用いる
- Skip-gram + kanji + bushu モデル (subcharacter-level)
  - 上記のモデルに対して漢字を部首に分割して得たベクトルを用いる

### 評価データセット jBATS の提案

![Table 1]({{ site.baseurl }}/assets/img/nlp/Subcharacter-Information-in-Japanese-Embeddings-When-Is-It-Worth-It/table1.png)

40 の言語的関連性が定義されたデータセットである jBATS を提案。

## 4. どうやって有効だと検証した？

単語の類似度、jBATS を用いたアナロジータスク、感情分析の 3 つの実験を行っている。

実験結果では subcharacter-level な入力より character-level の入力を用いたモデルのほうが良い精度となる場合が多かった。

## 5. 議論はあるか？

![Table 7]({{ site.baseurl }}/assets/img/nlp/Subcharacter-Information-in-Japanese-Embeddings-When-Is-It-Worth-It/table7.png)

`疒`(やまいだれ)や`豸`(なじなへん)に対して近いベクトル表現を得た場合の結果。
やまいだれを持つ`症`が近い表現になっていることはもちろんのこと、`患`や`腫`といった病気に関わる単語が近い表現になっている。

## 6. 次に読むべき論文はあるか？

- 日本語におけるサブキャラクターを用いた言語モデリングについて
  - [Nguyen, Viet, Julian Brooke, and Timothy Baldwin. "Sub-character Neural Language Modelling in Japanese." Proceedings of the First Workshop on Subword and Character Level Models in NLP. 2017.](https://aclanthology.info/papers/W17-4122/w17-4122)
- jBATS について
  - [The Japanese Bigger Analogy Test Set (jBATS)](http://vecto.space/projects/jBATS/)

### 論文情報・リンク

- [Karpinska, Marzena, et al. "Subcharacter Information in Japanese Embeddings: When Is It Worth It?." Proceedings of the Workshop on the Relevance of Linguistic Structure in Neural Architectures for NLP. 2018.](https://aclanthology.info/papers/W18-2905/w18-2905)
