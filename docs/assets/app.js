var dataIcons = 'assets/icons.json';
new Vue({
    el: '#app',
    created: function() {
        this.getIcons();
    },
    data: {
        icons: [],
        search: '',
    },
    methods: {
        getIcons: function() {
            axios.get(dataIcons).then(response => {
                this.icons = response.data
            });
        }
    },
    computed: {
        filterIcons: function() {
            return this.icons.filter((icon) => {
                // Using normalize based on https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
                return  icon.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(this.search) 
                        || icon.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(this.search)
            });
        }

    }

});