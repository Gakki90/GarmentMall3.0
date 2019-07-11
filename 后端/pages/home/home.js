const app = getApp()
var api = require("../../config/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:[
      {img:'asd'}
    ],
    url:app.globalData.url,
    orderdata:[],
    thumb: '',
    nickname: '',
    wait_send:'3',
    delivery_num:'2',
    receive_num:'5',
    wait_send2:'6',
    wait_check:'4',
    check_num:'1',
    today_money: 0,
    today_deal: 0,
    all_money: 0,
    haeUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    // var that = this
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        // console.log(res)
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
    var that = this
    //今日交易数 交易额 总交易额
    wx.request({
      url: api.DealUrl,
      data: { status: 2 },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {

          console.log('home123' + res.data)
          that.setData({
            today_deal: res.data[0],
            today_money: res.data[1],
            all_money: res.data[2]
          })
        }
      }
    }),
// 订单管理
    wx.request({
      url: api.StatusUrl,
      data: { status: 1 },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //传值
       // console.log('orderdatafirst' + that.data.orderdata)

        if (res.statusCode == 200) {

          console.log("res"+res)
          that.setData({
            wait_send: res.data.length,
            orderdata: res.data,
          })
          //console.log('orderdata' + orderdata)
        
        }
      }
    }),

      wx.request({
        url: api.StatusUrl,
        data: { status: 2 },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 200) {

            console.log(res.data)
            that.setData({
              delivery_num: res.data.length
            })
          }
        }
      }),
      wx.request({
        url: api.StatusUrl,
        data: { status: 3 },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 200) {

            console.log("=="+res)
            that.setData({
              receive_num: res.data.length
            })
          }
        }
      }),
// 审核部分
// 待寄回
      wx.request({
        url: api.StatusUrl,
        data: { status: 3 },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 200) {

            console.log(res)
            that.setData({
              wait_send2:res.data.length
            })
          }
        }
      }),
      
// 待审核
      wx.request({
        url: api.StatusUrl,
        data: { status: 5 },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 200) {

            console.log(res)
            that.setData({
              wait_check: res.data.length
            })
          }
        }
      }),
// 审核完成
      wx.request({
        url: api.StatusUrl,
        data: { status: 8 },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 200) {

            console.log(res.orderId)
            that.setData({
              check_num: res.data.length
            })
          }
        }
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
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
    var that = this;
    console.log('onPullDownRefresh');
    this.onLoad();
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

  },

  /**
 * 用户订单状态
 */
  showOrders: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status home界面"+status)
    console.log("orderdata home界面" + orderdata)
    wx.navigateTo({
      url: '../order/myOrder/myOrder?status=' + status + '&orderdata=' + orderdata

    })
  },
  showOrders1: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status home界面" + status)
    console.log("orderdata home界面" + orderdata)
    wx.navigateTo({
      url: '../order/myOrder1/myOrder?status=' + status + '&orderdata=' + orderdata

    })
  },
  showOrders2: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status home界面" + status)
    console.log("orderdata home界面" + orderdata)
    wx.navigateTo({
      url: '../order/myOrder2/myOrder?status=' + status + '&orderdata=' + orderdata

    })
  },
  showOrders3: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status home界面" + status)
    console.log("orderdata home界面" + orderdata)
    wx.navigateTo({
      url: '../order/myOrder3/myOrder?status=' + status + '&orderdata=' + orderdata

    })
  },
  //展示审核部分
  showChecks: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status homecheck界面" + status)
    console.log("orderdata homecheck界面" + orderdata)
    wx.navigateTo({
      url: '../check/check?status=' + status + '&orderdata=' + orderdata

    })
  },
  showChecks6: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status homecheck界面" + status)
    console.log("orderdata homecheck界面" + orderdata)
    wx.navigateTo({
      url: '../check6/check?status=' + status + '&orderdata=' + orderdata

    })
  },
  showChecks4: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status homecheck界面" + status)
    console.log("orderdata homecheck界面" + orderdata)
    wx.navigateTo({
      url: '../check4/check?status=' + status + '&orderdata=' + orderdata

    })
  },
  showChecks5: function (e) {
    var status = e.currentTarget.dataset.status;
    var orderdata = JSON.stringify(this.data.orderdata)
    console.log("status homecheck界面" + status)
    console.log("orderdata homecheck界面" + orderdata)
    wx.navigateTo({
      url: '../check5/check?status=' + status + '&orderdata=' + orderdata

    })
  },

  skip: function (e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    })
  },

})
