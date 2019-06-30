<template>
    <div>
      <el-container>
          <el-aside width="200px">
            <el-menu :default-openeds="['1']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
<!--                   指定路由的名字为UserList，并且带有type值为2-->
                    <router-link :to="{name: 'UserList',params: {type:2}}">用户列表</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link to="/user/profile/1">个人信息</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-3">
                    <router-link :to="{name: 'UserManage',params: {manage: 3}}">个人管理</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>内容管理</template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">内容列表</el-menu-item>
                  <el-menu-item index="2-2">分类管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>{{$store.getters.getUser.username}}</span>
          </el-header>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

</style>
