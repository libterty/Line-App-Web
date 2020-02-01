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

            <b-form v-if="isShowEdit" @submit.stop.prevent="submitEditShops">
                <b-form-group label-cols-sm="3" label="店家名稱:" label-align-sm="center" label-for="editShops-shopName-input">
                    <b-form-input
                        id="editShops-shopName-input"
                        v-model="editShops.shopName"
                        :state="editShops.shopName.length > 0"
                        :placeholder="editShops.shopName"
                        type="text"
                        name="editShops-shopName-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label-cols-sm="3" label="店家地址:" label-align-sm="center" label-for="editShops-shopAddress-input">
                    <b-form-input
                        id="editShops-shopAddress-input"
                        v-model="editShops.shopAddress"
                        :state="editShops.shopAddress.length > 0"
                        :placeholder="editShops.shopAddress"
                        type="text"
                        name="editShops-shopAddress-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label-cols-sm="3" label="店家電話:" label-align-sm="center" label-for="editShops-shopTel-input">
                    <b-form-input
                        id="editShops-shopTel-input"
                        v-model="editShops.shopTel"
                        :state="editShops.shopTel.length > 0"
                        :placeholder="editShops.shopTel"
                        type="text"
                        name="editShops-shopTel-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group label-cols-sm="3" label="店家負責人:" label-align-sm="center" label-for="editShops-representative-input">
                    <b-form-input
                        id="editShops-representative-input"
                        v-model="editShops.representative"
                        :state="editShops.representative.length > 0"
                        :placeholder="editShops.representative"
                        type="text"
                        name="editShops-representative-input"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button type="submit" variant="success" size="lg">Submit</b-button>
                    <b-button type="button" @click="isShowEdit=false" variant="info" size="lg" style="margin-left: 0.25rem;">Close</b-button>
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
                            <b-button
                                variant="warning"
                                @click="clickEdit(shop._id, shop.shopName, shop.representative, shop.shopAddress, shop.shopTel)"
                            >Edit</b-button>
                            <b-button variant="danger" @click.stop.prevent="onClickDelete(shop._id)">Delete</b-button>
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
            isShowEdit: false,
            newShops: {
                shopName: '',
                shopAddress: '',
                shopTel: '',
                representative: ''
            },
            editShopsId: '',
            editShops: {
                shopName: '',
                shopAddress: '',
                shopTel: '',
                representative: ''
            }
        }
    },
    methods: {
        clickEdit(id, shopName, representative, shopAddress, shopTel) {
            this.editShopsId = id;
            this.editShops.shopName = shopName;
            this.editShops.representative = representative;
            this.editShops.shopAddress = shopAddress;
            this.editShops.shopTel = shopTel;
            this.isShowEdit = true;
        },
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
        },
        submitEditShops() {
            const data = JSON.stringify(this.editShops);
            this.$emit('after-submit-edit', this.editShopsId ,data);
            this.isShowEdit = false;
        },
        onClickDelete(id) {
            this.$emit('after-submit-delete', id);
        }
    },
    watch: {
        initShops: function(updateData) {
            this.initShops = updateData;
        }
    }
}
</script>