# Tweet2Vec: Character-Based Distributed Representations for Social Media

## 1. どんなもの？

Twitterのツイートからそのツイートに付与されているハッシュタグを、文字ベースのニューラルネットワーク(Bi-GRU)を用いて予測を行う。

## 2. 先行研究と比べてどこがすごいの？

Twitterを主としたソーシャルメディアのテキストデータに対して従来のNLP手法を用いた場合、良い結果が得られないことが多い。特にTwitterのような短文投稿サイトでは、短い文の中に砕けた表現やスペルミス、絵文字といった様々な表現が含まれており、単語ベース(辞書ベース)では対応できないことが多い。文字ベースのニューラルネットワークを用いることで、未知語に対しても頑強なシステムを構築することができている。

## 3. 技術や手法の"キモ"はどこにある？

* 文字ベースで構成したlookup tableを用いたEmbedding
* Bi-directional Gated Recrrent Unit(Bi-GRU)を用いて2方向からGRU操作を行う
* Bi-GRUで処理したベクトルがTweetのEmbeddingとなっている

## 4. どうやって有効だと検証した？

従来の単語ベースと文字ベースである提案手法について検証を行った。実験に利用するTwitterコーパスはすべて英語のもので、URLなどを除いている。単語ベース・文字ベースどちらとも同じEncoder構造で実験を行ったところ、文字ベースである提案手法が単語ベースのモデルよりも良い結果を出した。

## 5. 議論はあるか？

通常ではあまり現れない単語が含まれているデータセット(RW)を用いて実験を行ったところ、単語ベースのモデルより文字ベースのモデルのほうがとても良い結果が出た。

今回は英語のTweetに絞って実験を行っているが、文字ベースのモデルは特定の言語で必要な前処理などがいらないため、他言語においても有効であると考えられている。

今後の研究として、文字レベルのデコーダーモデルを用いてハッシュタグを予測するといったものが考えられる。これが実現できれば、学習データで現れないような未知のハッシュタグについても予測ができるのではないだろうか。

## 6. 次に読むべき論文はあるか？

* [Chung, J., Gulcehre, C., Cho, K., & Bengio, Y. (2014). Empirical evaluation of gated recurrent neural networks on sequence modeling. arXiv preprint arXiv:1412.3555.](https://arxiv.org/abs/1412.3555)  
  提案手法で用いているBi-GRUはこの論文を参考に構築されている。

* [Ling, W., Luís, T., Marujo, L., Astudillo, R. F., Amir, S., Dyer, C., ... & Trancoso, I. (2015). Finding function in form: Compositional character models for open vocabulary word representation. arXiv preprint arXiv:1508.02096.](https://arxiv.org/abs/1508.02096)  
  文字ベースのBi-LSTMを提案していて、lookup tableを用いている。

### 論文情報・リンク

* [Dhingra, B., Zhou, Z., Fitzpatrick, D., Muehl, M., & Cohen, W. W. (2016). Tweet2vec: Character-based distributed representations for social media. arXiv preprint arXiv:1605.03481.](https://arxiv.org/abs/1605.03481)
