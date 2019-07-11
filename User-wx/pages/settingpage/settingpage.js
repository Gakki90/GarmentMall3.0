// pages/settingpage/settingpage.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    CHeight: app.globalData.customHeight+85,
    CWidth: app.globalData.customWidth,
    tempphone:'电话',
    tempaddress:'地址',
    phone:'',
    address:'',
    membership:'',
    endtime:'',
    point:0,
    serverurl:app.globalData.serverUrl,
    updateInfo:
    {
      phone:'',
      address:''
    },
    showButtom:false,
  },

  tap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  inputphoneevent: function (e) {
    var that = this;
    var length=11;

    if (e.detail.value!='')
    {
      var length = e.detail.value.length;
      if (length==11)
      {
        that.setData({
          tempphone: e.detail.value,
        });
      }
      else
      {
        wx.showModal({
          title: '提示',
          content: '请输入正确的号码',
          success: function (res) {
            if
            (res.confirm) {
              console.log('用户确认')
            }
          }
        })
      }
    }
    else
    {
      that.setData({
        tempphone: this.data.phone,
      });
    }
  },
  inputaddressevent: function (e) {
    var that = this;
    if (e.detail.value != '')
    {
      that.setData({
        tempaddress: e.detail.value,
      });
    }
    else{
      that.setData({
        tempaddress: this.data.address,
      });
    }
  },

  bindtapphone:function()
  {
    this.setData({
      showButtom: true,
      tempphone: '',
    })
  },
  bindtapaddress: function () {
    this.setData({
      showButtom: true,
      tempaddress: '',
    })
  },

  save:function()
  {
    this.setData({
      showButtom: false,
    })
    var that = this;
    if ((that.data.tempphone != '') && (that.data.tempaddress != '')) {
      that.setData({
        'updateInfo.phone': that.data.tempphone,
        'updateInfo.address': that.data.tempaddress,
      });`     `
    }
    else {
      that.setData({
        tempphone:this.data.phone,
        tempaddress: this.data.address,
      });
    }
    wx.request({
      url: that.data.serverurl + 'updatePhoneAndAddress',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        userId: app.globalData.openId,
        userPhone: that.data.updateInfo.phone,
        userAddress: that.data.updateInfo.address,
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    wx.request({
      url: this.data.serverurl+'selectUserInfo/'+app.globalData.openId,
      success(res){
        console.log(res);
        that.setData({
          membership:app.globalData.openId,
          endtime:res.data.endTime.substring(0,10),
          point:res.data.userLevel,
          phone:res.data.userPhone,
          address:res.data.userAddress,
          tempphone: res.data.userPhone,
          tempaddress: res.data.userAddress,
        })
        //var length=that.data.phone.length;
        //console.log(length);
      }

    })


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
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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