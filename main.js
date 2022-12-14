new Vue({
  el: '#app',
  data: {
    // 입력 양식에 출력할 데이터
    budget: 3000,
    // 출력할 개수
    limit: 2,
    // 데이터 리스트
    list: [
      { id: 1, name: '사과', price: 1000 },
      { id: 2, name: '바나나', price: 2000 },
      { id: 3, name: '딸기', price: 4000 },
      { id: 4, name: '오렌지', price: 3000 },
      { id: 5, name: '메론', price: 5000 }
    ]    
  },
  computed: {
    // budget 아래의 리스트를 리턴하는 산출 속성
    matched: function () {
      return this.list.filter(function (el) {
        return el.price <= this.budget
      }, this)
    },
    // matched로 리턴한 데이터를 limit 조건을 걸어 리턴하는 산출 속성
    limited: function () {
      return this.matched.slice(0, this.limit)
    }
  }

})


// /** 산출속성과 일반함수 비교 */
// new Vue({
//   el: '#app',
//   computed: {
//     computedData: function() {
//       return Math.random()
//     }
//   },
//   methods: {
//     methodsData: function() {
//       return Math.random()
//     }
//   }
// }) 



// /** 산출속성 computed */
// new Vue({
//   el: '#app',
//   data: {
//     width: 800
//   },
//   computed: {
//     halfWidth: {
//       get: function() {
//         return this.width / 2
//       },
//       // halfWidth를 2 배수한 숫자를 width에 할당하기
//       set: function(val) {
//         this.width = val * 2
//       }
//     }
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     width: 800,
//     height: 800
//   },
//   computed: {
//     halfWidth: function() {
//       return this.width / 2
//     },
//     halfHeight: function() {
//       return this.height
//     },
//     halfPoint: function() {
//       return {
//         x: this.halfWidth,
//         y: this.halfHeight
//       }
//     }
//   }
// })


// new Vue({
//   el:'#app',
//   data: {
//     width: 800
//   },
//   created: function(){
//     console.log(this.halfWidth)
//   },
//   // computed - 산출속성 : 처리를 포함하고 있는 데이터
//   computed: {
//     halfWidth: function() {
//       return this.width / 2
//     }
//   }

// })


// $(document).on('click', '[data-update]', function () {
//   $('#message').val($(this).attr('data-update'))
//   // 입력 값을 변경했다면 이벤트 발생시키기
//   $('#message')[0].dispatchEvent(new Event('input'))
// })
// new Vue({
//   el: '#app',
//   methods: {
//     handleInput: function (event) {
//       console.log(event.target.value)
//     }
//   }
// })


// var scroll = new SmoothScroll()
// new Vue({
//   el: '#app',
//   methods: {
//     scrollTop: function () {
//       scroll.animateScroll(0)
//     }
//   }
// })


// new Vue({
//   el:'#app',
//   data: {
//     scrollY: 0,
//     timer: null,
//   },

//   created: function() {
//     // 핸들러 등록
//     window.addEventListener('scroll', this.handleScroll)
//   },
//   beforeDestory: function() {
//     // 핸들러 제거(컴포넌트 또는 SPA의 경우 절대 잊지 말고 처리)
//     window.removeEventListener('scroll', this.handleScroll)
//   },
//   methods: {
//     handleScroll: function() {
//       if(this.timer === null) {
//         this.timer = setTimeout(function(){
//           this.scrollY = window.scrollY
//           clearTimeout(this.timer)
//           this.timer = null
//         }.bind(this), 200)
//       }
//     }
//   }

// })


// new Vue({
//   el:'#app',
//   data: {
//     val: 50
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     preview: ''
//   },
//   methods: {
//     handleChange: function (event) {
//       var file = event.target.files[0]
//       if (file && file.type.match(/^image\/(png|jpeg)$/)) {
//         this.preview = window.URL.createObjectURL(file)
//       }
//     }
//   }
// })


// new Vue({
//   el: '#app',
//   data: {
//     message:'Hello',
//     //val: true single checkbox
//     val:[],  // checkbox array, multi checked combobox
//     // val: '' // radio button, single choice combobox
//   }
// })


// new Vue({
//   el: '#app',
//   methods: {
//     handler: function (comment) {
//       console.log(comment)
//     }
//   }
// })


// new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js',
//   },
//   methods: {
//     // - 입력값 추출하기
//     handleInput: function (event) { 
//       console.log(event.target.value)
//       // 할당 전에 어떤 처리하기
//       this.message = event.target.value
//     }
//   }
// })


// new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js',
//   },
//   methods: {
//     handleInput: function (event) {
//       // 할당 전에 어떤 처리하기
//       this.message = event.target.value
//     }
//   }
// })


// new Vue({
//   el:"#app",
//   data: {
//     message: 'Hello <String> Vuejs!</strong>'
//   }
// })

// new Vue({
//     el: '#app',
//     data: {
//       show: true
//     },
//     methods: {
//       handleClick() {
//         var count = this.$refs.count
//         if (count) {
//           count.innerText = parseInt(count.innerText, 10) + 1
//         }
//       }
//     }
//   })

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