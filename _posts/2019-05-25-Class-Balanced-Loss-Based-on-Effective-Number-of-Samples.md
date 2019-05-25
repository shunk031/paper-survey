---
layout: post
title:  "Class-Balanced Loss Based on Effective Number of Samples"
date:   2019-05-25
categories: CV
---

## 1. どんなもの？

Long-tail な不均衡データに対して、各クラス数の分布を適切に考慮した class-balanced loss を提案。

## 2. 先行研究と比べてどこがすごいの？

<img src="{{ site.baseurl }}/assets/img/cv/Class-Balanced-Loss-Based-on-Effective-Number-of-Samples/figure1.png" width="400px" alt="Figure 1">

実世界のデータセットは long-tail な分布を持つ不均衡データであることが多い。
こうした不均衡データに対して、先行研究では主に `re-sampling` と `cost-sensitive learning` の観点から解決が図られてきた。
`Re-sampling` における over-sampling では学習時に重複したデータを学習して過学習を引き起こしたり、under-sampling では学習に重要なデータを適切にサンプリングして学習することが難しい。
そこで深層学習の文脈では損失関数に重み付けを行う `cost-sensitive learning` を採用する場合が多いが、こうした手法は実世界の long-tail な分布を持つ不均衡データに対してパフォーマンスが低下してしまう場合が多い。
本研究では long-tail な不均衡データに対して、対象となるデータ数に効果的な `class-balanced loss` を提案し、
一般的に広く使われている softmax cross-entropy や sigmoid cross-entropy、focal loss などに適用し効果の検証を行っている。

## 3. 技術や手法の"キモ"はどこにある？

### Class-balanced loss

各クラス数に反比例する重み係数を導入することによって、long-tail な不均衡データに対しても効率的に学習するよう損失関数を定義した。

$$
    {\rm CB}({\bf p}, y) = \frac{1}{E_{n_y}} \mathcal{L}({\bf p}, y) = \frac{1 - \beta}{1 - \beta^{n_y}} \mathcal{L}({\bf p}, y)
$$

<img src="{{ site.baseurl }}/assets/img/cv/Class-Balanced-Loss-Based-on-Effective-Number-of-Samples/figure3.png" width="600px" alt="Figure 3">

Class-balanced loss を一般的な損失関数に適用した場合は以下の通りになる。
- Class-balanced softmax cross-entropy
  - $${\rm CB}_{\rm softmax}({\bf z}, y) = - \frac{1 - \beta}{1 - \beta^{n_y}} \log{\left( \frac{\exp{(z_y)}}{\sum_{j=1}^{C} \exp{(z_j)}} \right)}$$
- Class-balanced sigmoid cross-entropy
  - $${\rm CB}_{\rm sigmoid}({\bf z}, y) = - \frac{1 - \beta}{1 - \beta^{n_y}} \sum_{i=1}^{C} \log{\left(\frac{1}{1+\exp{(-z_{i}^{t})}} \right)}$$
- Class-balanced focal loss
  - $${\rm CB}_{\rm focal}({\bf z}, y) = \frac{1 - \beta}{1 - \beta^{n_y}} \sum_{i=1}^{C} (1 - p_{i}^{t})^{\gamma} \log{(p_{i}^{t})}$$

## 4. どうやって有効だと検証した？

CIFAR10/100 に対して imbalanced factor を元にデータの分布を擬似的に不均衡にした `long-tailed CIFAR10/100` 、`iNatiralist` 、`ImageNet` を用いて、ベースラインのモデルと class-balanced loss を導入したモデルの比較を行っている。

Sigmoid ベースの loss を用いる場合は、最終全結合層のバイアスに対してクラスの事前確率を $$\pi = 1/C$$ として、$$b = - \log{((1 - \pi)/{\pi})}$$ として初期化し、バイアス項にのみ weight decay を適用している。

## 5. 議論はあるか？

画像認識タスクでは主に softmax cross-entropy が用いられるが、バイアス項を適切に初期化した sigmoid cross-entropy や focal loss が softmax cross-entropy を凌駕する結果を示した。

Class-balanced loss のハイパーパラーメタである $$\beta$$ は CIFAR-10 の場合 $$0.9999$$ であったが、CIFAR-100 の場合は imbalanced factor ごとに異なる $$\beta$$ の設定が必要であった。

## 6. 次に読むべき論文はあるか？

### Re-sampling ベースの手法

