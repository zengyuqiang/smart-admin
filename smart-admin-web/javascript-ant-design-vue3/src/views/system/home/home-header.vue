<!--
  * 首页 用户头部信息
  *
  * @Author:    1024创新实验室-主任：卓大
  * @Date:      2022-09-12 22:34:00
  * @Wechat:    zhuda1024
  * @Email:     lab1024@163.com
  * @Copyright  1024创新实验室 （ https://1024lab.net ），Since 2012
  *
-->
<template>
  <div class="user-header">
    <a-page-header :title="welcomeSentence" :sub-title="departmentName" >
      <template #tags>
        <a-tag color="blue">努力工作</a-tag>
        <a-tag color="success">主动 / 皮实 / 可靠 </a-tag>
        <a-tag color="error">自省 / 精进 / 创新</a-tag>
      </template>
      <template #extra>
        <p>{{ dayInfo }}</p>
      </template>
      <a-row class="content">
        <span class="heart-sentence">
          <h3>{{ heartSentence }}</h3>
          <p class="last-login-info">{{ lastLoginInfo }}</p>
          <div></div>
        </span>
        <div class="weather">
          <iframe
            width="100%"
            scrolling="no"
            height="60"
            frameborder="0"
            allowtransparency="true"
            src="//i.tianqi.com/index.php?c=code&id=12&icon=1&num=3&site=12"
          ></iframe>
        </div>
      </a-row>
    </a-page-header>
  </div>
</template>
<script setup>
  import { computed } from 'vue';
  import { useUserStore } from '/@/store/modules/system/user';
  import uaparser from 'ua-parser-js';
  import { Solar, Lunar } from 'lunar-javascript';
  import _ from 'lodash';

  const userStore = useUserStore();

  const departmentName = computed(() => useUserStore.departmentName);

  // 欢迎语
  const welcomeSentence = computed(() => {
    let sentence = '';
    let now = new Date().getHours();
    if (now > 5 && now <= 13) {
      sentence = 'おはようございます！';
    } else if (now > 13 && now <= 17) {
      sentence = 'こんにちは！';
    } else {
      sentence = 'こんばんは！';
    }
    return sentence + userStore.$state.actualName;
  });

  //上次登录信息
  const lastLoginInfo = computed(() => {
    let info = '';
    if (userStore.$state.lastLoginTime) {
      info = info + '前回登録時間：' + userStore.$state.lastLoginTime;
    }
    if (userStore.$state.lastLoginIp) {
      info = info + '; IPアドレス：' + userStore.$state.lastLoginIp;
    }
    if (userStore.$state.lastLoginUserAgent) {
      let ua = uaparser(userStore.$state.lastLoginUserAgent);
      info = info + '; 設備又はブラウザ：';
      if (ua.browser.name) {
        info = info + ' ' + ua.browser.name;
      }
      if (ua.os.name) {
        info = info + ' ' + ua.os.name;
      }
      let device = ua.device.vendor ? ua.device.vendor + ua.device.model : null;
      if (device) {
        info = info + ' ' + device;
      }
    }
    return info;
  });

  //日期
  const dayInfo = computed(() => {
    
    //阳历
    let solar = Solar.fromDate(new Date());
    let day = solar.toString();
    let week = solar.getWeekInChinese();
        switch (week) {
          case '一':
            week = '月';
            break;
          case '二':
            week = '火';
            break;
          case '三':
            week = '水';
            break;
          case '四':
            week = '木';
            break;
          case '五':
            week = '金';
            break;
          case '六':
            week = '土';
            break;
          case '天':
            week = '日';
            break;
          default:
            week = "xxx";
      }
    return `${day} ${week}曜日`;
  });

  // 毒鸡汤
  const heartSentenceArray = [
    '自分自身を信じてみるだけでいい。',
    'きっと、生きる道が見えてくる。。',
    'たいていの人はほんとうになにがほしいのか、心の中でわかっています。',
    '人生の目標を教えてくれるのは直感だけ。',
    'ただ、それに耳を傾けない人が多すぎるのです。',
    '運がいい人も、運が悪い人もいない。',
    '夢中で日を過ごしておれば、いつかはわかる時が来る。',
    '人は心が愉快であれば終日歩んでも嫌になることはないが、心に憂いがあればわずか一里でも嫌になる。',
    '人生の行路もこれと同様で、人は常に明るく愉快な心をもって人生の行路を歩まねばならぬ。',
    '樹木にとって最も大切なものは何かと問うたら、それは果実だと誰もが答えるだろう。',
  ];
  const heartSentence = computed(() => {
    return heartSentenceArray[_.random(0, heartSentenceArray.length - 1)];
  });
</script>
<style scoped lang="less">
  .user-header {
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;

    .heart-sentence {
      width: calc(100% - 420px);
      h3 {
        color: rgba(0, 0, 0, 0.75);
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      .weather {
        width: 400px;
      }
    }

    .last-login-info {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.45);
      overflow-wrap: break-word;
    }
  }
</style>
