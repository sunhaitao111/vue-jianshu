<template>
  <!-- <div class="row"> -->
  <div class="main">
    <nav11 />
    <!-- <img class="tag-banner hidden-xs-only" src="../../assets/z4.png" alt="Collect note"> -->
    <!-- 文章列表模块 -->
    <ul class="note-list">
      <img class="tag-banner hidden-xs-only" src="../../assets/z4.png">
      <div v-show="del">
        <li id="note-47177153">
         
          <img class="img-blur-done" src="../../assets/z5.png" alt="120"> 
          
          <div class="content ">
            <div class="liangzhixia hidden-sm-and-up">
          <a class="nickname " target="_blank" href="/u/bdb06edcfd15">梁知夏</a>
           <a class="shijian">2018.09.26</a>
          <a class="shijian">13:40</a>
          </div>
            <a
              class="title"
              target="_blank"
              href="https://www.jianshu.com/p/1faf3bb9a076"
            >周恩来情书：我这一生都是坚定的唯物主义者，唯你，我希望有来生</a>
            <p
              class="abstract hidden-xs-only"
            >从前的日色变得慢，车马邮件都慢，一生只够爱一个人。——《从前慢》 在注重仪式感的当代青年男女群体中，520无疑已经变成了一个特殊的日子。但越来越...</p>
            <div class="meta">
              <span class="jsd-meta hidden-xs-only">
                <i class="el-icon-view"></i> 22.0
              </span>
              <a class="nickname hidden-xs-only" target="_blank" href="/u/bdb06edcfd15">梁知夏</a>
              <a class="you" target="_blank" href="https://www.jianshu.com/p/1faf3bb9a076#comments">
              <a class="hidden-sm-and-up"><i class="el-icon-view "></i> 21855</a>
                <i class="el-icon-chat-square"></i> 45
              </a>
              <span>
                <i class="el-icon-thumb"></i> 550
                
                <i>
                  <el-button class="hea hidden-xs-only hidden-xs-only" type="text" @click="zta">取消收藏</el-button>
                </i>
              </span>
            </div>
          </div>
        </li>
        <el-divider></el-divider>
      </div>

      <div v-show="del1">
        <li data-note-id="44546237" class="have-img">
          <a class="wrap-img" href="/p/1030f9d9b918" target="_blank">
            <img class="img-blur-done" src="../../assets/z6.png" alt="120">
          </a>
          <div class="content">
               <div class="liangzhixia hidden-sm-and-up">
          <a class="nickname " target="_blank" href="/u/bdb06edcfd15">哈默老师</a>
           <a class="shijian">2018.09.26</a>
          <a class="shijian">13:40</a>
          </div>
            <a
              class="title"
              target="_blank"
              href="https://www.jianshu.com/p/1030f9d9b918"
            >3种赚钱能力，30岁之前学会一种，就会受益一生！</a>
            <p
              class="abstract hidden-xs-only"
            >钱重要吗？对于大多数来说，答案应该都是肯定的。为什么这么说呢？因为经历过现实的人都知道，在真实的生活中，如果你在经济上有很大的优势，你做任何事情...</p>
            <div class="meta">
              <span class="jsd-meta hidden-xs-only">
                <i class="el-icon-view"></i> 38.5
              </span>
              <a class="nickname hidden-xs-only" target="_blank" href="/u/9c498d030b34">哈默老师</a>
              <a class="you" target="_blank" href="/p/1030f9d9b918#comments">
              <a class="hidden-sm-and-up"><i class="el-icon-view"></i> 51855</a>
                <i class="el-icon-chat-square"></i> 42
              </a>
              <span>
                <i class="el-icon-thumb"></i> 251
                <i>
                  <el-button class="hea hidden-xs-only" type="text" @click="zta1">取消收藏</el-button>
                </i>
              </span>
            </div>
          </div>
        </li>
        <el-divider></el-divider>
      </div>
      <div v-show="del2">
        <li id="note-45529628" data-note-id="45529628" class="have-img" v-show="del2">
          <a class="wrap-img" href="/p/82ed4d226374" target="_blank">
            <img class="img-blur-done" src="../../assets/z7.png" alt="120">
          </a>
          <div class="content">
               <div class="liangzhixia hidden-sm-and-up">
          <a class="nickname " target="_blank" href="/u/bdb06edcfd15">良大师</a>
          <a class="shijian">2018.09.26</a>
          <a class="shijian">13:40</a>
          
          </div>
            <a
              class="title"
              target="_blank"
              href="https://www.jianshu.com/p/82ed4d226374"
            >地铁站酒醉崩溃的小伙：做了销售才知道世界有多坏</a>
            <p
              class="abstract hidden-xs-only"
            >前段时间，有一个很火的视频。 南京，新街口地铁站，晚上10点多，一位男子，西装革履，醉如烂泥，身边就是他的呕吐物，路过的人帮忙叫了警察。 看到警...</p>
            <div class="meta">
              <span class="jsd-meta hidden-xs-only">
                <i class="el-icon-view"></i> 34.4
              </span>
              <a class="nickname hidden-xs-only" target="_blank" href="/u/6e549a67ffbc">良大师</a>
              <a class="you" target="_blank" href="/p/82ed4d226374#comments">
              <a class="hidden-sm-and-up"><i class="el-icon-view"></i> 24655</a>
                <i class="el-icon-chat-square"></i> 87
              </a>
              <span>
                <i class="el-icon-thumb"></i> 382
                <i>
                  <el-button class="hea hidden-xs-only" type="text" @click="zta2">取消收藏</el-button>
                </i>
              </span>
            </div>
          </div>
          <a class=" hidden-xs-only"><el-divider id="el-D"></el-divider></a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import nav11 from '../../views/nav/nav'
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: "wrap",
  data() {
    return {
      del: true,
      del1: true,
      del2: true
    };
  },
  components:{
    nav11
  },
  methods: {
    zta: function() {
      this.$confirm("此操作将删除收藏该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.del = !this.del;
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    zta1: function() {
      this.$confirm("此操作将删除收藏该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.del1 = !this.del1;
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    zta2: function() {
      this.$confirm("此操作将删除收藏该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.del2 = !this.del2;
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

#wrap {
  width: 100%;
}
.main{
  width: 100%;
  height: auto;
}
/* .row {
  border: 1px solid red;
    width: 64%;
    margin: 0 auto;
    padding: 30px 0px 0px;
} */

/* da图片 */
.tag-banner {
  margin-bottom: 30px;
  width: 100%;
}

/* 小图 */
.img-blur-done {
  width: 16%;
  border-radius: 4px;
  float: right;
  margin: 20px 0px 0px 0px;
}

.content {
  padding: 20px 0px;
  border: none;
}

.title {
  display: inline-block;
  color: #969696;
  font-size: 18px;
  margin: -7px 0px 4px;
  font-weight: bold;
}

.jsd-meta {
  color: #ea6f5a !important;
  font-size: 12px;
  margin: 0px 10px 0px 0px;
}

.el-divider {
  margin-top: 15px;
}

.note-list {
  width: 720px;
  list-style: none;
  text-align: left;
  margin: 15px auto;
}

.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4;
}

.note-list .abstract {
  display: block;
  margin: 10px 0;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}

.nickname {
  width: 36px;
  height: 136px;
  font-size: 12px;
  color: #b4b4b4;
  margin: 0px 10px 0px 0px;
}

.you {
  margin: 0px 10px 0px 0px;
  text-decoration: none;
  color: #b4b4b4;
}

.hea {
  color: #969696;
  display: none;
  font-size: 12px;
  text-align: right;
  margin: 0px 0px 0px 10px;
}

.content:hover .hea {
  display: inline-block;
}

@media screen and (max-width: 768px) {
  .main {
    width: 100%;
  }

  .note-list {
    width: 90%;
  }

  .title {
    font-size: 13px;
    color: #000;
    font-weight: normal;
    width: 70%;
    padding: 5px 0px 0px 5px;
  }

  .img-blur-done {
    display:inline-block;
    width: 100px;
    margin: 12px 0px 0px 0px;
  }
  .nickname{
  font-weight: normal;
  color: rgb(91, 91, 218);
  font-size: 10px;  
}
.liangzhixia{
 margin-left: 5px;
}
.meta{
margin: 10px 0px -25px 5px;
}
.shijian{
  color: #999;
  margin: 0px 0px 0px 3px;
}
.el-icon-chat-square{
  padding: 0px 0px 0px 5px;
}
}
</style>
