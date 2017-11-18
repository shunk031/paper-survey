# Character-level Intra Attention Network for Natural Language Inference

## 1. どんなもの？

自然言語推論に対して文字レベルの特徴とIntra Attentionを用いたCharacter-level Intra Attention Network(CIAN)を提案している．

## 2. 先行研究と比べてどこがすごいの？

自然言語推論(Natural Language Inference(NLI))は，自然言語処理タスクの一つである．「前提(premise)」と「仮説(hypothesis)」からなる２つのテキストを用いて学習を行い，前提と仮設が正しいか・矛盾しているか・中立かを予測する．
先行研究ではNLIタスクに対してRNNベースのエンコーダを利用したものが多く，特にLSTMやGRUなどが幅広く使われている．
これらのエンコーダーは単語レベルのembeddingを用いており，Word2VecやGloveなどの学習済み単語ベクトルで初期化することが多い．

しかしながら近年のコーパスにおける語彙数の増加により，予め用意した単語ベクトルには含まれない，語彙外の単語が多く存在してしまう．

本研究ではベースラインモデルのEmbedding層の代わりに，文字レベルの特徴を用いるConvolutional Neural Network(CharCNN)を適用している．またIntra attentionを適用することで，よりリッチな文構造を学習することが可能となっている．

## 3. 技術や手法の"キモ"はどこにある？

![Figure 2](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/NLP/Character-level_Intra_Attention_Network_for_Natural_Language_Inference/figure2.png)

- Character-level Intra Attention Network
  - Character-level Convolutional Neural Networks
    - 文字レベルの特徴を用いることで単語レベルの特徴を用いるときに発生してしまう語彙外の単語の出現を抑えることができる
    - 畳み込み層は「GermanやGermany」といったつづりの違いについても特徴を抽出することができる
  - Intra Attention
    - 先行研究で文書分類に対して導入されたIntra AttentionをNLIタスクに適用
    - BiLSTMの隠れ状態と重み・バイアスを活性化関数tanhへ通すことで隠れ表現を得たのち，softmaxを掛けることで重要度を表す重み行列を得ることができる
	
## 4. どうやって有効だと検証した？

NLIタスクを評価する際に使用されてきたStanford Natural Language Inference(SNLI)コーパスと，新たに導入された大規模なコーパスであるMulti-Genre NLI(MNLI)コーパスを使用している．
提案モデルの学習の際にはMNLIのトレーニングデータすべてを利用したのと，SNLIトレーニングデータセットから20%程度ランダムに選んだデータを使っている．

ベースラインのBiLSTMを用いたモデルと比較すると，提案モデルがよりよい精度を出していることがわかる．

## 5. 議論はあるか？

Attentionの重みを可視化した結果は以下のようになっている．左が前提の文で右が仮説の文を表している．より色が濃い単語が重要で予測に寄与しているものとなっている．
可視化の結果から，モデルはより似ている意味を持つ単語(ここではloveやenjoy)に注意をしていることがわかる．

![Figure 3-1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/NLP/Character-level_Intra_Attention_Network_for_Natural_Language_Inference/figure3-1.png)
![Figure 3-2](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/NLP/Character-level_Intra_Attention_Network_for_Natural_Language_Inference/figure3-2.png)

## 6. 次に読むべき論文はあるか？

CharCNNについて
- [Yoon Kim, Yacine Jernite, David Sontag, and Alexander M. Rush. 2016. Character-aware neural language models. In Proceedings of the Thirtieth AAAI Conference on Artificial Intelligence. pages 2741–2749.](https://dl.acm.org/citation.cfm?id=3016285)

Intra attentionについて
- [Zichao Yang, Diyi Yang, Chris Dyer, Xiaodong He, Alexander J. Smola, and Eduard H. Hovy. 2016. Hierarchical attention networks for document classifi- cation. In NAACL HLT 2016, The 2016 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies. pages 1480–1489.](http://www.aclweb.org/anthology/N16-1174)

### 論文情報・リンク

* [Yang, Han, Marta R. Costa-jussà, and José AR Fonollosa. "Character-level Intra Attention Network for Natural Language Inference." arXiv preprint arXiv:1707.07469 (2017).](https://arxiv.org/abs/1707.07469)
