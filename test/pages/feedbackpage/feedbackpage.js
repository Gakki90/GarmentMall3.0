// pages/feedbackpage/feedbackpage.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: app.globalData.customHeight + 85,
    CWidth: app.globalData.customWidth,
    serverurl:app.globalData.serverUrl,
    tempcontent:'',
  },
  tap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  inputevent:function(e)
  {
    var that=this;
    that.setData({
      tempcontent: e.detail.value,
    });
  },

  tapsend:function(e)
  {
    var that=this;
    console.log(this.data.tempcontent);
    if (that.data.tempcontent!='')
    {
      wx.request({
        url: this.data.serverurl + 'addUserAdvise',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          userId: app.globalData.openId,
          userAdvise: this.data.tempcontent,
        }
      })
    that.setData({
      tempcontent:'',
    });

    }
    else{
      return;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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