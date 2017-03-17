<template>
    <div class="index">
        <swiper :options="swiperOption" ref="indexSwiper">
          <swiper-slide>
            <img src="../assets/banner/banner_fir.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/banner/banner_sec.png" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="index-list">
          <a href="" title="">
            <div class="index-list-content is-left">
              <i class="wuliu-icon"></i><span class="list-word">物流查询</span>
            </div>
          </a>
          <a href="" title="">
            <div class="index-list-content is-right">
              <i class="fuwu-icon"></i><span class="list-word">服务站查询</span>
            </div>
          </a>
        </div>

        <article class="index-article">
          <div class="index-article-title">
            <img src="../assets/mj_intro.png" height="22.5" width="93.5" alt="">
          </div>  
          <div class="index-article-content">
               妙寄品牌属于上海圈嘀科技有限公司，是以电商实体零售店＋ O2O 领域的新商业模式，新零售打通了传统线下渠道中，从品牌商到消费者的信息链条、实体展示、品质诚信；建立触端新物流，搭建城市、社区末端配送网络，解决最后100 米，让线上电商与线下实体店有机结合，按需采购、消费升级、节时便利等元素融入本地社区生活，回归线下人际交流，并配合末端配送、自提等；最终实现妙寄•智慧社区的整个生态体系。
          </div>   
          <div class="index-article-title">
            <img src="../assets/service_better.png" height="22.5" width="93.5" alt="">
          </div>

          <div class="index-article-list">
            <div class="index-article-list-item">
                <div class="index-article-list-item-pic" style="background-color: #f3be30">
                  <img src="../assets/ico_exp.png" height="72.5" width="89.5" alt="">
                  <div>快递</div>
                </div>
                <div class="index-article-list-item-words">
                  中端快递市场巨大，收派两段，引入强大的流量入口。稳定的经济收入，直接提高现金流。
                </div>
            </div>   
          </div>
          <div class="index-article-list">
            <div class="index-article-list-item">
                <div class="index-article-list-item-pic" style="background-color: #ff7a22">
                  <img src="../assets/ico_tec.png" height="72.5" width="89.5" alt="">
                  <div>技术</div>
                </div>
                <div class="index-article-list-item-words">
                   妙寄app，拥有强大的技术资源，集合各大快递公司终端派件系统，以及与第三方企业直接对接。
                </div>
            </div>   
          </div>
          <div class="index-article-list">
            <div class="index-article-list-item">
                <div class="index-article-list-item-pic" style="background-color: #28b0ef">
                  <img src="../assets/ico_ser.png" height="72.5" width="89.5" alt="">
                  <div>服务</div>
                </div>
                <div class="index-article-list-item-words">
                  引入互联网终端社区服务，与全国和本土的服务平台打通直接拉近与消费者的互动。
                </div>
            </div>   
          </div>
          <div class="index-article-list">
            <div class="index-article-list-item">
                <div class="index-article-list-item-pic" style="background-color: #b064eb">
                  <img src="../assets/ico_ele.png" height="72.5" width="89.5" alt="">
                  <div>电商</div>
                </div>
                <div class="index-article-list-item-words">
                  导入各大互联网平台合作，直接将千万种电商产品代入线下实体店铺，让体验产生消费。
                </div>
            </div>   
          </div>
        </article>

        <div class="join-hands">
          <a href="" title="">
          </a>
        </div>

        <div class="customer-service">
          <div>
            <i class="phone"></i><span>客服电话：4008201563(9:30-18:00在线)</span>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
      }
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.swiper-container {
  font-size: 0;
  background-color: antiquewhite;
  .swiper-pagination-bullet {
    width: 25px;
    border-radius: 10px;
  }
  .swiper-pagination-bullet-active{
    background-color: #ff750f;
  }

  .swiper-slide {
    img {
      width: 100%;
    }
  }
}

.wuliu-icon {
  background-image: url('../assets/ico_wuliu.png');
}

.fuwu-icon {
  background-image: url('../assets/ico_fuwu.png');
}

.ico_ele {
  background-image: url('../assets/ico_ele.png')
}

.ico_ser {
  background-image: url('../assets/ico_ser.png')
}

.ico_tec {
  background-image: url('../assets/ico_tec.png')
}

.ico_exp {
  background-image: url('../assets/ico_exp.png')
}

.index {
  &-list {
      display: flex;
      padding: 1rem 0;
      border-bottom: 1px solid #ececec;
      a {
        flex:1;
        text-decoration: none;
      }
      &-content{
        padding-left:2.6rem;
        text-align: justify;
        white-space: nowrap;
        i {
          width: 35px;
          display: inline-block;
          height: 35px;
          background-size: 100% 100%;
          vertical-align: middle;
        }
        span {
          margin-left: 1.15rem;
          color: #666;
          font-size: 15px;
        }
      }

      &-content.is-left {
        border-right: 1px solid #ececec;    
      }
  }

  &-article {
    padding: 0 16px;
    &-title {
      height: 95px;
      display: flex; 
      justify-content: center; 
      align-items: center;
    }
    &-content {
      color: #666666;
      font-size: 14px;
      text-align: justify;
      *text-align: left;
      line-height: 24px;
    }

    &-list {
      &-item {
        height: 75.5px;
        margin-bottom: 32.5px;
        display: flex;
        &-pic {
          flex:1;
          padding-top: 8px;
          img {
            height: 52px;
            width: 61px;
          }
          div {
            margin-top: -8px;
            font-size: 12px;
            color: white;
          }
        }
        &-words {
          flex:3;
          background-color: #f7f7f7;
          color: #666;
          font-size: 14px;
          text-align: left;
          padding-left:10px;
          padding-right: 5px;
          padding-top: 11px;
        }
      }
    }
  }
  .join-hands {
    padding: 20px 0;
    padding-bottom: 48px;
    display:flex;
    justify-content: center;
    a {
      display: block;
      width: 152px;
      height: 40px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url('../assets/ico_nor.png')
    }
  }

  .customer-service {
    text-align: left;
    padding: 0 10px;
    div {
      border-top: 1px solid #999;  
      padding: 10px 0;
      padding-left: 10px;
      .phone {
        height: 15.5px;
        width: 10px;
        display: inline-block;
        vertical-align: bottom;
      }
      span {
        color: #333;
        padding-left: 10px;
        font-size: 13px;
      }
    }
  }
}




i.phone {
  background-image: url('../assets/icon/ico_pho.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}



</style>
