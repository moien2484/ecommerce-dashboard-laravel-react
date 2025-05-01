import React from 'react';
import { AppstoreOutlined, HomeOutlined , SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import "./CmsMenu.css"
import { Link } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'صفحه ی اصلی',
    icon: <HomeOutlined />,

  },

  {
    key: 'sub2',
    label: <Link className='link' to="/dashboard/product"> محصولات</Link>,
    icon: <AppstoreOutlined />,
  },
  {
    key: 'sub3',

    label: <Link className='link' to="/dashboard/users"> کابران</Link>,
    icon: <AppstoreOutlined />,
  },
  {
    key: 'sub4',
    label: 'سفارشات',
    icon: <AppstoreOutlined />,

  },
  {
    key: 'sub5',
    label: 'تخفیف ها',
    icon: <AppstoreOutlined />,
  },
  

  {
    type: 'divider',
  },

//   {
//     key: 'grp',
//     label: 'Group',
//     type: 'group',
//     children: [
//       { key: '13', label: 'Option 13' },
//       { key: '14', label: 'Option 14' },
//     ],
//   },
];

const CmsMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256  , height: "100%" , display:"flex" , flexDirection:"column" , gap:"30px"}}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default CmsMenu;
