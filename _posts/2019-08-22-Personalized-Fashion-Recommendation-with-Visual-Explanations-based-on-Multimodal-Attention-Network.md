---
layout: post
title:  "Personalized Fashion Recommendation with Visual Explanations based on Multimodal Attention-Network"
date:   2019-08-22
categories: Others
---

## 1. どんなもの？

ユーザー単位でファッション画像・レビューテキストを用いた解釈性のある注意機構つきファッション商品推薦システムを提案。

## 2. 先行研究と比べてどこがすごいの？

ファッションアイテムのオンラインショッピングがますます盛んになっており、ファッション業界や学術界ではファッションに対する推薦が注目を集めている。

![Figure 1]({{ site.baseurl }}/assets/img/others/Personalized-Fashion-Recommendation-with-Visual-Explanations-based-on-Multimodal-Attention-Network/figure1.png)

ファッション商品には画像の他に商品のレビューが付与されている。
- ユーザ A は首元にフォーカスしている
- ユーザ B は服のポケットにフォーカスしている

ファッション画像全体の特徴を捉えるのではなく、ユーザーごといくつかの領域にフォーカスする必要がある。

先行研究ではファッション商品の推薦を行うモデルにおいて、以下の 3 つの点で疑問点が残る:
- ファッション画像全体の特徴を捉えるのではなく、ユーザごとにいくつかのサブ領域に着目すべき
- 複数の要素が組み合わさったファッション画像をそのままエンコードするのは、モデルの学習時にノイズとなりうる
- ユーザの勾配体験向上のためには、推薦の根拠の提示や説明性の向上が重要である

これら 3 つの疑問点を解決し、より効果的なファッション推薦システムを行うモデルが必要である。
しかしこれらの疑問点を解決するには、以下の問題点が存在する:
- 情報量の少ない教師信号
  - 先行研究ではクリック等のスパースで暗黙的なフィードバックを教師信号として使用している
- 個々人に合った商品画像の興味領域の選択
  - 個々人の興味を元にファッション画像に対してアノテーションするのは時間がかかり、そもそも教師ラベルを定義するのも難しい
- 評価データセットの欠如
  - 特に説明性のある可視化結果に対する評価に利用できるデータセットは非常に少ない

本研究ではこれらの問題に対処するため、Visually Explanable Collaborative Filtering (VECF) を提案している。
  
## 3. 技術や手法の"キモ"はどこにある？

![Figure 2]({{ site.baseurl }}/assets/img/others/Personalized-Fashion-Recommendation-with-Visual-Explanations-based-on-Multimodal-Attention-Network/figure2.png)

### Fine-grained Visual Preference Modeling
- ファッション画像に対して事前学習済み VGG19 の `conv5` ブロック (最終ブロック) を画像特徴量として利用
  - 計算リソースが許すなら fine-tuning してもよいが今回は実施していない
- ユーザ単位の fine-grained な視覚特徴を考慮するために visual attention 機構を導入
  - 推薦時に視覚的な説明性を提供することも可能

### Review enhanced Model Supervision
- ファッション商品のレビューテキストにはユーザの趣向が含まれている
  - クリック等のスパースで暗黙的なフィードバックと比較すると、よりリッチな情報を含んでいる
  - 弱教師 (weak supervision signal) としてレビュー情報を使用し、推薦のパフォーマンスや説明性を向上させる
- LSTM をベースに、抽出した画像特徴を concat して学習させる
  - 論文中の図では GRU と書いてあるが本文では LSTM を使用していると記述あり
  - このコンポーネントは推薦スコアの予測には直接必要ないため、より計算量的な観点で実践的である

ハイパーパラメータ $$\beta$$ によって暗黙的なフィードバックかレビューテキストのトレードオフを決める。
  
## 4. どうやって有効だと検証した？
ファッションデータセットとして Amazon.com をベースとした公開データセットを使用し、ベースラインの手法と提案手法を比較している。またレビューテキストを考慮しないモデル VECF(-rev)と visual attention を適用しない VECF(-att)を比較対象に追加している。

## 5. 議論はあるか？
ファッション推薦システムにおける視覚的な説明性を評価するのは著者らが知る限り本研究が初であるため、評価できるデータセットもまた存在しない。

クラウドソーシングを使ってこれらを評価できるデータセットを構築した。
商品レビューからユーザが 7x7 の格子に分けたファッション画像のどの領域に着目しているかをワーカーがラベリングした。

- 定量的評価
  - VECF と VECF(-rev)に対して視覚的説明性を比較
- 定量的評価
  - VECF と VECF(-rev)における attention の可視化を定性的に評価

