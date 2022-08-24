<template>
  <div class="login-container">
    <el-form ref="formRef" :model="ruleForm" :rules="rules" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon>
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-icon :size="20" class="svg-container">
          <Edit />
        </el-icon>
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-button"
          @click="loginHandler(formRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from 'vue'
import { Edit } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'LoginView',
  setup() {
    const formRef = ref(null)

    // const state = reactive({
    //   form: {
    //     username: '',
    //     password: ''
    //   }
    // })
    const state = reactive({})
    const ruleForm = reactive({
      username: '',
      password: ''
    })

    const rules = reactive({
      username: [
        {
          required: true,
          message: 'Please input Activity username',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: 'Length should be 3 to 10',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please input Activity password',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 10,
          message: 'Length should be 3 to 10',
          trigger: 'blur'
        }
      ]
    })
    // watch(
    //   () => state.form.username,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    //   }
    // )

    const loginHandler = async (formEl: any) => {
      if (!formEl) return
      await formEl.validate((valid: any, fields: any) => {
        if (valid) {
          console.log('aaa')
        } else {
          console.log('error')
        }
      })
    }
    return {
      ...toRefs(state),
      formRef,
      rules,
      ruleForm,
      loginHandler
    }
  },
  components: {
    Edit
  }
})
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  width: 100%;
  min-height: 100%;
  background-color: $bg;

  .login-form {
    width: 520px;
    max-width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 160px 35px 0;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    :deep(.el-input) {
      display: inline-block;
      // line-height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: none;
        // -webkit-appearance: none;
        // out
        // border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }
  .login-button {
    width: 100%;
    box-sizing: border-box;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      margin: 0 auto 40px auto;
      color: $light_gray;
      text-align: center;
    }
  }
}
</style>
