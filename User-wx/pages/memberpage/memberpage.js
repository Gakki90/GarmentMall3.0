// pages/memberpage/memberpage.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: app.globalData.customHeight + 85,
    CWidth: app.globalData.customWidth,
    serverurl:app.globalData.serverUrl,
    ismember:false,
    tempphone:0,
    monthfee:50,
    seasonfee:140,
    yearfee:580,
    membership:0//0 包月会员 1 包季会员 2 包年会员
  },
  tap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  tapmember: function(e)
  {
    if (this.data.tempphone.length==11)
    {
      let that = this;

      if (e.currentTarget.dataset.text==50)
      {
        that.setData({
          membership : 1
        })

        wx.showModal({
          title: '提示',
          content: '已开通包月会员',
          success: function (res) {
            if
            (res.confirm) {
              console.log('用户确认')
            }
          }
        })
      }
      else if (e.currentTarget.dataset.text == 140)
      {
        that.setData({
          membership: 3
        })

        wx.showModal({
          title: '提示',
          content: '已开通包季会员',
          success: function (res) {
            if
            (res.confirm) {
              console.log('用户确认')
            }
          }
        })
      }
      else if (e.currentTarget.dataset.text == 580) 
      {
        that.setData({
          membership: 12
        })

        wx.showModal({
          title: '提示',
          content: '已开通包年会员',
          success: function (res) {
            if
            (res.confirm) {
              console.log('用户确认')
            }
          }
        })
      }

      wx.request({
        method: "GET",
        url: this.data.serverurl + 'isMember/' + this.data.tempphone,
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success(res) {
          that.setData({
            ismember: res.data
          })
        }
      }),
      wx.request({
        url: this.data.serverurl+'addUserLogin',
        method:'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data:{
          userId: app.globalData.openId,
          userName: app.globalData.userInfo.nickName
        }
      })
      wx.request({
        url: this.data.serverurl+'addUserInfo/'+this.data.membership,
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data:{
          userId: app.globalData.openId,
          userAddress: app.globalData.userInfo.country + app.globalData.userInfo.province + app.globalData.userInfo.city,
          userPortraitUrl: app.globalData.userInfo.avatarUrl,
          userPhone:this.data.tempphone,
          userSex: app.globalData.userInfo.gender,
        }
      })
    }
    else
    {
     
      wx.showModal({
        title: '提示',
        content: '输入电话号码有误，请重新输入',
        success: function (res) {
          if
          (res.confirm) {
          }
        }
      })
    }
  },


  inputphoneevent: function (e) {
    var that = this;
    if (e.detail.value != '') {
      that.setData({
        tempphone: e.detail.value,
      });
    }
    else {
      that.setData({
        tempphone: '',
      });
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