import React from "react";
import Head from "next/head";
import {  Row, Col, Breadcrumb } from "antd";
import Header from "../commponents/Header";
import Author from '../commponents/Author';
import Footer from '../commponents/Footer';
import { CalendarOutlined, EyeOutlined } from "@ant-design/icons";
import '../static/style/pages/detail.css'

const Deatil = () => (
  <div>
    <Head>
      <title>Deatil</title>
    </Head>
    <Header></Header>
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        <div>
          <div className='bread-div'>
            <Breadcrumb>
              <Breadcrumb.Item> <a href = '/'>Home Page</a> </Breadcrumb.Item>
              <Breadcrumb.Item> <a href='/mylist'>Blog List</a> </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div>
            <div className='detailed-title'>
              Blog Title Here
            </div>
            <div className='list-icon center'>
              <span> <CalendarOutlined />2020/3/3</span>
              <span> <EyeOutlined />1000</span>
            </div>
            <div className='detailed-content'> 
              asdasdasdadasdadadadads
            </div>
          </div>

        </div>
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author></Author>
      </Col>
    </Row>
    <Footer></Footer>
  </div>
);

export default Deatil;
