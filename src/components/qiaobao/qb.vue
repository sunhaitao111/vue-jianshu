<template>
  <div class="qianbao">
    <div class="phone hidden-md-and-up">
      <div class="follow-detail">
        <div class="info">
          <a href class="avatar">
            <span>现金余额</span>
          </a>
          <a href class="btn-success">
            <span>提现</span>
          </a>
          <!-- <i class="el-icon-arrow-right btn"></i> -->
          <a href class="title-2">0.00</a>
        </div>
      </div>
      <div class="zi">
        <p>提现金额需满100元,</p>
        <span>查看提现帮助</span>
      </div>
      <div class="ty-3">
        <a href>
          <Icon type="ios-card"/>
        </a>
        <span>优惠券</span>
        <div class="gg">
          <span>0张可用</span>
        </div>
      </div>
      <div class="ty-3" style="margin-top:15px;">
        <a href style="color:#ff4423;">
          <Icon type="logo-usd"/>
        </a>
        <span>我的收入</span>
      </div>
      <div class="ty-3" style="margin-top:15px;">
        <a href class="el-icon-s-cooperation" style="color:#3295f1;"></a>
        <span>交易记录</span>
      </div>
      <div class="ty-3" style="margin-top:23px;border-bottom:1px soild #000;">
        <a href style="color:#ff694f;">
          <Icon type="logo-wordpress"/>
        </a>
        <span>我的赞赏码</span>
      </div>
    </div>
      <nav11 />
    <div class="qb hidden-sm-and-down">
      <Row>
        <Col span="7">
          <div class="qb-left hidden-sm-and-down">
            <div class="left-img">
              <a href="/zuozheC">
                <img src="../../../public/images/nav-user.jpg" alt>
              </a>
            </div>
            <div class="left-text">
              <h2>
                <a href="/zuozheC" class="title">满眼星辰_334455</a>
              </h2>
              <Dropdown>
                <a href="javascript:void(0)" class="tel">已绑定手机号</a>
                <DropdownMenu slot="list">
                  <DropdownItem>当前绑定手机:151********</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Col>
        <Col span="10">
          <div class="qb-center hidden-sm-and-down">
            <div>
              <span class="zh">账户余额</span>
              <span class="zh-l">0</span>
              <span class="zh-r">.00元</span>
            </div>
            <div class="qb-action">
              <span class="tx">提现</span>
              <span class="ye">*当前余额不足</span>
            </div>
          </div>
        </Col>
        <Col span="7">
          <div class="col-xs-7 meta hidden-sm-and-down">
            <div class="qb-right">
              <div>每次提现最小额度为￥100.00</div>
              <div>提现会在 3-5 个工作日内到账</div>
              <div>结算后的收益，提现不再收取手续费</div>
              <a href="/p/72f326961ab3" target="_blank" class="help">收入结算与提现常见问题</a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <ul class="body hidden-sm-and-down">
      <li class="title hidden-sm-and-down">
        <div class="time">时间</div>
        <div class="type">类型</div>
        <div class="details">详情</div>
        <div class="amount">金额</div>
        <div class="remark">状态</div>
      </li>
    </ul>
  </div>
</template>
<script>
import nav11 from "../../views/nav/nav";
export default {
  components: {
    nav11
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.phone {
  margin-top: 65px;
}
.gg {
  background-color: #f14f32;
  width: 50px;
  color: #fff;
  border-radius: 4px;
  padding-top: 5px;
  display: block;
  text-align: center;
  float: right;
  margin-top: 5px;
  margin-right: 10px;
}
.ty-3 a {
  font-size: 22px;
  color: rgb(243, 147, 38);
}
.ty-3 {
  margin-top: 50px;
  padding: 11px 10px 0 10px;
  border-top: rgb(214, 214, 214) 1px solid;
}
.zi span {
  float: right;
  color: rgb(57, 143, 255);
}
.zi p {
  float: left;
}
.zi {
  width: 60%;
  margin: 0 auto;
  margin-top: 15px;
}
.btn-success {
  border: 1px solid rgb(255, 255, 255);
  float: right;
  border-radius: 4px;
  color: #ffffff;
  width: 12%;
  margin-top: 10px;
}
.btn-success span {
  display: block;
  text-align: center;
}
.follow-detail {
  
  background-image: url(../../../public/images/qianbao.png);
  font-size: 12px;
  width: 90%;
  margin: 0 auto;
  /* border-radius: 5px; */
}
.follow-detail .info {
  min-height: 47px;
}
.follow-detail .avatar {
  float: left;
  margin-right: 10px;
  width: 48px;
  height: 48px;
}
.avatar {
  line-height: 40px;
  color: #ffffff;
  margin-left: 10px;
}
.info .btn {
  float: right;
  font-size: 14px;
  padding-top: 20px;
}
.title-2 {
  margin-left: 10px;
  font-size: 22px;
  vertical-align: middle;
  color: #ffffff;
  line-height: 40px;
}

.qianbao {
  width: 100%;
}
.qb {
  width: 65%;
  margin: 100px auto 0;
}
.qb-left {
  padding-top: 20px;
  padding-bottom: 20px;
  border-right: 1px solid #e4e4e4;
}
.left-img {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.left-img img {
  width: 100%;
  border-radius: 50%;
}
.left-text {
  display: inline-block;
  /* padding: 20px 0 0 25px; */
  margin-left: 20px;
  position: absolute;
  top: 36px;
}
.title {
  color: #333;
  font-size: 21px;
  font-weight: 500;
}
.left-text > h2 {
  margin-bottom: 10px;
}
.left-text .tel {
  color: #969696;
  font-size: 12px;
  cursor: text;
}
.qb-center {
  padding: 10px 55px 20px;
  border-right: 1px solid #e4e4ee;
  color: #333;
}
.qb-center .zh {
  margin-right: 20px;
  font-size: 16px;
  color: #969696;
  display: inline-block;
}
.qb-center .zh-l {
  font-size: 28px;
}
.qb-center .zh-r {
  font-size: 18px;
}
.qb-action {
  margin-top: 20px;
}
.qb-action .tx {
  display: inline-block;
  width: 80px;
  height: 32px;
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e !important;
  border-radius: 40px;
  text-align: center;
  line-height: 32px;
  font-size: 15px;
  font-weight: 200;
  margin-right: 15px;
}
.qb-action .ye {
  font-size: 13px;
  color: #969696;
}
.qb-right {
  padding: 10px 34px;
  font-size: 13px;
  color: #969696;
  line-height: 25px;
  font-weight: 100;
}
.body {
  width: 65%;
  margin: 20px auto;
  border: 1px solid #dcdcdc;
  border-radius: 6px 6px 0 0;
}
.body li.title {
  padding: 25px 20px 40px;
  font-size: 14px;
  color: #333;
}
.body li.title div {
  float: left;
  border-right: 1px dashed #c8c8c8;
}
.body li.title div.time {
  width: 135px;
}
.body li.title div.type {
  padding-left: 15px;
  width: 90px;
}
.body li.title div.details {
  padding-left: 15px;
  width: 386px;
}
.body li.title div.amount {
  padding-left: 15px;
  width: 140px;
}
.body li.title div.remark {
  padding-left: 15px;
  font-size: 14px;
  color: #333;
  border-right: none;
}
</style>
