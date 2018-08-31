const app = getApp()

Page({
    data: {

    },
    onLoad: function () {
        this.startLoad = this.selectComponent("#startLoad");
        this.startLoad._showModel();
    },
})
