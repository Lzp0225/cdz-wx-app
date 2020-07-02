//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    triggered: true,
    images: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590579300027&di=8e1b58b59ee641f6f3d32d5a57afd85d&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F03%2F69%2F59%2F4757b51fd157e65.jpg%2521%2Fwatermark%2Ftext%2FOTDorr7orqE%3D%2Ffont%2Fsimkai%2Falign%2Fsoutheast%2Fopacity%2F20%2Fsize%2F50', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590579300027&di=8e1b58b59ee641f6f3d32d5a57afd85d&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F03%2F69%2F59%2F4757b51fd157e65.jpg%2521%2Fwatermark%2Ftext%2FOTDorr7orqE%3D%2Ffont%2Fsimkai%2Falign%2Fsoutheast%2Fopacity%2F20%2Fsize%2F50']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad () {

    app.locationReadyCallback = res => {
      console.log('经纬度', app.globalData.location)
    }
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onRefresh() {
    setTimeout(()=> {
      this.setData({
        triggered: false
      })
    }, 2000)
  }
})
