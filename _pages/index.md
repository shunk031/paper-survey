---
layout: default
avatar: true
permalink: /
---
## 🚀 Hello World
You can use this page to showcase your work, portfolio/project, your Latest post {% for post in site.posts limit: 1 %}<a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>{% endfor %} or another stuff that you love to share to the world.

---

## 🅿️ Edit This Page
You’ll find this page in your `_pages` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

* 読もうと思っている論文は[Issue](https://github.com/shunk031/paper-survey/issues)に上げる。
* [ProjectsのRelated Works](https://github.com/shunk031/paper-survey/projects/2)に論文を読んだかどうかを管理する。
* [format.md](https://github.com/shunk031/paper-survey/blob/master/format.md)にしたがって論文の要旨をまとめる。

## Contents

- [Paper Summary of Computer Vision]({{ site.baseurl | append: '/category/cv/' }})
- [Paper Summary of Natural Language Processing]({{ site.baseurl | append: '/category/nlp/' }})
- [Paper Summary of Others]({{ site.baseurl | append: '/category/others' }})

## Abount Summary Format

- [高速で論文がバリバリ読める落合先生のフォーマットがいい感じだったのでメモ](http://lafrenze.hatenablog.com/entry/2015/08/04/120205)

> # 論文タイトル
> 
> ## 1. どんなもの？
> 
> ## 2. 先行研究と比べてどこがすごいの？
> 
> ## 3. 技術や手法の"キモ"はどこにある？
> 
> ## 4. どうやって有効だと検証した？
> 
> ## 5. 議論はあるか？
> 
> ## 6. 次に読むべき論文はあるか？
> 
> ### 論文情報・リンク
> 
> * 著者，"タイトル，" ジャーナル名，voluem，no.，ページ，年 [論文リンク]()
