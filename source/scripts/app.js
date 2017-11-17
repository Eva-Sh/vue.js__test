Vue.use(VeeValidate, {
    events: ''
});

new Vue({
    el: '#app',
    data: {
        text: ''
    },
    methods: {
        validateMe() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    console.log(result);
                    $('.success').addClass('success--opacity');
                }
                return false;
            });
        }
    }
});