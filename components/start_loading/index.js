// components/start_loading/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        dataContent: {
            type: String,
            value: '正在加载，请稍后',
        }
  },

  /**
   * 组件的初始数据
   */
  data: {
        showFlag:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
        _showModel:function(){
            this.setData({
                showFlag: true
            });
        },
        _hideModel:function(){
           this.setData({
               showFlag:false
           });
       }
  }
})
