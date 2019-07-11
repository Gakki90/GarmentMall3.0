// pages/order/myOrder/myOrder.js
const app = getApp();
var api = require("../../../config/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prefix: api.prefix,
    orderdata:[], //home传过来的
    orderdetail:[],//完整的 所有的
    status : '',
    order: [
      {
      //  order_num: orderdata[0]["orderId"],
        status: 1,
        count: 1,
         good_id: 111,
        goods_nums: 1,
        img: [
          '/image/clothes/1 (1).jpg',
        ],
        good_name: "裤子",
        order_amount: 34,
      },

      {
        order_num: 13,
        status: 2,
        count: 1,
        good_id: 111,
        goods_nums: 3,
        img: [
            '/image/clothes/1 (3).jpg',
          ],
        good_name: '裙子',
        order_amount: 34,
      },

      {
        order_num: 13,
        status: 2,
        count: 1,
        good_id: 111,
        goods_nums: 3,
        img: [
          '/image/clothes/1 (4).jpg',
        ],
        good_name: '裙子',
        order_amount: 34,
      },

     
    ],
 
    
    fy_count: 0,
    display: 'none',
    index: 1
},
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 获取订单信息
     */
    var that = this
    
      //订单精确信息
      wx.request({
        url: api.OrderDetailStatueUrl,
        data: {
          status: '1',
        },
        method: "GET",
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.statusCode == 200) {

            console.log('myorder2' + JSON.stringify(res.data))
            that.setData({
              orderdetail: res.data
            })
          }
        }
      })
  },


  

  logist: function (e) {
    wx.showModal({
      title: '提示',
      content: '快递员正在快马加鞭送货中',
    })},



//确认发货 status变成2
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
            status: '2',
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

  }
})