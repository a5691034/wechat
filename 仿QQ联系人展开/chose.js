// pages/check/add/chose/chose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        id: 0,
        title: "我的好友",
        display: true,//true 显示；false 隐藏
        sub: [
          { title: '张三' },
          { title: '李四' },
          { title: '王五' }]
      },
      {
        id: 1,
        title: "企业好友",
        display: true,
        sub: [{ title: '小红' }, { title: '小明' }, { title: '小王' }]
      },
      {
        id: 2,
        title: "黑名单",
        display: false,
        sub: [{ title: '小红' }, { title: '小明' }, { title: '小王' }]
      }
    ],
  },
  bind: function (e) {
    var index = e.currentTarget.dataset.index;
    // console.log(e)
    var _this = this
    //获取列表数组
    var dataArray = _this.data.listData;
    //获取点击对应数据模型
    var item = dataArray[index];
    console.log(item)
    //修改模型显示参数
    item.display = !item.display
    //修改列表数组
    dataArray[index] = item;
    //修改页面数据
    this.setData({
      listData: dataArray
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.bartitle,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})