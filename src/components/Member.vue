<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
          <img class="mui-media-object mui-pull-left" src="../img/qb.png">
          <div class="mui-media-body">
              {{$store.state.shu}}
            <p class="mui-ellipsis">
            </p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    background-color: white;
    .mui-table-view-cell.mui-media{
        background-color: white;
    }


}
</style>
