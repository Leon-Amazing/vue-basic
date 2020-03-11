
const list = {
  monitor: {
    name: '欧阳',
    sex: 1,
    age: 19
  },
  study: {
    name: '宇霖',
    sex: 1,
    age: 20
  },
  gf: {
    name: 'undefined',
    sex: 'undefined',
    age: '18'
  }
}

const Home = {
  template: `
    <div>
      <p>这是首页</p>
    </div>
  `
};
const Product = {
  template: `
    <div>
      <p>这是产品页</p>
      <h2>产品信息</h2>
      <router-link to="/product/monitor" exact>班长</router-link>
      <router-link to="/product/study">学习委员</router-link>
      <router-link to="/product/gf">班长的女朋友</router-link>
      <router-view></router-view>
    </div>
  `
};
const About = {
  template: `
    <div>
      <p>这是关于页</p>
    </div>
  `
};
const Component = {
  template: `
    <div>
      <p>信息</p>
      <ul>
        <li v-for="(value, key) in data">{{key}}-----{{key === 'sex' ? value === 1 ? '男' : value === 0 ? '女' : 'undefined' : value}}</li>
      </ul>
    </div>
  `,
  data() {
    return {
      data: null
    }
  },
  watch: {
    $route(to) {
      console.log(this.$route);
      const pathName = to.params.pathName;
      switch(pathName) {
        case 'study':
          this.data = list[pathName];
          break;
        case 'gf':
          this.data = list[pathName];
          break;
        default:
          this.data = list[pathName];
      }
    }
  },
  created() {
    this.data = list['monitor']
  }
};

导出 Home
