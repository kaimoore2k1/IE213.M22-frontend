import React, { useState } from 'react';
import { Card } from 'antd';
import Footer from '../../components/Layout/Footer';
import Reviews from '../Home/Reviews';


const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];



const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};


function Example() {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1' as any);

  const [activeTabKey2, setActiveTabKey2] = useState('app');

  const onTab1Change = (key: any) => {
    setActiveTabKey1(key);
    

  };
  const onTab2Change = (key:any) => {
    setActiveTabKey2(key);
  };

  function getName1(key:string):any{
    switch (key) {
        case "tab1":
            return contentList[key];
        case "tab2":
            return contentList[key];
      
    }
  }
  function getName2(key:string):any{
    switch (key) {
        case "article":
            return contentListNoTitle[key];
        case "app":
            return contentListNoTitle[key];
        case "project":
            return contentListNoTitle[key];
    }
  }


  return (
    <>
    <div>getName</div>
      <Card
        style={{ width: '100%' }}
        title="Card title"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
       {getName1(activeTabKey1)}
      
      </Card>
      <br />
      <br />
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={key => {
          onTab2Change(key);
        }}
      >
          {getName2(activeTabKey2)}
      </Card>
    </>
  );
};

export default Example;