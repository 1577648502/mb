<template>
  <div class="home">
        <mt-search class="sou" v-model="grabble"
        cancel-text="取消"
        placeholder="搜索"  @keyup.enter.native="getseek()">
      </mt-search>
      <div>{{this.grabble}}</div>
      <div class="home-title-title" v-for="i in ShoppingList.slice(0 , 2)" :key="i.id">
      <div class="home-title" >
          {{i.name}}
        </div >
            <div class="home_title_con" v-for="is in i.productRelationList.slice(0 , 3)" :key="is.id">
            <img :src="'/Shopping'+is.defaultImg" alt="">
            <h5>{{is.name}}</h5>
            <p>fdgsfdsg<span></span><span></span></p>
            </div>
        <div class="home_title">
        查看更多
        </div>
        </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ShoppingList:[],
      ShoppingList1:[],
      grabble:''
    }
  },
   created(){
     this.getShopping()
  },
  methods:{
    getShopping(){
        this.$axios.post('/Shopping/api/v1/catalog/category/product',{"pageSize":6})
        .then(res => {
          this.ShoppingList=res.data.data
          // this.ShoppingList1=res.data.data[1]
          // this.id=this.Shopping[0].categoryId
          // this.id=this.getsort(this.Shopping[0].categoryId)
          // this.$store.state.id=res.data.data[0].productRelationList
          console.log(this.ShoppingList)
        })
        .catch(err => {
          console.error(err); 
        })
      },
       getseek(){
        this.$axios.post('/Shopping/api/v1/catalog/search/product',{"productName":this.grabble})
        .then(res => {
            this.ShoppingList=res.data.data
            console.log(res)
        })
        .catch(err => {
          console.error(err); 
        })
      },
  }
}
</script>
<style lang="scss">
.home{
  position:absolute;
  .home-title-title{
    margin: 25px 0;
  }
  .sou{
    // clear：both;
    position:absolute;
    width: 100%;
    margin-bottom: 51px;
  }
  .home_title{
    padding: 15px 10px;
    text-align: left;
    height: 10%;
    background-color: aqua;
    border: 1px solid #ccc;
    border-right: 0;
    border-left: 0;
    margin-top: 20px;

  }
   .home_title_con{
     h5,p{
      //  white-space: nowrap; // 溢出不换行
      overflow: hidden; // 超出的文本隐藏
      text-overflow: ellipsis; // 溢出用省略号显示
      margin: 5px;

     }
     text-align: left;
       padding: 10px 10px;
      //  position: relative;
     img{
       float: left;
      // position: absolute;
      // top: 0;
      // left: 10;
      width: 20%;
     }
   }
}
</style>