---
layout: post
title:  "Explaining Word Embeddings via Disentangled Representation"
date:   2020-12-07
categories: NLP
---

## 1. どんなもの？

学習済みの単語埋め込みを使って埋め込みの各次元が独立した特徴を捉えるような disentangled 表現へ変換する手法を提案。

## 2. 先行研究と比べてどこがすごいの？

事前学習済み単語埋め込み e.g., word2vec, GloVe は広く用いられている。
こうした単語埋め込みに対して、埋め込みの各次元が独立した性質を持つ disentangled 表現への変換はあまり議論されていない。
本研究では事前学習済み単語埋め込みを disentangled 表現へと変換する手法である disentangled word embeddings (DWE) を提案した。

DWE は以下の優位性を有する:
- 事前学習済み単語埋め込みへの説明性 (explaining underlying knowledge)
- 変換された埋め込みの独立性 (modular and compact features)
- 元の事前学習済み埋め込みの保持性 (quality preservation)

## 3. 技術や手法の "キモ" はどこにある？

- 事前学習済み単語埋め込みを予め設定した属性を予測できるような出力をするモデルを学習
  - 埋め込みの説明性につながる
- 行列分解の要領で事前学習済み単語埋め込みと学習したモデルが出力する埋め込みが等しくなるように学習
  - 埋め込みの情報保持性につながる

## 4. どうやって有効だと検証した？

### 学習

- 事前学習済み GloVe を用いて提案手法の DWE を学習
- ターゲットとなる属性は [Word Stat](https://provalisresearch.com/products/content-analysis-software) から取得
  - この中から説明しやすい 5 つの属性を選択 (`artifact`, `location`, `animal`, `adjective (ADJ)`, `adverb (ADV)`)

### 評価

- 単語間の類似度
  - Marco, Elia, and Nam (MEN)
  - SimLex-999
- 単語のアナロジー
  - Bigger Analogy Test Set (BATS)
  - Google Analogy (GA)
- 品詞タグ付け
  - Chunking and Named Entity Recognition (NER)
  - CoNLL2003
- QVEC-CCA
  - 単語埋め込みの自動評価指標
- DWEを用いた感情分析
  - 感情分析タスクとしてIMDBのレビュー分類を実施

## 5. 議論はあるか？

- 予め定めた属性に沿った埋め込みの学習により説明性が向上した
- 変換元の事前学習済み単語埋め込みの情報を保持できた

## 6. 次に読むべき論文はあるか？

- 単語埋め込みの自動評価指標
  - [Tsvetkov, Yulia, et al. "Evaluation of word vector representations by subspace alignment." Proc. of EMNLP 2015](https://www.aclweb.org/anthology/D15-1243/)

### 論文情報・リンク

- [Liao, Keng-Te et al. "Explaining Word Embeddings via Disentangled Representation." Proc. of AACL-IJCNLP 2020](https://www.aclweb.org/anthology/2020.aacl-main.72/)

