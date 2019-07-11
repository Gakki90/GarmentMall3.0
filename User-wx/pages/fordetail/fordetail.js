// pages/fordetail/fordetail.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: app.globalData.customHeight+85,
    CWidth: app.globalData.customWidth,
    serverurl: app.globalData.serverUrl,
    likesrc:'../image/收藏.png',
    shopcartsrc:'../image/购物车.png',
    isLike:null,
    isShopCart:null,
    goodsDetailSize:0,
    goodsDetailColor:'',
    itemDetail:
      {
      itemId: 0,//记录商品单品编号
      itemInfo: [],
      serverurl: app.globalData.serverUrl,
      quantity:1,
      gcolor:'白色',
      gsize:'黑色',
      },
    showDialog: false, 
  },
    /**
     * sku 弹出
     */
  toggleDialog: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  tapbrand:function(e)
  {
    var brandenter=e.currentTarget.dataset.brand;

    wx.navigateTo({
      url: '../brandpage/brandpage?brandName=' + brandenter,
    })
  },
  /**
   * sku 关闭
   */
  closeDialog: function () {
    console.info("关闭");
    this.setData({
      showDialog: false
    });
  },
  /**
   * 加入购物车
   */
  addCart: function (e) {
    if (this.data.isShopCart) {
      this.setData({
        shopcartsrc: '../image/购物车空.png',
        isShopCart: !this.data.isShopCart,
      });
      wx.request({
        url: this.data.serverurl + 'deleteShopCartByBothID',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          userId: app.globalData.openId,
          goodsDetailId: this.data.itemDetail.itemId
        }
      })
    }
    else {
      this.setData({
        shopcartsrc: '../image/购物车满.png',
        isShopCart: !this.data.isShopCart,
      });
      wx.request({
        url: this.data.serverurl + 'addShopCart',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          userId: app.globalData.openId,
          goodsDetailId: this.data.itemDetail.itemId
        }
      })
    }

  },
  // 收藏
  addLike() {

    if(this.data.isLike)
    {
      this.setData({
        likesrc:'../image/收藏.png',
        isLike:!this.data.isLike,
      });
      wx.request({
        url: this.data.serverurl + 'deleteCollect',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          userId: app.globalData.openId,
          goodsDetailId: this.data.itemDetail.itemId
        }
      })
    }
    else
    {
      this.setData({
        likesrc: '../image/已收藏.png',
        isLike:!this.data.isLike,
      });
      wx.request({
        url: this.data.serverurl + 'addCollection',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          userId: app.globalData.openId,
          goodsDetailId: this.data.itemDetail.itemId
        }
      })
    }
  },

  /* 减数 */
  delCount: function (e) {
    var id = e.currentTarget.dataset.id;
    var count = this.data.itemDetail.quantity;
    // 商品总数量-1
    if (count > 1) {
      count -= 1;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var delStatus = count <= 1 ? 'disabled' : 'normal';
    // 只有大于10件的时候，才能normal状态，否则disable状态  
    var addStatus = count >= 10 ? 'disabled' : 'normal';
    // 将数值与状态写回  

    let indexgoods = "itemDetail.quantity";
    let indexdel = "itemDetail.delStatus";
    let indexadd = "itemDetail.addStatus";
    this.setData({
      [indexgoods]: count,
      [indexdel]: delStatus,
      [indexadd]: addStatus
    });
  },

  /* 加数 */
  addCount: function (e) {
    var id = e.currentTarget.dataset.id;
    var count = this.data.itemDetail.quantity;
    // 商品总数量+1
    count += 1;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var delStatus = count <= 1 ? 'disabled' : 'normal';
    // 只有大于10件的时候，才能normal状态，否则disable状态  
    var addStatus = count >= 10 ? 'disabled' : 'normal';
    // 将数值与状态写回  

    let indexgoods = "itemDetail.quantity";
    let indexdel = "itemDetail.delStatus";
    let indexadd = "itemDetail.addStatus";
    this.setData({
      [indexgoods]: count,
      [indexdel]: delStatus,
      [indexadd]: addStatus
    });
  },




  /*选择尺码*/
  sizechoose: function (e) {
    var id = e.currentTarget.dataset.id;

    var goodssize = e.currentTarget.dataset.size;

    let gsize = "itemDetail.gsize"
    this.setData({
      [gsize]: goodssize,
    });
    wx.showModal({
      title: '提示',
      content: '已选择' + goodssize,
      success: function (res) {
        if
        (res.confirm) {
          console.log('用户确认')
        }
      }
    })
  },

  colorchoose: function (e) {
    var id = e.currentTarget.dataset.id;

    var goodcolor = e.currentTarget.dataset.color;

    let gcolor = "itemDetail.gcolor"
    this.setData({
      [gcolor]: goodcolor,
    });
    wx.showModal({
      title: '提示',
      content: '已选择' + goodcolor,
      success: function (res) {
        if
        (res.confirm) {
          console.log('用户确认')
        }
      }
    })
  },

  rent: function (e) {
    var id = e.currentTarget.dataset.id;
    var goodId = this.data.itemDetail.itemInfo[0].goodsId;
    var goodName = this.data.itemDetail.itemInfo[0].goodsName;
    var rentdate = this.data.itemDetail.quantity;
    var size = this.data.itemDetail.gsize;
    var color = this.data.itemDetail.gcolor;
    let that = this;
    wx.showModal({
      title: '提示',
      content: '已选择：' + goodName + '，天数：' + rentdate + '，尺码' + size + '，颜色' + color,
      success: function (res) {
        if
        (res.confirm) {
          console.log('用户确认')
          that.onShow();
        }
        else { return; }
      }
    })

    wx.request({
      url: that.data.serverurl + 'buyFromShopCart',
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        userId: app.globalData.openId,
        goodsDetailId: goodId,
        days: rentdate,
        dilivery: '顺丰',
        amount: 1,
        color: color,
        size: size
      }
    })
  },

  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  tap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  tapsize: function(e)
  {
    let that=this;
    that.setData
    ({
      goodsDetailSize:e.currentTarget.dataset.size,
    })
  },

  tapcolor:function(e)
  {
    let that=this;
    that.setData({
      goodsDetailColor:e.currentTarget.dataset.color
    })
  },

  deciderent:function()
  {
  wx.request({
  url: this.data.serverurl+'addOrderInfo',
  method:"POST",
  header:"",
  data:{

  }
})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      'itemDetail.itemId':options.itemId,
    })

    let that = this;


    wx.request({
      url: this.data.serverurl + 'isLiked',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        userId: app.globalData.openId,
        goodsDetailId: this.data.itemDetail.itemId
      },
      success(res) {
        that.setData({
          isLike: res.data
        })
        if (that.data.isLike) {
          that.setData({
            likesrc: '../image/已收藏.png'
          })
        }
        else
        {
          that.setData({
            likesrc: '../image/收藏.png'
          })
        }
      }
    })

    wx.request({
      url: this.data.serverurl + 'isShopCart',
      method: 'GET',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        userId: app.globalData.openId,
        goodsDetailId: this.data.itemDetail.itemId
      },
      success(res) {
        that.setData({
          isShopCart: res.data
        })

        if (that.data.isShopCart) {
          that.setData({
            shopcartsrc: '../image/购物车满.png'
          })
        }
        else {
          that.setData({
            shopcartsrc: '../image/购物车空.png'
          })
        }
      }
    })

    wx.request({
      method: "GET",
      url: this.data.serverurl+'goodsRough/findWhateverYouWant',
      data:{
        goodsId:this.data.itemDetail.itemId
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success(res) {
        that.setData({
          'itemDetail.itemInfo': res.data,
        });
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