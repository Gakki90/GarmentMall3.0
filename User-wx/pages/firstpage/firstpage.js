// pages/test/test.js
var WxSearch = require('../../utils/wxSearch/wxSearch.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,



    CHeight:0,
    CWidth:0,
    SHeight:0,
    sdHeight:0,
    current:0,
    serverurl: app.globalData.serverUrl,
    //广告栏
    swipers:[
      'http://img18.3lian.com/d/file/201709/18/d14e2c5df033057913b771a5baf42819.jpg',
      'http://news.mydrivers.com/Img/20120217/2012021709492293.jpg',
      'http://img.mp.itc.cn/upload/20161205/dc8dd95aaafc47c38a667bbf848e5451_th.jpeg'
    ],
    //上新推荐
    goodsHotItems: [],
    // 随机推荐
    goodsWelfareItems:[],

    brandItemWidth: 0,


    brandItems:[],
  },
  
  disappearOnTime: function()
  {
    var timeOut = setTimeout(function () {
      wx.navigateTo({
        url: '../shoppage/shoppage',
      })
    }, 3000)
  },

  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);
  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
  screeningtap: function()
  {
    wx.navigateTo({
      url: '../screeningpage/screeningpage',
    })
  },

  swipclick: function (e) {
  },
  bindchange: function (e) {//轮播图发生改变
    this.setData({
      current: e.detail.current
    })
  },
///////////////////////////////////////////////////////////////////////////
  tapSingleItemForNew: function(e) {
    var that = this;
    wx.navigateTo({
      url: '../fordetail/fordetail?itemId=' + e.currentTarget.dataset.typeid,
    })
  },
  tapSingleItemForLike: function (e) {
    var that = this;
    wx.navigateTo({
      url: '../fordetail/fordetail',
    })
  },

  tapBrand: function (e)
  {
    var brandName=e.currentTarget.dataset.brand;

    var that = this;
    wx.navigateTo({
      url: '../brandpage/brandpage?brandName='+brandName,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      method: "GET",
      url: this.data.serverurl + 'findTopFiveByDate',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success(res) {
        that.setData({
          goodsHotItems: res.data
        })
      }
    })

    wx.request({
      url: this.data.serverurl + 'RandGiveYou',
      success(res) {
        that.setData({
          goodsWelfareItems: res.data
        })
      }
    })

    wx.request({
      url: this.data.serverurl+'findDistinctBranch',
      success(res){
        that.setData({
          brandItems:res.data
        })
      }
    })

    this.setData({
      CHeight: app.globalData.customHeight,
      CWidth: app.globalData.customWidth,
      //SHeight: this.data.CHeight*2-100

    });

    var query = wx.createSelectorQuery();
    //选择id
    //var that = this;
    query.select('#swpcon').boundingClientRect(function (rect) {
      that.setData({
        SHeight: that.data.CHeight-rect.height,
        sdHeight:rect.height,
      });
      WxSearch.init(that, that.data.sdHeight, ['weappdev', '小程序', 'wxParse', 'wxSearch', 'wxNotification']);
      WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);

    }).exec();

    var query = wx.createSelectorQuery();
    //选择id
    query.select('.brand').boundingClientRect(function (rect) {
      that.setData({
        brandItemWidth: rect.width/4,
        //brandItemWidth:100,
      });
    }).exec();
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
    wx.showNavigationBarLoading();
    var that=this;
    wx.request({
      url: this.data.serverurl + 'RandGiveYou',
      success(res) {
        that.setData({
          goodsWelfareItems: res.data
        })
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    })

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