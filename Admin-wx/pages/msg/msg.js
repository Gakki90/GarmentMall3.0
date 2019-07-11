// pages/msg/msg.js
const app = getApp()
// var Base64 = require('../utils/base64.modified.js');
// var WxParse = require('../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [
   {
        name:'1200',
        time:'2019/7/3',
        content:'衣服坏了客服不处理'

   },

      {
        name:'1201',
        time: '2019 / 7/ 1',
        content: '有点卡顿，希望能够解决'
      },

        {
        name: '1203',
        time: '2019 / 9 / 3',
        content: '可选的衣服好少啊'
      },

      {
        name: '1206',
        time: '2019 / 7 / 4',
        content: '希望能够多加点品牌'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //用户传值
    wx.request({
      url: api.StatusUrl,
      data: { status: 1 },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //传值
        if (res.statusCode == 200) {

          console.log("res" + res)
          that.setData({
            msgList: res.data,
          })
          //console.log('orderdata' + orderdata)

        }
      }
    })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})