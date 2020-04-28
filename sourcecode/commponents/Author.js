import React from 'react';
import {Avatar, Divider} from 'antd';
import { GithubOutlined, FacebookOutlined,LinkedinOutlined } from "@ant-design/icons";
import '../static/style/components/Author.css'
const Author = ()=>{
    return (
      <div className="author-div comm-box">
        <div>
          <Avatar size={100} src="../static/panda.jpg"></Avatar>
        </div>
        <div className="author-introduction">
          asdasdadasdasdasdasdsddadasdasdadasdasd
          <Divider>Social Medial</Divider>
          <Avatar size={28} className="account" ><GithubOutlined /></Avatar>
          <Avatar size={28} className="account" ><FacebookOutlined /></Avatar>
          <Avatar size={28} className="account" ><LinkedinOutlined /></Avatar>
        </div>
      </div>
    );
}

export default Author;