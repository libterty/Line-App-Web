<template>
    <b-container class="py-5">
        <h1>管理員頁面</h1>
        <div v-if="isShow">
            <AdminShops
                :initShops="initShops"
                @after-submit-create="afterSubmitCreate"
            />
        </div>
    </b-container>
</template>

<script>
import AdminShops from '../components/AdminShops.vue';
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const request = new Request();

export default {
    name: 'admin-shops',
    components: {
        AdminShops
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
    },
    methods: {
        async afterSubmitCreate(data) {
            try {
                const res = await request.postNewShop(data);
                if (res.status === 'success') {
                    const newRes = await request.getShopsInfo();
                    this.initShops = newRes.shops;
                    this.isShow = true;
                    return Toast.fire({
                        icon: 'success',
                        title: 'Create Shop Success'
                    });
                }
                return Toast.fire({
                    icon: 'error',
                    title: res.message
                });
            } catch (error) {
                return Toast.fire({
                    icon: 'error',
                    title: error
                });
            }
        }
    }
}
</script>