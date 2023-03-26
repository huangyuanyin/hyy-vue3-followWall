import Mock from 'mockjs'

// 留言note
export const note = Mock.mock({
  'data|49': [
    {
      // id
      'id|+1': 1,
      // 创建时间
      moment: new Date(),
      // userId
      'userId|+1': 10,
      // 内容
      'message|24-96': '@cword',
      // 标签
      'label|0-10': 0,
      // name
      name: '@cname',
      // like
      'like|0-120': 0,
      // 评论
      'comment|0-120': 0,
      // 背景色
      'imgurl|0-4': 0,
      // 是否撤销
      'revoke|0-20': 0,
      // 是否举报
      'report|0-20': 0,
      // 类型
      type: 0
    }
  ]
})

// 照片note
export const photo = Mock.mock({
  'data|79': [
    {
      // id
      'id|+1': 1,
      // 创建时间
      moment: new Date(),
      // userId
      'userId|+1': 10,
      // 内容
      'message|24-96': '@cword',
      // 标签
      'label|0-10': 0,
      // name
      name: '@cname',
      // like
      'like|0-120': 0,
      // 评论
      'comment|0-120': 0,
      // 背景色
      'imgurl|0-26': 0,
      // 是否撤销
      'revoke|0-20': 0,
      // 是否举报
      'report|0-20': 0,
      // 类型
      type: 1
    }
  ]
})

// 评论
export const comment = Mock.mock({
  'data|39': [
    {
      // id
      'id|+1': 1,
      // 创建时间
      moment: new Date(),
      // userId
      'userId|+1': 10,
      // 内容
      'message|24-96': '@cword',
      // name
      name: '@cname',
      // 背景色
      'imgurl|0-13': 0
    }
  ]
})
