---
layout: post
title: "Which Encoding is the Best for Text Classification in Chinese, English, Japanese and Korean?"
date:   2017-09-24
categories: NLP
---

## 1. どんなもの？

中国語・日本語・韓国語においてテキストのエンコーディング単位(UTF-8 bytes，文字，単語，ローマ字化した単語)が文書分類でそれぞれどのような効果を出すか実証的に比較を行った．

## 2. 先行研究と比べてどこがすごいの？

英語の文では単語同士の区切りが明確であるが，中国語や日本語，韓国語(CJK)といった言語では単語と単語の境界線が不明瞭である．これは単語をベースとした様々な自然言語処理の手法を適用しようとする際に困難となる．
先行研究では文字単位のエンコーディングを用いてConvolutional Neural Networks(CNN)で処理を行うものが提案されているが，CJKでは文字種の多さが原因で直接適応することは難しい．

本研究では各テキストエンコーディングに対して，473のモデルと14の大規模なデータセットを使用して詳細に検証を行っている．

## 3. 技術や手法の"キモ"はどこにある？

* 複数のエンコーディングと分類器を網羅的に検証
  * CNNを用いた文字表現のエンコーディングと分類
	* GlyphNet
	  * 文字を画像とした文字画像を畳み込んで分類を行う．
	* OneHotNet
	  * テキストをbyte列とみなしてbyteレベルにエンコードを行い，畳み込んで分類を行う．
	  * ローマ字化を用いてエンコードを行い，畳み込んで分類を行う．
	* EmbedNet
	  * OneHotNetの前段にEmbedding層を追加している．
  * 線形モデルを用いた分類
	* ロジスティック回帰を用いて分類を行う．
  * fastTextを用いた分類

## 4. どうやって有効だと検証した？

以下のデータセットと前処理方法と前処理を利用してモデルの検証を行っている．

### 検証したモデルについて
  * GlyphNet
	* Large
	* Small
  * OneHostNet
	* Byte (Large/Small)
    * Romanized (Large/Small)
  * EmbedNet
	* Character (Large/Small)
    * Byte (Large/Small)
	* Romanized (Large/Small)
	* Word (Large/Small)
	* Romanized Word (Large/Small)
  * Linear model 
	* Character
	  * 1-gram (plain/tfidf)
	  * 5-gram (plain/tfidf)
    * Word
	  * 1-gram (plain/tfidf)
	  * 5-gram (plain/tfidf)
	* Romanized Word
	  * 1-gram (plain/tfidf)
	  * 5-gram (plain/tfidf)
  * fastText
	* Character
	  * 1-gram (plain/tfidf)
	  * 5-gram (plain/tfidf)
    * Word
	  * 1-gram (plain/tfidf)
	  * 5-gram (plain/tfidf)
	* Romanized Word
	  * 1-gram (plain/tfidf)
	  * 5-gram (plain/tfidf)
  
### データセット一覧
  
| データセット | 詳細                                                     | 言語   | 
|--------------|----------------------------------------------------------|:------:|
| Dianping     | [https://www.dianping.com/](https://www.dianping.com/)   | 中国語 |
| JD           | [http://www.jd.com/](http://www.jd.com/)                 | 中国語 |
| Rakuten      | [https://www.rakuten.co.jp/](https://www.rakuten.co.jp/) | 日本語 |
| 11st         | [http://www.11st.co.kr/](http://www.11st.co.kr/)         | 韓国語 |
| Amazon       | [https://www.amazon.com/](https://www.amazon.com/)       | 英語   |
| Ifeng        | [http://www.ifeng.com/](http://www.ifeng.com/)           | 中国語 |
| Chinanews    | [http://chinanews.com/](http://chinanews.com/)           | 中国語 |
| NYTimes      | [https://www.nytimes.com/](https://www.nytimes.com/)     | 英語   |
| Joint        | [JD](http://www.jd.com/), [Rakuten](https://www.rakuten.co.jp/), [11st](http://www.11st.co.kr/), [Amazon](https://www.amazon.com/)  | 複数   |

### 単語分割とローマ字化(前処理)

| 言語   | 分かち書き                                            | ローマ字化                                                           |
|--------|-------------------------------------------------------|----------------------------------------------------------------------|
| 中国語 | [jieba (ver. 0.38)](https://github.com/fxsjy/jieba)   | [pypinyin (ver. 0.12)](https://github.com/mozillazg/python-pinyin)   |
| 日本語 | [MeCab (ver. 0.996)](http://taku910.github.io/mecab/) | [python-romkan (ver. 0.2.1)](https://www.soimort.org/python-romkan/) |
| 韓国語 | [KoNLPy](http://konlpy.org/en/v0.4.4/)                | [hanja (ver. 0.1.1)](https://github.com/suminb/hanja), [hangul-romanize](https://github.com/youknowone/hangul-romanize) |

## 5. 議論はあるか？

* CJKにおいて，文字レベルのn-gramを用いたfastTextが一番良い精度を記録した．また英語において，単語単位のn-gramを用いたfastTextが一番良い精度を記録した．
* CJKの単語単位のエンコーディングは完璧な分かち書きがなされていなくても，線形モデルやfastTextで比較的良い結果となっている．
* CNNにおける最適なエンコーディングはbyte単位のone hotエンコーディングであった．これはCNNが低レベルの表現からテキストを解釈できていると考えられ，複数言語に対しても一貫性のある統一された表現を学習していると考えられる．
* fastTextは線形モデルよりも表現能力がないにもかかわらず，CNNよりも過学習しやすい傾向がある．
* 本研究で使用されたデータセットは [http://xzh.me/](http://xzh.me/) で公開される模様

## 6. 次に読むべき論文はあるか？

文字画像を用いた文書分類について
* [D. Shimada, R. Kotani, and H. Iyatomi. Document classification through image-based character embedding and wildcard training. In 2016 IEEE International Conference on Big Data (Big Data), pages 3922–3927, Dec 2016. doi: 10.1109/BigData.2016.7841067.](http://ucrel.lancs.ac.uk/bignlp2016/Shimada.pdf)

文字のone-hotエンコーディングを用いた文書分類について
* [Xiang Zhang, Junbo Zhao, and Yann LeCun. Character-level convolutional networks for text classification. In Advances in neural information processing systems, pages 649–657, 2015.](http://papers.nips.cc/paper/5782-character-level-convolutional-networks-for-text-classification.pdf)

fastTextについて
* [Armand Joulin, Edouard Grave, Piotr Bojanowski, and Tomas Mikolov. Bag of tricks for efficient text classification. arXiv preprint arXiv:1607.01759, 2016.](https://arxiv.org/pdf/1607.01759)

### 論文情報・リンク

* [Zhang, Xiang, and Yann LeCun. "Which Encoding is the Best for Text Classification in Chinese, English, Japanese and Korean?." arXiv preprint arXiv:1708.02657 (2017).](https://arxiv.org/pdf/1708.02657)
