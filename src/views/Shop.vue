<template>
  <b-container class="py-5">
    <div class="row" id="shop" v-if="isShow">
      <Shop
        v-for="initShop in initShops"
        :key="initShop._id"
        :initShop="initShop"
      />
    </div>
  </b-container>
</template>

<script>
import Shop from '../components/Shop.vue';
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const request = new Request();

export default {
  name: 'Shops',
  components: {
    Shop
  },
  data() {
    return {
      initShops: [],
      isShow: false
    }
  },
  async created() {
    try {
      const res = await request.getShopsInfo();
      if (res.status === 'success') {
        this.initShops = res.shops;
        this.isShow = true;
      }
    } catch (error) {
      return Toast.fire({
        icon: 'error',
        title: error
      });
    }
  }
}
</script>
