<template>
    <div class="__fz-footer-box">
        <div 
            class="__fz-footer" 
            v-for="item in source" 
            :key="item.id" 
            @click="__fz_footer_click(item)"
        >
            <slot :name="item.id"></slot>
            <p :style="{paddingTop: '5px', color: color}">{{item.text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fz-footer",
        props: {
            source: {
                type: Array,
                default: () => [{
                        id: 0,
                        text: '消息'
                    },
                    {
                        id: 1,
                        text: '联系人'
                    },
                    {
                        id: 2,
                        text: '动态'
                    }
                ]
            },
            color: {
                type: String,
                default: 'black'
            }
        },
        methods: {
            __fz_footer_click(item) {
                this.$emit("click", item);
            }
        }
    }
</script>

<style scoped>
    .__fz-footer-box {
        width: 100vw;
        position: fixed;
        bottom: 0;
        min-height: 65px;
        background-color: white;
        display: flex;
        flex-direction: row;
        margin-top: 65px; 
    }

    .__fz-footer {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 14px;
        padding-top: 5px;
    }
</style>