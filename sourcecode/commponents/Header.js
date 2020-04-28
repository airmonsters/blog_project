import React from 'react';
import '../static/style/components/Header.css';
import {Row, Col, Menu, } from 'antd'
import { HomeOutlined, YoutubeOutlined, GithubOutlined } from "@ant-design/icons";

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className="header-logo">Blog Project</span>
        <span className="header-txt">My react project show case</span>
      </Col>

      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <HomeOutlined />
            Home
          </Menu.Item>
          <Menu.Item key="video">
            <YoutubeOutlined />
            Video
          </Menu.Item>
          <Menu.Item key="life">
            <GithubOutlined />
            Github
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header