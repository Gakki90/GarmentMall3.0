// pages/brandpage/brandpage.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: app.globalData.customHeight + 85,
    CWidth: app.globalData.customWidth,
    brandName:'',
    serverurl:app.globalData.serverUrl,

    goodsWelfareItems:[],
  },

  tap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  tapSingleItemForNew:function(e)
  {
    var that = this;
    //console.log(e.currentTarget.dataset.typeid);
    wx.navigateTo({
      url: '../fordetail/fordetail?itemId=' + e.currentTarget.dataset.typeid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      brandName:options.brandName
    })
    let that=this;
    wx.request({
      url: this.data.serverurl+'findByBrand',
      data:{
        brand: this.data.brandName,
      },
      success(res){
        that.setData({
          goodsWelfareItems:res.data,
        })
        console.log(that.data.goodsWelfareItems);
      }
    })
    //console.log('得到品牌'+this.data.brandName);
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