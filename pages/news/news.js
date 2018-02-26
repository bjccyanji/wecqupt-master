//news.js
//获取应用实例
var app = getApp();
Page({
  data: {
    filter: {
      list: [
        { 'type': 'all', name: '全部' },
        { 'type': 'jz', name: '学术讲座' },
        { 'type': 'hy', name: '教务公告' },
        { 'type': 'oa', name: 'OA公告' },
        { 'type': 'jw', name: '会议通知' },

        { 'type': 'new', name: '综合新闻' }
      ],
      'active': 'jz'
    },
    data: {
      list: [
        { 'type': 'jz', 'id': 1, 'title': '紅色信息:主機出口缺封簽', 'time': '2017年03月29日  12:21:15' },
        { 'type': 'oa', 'id': 2, 'title': '其他信息需要補充。。。。。。。。。。。', 'time': '2016年09月29日' },
        { 'type': 'oa', 'id': 3, 'title': '其他信息需要補充。。。。。。。。。。。', 'time': '2016年09月29日' },
        { 'type': 'jw', 'id': 4, 'title': '其他信息需要補充。。。。。。。。。。。', 'time': '2016年09月29日' },
        { 'type': 'hy', 'id': 5, 'title': '其他信息需要補充。。。。。。。。。。。', 'time': '2016年09月29日' },
        { 'type': 'new', 'id': 6, 'title': '其他信息需要補充。。。。。。。。。。。', 'time': '2016年09月29日' },
        { 'type': 'jz', 'id': 7, 'title': '紅色信息：CH透明紙堵塞', 'time': '2017年03月29日  12:21:15' }
      ]
    }
  },
  onReady: function () {

  },
  changeFilter: function (e) {
    this.setData({
      'filter.active': e.target.id
    });
  }
});