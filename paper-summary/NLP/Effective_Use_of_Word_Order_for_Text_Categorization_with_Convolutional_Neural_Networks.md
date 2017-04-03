# Effective Use of Word Order for Text Categorization with Convolutional Neural Networks

## 1. どんなもの？

高次元のone-hotベクトルをConvolutional Neural Network(CNN)に入力し、語順を考慮した文書分類を行う。

## 2. 先行研究と比べてどこがすごいの？

## 3. 技術や手法の"キモ"はどこにある？

* 文書を2つのベクトル表現にして入力し、比較
  * seq-CNN  
  ![Figure1](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Effective_Use_of_Word_Order_for_Text_Categorization_with_Convolutional_Neural_Networks_Figure_1.png)
  * bow-CNN  
  ![Figure2](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Effective_Use_of_Word_Order_for_Text_Categorization_with_Convolutional_Neural_Networks_Figure_2.png)

* 可変長である文書ベクトルに対応したPooling層  
  ![Figure3](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Effective_Use_of_Word_Order_for_Text_Categorization_with_Convolutional_Neural_Networks_Figure_3.png)

* Parallel CNN  
  ![Figure4](https://raw.githubusercontent.com/shunk031/paper-survey/master/images/Effective_Use_of_Word_Order_for_Text_Categorization_with_Convolutional_Neural_Networks_Figure_4.png)

## 4. どうやって有効だと検証した？

## 5. 議論はあるか？

## 6. 次に読むべき論文はあるか？

### 論文情報・リンク

* [Johnson, Rie, and Tong Zhang. "Effective use of word order for text categorization with convolutional neural networks." arXiv preprint arXiv:1412.1058 (2014).](https://arxiv.org/pdf/1412.1058)
