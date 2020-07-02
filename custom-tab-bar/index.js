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
            text: "扫码"
        }, {
            pagePath: '/pages/camera/index',
            text: '扫码'
        }, {
            pagePath: "/pages/map/index",
            text: "地图"
        }],
        isHide: false
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const path = data.path
            if (data.index == 2) {
                return
            }
            wx.switchTab({url: path})
            this.setData({
                selected: data.index
            })
        },
        scanCode() {
            console.log(111)
            wx.navigateTo({url: ''})
        }
    }
})
