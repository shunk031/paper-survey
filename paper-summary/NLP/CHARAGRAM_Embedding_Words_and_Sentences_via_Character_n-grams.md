# CHARAGRAM: Embedding Words and Sentences via Character n-grams

## 1. どんなもの？

文字レベルのn-gramを用いて低次元のembeddingへと変換するCHARAGRAMという手法を提案する。

## 2. 先行研究と比べてどこがすごいの？

自然言語処理タスクにおいて、「単語」が最小の単位として扱われ、そのword embeddingを用いた研究がほとんどである。いくつかの先行研究では文字ベースの特徴を扱うRecurrent Neural Network(RNN)やConvolutional Neural Network(CNN)などがあり、とても良い結果を出している。本研究ではCHARAGRAMという、文字レベルのn-gramをシンプルな非線形関数に入力することで低次元のembeddingを獲得し、それらを用いて単語や文の類似度、品詞タグ付けといったタスクに応用している。文字レベルのn-gramを用いているため、語の順序といった性質が保存される利点や辞書の語彙内に存在しない単語についても扱える利点などが存在する。

## 3. 技術や手法の"キモ"はどこにある？

* 文字レベルのn-gramの使用
* シンプルな非線形関数を用いて低次元のembeddingを獲得

## 4. どうやって有効だと検証した？

先行研究で成功を収めている文字ベースのLSTMやCNNとともにCHARAGRAMの性能を検証している。Paraphrase Databaseという文の言い換えがペアとなっているデータを用いて単語と文の類似度を求めるタスクと、Wall Street Journalのデータを用いた品詞タグ付けタスクで実験を行っている。単語と文の類似度を求めるタスクにおいてはCHARAGRAMが比較対象のモデルより優れた結果を出している。また、品詞タグ付けタスクにおいても文字ベースのLSTM・CNNより良い結果を出している。

## 5. 議論はあるか？

* 文字ベースn-gramの畳み込みフィルタと文字ベースn-gramのCHARAGRAMは似たものとなっているが、CNNではすべての文に影響を与える一方でCHARAGRAMは対象となるベクトル表現にのみ影響を与える。
* CHARAGRAMは学習の収束がとても速い。
* 文字ベースLSTM・CNNはとても多くのパラメータを有しているが、CHARAGRAMではとても少ないパラメータで優位な結果を出している。
* 単語ベースの特徴を用いるPARAGRAM-PHRASEでは辞書の語彙内に存在しないような単語やスペルミスなどが含まれている場合性能が落ちてしまうが、文字ベースの特徴を用いているCHARAGRAMでは性能が落ちることはなかった。
* CHARAGRAMは単語ベースのPARAGRAM-PHRASEと違い単語の順番を保存する性質があるため、ある単語についてNearest neighborで近いベクトルを探したところ、より特徴を掴んだ語を得ることができている。

## 6. 次に読むべき論文はあるか？

CHARAGRAMがインスパイアした先行研究。文字レベルのn-gramを使用。
* [Huang, Po-Sen, et al. "Learning deep structured semantic models for web search using clickthrough data." Proceedings of the 22nd ACM international conference on Conference on information & knowledge management. ACM, 2013.](https://posenhuang.github.io/papers/cikm2013_DSSM_fullversion.pdf)

比較対象となっている単語ベースの特徴を用いてembeddingする「PARAGRAM-PHRASE」著者の先行研究。
* [Wieting, John, et al. "Towards universal paraphrastic sentence embeddings." arXiv preprint arXiv:1511.08198 (2015).](https://arxiv.org/pdf/1511.08198)

### 論文情報・リンク

* [Wieting, John, et al. "CHARAGRAM: Embedding Words and Sentences via Character n-grams." arXiv preprint arXiv:1607.02789 (2016).](https://arxiv.org/abs/1607.02789)
