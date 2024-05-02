import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { Layout, Flex } from 'antd';

// components
import Ladder from "./components/ladder/ladder";
import Account from "./components/account/account";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login";
import NotFound from './components/notFound';
import Structure from "./components/structure";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
};

const App = () => (
    <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Routes>
          <Route path="/" element={<Ladder/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Flex>
);

export default App;