- [Shen, Li, Zhouchen Lin, and Qingming Huang. "Relay backpropagation for effective learning of deep convolutional neural networks." European conference on computer vision. Springer, Cham, 2016.](https://link.springer.com/chapter/10.1007/978-3-319-46478-7_29)
- [Geifman, Yonatan, and Ran El-Yaniv. "Deep active learning over the long tail." arXiv preprint arXiv:1711.00941 (2017).](https://arxiv.org/abs/1711.00941)
- [Buda, Mateusz, Atsuto Maki, and Maciej A. Mazurowski. "A systematic study of the class imbalance problem in convolutional neural networks." Neural Networks 106 (2018): 249-259.](https://www.sciencedirect.com/science/article/pii/S0893608018302107)
- [Zou, Yang, et al. "Domain adaptation for semantic segmentation via class-balanced self-training." arXiv preprint arXiv:1810.07911 (2018).](https://arxiv.org/abs/1810.07911)
- [Drummond, Chris, and Robert C. Holte. "C4. 5, class imbalance, and cost sensitivity: why under-sampling beats over-sampling." Workshop on learning from imbalanced datasets II. Vol. 11. Washington, DC: Citeseer, 2003.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.68.6858&rep=rep1&type=pdf)
- [Chawla, Nitesh V., et al. "SMOTE: synthetic minority over-sampling technique." Journal of artificial intelligence research 16 (2002): 321-357.](http://www.jair.org/papers/paper953.html)

### Cost-Sensitive Learning ベースの手法

- [Ting, Kai Ming. "A comparative study of cost-sensitive boosting algorithms." In Proceedings of the 17th International Conference on Machine Learning. 2000.](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.37.8819)
- [Zhou, Zhi-Hua, and Xu-Ying Liu. "Training cost-sensitive neural networks with methods addressing the class imbalance problem." IEEE Transactions on Knowledge & Data Engineering 1 (2006): 63-77.](https://www.computer.org/csdl/trans/tk/2006/01/k0063-abs.html)

- [Khan, Salman H., et al. "Cost-sensitive learning of deep feature representations from imbalanced data." IEEE transactions on neural networks and learning systems 29.8 (2018): 3573-3587.](https://ieeexplore.ieee.org/abstract/document/8012579/)
- [Sarafianos, Nikolaos, Xiang Xu, and Ioannis A. Kakadiaris. "Deep imbalanced attribute classification using visual attention aggregation." Proceedings of the European Conference on Computer Vision (ECCV). 2018.](http://openaccess.thecvf.com/content_ECCV_2018/html/Nikolaos_Sarafianos_Deep_Imbalanced_Attribute_ECCV_2018_paper.html)

#### Importance sampling
- [Kahn, Herman, and Andy W. Marshall. "Methods of reducing sample size in Monte Carlo computations." Journal of the Operations Research Society of America 1.5 (1953): 263-278.](https://pubsonline.informs.org/doi/abs/10.1287/opre.1.5.263)

#### 決定境界を一定に調整
- [Elkan, Charles. "The foundations of cost-sensitive learning." International joint conference on artificial intelligence. Vol. 17. No. 1. Lawrence Erlbaum Associates Ltd, 2001.](http://cseweb.ucsd.edu/~elkan/rescale.pdf)

#### クラス数の逆数で重み付け
- [Wang, Yu-Xiong, Deva Ramanan, and Martial Hebert. "Learning to model the tail." Advances in Neural Information Processing Systems. 2017.](http://papers.nips.cc/paper/7278-learning-to-model-the-tail)
- [Huang, Chen, et al. "Learning deep representation for imbalanced classification." Proceedings of the IEEE conference on computer vision and pattern recognition. 2016.](https://www.cv-foundation.org/openaccess/content_cvpr_2016/html/Huang_Learning_Deep_Representation_CVPR_2016_paper.html)

#### クラス数の逆数の平方根で重み付け
- [Mikolov, Tomas, et al. "Distributed representations of words and phrases and their compositionality." Advances in neural information processing systems. 2013.](http://papers.nips.cc/paper/5021-distributed-representations-of-words-andphrases)
- [Mahajan, Dhruv, et al. "Exploring the limits of weakly supervised pretraining." Proceedings of the European Conference on Computer Vision (ECCV). 2018.](http://openaccess.thecvf.com/content_ECCV_2018/html/Dhruv_Mahajan_Exploring_the_Limits_ECCV_2018_paper.html)

#### 難しいサンプルにフォーカスして学習
- [Freund, Yoav, and Robert E. Schapire. "A decision-theoretic generalization of on-line learning and an application to boosting." Journal of computer and system sciences 55.1 (1997): 119-139.](https://www.sciencedirect.com/science/article/pii/S002200009791504X)
- [Malisiewicz, Tomasz, Abhinav Gupta, and Alexei A. Efros. "Ensemble of exemplar-SVMs for object detection and beyond." Iccv. Vol. 1. No. 2. 2011.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.208.446&rep=rep1&type=pdf)
- [Dong, Qi, Shaogang Gong, and Xiatian Zhu. "Class rectification hard mining for imbalanced deep learning." Proceedings of the IEEE International Conference on Computer Vision. 2017.](http://openaccess.thecvf.com/content_iccv_2017/html/Dong_Class_Rectification_Hard_ICCV_2017_paper.html)
- [Lin, Tsung-Yi, et al. "Focal loss for dense object detection." Proceedings of the IEEE international conference on computer vision. 2017.](http://openaccess.thecvf.com/content_iccv_2017/html/Lin_Focal_Loss_for_ICCV_2017_paper.html)

#### ノイジーなデータやラベルミスなデータにフォーカスして学習
- [Koh, Pang Wei, and Percy Liang. "Understanding black-box predictions via influence functions." Proceedings of the 34th International Conference on Machine Learning-Volume 70. JMLR. org, 2017.](https://dl.acm.org/citation.cfm?id=3305576)
- [Ren, Mengye, et al. "Learning to reweight examples for robust deep learning." arXiv preprint arXiv:1803.09050 (2018).](https://arxiv.org/abs/1803.09050)

### 論文情報・リンク

- [Cui, Yin, et al. "Class-Balanced Loss Based on Effective Number of Samples." arXiv preprint arXiv:1901.05555 (2019).](https://arxiv.org/abs/1901.05555)
