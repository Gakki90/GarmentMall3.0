// pages/order/afterGoods/afterGoods.js
var api = require("../../config/api.js");
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prefix: api.prefix,
    tempFilePaths: [],//传图片用的
    display: 'none',
    winWidth: 0,
    winHeight: 0,
// tab切换
    currentTab: 0,
    clothesInfo: [ ],
    list1: [

      {
        status: 2,
        order_no: 12,
        apply_time: '2012/2/2',
        good_id: 111,
        apply_num: 123,
        good_img: '/image/clothes/1 (3).jpg',
        good_name: "裤",
        return_id: '1234',
      },
      {
        status: 3,
        order_no: 12,
        apply_time: '2012/2/2',
        good_id: 111,
        apply_num: 123,
        good_img: '/image/clothes/1 (4).jpg',
        good_name: "裤",
        return_id: '1234',
      },
      {
        status: 4,
        order_no: 12,
        apply_time: '2012/2/2',
        good_id: 111,
        apply_num: 123,
        good_img: '/image/clothes/1 (5).jpg',
        good_name: "裤",
        return_id: '1234',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

    var that = this

    //订单精确信息
    wx.request({
      url: api.ClothesUrl,
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {

          console.log('clothes' + JSON.stringify(res.data))
          that.setData({
            list1: res.data
          })
        }
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

  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  // 切换
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

// 新增商品
  // 显示下拉框
  toastShow: function (event) {
    this.setData({
      display: 'block',
      statusType: false
    })
  },
  // 隐藏下拉框
  toastHide: function (event) {
    this.setData({
      display: 'none',
      statusType: true
    })
  },
//传图片操作 先选择图片
  img_item: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1,//最多可以选择的图片总数
      sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图
      sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机
      success: function (res) {
        that.setData({
          ['tempFilePaths[' + e.target.id + ']']: res.tempFilePaths[0]
        })
        console.log("photo+" + that.data.tempFilePaths[0])
      }
    })
  },
 /**
   * 信息提交
   */
  formSubmit: function (e) {
    var that = this;
    var goodsId = e.detail.value.goodsId;
    var brand = e.detail.value.brand;
    var goodsName = e.detail.value.goodsName;
    var goodsPicUrl = e.detail.value.goodsPicUrl;
    var marketDate = e.detail.value.marketDate;
    var goodsPrice = e.detail.value.goodsPrice;
    var lable = e.detail.value.lable;

    // 第二个数据库表的内容
    var color = e.detail.value.color;
    var goodsDetaiId = e.detail.value.goodsdetailid;
    var size = e.detail.value.size;
    var stock = e.detail.value.stock;
    var style = e.detail.value.style;
    var TIME = util.formatTime(new Date());
    console.log("time" + TIME);
    console.log("input的内容" + goodsId + brand + goodsName + goodsDetaiId);

    wx.request({
      url: api.AddUrl,
      data: {
        goodsId: goodsId,
        brand: brand,
        goodsName: goodsName,
        goodsPicUrl: goodsPicUrl,
        // marketDate: marketDate,
        goodsPrice: goodsPrice,
        lable: lable,
        color: color,
        goodsDetaiId: goodsDetaiId,
        size: size,
        stock: stock,
        style: style,
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },

      success: function (res) {
        that.setData({ //这里是修改data的值  
          'clothesInfo[0].goodsId': '',
          'clothesInfo[0].brand': '',
          'clothesInfo[0].goodsName': '',
          'clothesInfo[0].goodsPicUrl': '',
          'clothesInfo[0].goodsPrice': '',
          'clothesInfo[0].lable': '',
          'clothesInfo[0].color': '',
          'clothesInfo[0].goodsDetaiId':'',
          'clothesInfo[0].size': '',
          'clothesInfo[0].stock': '',
          'clothesInfo[0].style': '',
        });

        wx.uploadFile({
          url: api.UploadUrl,
          filePath: that.data.tempFilePaths[0],
          name: 'file',
          formData: {
            goodsId: goodsId,
            goodsDetaiId: goodsDetaiId,
          },
          header: {
            "Content-Type": "multipart/form-data"
          },
          success: function (res) {
            var data = JSON.parse(res.data);
            //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }
            console.log(that.data.tempFilePaths[0])
          }
        });


        console.log("清空")
      } 
    })

//上传照片
    // wx.uploadFile({
    //   url: api.UploadUrl,
    //   filePath: that.data.tempFilePaths[0],
    //   name: 'file',
    //   formData: {
    //     goodsId: goodsId,
    //     goodsDetaiId: goodsDetaiId,
    //     },
    //   header: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   success: function (res) {
    //     var data = JSON.parse(res.data);
    //     //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }
    //     console.log(that.data.tempFilePaths[0])
    //   },
    //   fail: function (res) {
    //     wx.hideToast();
    //     wx.showModal({
    //       title: '错误提示',
    //       content: '上传图片失败',
    //       showCancel: false,
    //       success: function (res) { }
    //     })
    //   }
    //   });
   

   

  },

  /**
     * 信息修改
     */
  bindEdit: function (e) {
    var that = this;
    var goodsId = e.currentTarget.dataset.order_id;
    var goodsDetailId = e.currentTarget.dataset.iddetail;
    console.log("goodsDetailId" + goodsDetailId)
    console.log("goodsId" + goodsId)
    wx.request({
      url: api.EditUrl,
      data: {
        // goodsId: goodsId,
        GoodsDetailId: goodsDetailId,
      },
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {

          console.log('edit' + JSON.stringify(res.data))
          that.setData({
          clothesInfo: res.data,
          display: 'block',
            // 'clothesInfo[0].goodsId': '',
            // 'clothesInfo[0].brand': '',
            // 'clothesInfo[0].goodsName': '',
            // 'clothesInfo[0].goodsPicUrl': '',
            // 'clothesInfo[0].goodsPrice': '',
            // 'clothesInfo[0].lable': '',
            // 'clothesInfo[0].color': '',
            // 'clothesInfo[0].goodsDetaiId': '',
            // 'clothesInfo[0].size': '',
            // 'clothesInfo[0].stock': '',
            // 'clothesInfo[0].style': '',
          })
        }
        console.log('clothesInfo' + that.data.clothesInfo)
      }
    })
   
  },

  /**
 * 信息删除
 */
  bindDelete: function (e) {
    var that = this;
    var goodsId = e.currentTarget.dataset.order_id;
    var goodsDetailId = e.currentTarget.dataset.iddetail;
    console.log("goodsDetailId" + goodsDetailId)
    console.log("goodsId" + goodsId)
    wx.showModal({
      title: '删除',
      content: '您确定要删除吗',
      success: function (res) {
        wx.request({
          url: "http://192.168.43.100:8080/deleteGoods", //接口地址
          data: {
            goodsId: goodsId,
            goodsDetailId: goodsDetailId,
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




  hideMenuTap: function (e) {
    this.startAnimation(false, -200)
  },
  // /**
  //  * 信息提交
  //  */
  // formSubmit: function (e) {
  //   var that = this;
  //   var sddressInfo = e.detail.value;
  //   var info = wx.getStorageSync('loginInfo');
  //   sddressInfo.user_id = info.id;
  //   sddressInfo.token = info.token;
  //   sddressInfo.id = e.currentTarget.dataset.id;
  //   sddressInfo.province = that.data.provinceId;
  //   sddressInfo.city = that.data.cityId;
  //   sddressInfo.county = that.data.countyId;
  //   app.ajax.req('web/address_save', sddressInfo, function (res) {
  //     if (res.code == 0) {
  //       wx.showToast({
  //         title: res.msg,
  //         icon: 'loading',
  //         duration: 2000
  //       })
  //       setTimeout((function callback() {
  //         wx.redirectTo({
  //           url: '../clothes/clothes',
  //         })
  //       }).bind(this), 1000);
  //     } else {
  //       wx.showToast({
  //         title: res.msg,
  //         icon: 'loading',
  //         duration: 2000
  //       })
  //     }
  //   })
  // },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})