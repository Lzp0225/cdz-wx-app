// map.js
const app = getApp()
Page({
    async onReady(e) {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap')
        await this.getCenterLocation()
        this.moveToLocation()
    },
    getCenterLocation: function () {
        this.mapCtx.getCenterLocation({
            success: function(res){
                const location = {
                    latitude: res.latitude,
                    longitude: res.longitude
                }
                app.globalData.location = location
            }
        })
    },
    moveToLocation: function () {
        this.mapCtx.moveToLocation(app.globalData.location)
    },
    translateMarker: function() {
        this.mapCtx.translateMarker({
            markerId: 0,
            autoRotate: true,
            duration: 1000,
            destination: app.globalData.location,
            animationEnd() {
                console.log('animation end')
            }
        })
    },
    includePoints: function() {
        this.mapCtx.includePoints({
            padding: [10],
            points: [{
                latitude:23.10229,
                longitude:113.3345211,
            }, {
                latitude:23.00229,
                longitude:113.3345211,
            }]
        })
    }
})
