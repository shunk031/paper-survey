---
layout: post
title:  "Joint Embedding of Words and Labels for Text Classification"
date:   2018-06-17
categories: NLP
---

## 1. どんなもの？

テキスト分類の際に教師ラベルのembeddingと単語のembeddingを組み合わせたattentionの枠組みを用いる、Label-Embedding Attentive Model (LEAM) を提案。

## 2. 先行研究と比べてどこがすごいの？

画像認識分野および自然言語処理分野において、label embeddingを用いたさまざまな枠組みが提案されてきた。近年の自然言語処理分野では単語embeddingやattentionを用いることで、テキスト分類等のタスクの精度向上が示されてきた。
本研究では効果的なattentionモデル構築のためにlabel embeddingを学習する、LEAMを提案している。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1]({{ site.baseurl }}/assets/img/nlp/Joint-Embedding-of-Words-and-Labels-for-Text-Classification/figure1.png)

- 単語embedding $${\bf V}$$ と label embedding $${\bf C}$$ から `compatibility` $${\bf G}$$ を計算
- softmaxを用いて $${\bf G}$$ をnormalizeしたattention $$\beta$$ を計算
- 単語embeddingとattentionの重み付け平均を計算したdocument embedding $$z$$ を用いてテキスト分類を行う

## 4. どうやって有効だと検証した？

AGNews、Yelp Review Full、Yelp Review Polarity、DBPedia、Yahoo! Answers Topicの5つのデータセットを用いている。
ベースラインのモデルとしてBag-of-words、Shallow/Large word CNN、LSTM、SA-LSTM、Deep CNN、SWEM、fastText、HAN、Bi-BloSANとテキスト分類の精度を比較している。

上記に加えて医療テキストデータセットであるMIMIC-IIIを用いた実践的な評価を行っている。

## 5. 議論はあるか？

- モデルのパラメータ数と学習時間について
  - SWEMに次いで少ないパラメータ数と学習時間を実現している
- label embeddingの有効性について
  - 学習から得られたlabel embeddingとdocument embeddingをt-SNEで可視化すると、クラスに対応するlabel embeddingとdocument embeddingに強い相関が見られた
  ![Figure 3]({{ site.baseurl }}/assets/img/nlp/Joint-Embedding-of-Words-and-Labels-for-Text-Classification/figure3.png)
- 医療テキストに対する有効性について
  - attentionを可視化すると、医療に関連する語がハイライトされていることが示されている。
  ![Figure 4]({{ site.baseurl }}/assets/img/nlp/Joint-Embedding-of-Words-and-Labels-for-Text-Classification/figure4.png)

## 6. 次に読むべき論文はあるか？

- 画像認識分野におけるlabel embedding
  - 画像分類
    - [Akata, Zeynep, et al. "Label-embedding for image classification." IEEE transactions on pattern analysis and machine intelligence 38.7 (2016): 1425-1438.](http://ieeexplore.ieee.org/abstract/document/7293699/)
  - マルチモーダル
    - [Frome, Andrea, et al. "Devise: A deep visual-semantic embedding model." Advances in neural information processing systems. 2013.](http://papers.nips.cc/paper/5204-devise-a-deep-visual-semantic-embedding-model)
	- [Kiros, Ryan, Ruslan Salakhutdinov, and Richard S. Zemel. "Unifying visual-semantic embeddings with multimodal neural language models." arXiv preprint arXiv:1411.2539 (2014).](https://arxiv.org/abs/1411.2539)
  - 画像中のテキスト認識
    - [Rodriguez-Serrano, Jose A., Florent Perronnin, and France Meylan. "Label embedding for text recognition." Proceedings of the British Machine Vision Conference. 2013.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.433.2642&rep=rep1&type=pdf)
  - Zero-shot learning
    - [Palatucci, Mark, et al. "Zero-shot learning with semantic output codes." Advances in neural information processing systems. 2009.](http://papers.nips.cc/paper/3650-zero-shot-learning-with-semantic-output-codes)
	- [Yogatama, Dani, Daniel Gillick, and Nevena Lazic. "Embedding methods for fine grained entity type classification." Proceedings of the 53rd Annual Meeting of the Association for Computational Linguistics and the 7th International Joint Conference on Natural Language Processing (Volume 2: Short Papers). Vol. 2. 2015.](http://www.aclweb.org/anthology/P15-2048)
	- [Ma, Yukun, Erik Cambria, and Sa Gao. "Label embedding for zero-shot fine-grained named entity typing." Proceedings of COLING 2016, the 26th International Conference on Computational Linguistics: Technical Papers. 2016.](http://www.aclweb.org/anthology/C16-1017)
- 自然言語処理におけるlabel embedding
  - Heterogeneous networkによるlabel embedding
    - [Tang, Jian, Meng Qu, and Qiaozhu Mei. "Pte: Predictive text embedding through large-scale heterogeneous text networks." Proceedings of the 21th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. ACM, 2015.](https://dl.acm.org/citation.cfm?id=2783307)
  - マルチタスク学習
    - [Zhang, Yizhe, et al. "Deconvolutional paragraph representation learning." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/7005-deconvolutional-paragraph-representation-learning)
- ベースラインのモデルについて
  - Bag-of-words、Shallow/Large word CNN、LSTM
    - [Zhang, Xiang, Junbo Zhao, and Yann LeCun. "Character-level convolutional networks for text classification." Advances in neural information processing systems. 2015.](http://papers.nips.cc/paper/5782-character-level-convolutional-networks-for-text-classifica)
  - SA-LSTM
    - [Dai, Andrew M., and Quoc V. Le. "Semi-supervised sequence learning." Advances in Neural Information Processing Systems. 2015.](http://papers.nips.cc/paper/5949-semi-supervised-sequence-learning)
  - Deep CNN
    - [Conneau, Alexis, et al. "Very deep convolutional networks for text classification." Proceedings of the 15th Conference of the European Chapter of the Association for Computational Linguistics: Volume 1, Long Papers. Vol. 1. 2017.](http://www.aclweb.org/anthology/E17-1104)
  - SWEM
    - [Shen, Dinghan, et al. "Baseline needs more love: On simple word-embedding-based models and associated pooling mechanisms." arXiv preprint arXiv:1805.09843 (2018).](https://arxiv.org/abs/1805.09843)
  - HAN
    - [Yang, Zichao, et al. "Hierarchical attention networks for document classification." Proceedings of the 2016 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies. 2016.](http://www.aclweb.org/anthology/N16-1174)
  - Bi-BloSAN
    - [Shen, Tao, et al. "Bi-directional block self-attention for fast and memory-efficient sequence modeling." arXiv preprint arXiv:1804.00857 (2018).](https://arxiv.org/abs/1804.00857)
	
### 論文情報・リンク

- [Wang, Guoyin, et al. "Joint Embedding of Words and Labels for Text Classification." arXiv preprint arXiv:1805.04174 (2018).](https://arxiv.org/pdf/1805.04174)
