import React, { FC } from 'react';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import { TabBar } from 'antd-mobile'
import {
  useNavigate,
  useLocation,
} from 'react-router-dom'

const Bottom: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/tag',
      title: '标签',
      icon: <AppOutline />,
    },
    {
      key: '/money',
      title: '记账',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/statistics',
      title: '统计',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
};

export default Bottom