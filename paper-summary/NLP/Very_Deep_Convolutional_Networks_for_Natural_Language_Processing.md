# Very Deep Convolutional Networks for Natural Language Processing

## 1. どんなもの？

[先行研究](https://arxiv.org/abs/1509.01626)について、29層以上の畳み込み層を持ったネットワークをテキスト分類に適用してみた。

## 2. 先行研究と比べてどこがすごいの？

畳み込み層の数を飛躍的に増やすことで、先行研究より良い結果を出すことができている。

## 3. 技術や手法の"キモ"はどこにある？

* ResNetのようなショートカットを用いたアーキテクチャを採用している。
* 先行研究で用いていたシソーラスによるData Augumentationを用いていない。  
  Data Augumentationすることでより良い結果になることが示唆されている。
* Drop outを用いていない

## 4. どうやって有効だと検証した？

先行研究で実験を行っていたデータセットと同じものに対して、今回の手法を用いて実験を行っている。結果、先行研究よりも良い結果を出すことができている。

## 5. 議論はあるか？

* 今回の手法のように、より層を深くしたモデルは規模の大きいデータセットに対してとてもよい結果を出している。
* 逆に規模が小さいデータに対しては既存の手法が勝つ場合もある。
* 層を深くすることでより良い結果を出した。
* Max-poolingが他のpooling手法よりも良い結果を出した。
* ResNetで用いられているショートカットのテクニックが有効である。

## 6. 次に読むべき論文はあるか？

* [Yoshua Bengio and Rejean Ducharme. A neural probabilistic language model. In NIPS, volume
13, pages 932–938, 2001.](http://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf)
* [Ronan Collobert and Jason Weston. A unified architecture for natural language processing: deep neural networks with multitask learning. In ICML, pages 160–167, 2008.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.149.8551&rep=rep1&type=pdf)
* [Ronan Collobert, Jason Weston Léon Bottou, M. Karlen, K. Kavukcuoglu, and P. Kuksa. Natural language processing (almost) from scratch. JMLR, pages 2493–2537, 2011.](http://www.jmlr.org/papers/volume12/collobert11a/collobert11a.pdf)
* [Cícero Nogueira dos Santos and Maíra Gatti. Deep convolutional neural networks for sentiment analysis of short texts. In Coling, pages 69–78, 2014.](http://www.aclweb.org/anthology/C14-1008)
* [Nal Kalchbrenner, Edward Grefenstette, and Phil Blunsom. A convolutional neural network for modelling sentences. In http://arxiv.org/abs/1404. 2188 , 2014.](https://arxiv.org/abs/1404.2188)
* [Xiang Zhang, Junbo Zhao, and Yann LeCun. Character-level convolutional networks for text classification. In NIPS, pages 649–657, 2015.](https://arxiv.org/abs/1509.01626)

### 論文情報・リンク

* [Alexis Conneau, Holger Schwenk, Loïc Barreau and Yann Lecun. "Very deep convolutional networks for natural language processing." arXiv preprint arXiv:1606.01781, 2016](https://arxiv.org/abs/1606.01781)
