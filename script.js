Vue.component('tinyurl', {
    props: ['url'],
    computed: {
        tinyurl: function () {
            return 'https://tinyurl.com/create.php?url='+
                encodeURIComponent(this.url);
        }
    },
    template: '<a v-bind:href="tinyurl" target="_blank">[Create Tiny URL]</a>'
});

var app = new Vue({
    el: '#app',
    data: {
        business: '',
        currency: 'EUR',
        amount: '',
        item_name: '',
        each: 1,
        unit: 'M'
    },
    computed: {
        buylink: function () {
            return 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick'
                + '&business=' + encodeURIComponent(this.business)
                + '&item_name=' + encodeURIComponent(this.item_name)
                + '&amount=' + encodeURIComponent(this.amount)
                + '&currency_code=' + encodeURIComponent(this.currency)
                + '&no_shipping=1'
                + '&no_note=1'
                + '&lc=US'
                + '&bn=PP%2dBuyNowBF'
                + '&charset=UTF%2d8';
        },
        sublink: function () {
            return 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions'
                + '&business=' + encodeURIComponent(this.business)
                + '&item_name=' + encodeURIComponent(this.item_name)
                + '&amount=' + encodeURIComponent(this.amount)
                + '&currency_code=' + encodeURIComponent(this.currency)
                + '&no_shipping=1'
                + '&no_note=1'
                + '&lc=US'
                + '&bn=PP%2dSubscriptionsBF'
                + '&charset=UTF%2d8'
                + '&a3=' + encodeURIComponent(this.amount)
                + '&p3=' + encodeURIComponent(this.each)
                + '&t3=' + encodeURIComponent(this.unit)
                + '&src=1'
                + '&sra=1';
        }
    }
});
