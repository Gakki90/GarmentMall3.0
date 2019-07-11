var WxApiRoot = 'http://192.168.37.1:8080/admin/';
module.exports = {
  StatusUrl: WxApiRoot + 'findOrderByStatus', //订单数状态查询
  DealUrl: WxApiRoot + 'findOrderNumberToday', //交易状态查询
  MemberUrl: WxApiRoot + 'findAllUserInfo', //会员状态查询
  OrderUrl: WxApiRoot + 'findAllOrder', //订单状态查询
  OrderdetailUrl: WxApiRoot + 'findAllOrderDetail', //订单状态查询(详细信息)
  UpdateUrl: WxApiRoot + 'updateStatus', //订单状态查询（用于更新）
  OrderDetailStatueUrl: WxApiRoot + 'findOrderDetail', //订单状态对应的数组
  ClothesUrl: WxApiRoot + 'findAllGoods', //返回衣服增删改查的数据
  Clothes2Url: WxApiRoot + 'findAllGoodsDetail', //返回衣服增删改查的数据
  DeleteUrl: WxApiRoot + 'deleteGoodRoughById', //返回衣服增删改查的数据
  AddUrl: WxApiRoot + 'addGoodRoughEx', 
  EditUrl: WxApiRoot + 'findGoodsExByDetailId', //返回衣服增删改查的数据
  UploadUrl: WxApiRoot + 'upload', //返回衣服增删改查的数据
  prefix: 'http://192.168.37.1:8080/'
};