<template>
    <div>
        <div class="shops-form">
            <b-form v-if="isShowCreate" @submit.stop.prevent="submitNewShops">
                <b-form-group label-cols-sm="3" label="店家名稱:" label-align-sm="center" label-for="newShops-shopName-input">
                    <b-form-input
                        id="newShops-shopName-input"
                        v-model="newShops.shopName"
                        :state="newShops.shopName.length > 0"
                        type="text"
                        name="newShops-shopName-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label-cols-sm="3" label="店家地址:" label-align-sm="center" label-for="newShops-shopAddress-input">
                    <b-form-input
                        id="newShops-shopAddress-input"
                        v-model="newShops.shopAddress"
                        :state="newShops.shopAddress.length > 0"
                        type="text"
                        name="newShops-shopAddress-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label-cols-sm="3" label="店家電話:" label-align-sm="center" label-for="newShops-shopTel-input">
                    <b-form-input
                        id="newShops-shopTel-input"
                        v-model="newShops.shopTel"
                        :state="newShops.shopTel.length > 0"
                        type="text"
                        name="newShops-shopTel-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label-cols-sm="3" label="店家負責人:" label-align-sm="center" label-for="newShops-representative-input">
                    <b-form-input
                        id="newShops-representative-input"
                        v-model="newShops.representative"
                        :state="newShops.representative.length > 0"
                        type="text"
                        name="newShops-representative-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button type="submit" variant="success" size="lg">Submit</b-button>
                    <b-button type="button" @click="isShowCreate=false" variant="info" size="lg" style="margin-left: 0.25rem;">Close</b-button>
                </b-button-group>
            </b-form>
        </div>

        <b-table-simple hover small caption-top responsive>
            <b-thead head-variant="dark">
                <b-th colspan="1">#</b-th>
                <b-th colspan="1">店家名稱</b-th>
                <b-th colspan="1">店家負責人</b-th>
                <b-th colspan="1">店家地址</b-th>
                <b-th colspan="1">店家電話</b-th>
                <b-th colspan="2">#</b-th>
            </b-thead>
            <b-tbody>
                <b-tr
                    v-for="shop in initShops"
                    :key="shop._id"
                >
                    <b-td class="text-center">{{shop._id}}</b-td>
                    <b-td class="text-center">{{shop.shopName}}</b-td>
                    <b-td class="text-center">{{shop.representative}}</b-td>
                    <b-td class="text-center">{{shop.shopAddress}}</b-td>
                    <b-td class="text-center">{{shop.shopTel}}</b-td>
                    <b-td class="text-center">
                        <b-button-group>
                            <b-button variant="warning">Edit</b-button>
                            <b-button variant="danger" @click.stop.prevent="onClickDelete(shop.id)">Delete</b-button>
                        </b-button-group>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <br>
        <b-button @click="isShowCreate=true">Create New Coupon</b-button>
    </div>
</template>

<script>
import { Toast } from '../utils/helpers';

export default {
    props: {
        initShops: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isShowCreate: false,
            newShops: {
                shopName: '',
                shopAddress: '',
                shopTel: '',
                representative: ''
            }
        }
    },
    methods: {
        submitNewShops() {
            if (this.newShops.shopName.length < 1) {
                return Toast.fire({ icon: 'error', title: 'Wrong shopName Input Detected' });
            }
            if (this.newShops.shopAddress.length < 1) {
                return Toast.fire({ icon: 'error', title: 'Wrong shopAddress Input Detected' });
            }
            if (this.newShops.shopTel.length < 1) {
                return Toast.fire({ icon: 'error', title: 'Wrong shopTel Input Detected' });
            }
            if (this.newShops.representative.length < 1) {
                return Toast.fire({ icon: 'error', title: 'Wrong representative Input Detected' });
            }
            const data = JSON.stringify(this.newShops);
            this.$emit('after-submit-create', data);
            this.isShowCreate = false;
        }
    },
    watch: {
        initShops: function(updateData) {
            this.initShops = updateData;
        }
    }
}
</script>