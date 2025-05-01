import React from 'react';
import { Button, notification, Space } from 'antd';
import "./Massage.css"

const MassageRegister: React.FC<string> = (massageregister) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (pauseOnHover: boolean) => () => {
    api.open({
      message: massageregister,
    //   description:
    //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      showProgress: true,
      pauseOnHover,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button className='btn-add' type="primary" onClick={openNotification(false)}>
        <i className="bx bx-plus"></i>
        </Button>
      </Space>
    </>
  );
};

export default MassageRegister;