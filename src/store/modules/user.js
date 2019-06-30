// 变成了一个对象了
const user = {
  //状态，相当于数据库
  state: sessionStorage.getItem('userState') ? JSON.parse(sessionStorage.getItem('userState')) : {
    user: {
      username: ''
    }
  },

//获取计算属性
  getters: {
    getUser(state) {
      return state.user;
    }
  },
//只有mutations能修改state内的状态，但是有个问题，它是同步的，容易阻塞
  mutations: {
    udpateUser(state, user) {
      state.user = user;
    }
  },

// 异步方法
  actions: {
    asyncUpdateUser(context, user) {
      context.commit('udpateUser', user)
    }
  }
};

export default user;
