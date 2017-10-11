<template>
  <div class="body-color">
    <div class="notfound-wrap">
      <div class="notfound">
        <h2>抱歉！你查看的页面显示不了</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 返回上一页
    goBack () {
      history.go(-1)
    }
  }
}
</script>

<style>

</style>
