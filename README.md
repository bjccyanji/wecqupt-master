We重邮
===

官网：http://we.cqu.pt \ http://we.cqupt.edu.cn

### 目录结构
```
wecqupt
  ├─ app.json       // 全局配置文件，决定页面文件的路径、窗口表现、设置网络超时时间、设置多tab等     
  ├─ app.js         // 全局js，如执行App()函数来初始化注册小程序
  ├─ app.wxss       // 全局样式
  ├─ utils          // 模块化文件夹，利用module.exports暴露接口，通过require(path)使用模块接口
  │    └─ util.js   // 模块化例子
  ├─ images         // 图片文件夹
  └─ pages          // 页面文件夹
       ├─ index     // 主页
       │    ├─ index.wxml
       │    ├─ index.wxss
       │    └─ index.js
       ├─ news      // 资讯
       │    ├─ news.wxml    // 列表
       │    ├─ news.wxss
       │    ├─ news.js
       │    ├─ detail.wxml   // 详情
       │    ├─ detail.wxss
       │    └─ detail.js
       ├─ more      // 更多
       │    ├─ more.wxml    // 更多 (含绑定用户)
       │    ├─ more.wxss
       │    ├─ more.js
       │    ├─ about.wxml   // 关于
       │    ├─ about.wxss
       │    └─ about.js
       └─ core      // 主页功能文件夹
            ├─ kb       // 课表
            │    ├─ kb.wxml
            │    ├─ kb.wxss
            │    └─ kb.js
            └─ other    // 其他
                 └─ ..
```

### 参考资料

* （重要）官方开发文档：https://mp.weixin.qq.com/debug/wxadoc/dev/
* 开发工具：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html
* 更多资料：https://github.com/Aufree/awesome-wechat-weapp
* 设计指南：https://mp.weixin.qq.com/debug/wxadoc/design/
* flex布局
  * 语法篇：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
  * 实例篇：http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
* 分页的部分样式参考：http://weui.io

## v0.1.0 beta版计划
### 功能及页面
> 共17个页面，3个主tabnav页面

| 编号 | 功能        | 路径                        | 视觉设计 | 页面重构 | 后端接口 | 数据交互 |
|:---:| ----------- | -------------------------- |:-------:|:------:|:-------:|:--------:|
| 1   | **【主页】** | pages/index/index(.wxml)   | ✔       | ✔      | ✘       |          |
| 10  | 课表查询     | pages/core/kb/kb           |         |        |         |          |
| 11  | 成绩查询     | pages/core/cj/cj           |         |        |         |          |
| 12  | 考试安排     | pages/core/ks/ks           | ✔       |        |         |          |
| 13  | 空教室查询   | pages/core/kjs/kjs         |         |        | ✔       |          |
| 14  | 学生查询     | pages/core/xs/xs           | ✔       |        | ✔       |          |
| 15  | 一卡通       | pages/core/ykt/ykt         |         |        | ✔       |          |
| 16  | 借阅信息     | pages/core/jy/jy           |         |        | ✔       |          |
| 17  | 学费信息     | pages/core/xf/xf           | ✔       |        |         |          |
| 18  | 水电费查询   | pages/core/sdf/sdf         |         |        | ✔       |          |
| 19a | 物业报修 列表 | pages/core/bx/bx           | ✔       |        | ✔       |          |
| 19b | 物业报修 申请 | pages/core/bx/bx_apply     | ✔       |        | ✔       |          |
| 19c | 物业报修 详情 | pages/core/bx/bx_detail    | ✔       |        | ✔       |          |
| 2   | **【资讯】** | pages/news/news            | ✔       | ✔      |         |          |
|     | 教务公告     | (同上)                      | ✘       | ✘      | ✔       | ✘        |
|     | OA公告      | (同上)                      | ✘       | ✘      | ✔       | ✘        |
|     | 会议通知     | (同上)                      | ✘       | ✘      | ✔       | ✘        |
|     | 学术讲座     | (同上)                      | ✘       | ✘      | ✔       | ✘        |
|     | 综合新闻     | (同上)                      | ✘       | ✘      | ✔       | ✘        |
| 20  | 资讯详情     | pages/news/detail          |         |        |         |          |
| 3   | **【更多】** | pages/more/more            |         |        |         |          |
|     | 绑定用户     | (同上)                      |         |        |         |          |
|     | 用户信息     | (同上)                      | ✘       | ✘      |         |          |
| 30  | 关于        | pages/more/about           |         |        | ✘       | ✘         |
|     | 反馈        | (跳转至github - new issue)  | ✘       | ✘      | ✘       | ✘         |
|     | Logo       |  -                         | ✔       | ✘      | ✘       | ✘         |

### 分工
> 项目期限：10月底前 / 微信小程序上线前

| who    | todo                  |
|:------:| --------------------- |
| 闵聪    | 项目架构，页面1、2、20   |
| 莫梦竟成 | 视觉设计交互（主页面）    |
| 杨奇奇   | 视觉设计交互（分页面）    |
| 刘浩     | 后台接口完善（基于i重邮） |
| 宋思辰   | 页面10、11、12          |
| 吴鹏举   | 页面13、14、18          |
| 苏丹     | 页面15、16、17          |
| 王晓宇   | 页面19、3、30           |


## 开发
> 每个人创建自己的分支进行开发，开发完成后再通过pull request至master分支。

#### 1、clone代码
```
$ git clone git@github.com:lanshan-studio/wecqupt.git
```
```
$ cd wecqupt
```
```
$ git remote add origin git@github.com:lanshan-studio/wecqupt.git
```

#### 2、在master主分支的基础上创建并切换你自己的分支
```
[master]:$ git checkout -b 你的分支名
```
```
[你的分支]:$ 
```

#### 3、打开微信web开发者工具，并添加项目
* **AppID** 选择 无AppID
* **项目名称** 填写为 wecqupt
* **项目目录** 选择clone出的git仓库

#### 开发注意：
* 只能使用flex布局，不懂时多问下
* 注意代码可维护性，写优雅的代码和注释
* 多浏览参考资料，注意项目仓库动态
* 常更新master至你自己的分支

---

## 提交
> 每个人创建自己的分支进行开发，开发完成后再通过pull request至master分支。

#### 1、pull代码并更新master至你自己的分支
```
[你的分支]:$ git add .
```
```
[你的分支]:$ git commit -m "提交信息"
```
pull master代码
```
[你的分支]:$ git pull origin master:master
```
更新master代码到你的分支
```
[你的分支]:$ git rebase master
```

#### 2、提交你的代码至github
```
[你的分支]:$ git push origin 你的分支名
```

#### 3、开发完成后，提交你的代码至master
* 在github上进行create pull request，进行如下选择：
  * base: master
  * compare: 你的分支
* 等待项目管理员review代码，并同意pull request