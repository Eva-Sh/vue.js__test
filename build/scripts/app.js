'use strict';

Vue.use(VeeValidate, {
    events: ''
});

new Vue({
    el: '#app',
    data: {
        text: ''
    },
    methods: {
        validateMe: function validateMe() {
            this.$validator.validateAll().then(function (result) {
                if (result) {
                    console.log(result);
                    $('.success').addClass('success--opacity');
                }
                return false;
                $('.success').removeClass('success--opacity');
            });
        }
    }
});
//# sourceMappingURL=app.js.map
