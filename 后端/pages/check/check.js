// pages/order/myOrder/myOrder.js
var app = getApp();
var api = require("../../config/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderdata: [], //home传过来的
    prefix:api.prefix,
    status: '',
    list: [
      {
        check_num: 12,
        status: 4,
        count: 1,
        check_goods: [{
          good_id: 111,
          goods_nums: 1,
          img: '/image/clothes/1 (1).jpg',

          good_name: "裤子",
        }],
        order_amount: 34,
      },

      {
        check_num: 12,
        status: 7,
        count: 1,
        check_goods: [{
          good_id: 111,
          goods_nums: 1,
          img: '/image/clothes/1 (7).jpg',

          good_name: "裤子",
        }],
        order_amount: 34,
      },

      {
        check_num: 13,
        status: 5,
        count: 1,
        check_goods: [{
          good_id: 111,
          goods_nums: 3,
          img: [
            '/image/clothes/1 (6).jpg',
          ],
          good_name: '裙子',
        }],
        order_amount: 34,
      },

      {
        check_num: 14,
        status: 6,
        count: 2,
        check_goods: [{
          good_id: 131,
          goods_nums: 2,
          img: [
            '/image/clothes/1 (5).jpg',
          ],
          good_name: "裙子",
        },
        {
          good_id: 141,
          goods_nums: 2,
          img: [
            '/image/clothes/1 (4).jpg',
          ],
          good_name: "ku",
        },
        ],
        order_amount: 35,
      }

    ],
    fy_count: 2,
    display: 'none',
    index: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    //订单精确信息
    wx.request({
      url: api.OrderDetailStatueUrl,
      data: {
        // 传入10，传回status为3,5,6
        status: '10',
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {

          console.log('mycheck2' + JSON.stringify(res.data))
          that.setData({
            list: res.data
          })
        }
      }
    })
  },


  // //通过信息
  pass: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认审核通过',
    })
  },

  // //失败信息
  fail: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认审核失败',
    })
  },
  // //商品详情
  // goodDetail: function (e) {
  //   var id = e.currentTarget.dataset.id;
  //   wx.navigateTo({
  //     url: '../../goods/reviews/reviews?goods_id=' + id
  //   })
  // },


  //确认发货
  confirmDelivery: function (e) {
    var that = this;
    var orderId = e.currentTarget.dataset.order_id;
    //console.log("orderId  " + orderId)
    wx.showModal({
      title: '确认发货',
      content: '确认发货之前请确认您填写物流单号',
      success: function (res) {
        wx.request({
          url: api.UpdateUrl, //接口地址
          data: {
            status: '5',
            orderId: orderId,
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },

        })
      },
      fail: function (res) {
        wx.showToast({
          title: "请重试",
          icon: 'loading',
          duration: 2000
        })
      }
    })
  },

  // //确认寄回
  // confirmDelivery: function (e) {
  //   var id = e.currentTarget.dataset.order_id;
  //   var info = wx.getStorageSync('loginInfo');
  //   wx.showModal({
  //     title: '确认寄回',
  //     content: '确认发货之前请确认您已收到货物',
  //     success: function (res) {
  //       if (res.confirm) {
  //         var url= api.StatusUrl;
  //         var data = { user_id: info.id, order_id: id, token: info.token };
  //         app.ajax.req(url, data, function (res) {
  //           if (res.code === 0) {
  //             wx.showToast({
  //               title: res.msg,
  //               icon: 'success',
  //               duration: 2000,
  //               complete: function () {
  //                 setTimeout((function callback() {
  //                   wx.navigateTo({
  //                     url: 'order/order'
  //                   })
  //                 }).bind(this), 1000)
  //               }
  //             })

  //           } else {
  //             wx.showToast({
  //               title:" res.msg",
  //               icon: 'loading',
  //               duration: 2000
  //             })
  //           }
  //         })
  //       }
  //     },
  //     fail: function (res) {
  //       wx.showToast({
  //         title: "请重试",
  //         icon: 'loading',
  //         duration: 2000
  //       })
  //     }
  //   })
  // },

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