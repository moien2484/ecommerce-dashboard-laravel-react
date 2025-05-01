import React, {  } from 'react';
import { Button, notification, Space } from 'antd';
import "./Massage.css"
import { massagetype } from '../../type';
const Massage: React.FC<massagetype> = ({isincart , onClick}) => {
  const [api, contextHolder] = notification.useNotification();


  const openNotification = (pauseOnHover: boolean) => () => {
    api.open({
        
      message: isincart ? "این محصول در سبد خرید وجود داشته است" : "محصول با موفقیت وارد سبد خرید شد",
    //   description:
    //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      showProgress: true,
      pauseOnHover,
    });
    if(onClick && !isincart ){
onClick()
    }
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

export default Massage;