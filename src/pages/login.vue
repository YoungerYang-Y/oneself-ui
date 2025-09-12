<script setup lang="ts">
import { NButton, NCard, NCheckbox, NForm, NFormItem, NInput, NSpace } from 'naive-ui'
import { ref } from 'vue'

const formValue = ref({
  username: '',
  password: '',
  rememberMe: false,
})

const rules = {
  username: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur',
  },
}

function handleLogin() {
  // 处理登录逻辑
  // console.log('登录信息:', formValue.value)
}
</script>

<template>
  <div class="login-container">
    <NCard style="width: 400px; border-radius: 16px;">
      <!-- 添加网站标题 -->
      <div class="title-container">
        <h1 class="site-title">
          Oneself-UI
        </h1>
      </div>

      <NForm :model="formValue" :rules="rules">
        <NFormItem label="用户名" path="username" label-placement="left" label-width="80">
          <NInput v-model:value="formValue.username" placeholder="请输入用户名" />
        </NFormItem>

        <NFormItem label="密码" path="password" label-placement="left" label-width="80">
          <NInput
            v-model:value="formValue.password"
            type="password"
            placeholder="请输入密码"
            show-password-on="click"
          />
        </NFormItem>

        <NFormItem>
          <NCheckbox v-model:checked="formValue.rememberMe">
            记住我
          </NCheckbox>
        </NFormItem>

        <NSpace justify="center" style="width: 100%;">
          <NButton type="primary" style="width: 100%;" @click="handleLogin">
            登录
          </NButton>
        </NSpace>
      </NForm>
    </NCard>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9, #a5d6a7);
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.site-title {
  margin: 0;
  font-size: 28px;
  color: #2e7d32;
  font-weight: 600;
}
</style>