![Figure 3]({{ site.baseurl }}/assets/img/others/Personalized-Fashion-Recommendation-with-Visual-Explanations-based-on-Multimodal-Attention-Network/figure3.png)

## 6. 次に読むべき論文はあるか？
説明性のあるレコメンデーションについて

- HFT
  - [McAuley, Julian, and Jure Leskovec. "Hidden factors and hidden topics: understanding rating dimensions with review text." Proceedings of the 7th ACM conference on Recommender systems. ACM, 2013.](https://dl.acm.org/citation.cfm?id=2507163)
- RBLT
  - [Tan, Yunzhi, et al. "Rating-boosted latent topics: Understanding users and items with ratings and reviews." IJCAI. Vol. 16. 2016.](https://www.ijcai.org/Proceedings/16/Papers/375.pdf)
- D-attn
  - [Seo, Sungyong, et al. "Interpretable convolutional neural networks with dual local and global attention for review rating prediction." Proceedings of the Eleventh ACM Conference on Recommender Systems. ACM, 2017.](https://dl.acm.org/citation.cfm?id=3109890)
- NARRE
  - [Chen, Chong, et al. "Neural attentional rating regression with review-level explanations." Proceedings of the 2018 World Wide Web Conference. International World Wide Web Conferences Steering Committee, 2018.](https://dl.acm.org/citation.cfm?id=3186070)
- CARL
  - [Wu, Libing, et al. "A context-aware user-item representation learning for item recommendation." ACM Transactions on Information Systems (TOIS) 37.2 (2019): 22.](https://dl.acm.org/citation.cfm?id=3298988)
- MPCN
  - [Tay, Yi, Anh Tuan Luu, and Siu Cheung Hui. "Multi-pointer co-attention networks for recommendation." Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining. ACM, 2018.](https://dl.acm.org/citation.cfm?id=3220086)
- DER
  - [Chen, Xu, Yongfeng Zhang, and Zheng Qin. "Dynamic Explainable Recommendation based on Neural Attentive Models." Proceedings of the AAAI Conference on Artificial Intelligence. Vol. 33. 2019.](https://www.aaai.org/ojs/index.php/AAAI/article/view/3768)
- NRT
  - [Li, Piji, et al. "Neural rating regression with abstractive tips generation for recommendation." Proceedings of the 40th International ACM SIGIR conference on Research and Development in Information Retrieval. ACM, 2017.](https://dl.acm.org/citation.cfm?id=3080822)
- gC2S
  - [Tang, Jian, et al. "Context-aware natural language generation with recurrent neural networks." arXiv preprint arXiv:1611.09900 (2016).](https://arxiv.org/abs/1611.09900)
- NOR
  - [Lin, Yujie, et al. "Explainable Outfit Recommendation with Joint Outfit Matching and Comment Generation." IEEE Transactions on Knowledge and Data Engineering (2019).](https://ieeexplore.ieee.org/abstract/document/8669792/)
- KSR
  - [Huang, Jin, et al. "Improving sequential recommendation with knowledge-enhanced memory networks." The 41st International ACM SIGIR Conference on Research & Development in Information Retrieval. ACM, 2018.](https://dl.acm.org/citation.cfm?id=3210017)
- ECFKG
  - [Ai, Qingyao, et al. "Learning heterogeneous knowledge base embeddings for explainable recommendation." Algorithms 11.9 (2018): 137.](https://www.mdpi.com/1999-4893/11/9/137)
- RippleNet
  - [Wang, Hongwei, et al. "Ripplenet: Propagating user preferences on the knowledge graph for recommender systems." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.](https://dl.acm.org/citation.cfm?id=3271739)
- KPRN
  - [Wang, Xiang, et al. "Explainable reasoning over knowledge graphs for recommendation." Proceedings of the AAAI Conference on Artificial Intelligence. Vol. 33. 2019.](https://www.aaai.org/ojs/index.php/AAAI/article/view/4470)
- KTUP
  - [Cao, Yixin, et al. "Unifying Knowledge Graph Learning and Recommendation: Towards a Better Understanding of User Preferences." The World Wide Web Conference. ACM, 2019.](https://dl.acm.org/citation.cfm?id=3313705)
    
### 論文情報・リンク
- [Chen, Xu, et al. "Personalized Fashion Recommendation with Visual Explanations based on Multimodal Attention Network: Towards Visually Explainable Recommendation." Proceedings of the 42nd International ACM SIGIR Conference on Research and Development in Information Retrieval. ACM, 2019.](https://dl.acm.org/citation.cfm?id=3331254)
