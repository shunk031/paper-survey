# Deep Learning applied to NLP

## 1. どんなもの？

近年、コンピュータビジョンの分野で最先端の結果を残すConvolutional Neural Network(CNN)を自然言語処理タスクに適用し、優れたパフォーマンスを発揮した事例を調査する。

## 2. 先行研究と比べてどこがすごいの？

人間の脳の構造を模倣したとされるArtificial Neural Network(ANN)は、確率的言語モデリングや構文解析などで利用されてきた。画像認識分野で成功を収めたCNNはANNと似た構造で、畳み込み操作を用いることで局所的な特徴も捉えることができるものである。最近の研究ではこのCNNを自然言語処理タスクに適用することで、ANNが結果を残してきた言語処理タスクにおいて、遥かに凌ぐ素晴らしい結果を出している。

## 3. 技術や手法の"キモ"はどこにある？

ここでは、自然言語処理のさまざまなタスクについてCNNを適用した事例を取り上げていく。

### CNNを自然言語処理に適用する動機について

1. [Bitvai, Zsolt, and Trevor Cohn. "Non-Linear Text Regression with a Deep Convolutional Neural Network." ACL (2). 2015.](http://www.aclweb.org/anthology/P15-2#page=208)では、ANNはこれまで素晴らしい結果を残してきたが、とても規模の大きいデータが手に入るようになってきたため、大規模なデータセットでCNNを学習することでモデルのパラメータ数が多い場合でも効率よく学習を進めることができると考えられている。

### 基本的な自然言語処理について

1. [Zhu, Chenxi, et al. "A re-ranking model for dependency parser with recursive convolutional neural network." arXiv preprint arXiv:1505.05667 (2015).](https://arxiv.org/pdf/1505.05667)では、文や単語から統語論的および構成的意味表現を捉えることができる、Recursive Convolutional Neural Network(RCNN)が提案されている。

2. [Wang, Peng, et al. "Semantic Clustering and Convolutional Neural Network for Short Text Categorization." ACL (2). 2015.](http://www.aclweb.org/old_anthology/P/P15/P15-2058.pdf)では、セマンティッククラスタリングとCNNを用いて短い文章をモデリングする方法が提案されている。
3. [Francis-Landau, Matthew, Greg Durrett, and Dan Klein. "Capturing semantic similarity for entity linking with convolutional neural networks." arXiv preprint arXiv:1604.00734 (2016).](https://arxiv.org/abs/1604.00734)では、記述されている文脈と、対象となる固有表現との間の存在する意味の対応関係を捉えるCNN構造を提案している。

4. [Zhang, Rui, Honglak Lee, and Dragomir Radev. "Dependency sensitive convolutional neural networks for modeling sentences and documents." arXiv preprint arXiv:1611.02361 (2016).](https://arxiv.org/pdf/1611.02361)では、文や文書の両方を一般的な用途で分類できるシステムであるDependency Sensitive Convolutional Neural Networks(DSCNN)を提案している。

### 情報抽出について

1. [Chen, Yubo, et al. "Event Extraction via Dynamic Multi-Pooling Convolutional Neural Networks." ACL (1). 2015.](http://www.aclweb.org/anthology/P15-1017)では、単語から意味のある規則性を見つけ、そして文レベルで特徴を捉える複数のPooling層を持つCNNをベースとするフレームワークを採用している単語表現モデルを提案している。

2. [Nguyen, Thien Huu, and Ralph Grishman. "Event Detection and Domain Adaptation with Convolutional Neural Networks." ACL (2). 2015.](https://pdfs.semanticscholar.org/30d4/2515df2900edce9b386ea17e4a4e2584fd4c.pdf)では、文から特徴を自動的に学習する、イベント検出のためのCNNを提案している。教師データや特徴量への依存を最小化することで、エラーの伝播を緩和することができ、パフォーマンスを改善することができている。

3. [Vu, Ngoc Thang, et al. "Combining recurrent and convolutional neural networks for relation classification." arXiv preprint arXiv:1605.07333 (2016).](https://arxiv.org/pdf/1605.07333)では、「関係を分類するためのCNNの新しいコンテキスト表現」・「Ranking lossを導入したConnectionist bi-directional Recurrent Neural Network」・「シンプルな投票システムを導入したCNNとRNNのコンビネーションモデル」の3つの異なる手法について吟味している。

4. [Adel, Heike, Benjamin Roth, and Hinrich Schütze. "Comparing convolutional neural networks to traditional models for slot filling." arXiv preprint arXiv:1603.05157 (2016).](https://arxiv.org/pdf/1603.05157)では、slot fillingのコンテキストにおける関係分類を扱い、異なる設定で評価を行っている。

### 要約について

1. [Denil, Misha, et al. "Modelling, visualising and summarising documents with a single convolutional neural network." arXiv preprint arXiv:1406.3830 (2014).](https://arxiv.org/abs/1406.3830)では、意味を捉えるために重要な単語と文の順序を維持しながら、低次元のベクトル空間にembeddingすることによって、文書の意味を表現できるモデルを提案している。

### 機械翻訳について

1. [Tu, Zhaopeng, et al. "Context-dependent translation selection using convolutional neural network." arXiv preprint arXiv:1503.02357 (2015).](https://arxiv.org/pdf/1503.02357)では、CNNを用いて2つの言語の対となるフレーズ感の類似性を判断する、統計的機械翻訳の方法を提案している。

2. [Meng, Fandong, et al. "Encoding source language with convolutional neural network for machine translation." arXiv preprint arXiv:1503.01838 (2015).](https://arxiv.org/abs/1503.01838)では、CNNとゲート構造を利用したアーキテクチャを用いて、対象となる情報から関連する情報を要約することで、より体系的な処理を行えるように工夫している。

### 質問応答について

1. [Dong, Li, et al. "Question Answering over Freebase with Multi-Column Convolutional Neural Networks." ACL (1). 2015.](http://www.aclweb.org/website/old_anthology/P/P15/P15-1026.pdf)では、自動的に複数の側面から質問を解析する、multi-column CNN(MCCNN)を提案している。

2. [Severyn, Aliaksei, and Alessandro Moschitti. "Modeling relational information in question-answer pairs with convolutional neural networks." arXiv preprint arXiv:1604.01178 (2016).](https://arxiv.org/pdf/1604.01178)では、質問文と回答文の最適な表現を学習するCNNを提案している。

### 発話認識について

1. [Abdel-Hamid, Ossama, et al. "Convolutional neural networks for speech recognition." IEEE/ACM Transactions on audio, speech, and language processing 22.10 (2014): 1533-1545.](http://newiranians.ir/TASLP2339736-proof.pdf)では、どのようにCNNを発話認識に適用するかが述べられている。ここではHMMとCNNのハイブリッド構造が示されている。

2. [Palaz, Dimitri, and Ronan Collobert. Analysis of cnn-based speech recognition system using raw speech as input. No. EPFL-REPORT-210039. Idiap, 2015.](https://infoscience.epfl.ch/record/210039/files/Palaz_Idiap-RR-23-2015.pdf)では、最初の2層の畳み込み層でモデリングされた発話情報を理解するためにCNNを分析している。

3. [Song, William, and Jim Cai. End-to-end deep neural network for automatic speech recognition. Technical Report CS224D, University of Stanford, 2015.](https://pdfs.semanticscholar.org/528d/a8ef5cac3b69348b84a50ac2d596ddbee394.pdf)では、mel-filter bank特徴量を利用して、従来の隠れマルコフモデルを必要としないEnd-to-EndなDeep Learningシステムを実装している。

4. [Abdel-Hamid, Ossama, et al. "Applying convolutional neural networks concepts to hybrid NN-HMM model for speech recognition." Acoustics, Speech and Signal Processing (ICASSP), 2012 IEEE International Conference on. IEEE, 2012.](https://www.researchgate.net/profile/Ossama_Abdel-Hamid/publication/261119155_Applying_Convolutional_Neural_Networks_concepts_to_hybrid_NN-HMM_model_for_speech_recognition/links/559407fd08ae5af2b0ecf4fb.pdf)では、NN-HMMモデルとCNNを合わせて発話認識を行うモデルを提案している。

### その他

1. [Santos, Cicero Nogueira dos, Bing Xiang, and Bowen Zhou. "Classifying relations by ranking with convolutional neural networks." arXiv preprint arXiv:1504.06580 (2015).](https://arxiv.org/pdf/1504.06580)では、Classification by Ranking CNN(CR=CNN)を用いて関係分類タスクに取り組んでいるものである。

2. [Li, Mingxuan Wang1 Zhengdong Lu2 Hang, and Wenbin Jiang1 Qun Liu. "A convolutional architecture for word sequence prediction." (2015).](http://anthology.aclweb.org/P/P15/P15-1151.pdf)では、条件付き確率をモデル化する目的で、言語の局所構造と広い範囲の構造を効率よく組み合わせるモデルとして、genCNNというCNNアーキテクチャを提案している。

3. [Kalchbrenner, Nal, Edward Grefenstette, and Phil Blunsom. "A convolutional neural network for modelling sentences." arXiv preprint arXiv:1404.2188 (2014).](https://arxiv.org/pdf/1404.2188.pdf?utm_content=bufferee286&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer)では、文に対して意味論的モデリングを行うためのDynamic Convolutional Neural Network(DCNN)を提案している。このネットワークは可変長の文を扱うことができ、文において局所的・全域的な特徴を捉えることができる。

4. [Lee, Ji Young, and Franck Dernoncourt. "Sequential short-text classification with recurrent and convolutional neural networks." arXiv preprint arXiv:1603.03827 (2016).](https://arxiv.org/pdf/1603.03827)では、短い文を組み込んだRNNとCNNに基づくモデルを提示している。

## 4. 議論はあるか？

CNNはコンピュータビジョンの分野で成功を収めたことがきっかけでNLPの分野でも使われているのが主な問題の1つとして挙げられている。このために、「共通の目標」のようなものが欠けていると著者は感じているようだ。

### 論文情報・リンク

* [Marc Moreno Lopez, Jugal Kalita. 2017. "Deep Learning applied to NLP." arXiv preprint arXiv:1703.03091.](https://arxiv.org/abs/1703.03091)
