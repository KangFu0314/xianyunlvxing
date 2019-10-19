import {
  Message
} from "element-ui";
// nuxt插件的固定写法
// context包含nuxt下所有的方法。固定有的参数
export default (context) => {
  context.$axios.onError(res => {
    const {
      message,
      statusCode
    } = res.response.data;
    if (statusCode == 400) {
      Message.error(message)
    }
  })
}
