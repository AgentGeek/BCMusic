var app = new Vue({
    el: "#player",
    data: {
        query: "",
        musicList: [],
        musicUrl: "",
        musicCover: "",
        list: [],
        isPlaying: false,
    },
    mounted:function(){
        this.trending()
    },

    methods: {
        trending: function () {
            var that = this;
            axios.get("https://meuzik.api.wurtu.com/trending")
                .then(function (response) {
                    // console.log(response);
                    console.log(response.data.list);
                    that.list = response.data.list;
                }, function (err) { })
        },
        searchMusic: function () {
            var that = this;
            axios.get("https://meuzik.api.wurtu.com/search?query=" + this.query)
                .then(function (response) {
                    // console.log(response);
                    console.log(response.data.results);
                    that.musicList = response.data.results;
                }, function (err) { })
        },
        playMusic: function (musicId) {
            // console.log(musicId);
            var that = this;
            axios.get("https://meuzik.api.wurtu.com/song?id=" + musicId)
                .then(function (response) {
                    // console.log(response.data.data[0].url);
                    that.musicUrl = response.data.media_url;
                    that.musicCover = response.data.image;
                }, function (err) { })
        },

        play: function () {
            console.log("play");
            this.isPlaying = true;
        },
        pause: function () {
            console.log("pause")
            this.isPlaying = false;
        }
    }
})