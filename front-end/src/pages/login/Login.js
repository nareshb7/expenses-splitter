import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [usersData,setusersData] = useState([])
    const onFinish = (values) => {
        setusersData([...usersData, values])
        console.log('Success:', values, usersData);
        navigate('/dashboard')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleValidator =async (_, value)=> {
        if(!value) return
        switch(_.field) {
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
                        Login
                    </Button>
                </Form.Item> 
            </Form>
            <div>
                <p>Don't have an account <Link to='/signup'>click here</Link></p>
            </div>
        </div>
    )
}

export default Login