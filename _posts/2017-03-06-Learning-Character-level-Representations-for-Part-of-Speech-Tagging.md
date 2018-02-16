---
layout: post
title: "Learning Character-level Representations for Part-of-Speech Tagging"
date:   2017-03-06
categories: NLP
---

## 1. どんなもの？

Convolutional Neural Network(CNN)ベースのアーキテクチャに単語ベース・文字ベースのembeddingを使った「CharWNN」を用いて品詞タグ付けを行う。

## 2. 先行研究と比べてどこがすごいの？

言語処理の主なタスクでは単語レベルのembeddingを利用することが多い。品詞タグ付け(Part-of-Speech tagging)タスクにおいては、文字レベルの情報がとても重要となる。先行研究では単語レベルのembeddingのみを用いて品詞タグ付けやその他の言語処理タスクを解いている。本研究では単語レベルのembeddingに加えて単語内に現れる文字レベルの情報も活用し、品詞タグ付けタスクに挑むものである。

## 3. 技術や手法の"キモ"はどこにある？

* 単語レベルのembeddingと文字レベルのembeddingの併用
* 文字レベルの情報をCNNに入力し、固定長のembeddingを獲得
* 単語レベル+文字レベルのembeddingから品詞タグのスコアを出力する
* 品詞タグのスコアからViterbiアルゴリズムに従って最大スコアである構造を導く

## 4. どうやって有効だと検証した？

英語およびポルトガル語に対して品詞タグ付けタスクを提案手法のCharWNNモデルを用いて検証している。英語についてはWall Street Journal(WSJ)のPOS tagging用データセット、ポルトガル語についてはMac-Morphoコーパスを用いて品詞タグ付けの評価を行っている。比較として、提案手法のモデルにおいて文字レベルの情報を用いないWNNと、MNNに大文字小文字情報および接頭辞情報を追加したものについて比較している。結果は提案手法であるCharWNNが良い結果を出している。

## 5. 議論はあるか？

* CharWNN、WNNともに良いパフォーマンスを出しているが、特に学習データに存在しないような語彙が入力された場合においては文字ベースのembeddingを併用しているCharWNNが優位に立っている。
* WNNに大文字小文字情報や接尾辞情報といったハンドメイドな特徴量を合わせて入力することにより、既知の語彙情報のみのデータに対しては良い結果を出している。
* 先行研究にあるような複数のハンドメイドな特徴量を用いた従来モデルに比べて、自動的に特徴量を抽出している本研究のモデルが遥かに低いエラー率を記録している。

## 6. 次に読むべき論文はあるか？

CNNベースで品詞のタグ付けやチャンキング、固有表現抽出などを行っている先行研究。
* [Collobert, Ronan, et al. "Natural language processing (almost) from scratch." Journal of Machine Learning Research 12.Aug (2011): 2493-2537.](http://www.jmlr.org/papers/volume12/collobert11a/collobert11a.pdf)

### 論文情報・リンク

* [dos Santos, Cícero Nogueira, and Bianca Zadrozny. "Learning Character-level Representations for Part-of-Speech Tagging." ICML. 2014.](http://www.jmlr.org/proceedings/papers/v32/santos14.pdf)
