<template>
    <div><span>{{test()}}</span></div>
</template>

<script>
export default {
    name: 'Sample',
    data() {
        return {
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        }
        
    },
    computed: {
        /*fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }*/
    },
    methods: {
        test: function() {
            this.fullName.set = 'Jone Doe'
        }
    }
}
</script>