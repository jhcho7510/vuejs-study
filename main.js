new Vue({
    el: '#app',
    data: {
      show: true
    },
    methods: {
      handleClick() {
        var count = this.$refs.count
        if (count) {
          count.innerText = parseInt(count.innerText, 10) + 1
        }
      }
    }
  })

// new Vue({
//     el: '#app',
//     mounted: function() {
//         // console.log(this.$el)
//         console.log(this.$refs.hello)
//     }
// })

// new Vue({
//     el: '#app',
//     data: {
//       // 미리 빈 리스트 준비하기
//       list: []
//     },
//     created: function () {
//       axios.get('list.json').then(function (response) {
//         // 데이터를 읽어 들였다면 list에 할당하기
//         this.list = response.data
//       }.bind(this)).catch(function (e) {
//         console.error(e)
//       })
//     }
//   })


// var app = new Vue({
//     el:'#app',
//     data: {
//         message:'Vue.js',
//         count: 0,
//         radius: 50,
//         show: true,
//         name: '카메라',
//         list: []
//         /*
//         list: [
//             {id: 1, name: '바보형', hp: 100},
//             {id: 2, name: '바보둘째', hp: 200},
//             {id: 3, name: '바보셋째', hp: 500}
//         ]
//         */
//     },

//     created: function() {
//         axios.get('list.json').then(function(response) {
//             this.list = response.data
//         }.bind(this).catch(function(e){
//             console.error(e)
//         }))
//     },

//     methods: {
//         doAdd: function() {
//             console.log('doAdd--->')
//             var max = this.list.reduce(function(a,b){
//                 console.log('a:'+a+',b.id:'+b.id);
//                 return a > b.id ? a :b.id
//             },10)
//             this.list.push({
//                 id: max + 1,
//                 name: this.name,
//                 hp: 500
//             })
//         },
//         doRemove: function(index) {
//             this.list.splice(index,1)
//         },
//         doAttack: function(index) {
//             this.list[index].hp -= 10
//         }
//     }




// })

    // created: function(){
    //     console.log('created')
    // },
    // computed: {
    //     computedMessage: function() {
    //         return this.message + '!'
    //     }
    // },
    /** 
     * created는 라이프사이클 훅 중에 하나이다.
     * Hook : 미리정해진 시점의 처리를 낚아 채는 것 
     * 
     * Vue 인스턴스가 생성되고, 데이터 감시 등의 리액티브 시스템과 관련된 초기화가 끝났을때,
     * created 메서드가 자동으로 실행된다.
    created: {
    },
    */