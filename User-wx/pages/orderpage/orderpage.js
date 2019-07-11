// pages/shoppage/shoppage.js
//var WxOrderList = require('../../utils/orderlistpage/orderlistpage.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: 0,
    CWidth: 0,
    orderState:null,


    goodsOrderList: [],

    inputOrderList:[
    ],

    picinfo: [],
    serverurl: app.globalData.serverUrl,

    brandItemWidth: 0,
  },

  tap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  tapoperation:function(e)
  {
    var op = e.currentTarget.dataset.operation;
    var orderId=e.currentTarget.dataset.orderid;
    console.log(op);
    let that = this;
  wx.request({
  url: this.data.serverurl+'updateStatusByClick',
  method:"POST",
  header: { 'content-type': 'application/x-www-form-urlencoded' },
  data:{
    id:orderId,
    Click:op,
  },
  success(res){
    if ((op == '确认收货') && (that.data.orderState != 0)) {
      that.setData({
        orderState: 2,
      });
    }
    else if ((op == '返还') && (that.data.orderState != 0)) {
      that.setData({
        orderState: 3,
      });
    }
    else {
      that.setData({
        orderState: 0,
      });
    }

    that.onShow();
  }
})
  },

  bindtap: function (e) {
    var that = this;
  },

  /* 减数 */
  
  /* 加数 */
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      orderState: parseInt(options.orderState),
    });
    this.setData({
      CHeight: app.globalData.customHeight+85,
      CWidth: app.globalData.customWidth
    });
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
    let that=this;
    wx.request({
      url: that.data.serverurl + 'findOrderAndGoodsInfo',
      data: {
        userId: app.globalData.openId
      },
      success(res) {
        that.setData({
          goodsOrderList: res.data,
        })
        console.log(that.data.goodsOrderList);


        var length = that.data.goodsOrderList.length;
        for (var i = 0; i < length; i++) {
          let statename = "goodsOrderList[" + i + "].statename";
          let showOp = "goodsOrderList[" + i + "].showOp";
          let opName = "goodsOrderList[" + i + "].opName";
          let ans = "goodsOrderList[" + i + "].ans";
          let ansShow = "goodsOrderList[" + i + "].ansShow";
          let delivery = "goodsOrderList[" + i + "].delivery";
          let deliveryshow = "goodsOrderList[" + i + "].deliveryshow";
          let orderDate = "goodsOrderList[" + i + "].orderDate";
          let leaseTerm = "goodsOrderList[" + i + "].leaseTerm";
          that.setData({
            [ansShow]: false,
            [ans]: '',
            [deliveryshow]: false,
            [orderDate]: that.data.goodsOrderList[i].orderDate.substring(0, 10),
            [leaseTerm]: that.data.goodsOrderList[i].leaseTerm.substring(0, 10),
          })
          if (that.data.goodsOrderList[i].status == 1) {
            that.setData({
              [statename]: '待发货',
              [showOp]: false,
              [opName]: null,
            })
          }
          else if (that.data.goodsOrderList[i].status == 2) {
            that.setData({
              [statename]: '待收货',
              [showOp]: true,
              [opName]: '确认收货',
              //[delivery]: '快递公司+单号',
              [deliveryshow]: true,
            })
          }
          else if (that.data.goodsOrderList[i].status == 3) {
            that.setData({
              [statename]: '待返还',
              [showOp]: true,
              [opName]: '返还',
            })
          }
          else if ((that.data.goodsOrderList[i].status == 5) || (that.data.goodsOrderList[i].status == 6) || (that.data.goodsOrderList[i].status == 7)) {
            var answer='';
            if (that.data.goodsOrderList[i].status == 5)
            {
              answer='待审核';
            }
            if (that.data.goodsOrderList[i].status == 6) {
              answer = '审核成功';
            }
            if (that.data.goodsOrderList[i].status == 7) {
              answer = '审核失败';
            }
            that.setData({
              [statename]: '已完成',
              [showOp]: false,
              [opName]: null,
              [ans]: answer,
              [ansShow]: true,
            })
          }
        }

        that.setData({
          inputOrderList:[],
        })

        if (that.data.orderState == 0) {
          that.setData({
            inputOrderList: that.data.goodsOrderList,
          })
        }
        else if (that.data.orderState == 1) {
          var index = 0;
          for (var i = 0; i < that.data.goodsOrderList.length; i++) {
            if (that.data.goodsOrderList[i].status == 1) {
              let input = "inputOrderList[" + index + "]";
              that.setData({
                [input]: that.data.goodsOrderList[i],
              })
              index += 1;
            }
          }
        }
        else if (that.data.orderState == 2) {
          var index = 0;
          for (var i = 0; i < that.data.goodsOrderList.length; i++) {
            if (that.data.goodsOrderList[i].status == 2) {
              let input = "inputOrderList[" + index + "]";
              that.setData({
                [input]: that.data.goodsOrderList[i],
              })
              index += 1;
            }
          }
        }
        else if (that.data.orderState == 3) {
          var index = 0;
          for (var i = 0; i < that.data.goodsOrderList.length; i++) {
            if (that.data.goodsOrderList[i].status == 3) {
              let input = "inputOrderList[" + index + "]";
              that.setData({
                [input]: that.data.goodsOrderList[i],
              })
              index += 1;
            }
          }
        }
        else if (that.data.orderState == 4) {
          var index = 0;
          for (var i = 0; i < that.data.goodsOrderList.length; i++) {
            if ((that.data.goodsOrderList[i].status == 5) || (that.data.goodsOrderList[i].status == 6) || (that.data.goodsOrderList[i].status == 7)) {
              let input = "inputOrderList[" + index + "]";
              that.setData({
                [input]: that.data.goodsOrderList[i],
              })
              index += 1;
            }
          }
        }
        console.log(that.data.inputOrderList);
      }
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