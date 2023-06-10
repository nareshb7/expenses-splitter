import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [usersData,setusersData] = useState([])
    const onFinish = (values) => {
        setusersData([...usersData, values])
        console.log('Success:', values, usersData);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleValidator = (_, value)=> {
        switch(_.field) {
            case 'username': {
                if (value.length > 3) {
                    return Promise.resolve()
                }
                return Promise.reject('min 4 charcters')
            };
            case "mobile" : {
                const pattern = /^[6,7,8,9][\d]{9}$/
                if (value.match(pattern)) {
                    return Promise.resolve()
                }
                return Promise.reject('Enter valid mobile number')
            }
            case "password": {
                const psdPattern = /[\d\w]{8,}$/
                if (value.match(psdPattern)) {
                    return Promise.resolve()
                }
                return Promise.reject('Minimum 8 characters')
            }
        }
        
    }
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        {validator: handleValidator}
                    ]}
                >
                    <Input allowClear />
                </Form.Item>
                <Form.Item
                    label="Mobile"
                    name="mobile"
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your Mobile number!' },
                        {validator: handleValidator}
                    ]}
                >
                    <Input allowClear/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        {validator: handleValidator}
                    ]}
                >
                    <Input.Password allowClear />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Signup
                    </Button>
                </Form.Item> 
            </Form>
            <div>
                <p>Already have an account <Link to='/login'>click here</Link></p>
            </div>
        </div>
    )
}

export default Signup