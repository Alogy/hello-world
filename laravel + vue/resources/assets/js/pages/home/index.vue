<template>
  <div>
    <div>HOME</div>
    <h1>{{info}}</h1>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      info: ''
    }
  },
  mounted () {
    this.$http({
      method: 'get',
      url: 'api.user'
    }).then(res => {
      if (!res.data.error) {
        this.info = res.data.result.info
      }
    })
  }
}
</script>
