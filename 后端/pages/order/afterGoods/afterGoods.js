// pages/order/afterGoods/afterGoods.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:'0',
    display: 'none',
    winWidth: 0,
    winHeight: 0,
    afterGoods: [
      {
        order_no: 12,
        create_time: '2019/2/2',
        order_goods: [{
          good_id: 111,
          good_num: 1,
          good_img: '/image/clothes/1 (1).jpg',
          good_name: "裙裙",
        }],
      },
    ],

    afterList:[
 
      {
        status: 2,
        order_no: 12,
        apply_time: '2012/2/2',
        good_id: 111,
        apply_num: 123,
        good_img: '/image/clothes/1 (3).jpg',
        good_name: "裤",
        return_id: '1234',
      },
      {
        status: 3,
        order_no: 12,
        apply_time: '2012/2/2',
        good_id: 111,
        apply_num: 123,
        good_img: '/image/clothes/1 (4).jpg',
        good_name: "裤",
        return_id: '1234',
      },
      {
        status: 4,
        order_no: 12,
        apply_time: '2012/2/2',
        good_id: 111,
        apply_num: 123,
        good_img: '/image/clothes/1 (5).jpg',
        good_name: "裤",
        return_id: '1234',
      },
    ],
    refundList:[
      {
        order_no: 12,
        status:2,
        apply_time: '2019/2/2',
        handling_time: '2019/9/2',
        goodamount_id: 111,
        good_num: 1,
        channel: "红包40",
      },
      {
        order_no: 132,
        status: 1,
        apply_time: '2019/2/2',
        handling_time: '2019/9/2',
        goodamount_id: 111,
        good_num: 1,
        channel: "红包40",
      },
      {
        order_no: 122,
        status: 0,
        apply_time: '2019/3/2',
        handling_time: '2019/9/2',
        goodamount_id: 111,
        good_num: 1,
        channel: "红包40",
      },
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    // 获取系统信息

    wx.getSystemInfo({

      success: function (res) {

        that.setData({

          winWidth: res.windowWidth,

          winHeight: res.windowHeight

        });

      }

    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

// 切换
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})