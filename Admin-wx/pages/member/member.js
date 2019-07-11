// pages/mine/voucher/voucher.js
//获取应用实例
const app = getApp();
var api = require("../../config/api.js");
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prefix: api.prefix,
    remainTime:0,
    time:0,
    member: [
      {
        value: 20,
        name: '小王',
        start_time: '2020',
        end_time: '2022'
      },
      {
        value: 20,
        name: '小王',
        start_time: '2020',
        end_time: '2022'
      },
      {
        value: 20,
        name: '小王',
        start_time: '2020',
        end_time: '2022'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var time = util.formatTime(new Date());
    //传入会员信息 需要member数组，包括value，name，end_time
    wx.request({
      url: api.MemberUrl,
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //传值
        if (res.statusCode == 200) {

          console.log("member" + JSON.stringify(res.data))
          that.setData({
            member: res.data,
            time: time,
            //member.endTime = new Date(member.endTime).format("yyyy-MM-dd"),
           // remainTime: res.data.endTime,
          })
          //  member.endTime = new Date(member.endTime).format("yyyy-MM-dd")
          console.log('member.time' + time)

        }
      }
    })
  },


  memberStatus: function (event) {
    var that = this;
    var status = event.currentTarget.dataset.status;
    var info = wx.getStorageSync('loginInfo');
    app.ajax.req('  ', { user_id: info.id, status: status, token: info.token }, function (res) {
      if (res.code == 0) {
        that.setData({
          member: res.list
        })
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'loading',
          duration: 2000
        })
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