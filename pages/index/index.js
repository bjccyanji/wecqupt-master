//index.js
//获取应用实例
var a =7;
var app = getApp();
var wxCharts = require('../../utils/wxcharts.js');
var ringChart = null;
Page({
  data: {
    core: [
      { id: 'kb', name: '实时车间' },
      { id: 'cj', name: '故障查询' },
      { id: 'ks', name: '生产信息' },
      { id: 'kjs', name: '其他功能' },
      { id: 'bx', name: '故障报修' }
    ],
    card: {
      'kb': {
        show: true,
        data: {
          'list': [
            { what: '号车', when: '故障：CH透明纸堵塞', where: '28次    故障率12%' },
            { what: '号车', when: '故障：主机出口缺封签', where: '18次    故障率08%' },
          ]
        }
      },
      'ykt': {
        show: true, //一卡通数据有大量延迟，主页卡片暂不予展示。
        data: {
          'balance': '25050',
          'cost': {
            value: ['x:1545', 'ch:305', 'cv:320'],
            total: '1870'
          }
        }
      },
      'jy': {
        show: true,
        data: {
          'list': [
            { 'book_name': '22BSC.1SAF341', 'pickup_time': '16-04-02', 'return_time': '16-06-02', 'timing': 1 },
            { 'book_name': '32.XLAFS21AAE', 'pickup_time': '16-04-02', 'return_time': '16-06-02', 'timing': 0 }
          ]
        }
      },
      'sdf': {
        show: true
      }
    }
  },

  gotoPage: function (e) {
    var page = "ring";
    wx.navigateTo({
      url: '../charts/ring/ring'
    });
  },

  touchlist: function (e) {
    console.log("点击下拉列表");
    wx.navigateTo({
      url: '../news/news'
    });

  },


  touchHandler: function (e) {
    console.log(ringChart.getCurrentDataIndex(e));
  },
  updateData: function (e) {
     a=a+60
    ringChart.updateData({
      title: {
        name: a+"%"
      },
      subtitle: {
        color: '#ff0000'
      },
     
    });
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 25
      },
      title: {
        name: '7.46%',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '剔除率',
        color: '#666666',
        fontSize: 15
      },
      series: [{
        name: '故障1',
        data: 15,
        //  stroke: false
      }, {
        name: '故障2',
        data: 35,
        // stroke: false
      }, {
        name: '故障3',
        data: 78,
        //  stroke: false
      }, {
        name: '故障4',
        data: 63,
        //   stroke: false
      }],
      disablePieStroke: true,
      width: windowWidth,
      height: 230,
      dataLabel: true,
      legend: false,
      padding: 0
    });
    ringChart.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    setTimeout(() => {
      ringChart.stopAnimation();
    }, 500);
  }

});


