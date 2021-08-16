const app = new Vue({
    el: "#app",
    data: {
        message: "ロード中..",
        seen: false
    },
    methods: {
        move() {
            //音楽//
            const se = new Audio("sound/enter.mp3")
            se.play()
            this.seen = true
                //アニメーション//
            this.seen = true
            setTimeout(() => {
                this.message = "ロード中..."
            }, 800)

            setTimeout(() => {
                this.message = "ロード中.."
            }, 1600)

            setTimeout(() => {
                this.message = "ロード中..."
            }, 2400)

            setTimeout(() => {
                this.message = "ロード中.."
            }, 3200)

            setTimeout(() => {
                location.href = "bit-error.html"
            }, 4000)
        }
    }
})