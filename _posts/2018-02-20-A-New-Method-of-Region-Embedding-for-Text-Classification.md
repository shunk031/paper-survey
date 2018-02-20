---
layout: post
title:  "A New Method of Region Embedding for Text Classification"
date:   2018-02-20
categories: NLP
---

## 1. どんなもの？

CNNやRNNを必要とせずに語順を考慮することができるLocal Context Unitを利用し、タスク固有の単語埋め込み表現を学習するRegion Embeddingを提案。

## 2. 先行研究と比べてどこがすごいの？

文書分類などのタスクにおいて単語の語順を考慮した単語表現にn-gramが用いられることが多いが、
特に $$ n $$ の値が大きいn-gramの場合、モデルが大きくなってしまったり、データスパースネス問題が起こる恐れがある。

近年ではn-gramを考慮した単語の分散表現を獲得するFastTextが提案されている。
また[Johnson & Zhang (2015)]({{ site.baseurl }}/summry/nlp/Semi-supervised-Convolutional-Neural-Networks-for-Text-Categorization-via-Region-Embedding)では
CNNベースのモデルを用いて単語表現を獲得するregion embeddingという手法を提案しているが、本研究のregion embeddingとは異なり、タスク依存でない点や、教師なし学習の枠組みで学習されている点で異なっている。

Attentionのみを使用したニューラル機械翻訳モデルであるTransformerは、CNNやRNNを用いずに語順を考慮し、文脈の特徴を学習できていることが示されている。

本研究ではTransformer参考に、ある単語の周辺のコンテキストを考慮できるLocal context unitを用いて単語の埋め込み表現を獲得するRegion Embeddingを提案し、文書分類タスクで精度が上がることを示している。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 1]({{ site.baseurl }}/assets/img/nlp/A-New-Method-of-Region-Embedding-for-Text-Classification/figure1.png)

- Region Embedding
  - テキスト中の小さな範囲(region)から、局所的な特徴を保持した表現を獲得したい
- Local Context Unit
  - ある単語の語順と周辺のコンテキストを学習するパラメータ
  - 通常のlook up tableを用いたword embedding $$ {\bf e}_{w_i} $$ とlocal context unit $$ {\bf K}_{W_i} $$を組み合わせた埋め込み表現 $$ p^{i}_{w_i} $$ を学習する
  
  $$
  \begin{align*}
    p^{i}_{w_i + t} = {\bf K}_{w_i, t} \odot {\bf e}_{w_i + t}
  \end{align*}
  $$

- Word-Context Region Embedding
  - regionの中心の語が前後のコンテキストから受ける影響に焦点を当てたemnedding手法
  - 語の出現順によって(特に否定語や強調語など)、意味が逆転する場合を上手く学習することを期待
- Context-Word Region Embedding
  - Word-Context Region Embeddingとは逆に、コンテキストがregionの中心語から受ける影響に焦点を当てている
- Region Embeddingを全結合層で分類

## 4. どうやって有効だと検証した？

8つのデータセットを用いて感情分析、新聞記事分類、QAなどのタスクに対して精度を比較している。
ベースラインのn-gram・TFIDFなどの従来の単語表現を用いたモデル、Char-CNN、Char-CRNN、VDCNN、D-LSTM、bigram-FastTextと先行研究のRegion Embeddingを用いた分類器を比較している。
8つのデータセットのうち6つのデータセットで最先端の結果を達成していることが示されている。

## 5. 議論はあるか？

- region size / embedding sizeを変えた場合について
  - 本研究ではregion sizeを7、embedding sizeを128に設定している
  - 複数サイズのregion embeddingを組み合わせることで僅かに精度が向上している
  - emnedding sizeを大きくすると従来のFastTextやCNNなどは過学習が見られるが、Region Embeddingはほかと比べてロバストであることが示されている
![Figure 2]({{ site.baseurl }}/assets/img/nlp/A-New-Method-of-Region-Embedding-for-Text-Classification/figure2.png)

- ある単語における周辺単語の共起について
  - "however"についてはhoweverの後が文書分類に重要であることを示している
  - "very"についてはveryの直後の語が重要である etc
  - local context unitが局所的な潜在意味を捉えていることが分かる
![Figure 3]({{ site.baseurl }}/assets/img/nlp/A-New-Method-of-Region-Embedding-for-Text-Classification/figure3.png)

- 感情分析におけるlocal context unitの効果の可視化
  - context unitがある場合、正しく形容詞が正しく係り、positive/negativeの判定が正しく行われるようになったことが示されている
![Table 4]({{ site.baseurl }}/assets/img/nlp/A-New-Method-of-Region-Embedding-for-Text-Classification/table4.png)

## 6. 次に読むべき論文はあるか？

- FastTextを用いたembeddingについて
  - [Joulin, Armand, et al. "Bag of tricks for efficient text classification." arXiv preprint arXiv:1607.01759 (2016).](https://arxiv.org/abs/1607.01759)
- CNNを用いたembeddingについて
  - [Johnson, Rie, and Tong Zhang. "Effective use of word order for text categorization with convolutional neural networks." arXiv preprint arXiv:1412.1058 (2014).](https://arxiv.org/abs/1412.1058)
- Transformerについて
  - [Vaswani, Ashish, et al. "Attention is all you need." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/7181-attention-is-all-you-need)
- ベースラインのモデルについて
  - Char-CNNについて
    - [Zhang, Xiang, Junbo Zhao, and Yann LeCun. "Character-level convolutional networks for text classification." Advances in neural information processing systems. 2015.](http://papers.nips.cc/paper/5782-character-level-convolutional-networks-for-text-classifica)
  - Char-CRNNについて
    - [Xiao, Yijun, and Kyunghyun Cho. "Efficient character-level document classification by combining convolution and recurrent layers." arXiv preprint arXiv:1602.00367 (2016).](https://arxiv.org/abs/1602.00367)
  - VDCNNについて
    - [Conneau, Alexis, et al. "Very deep convolutional networks for natural language processing." arXiv preprint arXiv:1606.01781 (2016).](https://arxiv.org/abs/1606.01781)
  - D-LSTMについて
    - [Yogatama, Dani, et al. "Generative and discriminative text classification with recurrent neural networks." arXiv preprint arXiv:1703.01898 (2017).](https://arxiv.org/abs/1703.01898)
- 予測における寄与単語の可視化について
  - [Li, Jiwei, et al. "Visualizing and understanding neural models in NLP." arXiv preprint arXiv:1506.01066 (2015).](https://arxiv.org/abs/1506.01066)

### 論文情報・リンク

- [Chao Qiao, Bo Huang, Guocheng Niu, Daren Li, Daxiang Dong, Wei He, Dianhai Yu, Hua Wu, "A New Method of Region Embedding for Text Classification," International Conference on Learning Representations, 2018](https://openreview.net/forum?id=BkSDMA36Z)
