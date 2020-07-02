// camera.js
Page({
    data: {
        flash: 'off'
    },
    openLivePusher() {
        console.log(this)
        this.isOn = !this.isOn
        this.setData({
            flash: this.isOn?'on':'off'
        })
        console.log(this.data.flash)
    },
    onLoad() {
        wx.getSetting({
            success:(res) => {
                console.log(res)
            }
        })
    },
    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    },
    scanCodeHandle(e) {
       console.log('扫码', e)
    }
})
