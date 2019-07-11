/*
Navicat MySQL Data Transfer

Source Server         : gengxiangyi
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : gxszinfo

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-07-11 14:39:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods_detail
-- ----------------------------
DROP TABLE IF EXISTS `goods_detail`;
CREATE TABLE `goods_detail` (
  `goods_id` int(11) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `goods_detai_id` int(11) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `style` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goods_detai_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_detail
-- ----------------------------
INSERT INTO `goods_detail` VALUES ('1003', '白色', '11003', 'S', '20', '女款');
INSERT INTO `goods_detail` VALUES ('1002', '白色', '11002', 'S', '1', '女款');
INSERT INTO `goods_detail` VALUES ('1001', '白色', '11001', 'S', '1', '女款');
INSERT INTO `goods_detail` VALUES ('1004', '白色', '11004', 'M', '7', '女款');
INSERT INTO `goods_detail` VALUES ('1005', '金色', '11005', 'M', '6', '女款');
INSERT INTO `goods_detail` VALUES ('1006', '白色', '11006', 'S', '2', '女款');
INSERT INTO `goods_detail` VALUES ('1007', '白红', '11007', 'M', '2', '女款');
INSERT INTO `goods_detail` VALUES ('1008', '粉红', '11008', 'M', '2', '女款');
INSERT INTO `goods_detail` VALUES ('1033', '白色', '11033', 'S', '1', null);
INSERT INTO `goods_detail` VALUES ('1032', '白色', '11032', 'M', '12', '女');
INSERT INTO `goods_detail` VALUES ('12222', '黄色', '1122222', 'S', '12', null);
INSERT INTO `goods_detail` VALUES ('1034', '粉色', '11034', 'M', '1', '女');

-- ----------------------------
-- Table structure for goods_rough
-- ----------------------------
DROP TABLE IF EXISTS `goods_rough`;
CREATE TABLE `goods_rough` (
  `goods_id` int(11) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `goods_name` varchar(255) DEFAULT NULL,
  `goods_pic_url` varchar(255) DEFAULT NULL,
  `market_date` date DEFAULT NULL,
  `goods_price` decimal(19,2) DEFAULT NULL,
  `lable` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_rough
-- ----------------------------
INSERT INTO `goods_rough` VALUES ('1001', '满庭芳', '白色小礼服裙小白裙羽毛裙2019夏季新款毕业礼服短款聚会连衣裙女', 'TB2fnmBlTXYBeNkHFrdXXciuVXa_!!656967228.jpg', '2019-07-09', '1212.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1002', '白鸟', '糖力夏季新款修身显瘦小清新星星吊带心机裙子a字设计感连衣裙女\r\n糖力夏季新款修身显瘦小清新星星吊带心机裙子a字设计感连衣裙女\r\n\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n', 'O1CN01pOUSL626htqsfNB08_!!0-item_pic.jpg', '2019-07-09', '2000.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1003', '满庭芳', '乐町休闲西装外套2019夏季新款女时尚韩版宽松卡其色长袖西装外套', 'O1CN01K6dO7T1U8DcJNbcly_!!3983662472.jpg_400x400.jpg', '2019-07-09', '1212.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1004', 'VGallery', 'VGallery廊下|原创显瘦利器大宽松袖硬挺廓形短袖衬衫女 白/卡其', '2014301273906.jpg', '2019-07-02', '229.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1005', '芊彩艺', '晚礼服女宴会2019新款高贵气质仙生日派对礼服连衣裙名媛', 'TB1LOHeQpXXXXaNaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90 (1).jpg', '2019-07-01', '819.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1006', '满庭芳', '满庭芳【花园少女】婚纱女2019新款新娘法式轻婚纱小礼服缎面婚纱', 'TB1LOHeQpXXXXaNaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg', '2019-07-01', '1299.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1007', '魔法心公社', '现代改良汉服女日常中国风茶服茶艺服装民族风民国风女装复古套装', 'O1CN01EmU2Tv1gBDaVat2lk_!!2200530534103.jpg_400x400.jpg', '2019-06-12', '111.00', '常服');
INSERT INTO `goods_rough` VALUES ('1008', '哆啦A梦', '御姐范女神白色连衣裙女仙气质超仙雪纺长裙夏度假飘逸大摆裙长款', 'O1CN01NRlcIB1P4UHn3Gajk_!!3253381787.jpg_430x430q90.jpg', '2019-06-12', '568.00', '常服');
INSERT INTO `goods_rough` VALUES ('1032', '玲玖', '玲玖复古格子吊带裙收腰小清新法式a字连衣裙2019新款女夏\r\n', 'O1CN01wuBGtV1VnGgwtsmrp_!!704652697.jpg', '2019-07-10', '570.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1033', '白鸟', '亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白', '14087168064314.png', '2019-07-10', '2000.00', '礼服');
INSERT INTO `goods_rough` VALUES ('1034', 'Marie Elie', '时尚气质黎红亮片爱心吊带连衣裙女2019春夏新品\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n亲爱的白《千鸟》2019新款女拖尾缎面婚纱森系公主简约新娘法式裙\r\n时尚气质黎红亮片爱心吊带连衣裙女2019春夏新品\r\n', 'O1CN01LYFW7s1HhP1r8AZ3y_!!1086750789.jpg', '2019-07-10', '2300.00', '礼服');
INSERT INTO `goods_rough` VALUES ('12222', 'A', '裙子', '15357276434814.jpg', '2019-07-11', '12.00', '裙子');

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
INSERT INTO `hibernate_sequence` VALUES ('1');

-- ----------------------------
-- Table structure for order_info
-- ----------------------------
DROP TABLE IF EXISTS `order_info`;
CREATE TABLE `order_info` (
  `order_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `delivery` varchar(255) DEFAULT NULL,
  `goods_detail_id` int(11) NOT NULL,
  `order_date` date DEFAULT NULL,
  `order_price` decimal(19,2) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `lease_term` date DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_info
-- ----------------------------
INSERT INTO `order_info` VALUES ('2001', '1', '中通', '11001', '2019-07-01', '459.00', '2', '2019-07-19', '3001');
INSERT INTO `order_info` VALUES ('2002', '1', '中通', '11002', '2019-07-02', '208.00', '3', '2019-07-01', '3002');
INSERT INTO `order_info` VALUES ('2003', '2', '申通', '11003', '2019-07-02', '329.00', '2', '2019-07-31', '3002');
INSERT INTO `order_info` VALUES ('2004', '1', '圆通', '11004', '2019-07-06', '229.00', '2', '2019-07-10', '3003');
INSERT INTO `order_info` VALUES ('2005', '1', '韵达', '11005', '2019-07-10', '819.00', '4', '2019-07-17', '3004');
INSERT INTO `order_info` VALUES ('2006', '1', '圆通', '11004', '2019-07-08', '229.00', '6', '2019-07-16', '3003');
INSERT INTO `order_info` VALUES ('2007', '1', '韵达', '11005', '2019-07-10', '819.00', '7', '2019-07-10', '3004');
INSERT INTO `order_info` VALUES ('2008', '4', '韵达', '11008', '2019-07-08', '819.00', '6', '2019-07-17', '3003');
INSERT INTO `order_info` VALUES ('2009', '2', '申通', '11003', '2019-07-12', '329.00', '2', '2019-07-31', '3002');
INSERT INTO `order_info` VALUES ('2010', '1', '圆通', '11032', '2019-07-10', '229.00', '6', '2019-07-23', '3005');
INSERT INTO `order_info` VALUES ('2011', '1', '圆通', '11004', '2019-07-10', '229.00', '1', '2019-07-23', '3005');
INSERT INTO `order_info` VALUES ('2012', '1', '圆通', '11034', '2019-07-08', '229.00', '6', '2019-07-16', '3003');

-- ----------------------------
-- Table structure for shop_cart
-- ----------------------------
DROP TABLE IF EXISTS `shop_cart`;
CREATE TABLE `shop_cart` (
  `goods_detail_id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`goods_detail_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_cart
-- ----------------------------

-- ----------------------------
-- Table structure for user_advise
-- ----------------------------
DROP TABLE IF EXISTS `user_advise`;
CREATE TABLE `user_advise` (
  `user_id` varchar(255) DEFAULT NULL,
  `user_advise_id` varchar(255) NOT NULL,
  `user_date` date DEFAULT NULL,
  `user_advise` varchar(255) DEFAULT NULL,
  `response` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_advise_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_advise
-- ----------------------------

-- ----------------------------
-- Table structure for user_collection
-- ----------------------------
DROP TABLE IF EXISTS `user_collection`;
CREATE TABLE `user_collection` (
  `goods_detail_id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`goods_detail_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_collection
-- ----------------------------
INSERT INTO `user_collection` VALUES ('1033', 'undefined');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_id` varchar(255) NOT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_level` int(11) NOT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_portrait_url` varchar(255) DEFAULT NULL,
  `end_time` date DEFAULT NULL,
  `user_sex` tinyint(6) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('3001', '重庆', '220', '15215196679', 'null', '2019-07-25', '0');
INSERT INTO `user_info` VALUES ('3002', '重庆', '110', '13523232443', 'null', '2019-07-23', '1');
INSERT INTO `user_info` VALUES ('3003', '北京', '300', '15733243233', 'null', '2019-07-30', '1');
INSERT INTO `user_info` VALUES ('3004', '上海', '250', '13728838288', 'null', '2019-07-27', '0');

-- ----------------------------
-- Table structure for user_login
-- ----------------------------
DROP TABLE IF EXISTS `user_login`;
CREATE TABLE `user_login` (
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=REDUNDANT;

-- ----------------------------
-- Records of user_login
-- ----------------------------
INSERT INTO `user_login` VALUES ('15215196679', 's', 'ssss');
