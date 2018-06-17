---
layout: post
title:  "Learn to Pay Attention"
date:   2018-06-16
categories: CV
---

## 1. どんなもの？

画像認識に対して学習可能なattention機構をCNNに導入し、baseline手法を超える精度を実現

## 2. 先行研究と比べてどこがすごいの？

Convolutional Neural Network (CNN) は画像処理分野で素晴らしい結果を残しているが、こうした問題に対してモデルが推論する過程が不透明であり、結果の考察が難しい。
そこで先行研究ではモデルの解釈性の向上のために、推論する画像のどの部分に注目しているかを可視化する手法が複数提案されている。
しかしながらこれらの手法は学習済みのモデルに対してのみ適用可能という制限がある。

Attention機構は学習時に入力のどの部分に注視するかを学習することが可能であり、機械翻訳や画像に対する説明文自動生成(キャプショニング)、VQAなどにおいて精度向上に寄与している。

Attentionを計算する場合にクエリが必要な画像キャプションやVQAに対して、本研究ではattentionを推定するためにglobalな画像表現を利用し、分類問題においてもattention機構を導入することに成功している。

## 3. 技術や手法の"キモ"はどこにある？

![Figure 2]({{ site.baseurl }}/assets/img/cv/Learn-to-Pay-Attention/figure2.png)

`local feature vector` と `global feature vector` を用いたattention機構を実現した。

- 畳み込み層から活性化関数を通して得られるlocal feature vector $$\mathcal{L}$$ と最終全結合層の出力であるglobal feature vector $$\mathcal{G}$$ から、`compatibility score` $$C\left(\hat{\mathcal{L}}, \mathcal{G} \right)$$ を計算し、各local feature vectorの重要度 $$\mathcal{A}$$ (attention) を算出する
- 重要度 $$\mathcal{A}$$ とlocal feature vectorとの重み付き平均 $$\mathcal{G}_a$$ を計算する
- 各畳み込み層から得られる複数の $$\mathcal{G}_a$$ をconcatしたベクトルを用いて分類を行う
- `compatibility socre` を計算する際に用いる $$\mathcal{C}$$ は ドット積 を利用した

## 4. どうやって有効だと検証した？

ベースラインとして、先行研究のVGG-GAPおよびVGG-PAN、ResNet164と、VGG/ResNetに対して本研究のattention機構を導入できるようパラメータを調整したネットワークを比較している。
global feature vectorとlocal feature vectorに対してcompatibility scoreを計算する際にドット積を用いた`dp`と、パラメータを用いた`pc`を比較している。

評価に用いるデータセットはCIFAR10/100、CUB-200-2011、SVHN等を利用している。また導入したattention機構がadversarialなサンプルに対してもロバストであることを示す実験も行っている。

## 5. 議論はあるか？

![Figure 3]({{ site.baseurl }}/assets/img/cv/Learn-to-Pay-Attention/figure3.png)

提案手法 (proposed) と既存手法 (existing) それぞれのattention mapを可視化した結果である。提案手法がよりdiscriminativeな形で物体を認識していることが示されている。

![Figure 4]({{ site.baseurl }}/assets/img/cv/Learn-to-Pay-Attention/figure4.png)

CUB-200データセットで学習した提案手法の結果である。10層目は目の特徴を捉えており、13層目は体全体を捉えていることが示されている。

## 6. 次に読むべき論文はあるか？

- モデルの解釈性向上のための可視化手法
  - [Simonyan, Karen, Andrea Vedaldi, and Andrew Zisserman. "Deep inside convolutional networks: Visualising image classification models and saliency maps." arXiv preprint arXiv:1312.6034 (2013).](https://arxiv.org/abs/1312.6034)
  - [Cao, Chunshui, et al. "Look and think twice: Capturing top-down visual attention with feedback convolutional neural networks." Proceedings of the IEEE International Conference on Computer Vision. 2015.](http://openaccess.thecvf.com/content_iccv_2015/papers/Cao_Look_and_Think_ICCV_2015_paper.pdf)
  - Global average pooling (GAP)
    - [Zhou, Bolei, et al. "Learning deep features for discriminative Computer." localization Vision and Pattern Recognition (CVPR), 2016 IEEE Conference on. IEEE, 2016.](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Zhou_Learning_Deep_Features_CVPR_2016_paper.pdf)
- Attention機構が用いられている先行研究
  - 属性予測 (Progressive Attention Networks (PAN))
    - [Hongsuck Seo, Paul, et al. "Progressive Attention Networks for Visual Attribute Prediction." arXiv preprint arXiv:1606.02393 (2016).](http://adsabs.harvard.edu/abs/2016arXiv160602393H)
  - 機械翻訳
    - [Bahdanau, Dzmitry, Kyunghyun Cho, and Yoshua Bengio. "Neural machine translation by jointly learning to align and translate." arXiv preprint arXiv:1409.0473 (2014).](https://arxiv.org/abs/1409.0473)
  - 画像に対する説明文自動生成
    - [Xu, Kelvin, et al. "Show, attend and tell: Neural image caption generation with visual attention." International Conference on Machine Learning. 2015.](http://www.jmlr.org/proceedings/papers/v37/xuc15.pdf)
	- [You, Quanzeng, et al. "Image captioning with semantic attention." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2016.](http://openaccess.thecvf.com/content_cvpr_2016/papers/You_Image_Captioning_With_CVPR_2016_paper.pdf)
	- [Mun, Jonghwan, Minsu Cho, and Bohyung Han. "Text-Guided Attention Model for Image Captioning." AAAI. 2017.](http://www.aaai.org/ocs/index.php/AAAI/AAAI17/paper/download/14888/14305)
  - Visual question answering (VQA)
    - [Xu, Huijuan, and Kate Saenko. "Ask, attend and answer: Exploring question-guided spatial attention for visual question answering." European Conference on Computer Vision. Springer, Cham, 2016.](https://link.springer.com/chapter/10.1007/978-3-319-46478-7_28)
	- [Yang, Zichao, et al. "Stacked attention networks for image question answering." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2016.](https://www.cv-foundation.org/openaccess/content_cvpr_2016/app/S01-03.pdf)
    

### 論文情報・リンク

- [Jetley, Saumya, et al. "Learn to pay attention." arXiv preprint arXiv:1804.02391 (2018).](https://arxiv.org/abs/1804.02391)
