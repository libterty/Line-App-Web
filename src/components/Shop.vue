<template>
  <div class="col-md-6 col-lg-4">
    <b-card-group deck>
      <b-card
        :title="initShop.shopName"
        :sub-title="'負責人: '+initShop.representative"
        tag="article"
        class="mb-2"
      >
        <b-card-img-lazy src="https://picsum.photos/600/300/?image=25" alt="demo" top></b-card-img-lazy>
        <b-card-text>
          <b-list-group>
            <b-list-group-item class="text-left">
              <strong>地址 :</strong>
              <small>{{initShop.shopAddress}}</small>
            </b-list-group-item>
            <b-list-group-item class="text-left">
              <strong>聯絡電話 :</strong>
              <small>{{initShop.shopTel}}</small>
            </b-list-group-item>
          </b-list-group>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: {
    initShop: {
      type: Object,
      required: true
    }
  }
}
</script>