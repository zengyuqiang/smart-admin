<!--
  * 登录
  * 
  * @Author: 曾 
  * @Date: 2023-05-21 22:34:00 
  * @Wechat:   
  * @Email: 739224682@qq.com 
  * @Copyright:  
  *
-->
<template>
  <div class="login-container">
    <div class="box-item desc">
      <div class="welcome">
        <p>Welcome SmartAdminシステム</p>
        <p class="desc">
          SmartAdmin
          <br />
          <br />
            保持谦逊，保持学习，热爱代码，更热爱生活 !<br />
            永远年轻，永远前行 !<br />
        </p>
      </div>
      <div class="app-qr-box">
        <div class="app-qr">
          <img :src="zhuoda" />
        </div>
      </div>
    </div>
    <div class="box-item login">
      <img class="login-qr" :src="loginQR" />
      <div class="login-title">お客様ログイン</div>
      <a-form ref="formRef" class="login-form" :model="loginForm" :rules="rules">
        <a-form-item name="loginName">
          <a-input v-model:value.trim="loginForm.loginName" placeholder="ユーザーID" />
        </a-form-item>
        <a-form-item name="password">
          <a-input-password v-model:value="loginForm.password" autocomplete="on"
            :type="showPassword ? 'text' : 'password'" placeholder="パスワード" />
        </a-form-item>
        <a-form-item name="captchaCode">
          <a-input class="captcha-input" v-model:value.trim="loginForm.captchaCode" placeholder="右側の検証コードを入力" />
          <img class="captcha-img" :src="captchaBase64Image" @click="getCaptcha" />
        </a-form-item>
        <!-- 记住密码功能（未实现） -->
        <!-- <a-form-item>
          <a-checkbox v-model:checked="rememberPwd">记住密码</a-checkbox>
        </a-form-item> -->
        <a-form-item>
          <div class="btn" @click="onLogin">ログイン</div>
        </a-form-item>
        <!-- 未开发 -->
        <!-- <a-form-item>
          <div class="btn" @click="showDrawer">新規登録</div>
        </a-form-item> -->
      </a-form>
      <div class="more">
        <div class="title-box">
          <p class="line"></p>
          <p class="title">他のログイン</p>
          <p class="line"></p>
        </div>
        <div class="login-type">
          <img :src="facebookLogin"/>
          <img :src="instagramLogin" />
          <img :src="googleLogin" />
          <img :src="wechatLogin" />
          <img :src="lineLogin" />
        </div>
      </div>
    </div>
</div>
</template>
<script setup>
import { message } from 'ant-design-vue';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginApi } from '/@/api/system/login/login-api';
import { SmartLoading } from '/@/components/framework/smart-loading';
import { LOGIN_DEVICE_ENUM } from '/@/constants/system/login-device-const';
import { useUserStore } from '/@/store/modules/system/user';
import { saveTokenToCookie } from '/@/utils/cookie-util';

import zhuoda from '/@/assets/images/1024lab/zhuoda-wechat.jpg';
import loginQR from '/@/assets/images/login/login-qr.png';

import wechatLogin from '/@/assets/images/login/wechat-icon.png';
import lineLogin from '/@/assets/images/login/line-icon.png';
import facebookLogin from '/@/assets/images/login/facebook-icon.png';
import instagramLogin from '/@/assets/images/login/instagram-icon.png';
import googleLogin from '/@/assets/images/login/google-icon.png';



import { buildRoutes } from '/@/router/index';
import { smartSentry } from '/@/lib/smart-sentry';

//--------------------- 登录表单 ---------------------------------

const loginForm = reactive({
  loginName: '',
  password: '',
  captchaCode: '',
  captchaUuid: '',
  loginDevice: LOGIN_DEVICE_ENUM.PC.value,
});
const rules = {
  loginName: [{ required: true, message: 'ユーザーIDを入力してください。' }],
  password: [{ required: true, message: 'パスワードを入力してください。' }],
  captchaCode: [{ required: true, message: '検証コードを入力してください。' }],
};

const showPassword = ref(false);
const router = useRouter();
const formRef = ref();
const rememberPwd = ref(false);

onMounted(() => {
  document.onkeyup = (e) => {
    if (e.keyCode == 13) {
      onLogin();
    }
  };
});

onUnmounted(() => {
  document.onkeyup = null;
});

//登录
async function onLogin() {
  formRef.value.validate().then(async () => {
    try {
      SmartLoading.show();
      const res = await loginApi.login(loginForm);
      stopRefrestCaptchaInterval();
      saveTokenToCookie(res.data.token ? res.data.token : '');
      message.success('ログイン成功');
      //更新用户信息到pinia
      useUserStore().setUserLoginInfo(res.data);
      //构建系统的路由
      buildRoutes();
      router.push('/home');
    } catch (e) {
      if (e.data && e.data.code === 30001) {
        loginForm.captchaCode = '';
        getCaptcha();
      }
      smartSentry.captureError(e);
    } finally {
      SmartLoading.hide();
    }
  });
}

//--------------------- 验证码 ---------------------------------

const captchaBase64Image = ref('');
async function getCaptcha() {
  try {
    let captchaResult = await loginApi.getCaptcha();
    captchaBase64Image.value = captchaResult.data.captchaBase64Image;
    loginForm.captchaUuid = captchaResult.data.captchaUuid;
    beginRefrestCaptchaInterval(captchaResult.data.expireSeconds);
  } catch (e) {
    console.log(e);
  }
}

let refrestCaptchaInterval = null;
function beginRefrestCaptchaInterval(expireSeconds) {
  if (refrestCaptchaInterval === null) {
    refrestCaptchaInterval = setInterval(getCaptcha, (expireSeconds - 5) * 1000);
  }
}

function stopRefrestCaptchaInterval() {
  if (refrestCaptchaInterval != null) {
    clearInterval(refrestCaptchaInterval);
    refrestCaptchaInterval = null;
  }
}

onMounted(getCaptcha);
</script>
<style lang="less" scoped>@import './login.less';</style>
