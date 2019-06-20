<template>
  <div>
    <nav1/>
    <div class="hidden-xs-only shezhi">
      <div class="shezhi-nav">
        <div class="shezhi-list">
          <div class="shezhi-1">
            <router-link to="/shezhi" :class="this.$route.path === '/shezhi' ? 'active' : ''">
              <i class="el-icon-s-fold"></i>基础设置
            </router-link>
          </div>
          <div class="shezhi-1">
            <router-link to="/grzl" :class="this.$route.path === '/grzl' ? 'active' : ''">
              <i class="el-icon-user"></i>个人资料
            </router-link>
          </div>
          <div class="shezhi-1">
            <router-link to="/hmd" :class="this.$route.path === '/hmd' ? 'active' : ''">
              <i class="el-icon-remove-outline"></i>黑名单
            </router-link>
          </div>
          <div class="shezhi-1">
            <router-link to="/zssz" :class="this.$route.path === '/zssz' ? 'active' : ''">
              <i class="el-icon-coin"></i>赞赏设置
            </router-link>
          </div>
          <div class="shezhi-1">
            <router-link to="/zhsz" :class="this.$route.path === '/zhsz' ? 'active' : ''">
              <i class="el-icon-s-tools"></i>账号管理
            </router-link>
          </div>
        </div>
        <div class="col-xs-16 col-xs-offset-8 shezhi-2">
          <router-view/>
        </div>
      </div>
    </div>

    <div class="hidden-sm-and-up shezhi">
      <div class="shezhi-nav">
        <div class="shezhi-list">
          <el-row>
            <el-col :md="6">
              <div class="shezhi-1">
                <router-link to="/shezhi" :class="this.$route.path === '/shezhi' ? 'active' : ''">
                  <el-row>
                    <el-col>
                      <i class="el-icon-s-fold"></i>
                    </el-col>
                    <el-col>基础设置</el-col>
                  </el-row>
                </router-link>
              </div>
            </el-col>
          </el-row>
          <div class="shezhi-1">
            <el-row>
              <el-col :md="6">
                <router-link to="/grzl" :class="this.$route.path === '/grzl' ? 'active' : ''">
                  <el-row>
                    <el-col>
                      <i class="el-icon-user"></i>
                    </el-col>
                    <el-col>个人资料</el-col>
                  </el-row>
                </router-link>
              </el-col>
            </el-row>
          </div>

          <div class="shezhi-1">
            <el-row>
              <el-col :md="6">
                <router-link to="/hmd" :class="this.$route.path === '/hmd' ? 'active' : ''">
                  <el-row>
                    <el-col>
                      <i class="el-icon-remove-outline"></i>
                    </el-col>
                    <el-col>黑名单</el-col>
                  </el-row>
                </router-link>
              </el-col>
            </el-row>
          </div>

          <div class="shezhi-1">
            <el-row>
              <el-col :md="6">
                <router-link to="/zssz" :class="this.$route.path === '/zssz' ? 'active' : ''">
                  <el-row>
                    <el-col>
                      <i class="el-icon-coin"></i>
                    </el-col>
                    <el-col>赞赏设置</el-col>
                  </el-row>
                </router-link>
              </el-col>
            </el-row>
          </div>

          <div class="shezhi-1">
            <el-row>
              <el-col :md="6">
                <router-link to="/zhsz" :class="this.$route.path === '/zhsz' ? 'active' : ''">
                  <el-row>
                    <el-col>
                      <i class="el-icon-s-tools"></i>
                    </el-col>
                    <el-col>账号设置</el-col>
                  </el-row>
                </router-link>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="col-xs-16 col-xs-offset-8 shezhi-2">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "element-ui/lib/theme-chalk/display.css";
import nav1 from "../../views/nav/nav";
export default {
  name: "shezhi",
  data() {
    return {};
  },
  components: {
    nav1
  }
};
</script>

<style>
.shezhi {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.shezhi-nav {
  padding: 30px 0;
  margin-left: -15px;
  margin-right: -15px;
}
.shezhi-list {
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 86px 0 0;
  padding: 0 0 30px;
  width: 280px;
  overflow: auto;
}
.shezhi-1 {
  line-height: 45px;
  margin: 0;
}
.shezhi-1 a {
  height: auto;
  padding: 10px 25px;
  line-height: 30px;
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 15px;
}
.shezhi-1 a.active {
  background-color: #f0f0f0;
  border-radius: 4px;
  color: #222;
}
.shezhi-1 a:hover {
  background-color: #f0f0f0;
  border-radius: 4px;
  color: #222;
}
.shezhi-1 a i {
  margin-right: 20px;
  font-size: 22px;
  text-align: center;
  line-height: 32px;
  margin-left: 10px;
  color: #ffffff;
  vertical-align: middle;
  font-weight: bold;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background: #a0a0a0;
}
.shezhi-2 {
  padding-left: 0;
  position: relative;
  top: 50px;
}
.col-xs-offset-8 {
  margin-left: 33.33333%;
}
.col-xs-16 {
  width: 66.66667%;
  float: left;
  position: relative;
}
@media (max-width: 760px) {
  .shezhi-list {
    width: 50px;
  }
  .col-xs-offset-8 {
    margin-left: 22.33333%;
  }
  .shezhi {
    width: auto;
  }
  .shezhi-1 a {
    padding: 0;
    font-size: 12px;
  }
  .el-row {
    text-align: center;
    margin-bottom: 15px;
  }
  .shezhi-1 a.active{
    background-color: #ffffff;
    color: #ea6f5a;
  }
  .shezhi-1 a.active i {
    background-color: #ea6f5a;
  }
}
</style>
