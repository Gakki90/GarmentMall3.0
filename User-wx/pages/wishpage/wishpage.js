// pages/shoppage/shoppage.js
var WxCard = require('../../utils/cardPage/cardPage.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: 0,
    CWidth: 0,

    goodsDetailList: [],

    picinfo: [],
    serverurl: app.globalData.serverUrl,

    brandItemWidth: 0,
  },

  tapSingleItemForNew: function (e) {
    var that = this;
    //console.log(e.currentTarget.dataset.typeid);
    wx.navigateTo({
      url: '../fordetail/fordetail?itemId=' + e.currentTarget.dataset.goodsid,
    })
  },

  bindtap: function (e) {
    var that = this;
    //WxCard.tapItem(that);
    console.log(e.currentTarget.dataset.goodsid);
  },

  /* 减数 */
  /* 加数 */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      CHeight: app.globalData.customHeight,
      CWidth: app.globalData.customWidth
    });
    let that=this;

    wx.request({
      url: this.data.serverurl+'findInfoByCollection',
      data:{
        userId:app.globalData.openId,
      },

      success(res){
        that.setData({
          goodsDetailList: res.data
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