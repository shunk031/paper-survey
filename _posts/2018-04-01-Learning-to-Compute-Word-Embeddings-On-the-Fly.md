---
layout: post
title:  "Learning to Compute Word Embeddings On the Fly"
date:   2018-04-01
categories: NLP
---

## 1. どんなもの？

OOV問題に対してWordNetの単語定義文をエンコードし未知語に対処する，On the Fly Embdddingsを提案．

## 2. 先行研究と比べてどこがすごいの？

自然言語では頻繁に出現する単語もあるが，ほとんどがZipfian分布に従うような，あまり現れない単語から形成されている．
こうした単語の低頻度の単語はout-of-vocabulary (OOV) 問題として扱われる．

先行研究ではボキャブラリ外の単語を固定のランダムベクトルで代用する研究があり，効果を示している．
またスペル情報からBi-directional LSTMを用いて，ボキャブラリ外の単語を一般化する先行研究がある．
本研究に最も近い先行研究では，対象となる単語埋め込みに近い辞書定義埋め込みを生成するものがある．

本研究では特定のタスク対して辞書定義エンコーダをend-to-endで学習を行い，
エンコードした定義文と補助ベクトルを用いてボキャブラリ外の未知語に対応するモデルを提案する．

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1]({{ site.baseurl}}/assets/img/nlp/Learning-to-Compute-Word-Embeddings-On-The-Fly/figure1.png)

- On the Fly embeddings
  - 辞書 (WordNet) 定義文をエンコードする *definition reader*
    - simple mean pooling (MP)
    - mean pooling (MP-L)
      - 学習可能な行列を辞書内単語ベクトルに掛ける
    - LSTMの最終ステート
  - 補助ベクトル
    - WordNetの定義分からなるベクトル表現
	- 単語の文字列情報 (`word` -> `w`, `o`, `r`, `d`)
	- 大規模なデータセットで学習済みのGloVeベクトル
	
## 4. どうやって有効だと検証した？
提案手法に対して Question Answering，Semantic Entailment Classification，Language Modellingの3つのタスクで評価を行っている．

- Question Answering
  - Stanford Question Answering Dataset (SQuAD)を用いて提案手法の評価を行っている．

- Semantic Entailment Classification
  - Stanford Natural Language Inference (SNLI) コーパスとMulti-Genre Natural Language Inference (MultiNLI) コーパスを用いて提案手法の評価を行っている．
- Language Modelling
  - One Billion Words (OBW) language modellingタスクで提案手法の評価を行っている．

## 5. 議論はあるか？

- Future work
  - 複数単語からなる熟語は考慮されていない
    - `give up` などの熟語
	- `San Francisco` のような地名
  - 辞書定義中の未知語への対応
  - 循環参照してしまっている単語への対応 
    - (例 `hoge`: `fuga`のこと，`fuga`: `hoge`のこと)
  
## 6. 次に読むべき論文はあるか？

- OOV単語に対して固定のランダムベクトルを適用
  - [Dhingra, Bhuwan, et al. "A comparative study of word embeddings for reading comprehension." arXiv preprint arXiv:1703.00993 (2017).](https://arxiv.org/abs/1703.00993)
- スペルからOOV単語を一般化する試み
  - [Ling, Wang, et al. "Finding function in form: Compositional character models for open vocabulary word representation." arXiv preprint arXiv:1508.02096 (2015).](https://arxiv.org/abs/1508.02096)
- 対象となる単語埋め込みに近い辞書定義埋め込みを生成
  - [Hill, Felix, et al. "Learning to Understand Phrases by Embedding the Dictionary." Transactions of the Association for Computational Linguistics 4 (2016): 17-30.](http://www.aclweb.org/anthology/Q16-1002)

### 論文情報・リンク

- [Bahdanau, Dzmitry, et al. "Learning to Compute Word Embeddings On the Fly." arXiv preprint arXiv:1706.00286 (2017).](https://arxiv.org/abs/1706.00286)
