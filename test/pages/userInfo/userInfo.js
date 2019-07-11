// pages/userInfo/userInfo.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    serverurl:app.globalData.serverUrl,
    motto:'HI',
    point:0,
    ddl:0,
    orderItems:
    [
      {
        typeId:0,
        name:'待发货',
        imageurl:'../image/待发货.png',
      },
        {
          typeId: 1,
          name: '待收货',
          imageurl: '../image/待收货.png',
        },
        {
          typeId: 2,
          name: '待返还',
          imageurl: '../image/待返还.png',
        },
        {
          typeId: 3,
          name: '已完成',
          imageurl: '../image/待评价.png',
        }
    ],
    CHeight: app.globalData.customHeight,
    CWidth: app.globalData.customWidth,
  },

  //事件处理函数
  toOrder: function ()
  {
    wx.navigateTo({
      url: '../orderpage/orderpage?orderState=0'
    })
  },

  toOrderPage:function(e)
  {
    var that = this;
    var choose = e.currentTarget.dataset.typeid;
    if (choose==0)
    {
      wx.navigateTo({
        url: '../orderpage/orderpage?orderState=1',
      })
    }
    else if(choose==1)
    {
      wx.navigateTo({
        url: '../orderpage/orderpage?orderState=2',
      })
    }
    else if (choose == 2) {
      wx.navigateTo({
        url: '../orderpage/orderpage?orderState=3',
      })
    }
    else if (choose == 3) {
      wx.navigateTo({
        url: '../orderpage/orderpage?orderState=4',
      })
    }
  },

  tapmember: function()
  {
    wx.navigateTo({
      url: '../memberpage/memberpage'
    })
  },
  tapfeedback:function()
  {
    wx.navigateTo({
      url: '../feedbackpage/feedbackpage'
    })
  },
  bindtap: function()
  {
    wx.navigateTo({
      url: '../settingpage/settingpage'
    })
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
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    let that=this;
    wx.request({
      url: this.data.serverurl + 'selectUserInfo/' + app.globalData.openId,
      success(res) {
        if(res.data)
        {
          that.setData({
            point: res.data.userLevel,
            ddl: res.data.endTime.substring(0, 10),
          })
        }
      }
    })
  },

  getUserInfo: function (e) {
    let that = this
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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