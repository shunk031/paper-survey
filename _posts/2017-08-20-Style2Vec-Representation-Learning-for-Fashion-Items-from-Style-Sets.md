---
layout: post
title: "Style2Vec: Representation Learning for Fashion Items from Style Sets"
date:   2017-08-20
categories: CV
---

## 1. どんなもの？

ファッションアイテムの画像から潜在的なスタイルを学習するStyle2Vecを提案．

## 2. 先行研究と比べてどこがすごいの？

自然言語処理の領域で成果を上げているWord2Vecは，与えられた文章に対して単語間の共起確率を最大化するよう単語の分散表現を学習する．

本研究のStyle2VecではWord2Vecからヒントを得ている．以下のようなStyle Setというユーザーの行動を元に作られたデータに対してファッションアイテムを単語とみなし，共起確率を最大化するよう分散表現を学習する．

![Figure 1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Style2Vec_Representation_Learning_for_Fashion_Items_from_Style_Sets/figure1.png)

## 3. 技術や手法の"キモ"はどこにある？

![Figure 2](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Style2Vec_Representation_Learning_for_Fashion_Items_from_Style_Sets/figure2.png)

* 2つのネットワークを用いてファッション商品のスタイルを学習
  * ネットワークのアーキテクチャはVGGNetを使用
	* 1つはターゲットとなるアイテムをベクトル表現にするために使用
	* もう1つはターゲットと同じStyle Set内にあるアイテムのうち，他のアイテムをベクトル表現にするために使用
  * ターゲットアイテムとStyle Set内のアイテムの内積を取り，Softmax関数で確率に変換する
  * ネッ感じるトワーク全体は対数確率の合計を最大化するよう学習させる
	* Softmaxの計算はコストが大きいため，negative samplingを利用
	
## 4. どうやって有効だと検証した？

有名なファッションサイト[Polyvore](https://www.polyvore.com/)から得られたデータを用いて，提案手法で学習したベクトル表現の可視化やスタイルの分類について評価を行っている．

* 学習したベクトル表現の可視化  
  ![Figure 3](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Style2Vec_Representation_Learning_for_Fashion_Items_from_Style_Sets/figure3.png)

* アナロジーテストの結果
  ![Figure 4](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/CV/Style2Vec_Representation_Learning_for_Fashion_Items_from_Style_Sets/figure4.png)

## 5. 議論はあるか？

* 学習したベクトル表現の可視化について
  * 形や色が似ているアイテムが同じクラスタになっている
  * アイテム画像が視覚的に似ていなくても、似ているコンテクストアイテムとマッチングした画像は、近くに横たわる可能性がある
* アナロジーテストの結果について
  * ファッション商品における曖昧な，色や形，パターンといった潜在的なスタイルを学習していることが分かる
* スタイルの分類について
  * 先行研究のSiameseCNNやDCGANNを用いたモデルよりも，提案手法であるStyle2Vecのほうがよりよい精度を出している

## 6. 次に読むべき論文はあるか？

SiameseCNNを用いたファッションアイテム間の共起を学習
* [Veit, Andreas, et al. "Learning visual clothing style with heterogeneous dyadic co-occurrences." Proceedings of the IEEE International Conference on Computer Vision. 2015.](http://www.cv-foundation.org/openaccess/content_iccv_2015/html/Veit_Learning_Visual_Clothing_ICCV_2015_paper.html)

DCGANを用いた教師なしのファッションアイテムの生成
* [Radford, Alec, Luke Metz, and Soumith Chintala. "Unsupervised representation learning with deep convolutional generative adversarial networks." arXiv preprint arXiv:1511.06434 (2015).](https://arxiv.org/pdf/1511.06434.pdf%C3%AF%C2%BC%E2%80%B0)

Heterogeneous Graphを用いたファッションアイテムの推薦
* [Lee, Hanbit, and Sang-goo Lee. "Style Recommendation for Fashion Items using Heterogeneous Information Network." RecSys Posters. 2015.](https://pdfs.semanticscholar.org/1361/e67dfa07e04e88970d8783b0815849a9064d.pdf)

行列分解を用いたファッションアイテムの推薦
* [Hu, Yang, Xi Yi, and Larry S. Davis. "Collaborative fashion recommendation: A functional tensor factorization approach." Proceedings of the 23rd ACM international conference on Multimedia. ACM, 2015.](http://dl.acm.org/citation.cfm?id=2806239)

### 論文情報・リンク

* [Lee, Hanbit, et al. "Style2Vec: Representation Learning for Fashion Items from Style Sets." arXiv preprint arXiv:1708.04014 (2017).](https://arxiv.org/abs/1708.04014)
