import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Divider } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

export function StudentHome(props) {
    return(
        

  <Layout style={{height: '100vh'}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Jobs
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Internships
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Accommodations
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Study Resources
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{display: 'flex', flexDirection: 'row'}}>
      <Content style={{ margin: '24px 16px 0' }}>
        {/**
        Below div should be replaced with Search and card list component
        */}
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Search Bar and Cards
        </div>
      </Content>
      <Divider type="vertical" style={{height: '100vh'}} />
      <Content style={{ margin: '24px 16px 0'}}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          More Details
        </div>
      </Content>
    </Layout>
  </Layout>
    );
}   
