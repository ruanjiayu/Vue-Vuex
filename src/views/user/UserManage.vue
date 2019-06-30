<template>
    <div>
      个人管理 manage= {{manage}}
    </div>
</template>

<script>
    export default {
       props: ['manage'],
        name: "UserManage",
        beforeRouteEnter: (to, from , next) =>{
          console.log("准备进入个人管理页面");
          // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例
          next(vm => {
            vm.getData();
          })
        },
      beforeRouteLeave: (to, from ,next) => {
         console.log("准备离开个人管理页面");
         next()
      },
      methods: {
        getData: function () {
          this.axios({
            method: 'get',
            // 会出现跨域问题
            url: 'http://localhost:8080/data.json'
          }).then(function (repos) {
            console.log(repos);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }

    }
</script>

<style scoped>

</style>
