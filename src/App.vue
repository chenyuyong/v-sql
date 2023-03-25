<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    console.log("this.$db",this.$db)
    // 在vue的组件里面实现数据的增加 修改 删除 显示
    // 查找数据
    // this.$db.find({"age":30}, (err, docs)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     };
    //     console.log(docs);
    // });
    // // 插入数据
    // this.$db.insert({"name":20,"age":100},function(err,doc){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(doc);
    // })
    // // 更新数据
    // this.$db.update({"_id":"cHODtJOIft1YcOMN"},{$set:{"name":"赵六"}},function(err,data){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data);
    // })
    // // 移除数据
    // this.$db.remove({"_id":"6nAYPLImXRs7mB0P"},{},function(err,data){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data);
    // })
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
