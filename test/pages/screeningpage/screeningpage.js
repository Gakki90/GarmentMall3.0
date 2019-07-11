// pages/orderpage/orderpage.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CHeight: app.globalData.customHeight + 85,
    CWidth: app.globalData.customWidth,
    serverurl : app.globalData.serverUrl,
    index: 0,
    multiArray: [['请选择服装', '常服', '礼服'], ['请选择品牌', '李维斯', '满庭芳','汉尚华莲','魔法心公社'], ['请选择尺寸', 'S', 'M', 'L'], ['请选择类型', '男款', '女款']],
    multiIndex: [0, 0, 0, 0],

    label:'',
    brand:'',
    size:'',
    style:'',

    goodsWelfareItems:[],


  },
  tap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },


  tapSingleItemForNew:function(e)
  {
    var that = this;
    //console.log(e.currentTarget.dataset.typeid);
    wx.navigateTo({
      url: '../fordetail/fordetail?itemId=' + e.currentTarget.dataset.typeid,
    })
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
    this.setData({
      label: this.data.multiArray[0][this.data.multiIndex[0]],
      brand: this.data.multiArray[1][this.data.multiIndex[1]],
      size: this.data.multiArray[2][this.data.multiIndex[2]],
      style: this.data.multiArray[3][this.data.multiIndex[3]],
    })
    if (this.data.multiIndex[0]==0)
    {
      this.setData({
        label: ''
      })
    }
    if (this.data.multiIndex[1] == 0) {
      this.setData({
        brand: ''
      })
    }
    if (this.data.multiIndex[2] == 0) {
      this.setData({
        size: ''
      })
    }
    if (this.data.multiIndex[3] == 0) {
      this.setData({
        style: ''
      })
    }
    //console.log(this.data.label);
    //console.log(this.data.brand);
    //console.log(this.data.size);
    //console.log(this.data.style);
    let that=this;
    wx.request({
      url: this.data.serverurl+'findByRoughAndDetail',
      data:{
        brand:this.data.brand,
        lable:this.data.label,
        size:this.data.size,
        style:this.data.style,
      },
      success(res)
      {
        console.log(res.data);
        that.setData({
          goodsWelfareItems:res.data
        })
        console.log(that.data.goodsWelfareItems);
      }
    })
  },

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    // 知道修改的列以后，就可以通过修改multiIndex中对应元素的值，然后再修改multiArray
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