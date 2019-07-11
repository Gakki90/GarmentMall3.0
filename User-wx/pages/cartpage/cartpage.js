// pages/shoppage/shoppage.js
var WxCard = require('../../utils/cardPage/cardPage.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: 0,
    CWidth: 0,
    quantity:1,

    goodsDetailList:[],

    picinfo: [],
    serverurl: app.globalData.serverUrl,

    brandItemWidth: 0,
  },

  bindtap: function (e) {
    var that = this;
    WxCard.tapItem(that);
  },


  tapSingleItemForNew: function (e) {
    var that = this;
    //console.log(e.currentTarget.dataset.typeid);
    wx.navigateTo({
      url: '../fordetail/fordetail?itemId=' + e.currentTarget.dataset.goodsid,
    })
  },

  /* 减数 */
  delCount: function (e) {
    var index = e.currentTarget.dataset.index;
    //console.log('数组编号' + index);
    //console.log(this.data.goodsDetailList);
    var count = this.data.goodsDetailList[index].quantity;
    // 商品总数量-1
    if (count > 1) {
      count -= 1;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var delStatus = count <= 1 ? 'disabled' : 'normal';
    // 只有大于10件的时候，才能normal状态，否则disable状态  
    var addStatus = count >= 10 ? 'disabled' : 'normal';
    // 将数值与状态写回  

    let indexgoods = "goodsDetailList[" + index + "].quantity";
    let indexdel = "goodsDetailList[" + index + "].delStatus";
    let indexadd = "goodsDetailList[" + index + "].addStatus";
    this.setData({
      [indexgoods]:count,
      [indexdel]:delStatus,
      [indexadd]:addStatus
    });
    //console.log(this.data.goodsDetailList);
  },

  /* 加数 */
  addCount: function (e) {
    var index = e.currentTarget.dataset.index;
    //console.log('数组编号' + index);
    //console.log(this.data.goodsDetailList);
    var count = this.data.goodsDetailList[index].quantity;
    // 商品总数量+1
    count += 1;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var delStatus = count <= 1 ? 'disabled' : 'normal';
    // 只有大于10件的时候，才能normal状态，否则disable状态  
    var addStatus = count >= 10 ? 'disabled' : 'normal';
    // 将数值与状态写回  

    let indexgoods = "goodsDetailList[" + index + "].quantity";
    let indexdel = "goodsDetailList[" + index + "].delStatus";
    let indexadd = "goodsDetailList[" + index + "].addStatus";
    this.setData({
      [indexgoods]: count,
      [indexdel]: delStatus,
      [indexadd]: addStatus
    });
    //console.log(this.data.goodsDetailList);
  },




/*选择尺码*/
  sizechoose:function(e)
  {
    var index = e.currentTarget.dataset.index;
    console.log('数组编号' + index);

    var goodssize = e.currentTarget.dataset.size;
    console.log('尺码'+goodssize);

    let gsize = "goodsDetailList[" + index + "].gsize"
    this.setData({
      [gsize]:goodssize,
    });
    console.log(this.data.goodsDetailList);
    wx.showModal({
      title: '提示',
      content: '已选择'+goodssize,
      success: function (res) {
        if
        (res.confirm) {
          console.log('用户确认')
        }
      }
    })
  },

  colorchoose:function(e)
  {
    var index = e.currentTarget.dataset.index;
    console.log('数组编号' + index);

    var goodcolor = e.currentTarget.dataset.color;
    console.log('颜色' + goodcolor);

    let gcolor = "goodsDetailList[" + index + "].gcolor"
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

  rent:function(e)
  {
    var index = e.currentTarget.dataset.index;
    console.log('数组编号' + index);
    var goodId=this.data.goodsDetailList[index].goodsId;
    var goodName=this.data.goodsDetailList[index].goodsName;
    var rentdate=this.data.goodsDetailList[index].quantity;
    var size = this.data.goodsDetailList[index].gsize;
    var color = this.data.goodsDetailList[index].gcolor;
    console.log(goodId);
    let that=this;
    wx.showModal({
      title: '提示',
      content: '已选择：' + goodName + '，天数：' + rentdate + '，尺码' + size+'，颜色'+color,
      success: function (res) {
        if
        (res.confirm) {
          console.log('用户确认')
          that.onShow();
        }
        else{return;}
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    this.setData({
      CHeight: app.globalData.customHeight,
      CWidth: app.globalData.customWidth
    });

    // wx.request({
    //   url: this.data.serverurl+'findInfoByShopCart',
    //   method:"GET",
    //   data:{
    //     userId: app.globalData.openId,
    //   },
    //   success(res){
    //     //console.log(res.data)
    //     that.setData({
    //       goodsDetailList:res.data,
    //     })

    //     console.log(that.data.goodsDetailList)

    //     var length = that.data.goodsDetailList.length;
    //     console.log('changdu' + length);
    //     for (var i = 0; i < length; i++) {
    //       let quantity = "goodsDetailList[" + i + "].quantity";
    //       let delStatus = "goodsDetailList[" + i + "].delStatus";
    //       let addStatus = "goodsDetailList[" + i + "].addStatus";
    //       let gsize = "goodsDetailList[" + i + "].gsize";
    //       let index = "goodsDetailList[" + i + "].index";
    //       let gcolor = "goodsDetailList[" + i + "].gcolor";

    //       that.setData({
    //         [quantity]: 1,
    //         [delStatus]: 'disabled',
    //         [addStatus]: 'normal',
    //         [index]: i,
    //         [gsize]: 'M',
    //         [gcolor]:'白色',
    //       })
    //     }

    //     console.log(that.data.goodsDetailList)
    //   }
    // })
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
    let that = this
    console.log('onshow');
    wx.request({
      url: this.data.serverurl + 'findInfoByShopCart',
      method: "GET",
      data: {
        userId: app.globalData.openId,
      },
      success(res) {
        //console.log(res.data)
        that.setData({
          goodsDetailList: res.data,
        })

        console.log(that.data.goodsDetailList)

        var length = that.data.goodsDetailList.length;
        console.log('changdu' + length);
        for (var i = 0; i < length; i++) {
          let quantity = "goodsDetailList[" + i + "].quantity";
          let delStatus = "goodsDetailList[" + i + "].delStatus";
          let addStatus = "goodsDetailList[" + i + "].addStatus";
          let gsize = "goodsDetailList[" + i + "].gsize";
          let index = "goodsDetailList[" + i + "].index";
          let gcolor = "goodsDetailList[" + i + "].gcolor";

          that.setData({
            [quantity]: 1,
            [delStatus]: 'disabled',
            [addStatus]: 'normal',
            [index]: i,
            [gsize]: 'M',
            [gcolor]: '白色',
          })
        }

        console.log(that.data.goodsDetailList)
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