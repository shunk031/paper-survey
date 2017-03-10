# Learning Deep Classifiers with Deep Features

## 1. どんなもの？

Convolutional Neural Network(CNN)で獲得したDeep Featureを用いた、Deep Decision Tree(DDT)を用いて画像を分類する。

## 2. 先行研究と比べてどこがすごいの？

近年CNNは画像認識分野においてとても素晴らしい結果を残している。しかしながらCNNは学習する際に最終層の出力を主に利用するため、似通った物体の判別に失敗する場合がある。本研究では、学習済みのCNNの層が複数レベルの抽象化の特徴を捉えていることを利用し、これらの特徴量を用いたDecision TreeであるDDTを提案している。

## 3. 技術や手法の"キモ"はどこにある？

* CaffeのプレトレーニングAlex Netで獲得した特徴量を用いる。
* Deepな木構造は学習データに対して過学習を引き起こしやすいため、Pruning(剪定)が必須である。
* DDTはBaggingを行う。

[!Figure 2](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Learning_Deep_Classifiers_with_Deep_Features_Figure_2.png)

## 4. どうやって有効だと検証した？

FaceScrubデータセットとCUB-200データセットを主に利用している。FaceScrubデータセットは人の顔が収録されているもので、ランダムにそれぞれ50・100クラス抽出したものをFaceScrub-50、FaceScrub-100としている。CUB-200データセットは鳥の画像が収録されているもので、ここから10クラス抽出した後に飛行機・バス・タクシー・電車といった無関係な4クラスを追加し、CUBM-14として検証を行っている。従来のDecision TreeやSVMといったモデルとDDTを比べたところ、提案手法であるDDTが優れたパフォーマンスを出している。

## 5. 議論はあるか？

CUBM-14の実験において、「鳥」と「乗り物」は2つの大きなカテゴリとなっている。画像がDDTに入力されるとDeep Featureによって鳥と乗り物が大別され、そこから細かいクラスへ分類していく流れが可視化できている。

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [Lei, Jie, et al. "Learning deep classifiers with deep features." Multimedia and Expo (ICME), 2016 IEEE International Conference on. IEEE, 2016.](http://ieeexplore.ieee.org/abstract/document/7552910/)
