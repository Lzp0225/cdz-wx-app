Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
            pagePath: "/pages/index/index",
            text: "首页"
        },{
            pagePath: "/pages/logs/logs",
            text: "日志"
        }, {
            pagePath: "/pages/map/index",
            text: "地图"
        }]
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            console.log(data.index)
            const path = data.path
            wx.switchTab({url: path})
            this.setData({
                selected: data.index
            })
        }
    }
})
