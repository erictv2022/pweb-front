import React from "react";
import {Button, Form, Input} from 'antd';
import http from '../common/http-common'

/**
 * Sumbit register data to api
 * @param values
 */
function onFinish(values) {
    //console.log("Success", values)

    const {confirm, ...data} = values;
    http.post('/users', data)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

/**
 * Email rule for register
 * @type {[{type: string, message: string},{message: string, required: boolean}]}
 */
const emailRules = [
    {type: 'email', message: 'The email is not valid!'},
    {required: true, message: 'Please input your E-mail!'}
];


/**
 * Password rule for register
 * @type {[{message: string, required: boolean}]}
 */
const passwordRules = [
    {required: true, message: 'Please enter your password!'}
];

/**
 * Confirm password rule for register
 * @type {[{message: string, required: boolean},(function({getFieldValue: *}): {validator(*, *): (Promise<void>)})]}
 */
const confirmRules = [
    {required: true, message: 'Please confirm your password!'},
    ({getFieldValue}) => ({
        validator(rule, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject('Password enter mismatch!');
        }
    })
];


/**
 * Username rule
 * @type {[{message: string, whitespace: boolean, required: boolean}]}
 */
const usernameRules = [
    {required: true, message: 'Please enter your username!', whitespace: true}
]

const formItemLayout = {
    labelCol: {xs: {span: 24}, sm: {span: 6}},
    wrapperCol: {xs: {span: 24}, sm: {span: 12}}
};
const tailFormItemLayout = {
    wrapperCol: {xs: {span: 24, offset: 0}, sm: {span: 16, offset: 6}},
};

/**
 * Render registeration form ui
 * @returns {JSX.Element}
 * @constructor
 */
function RegistrationForm() {
    return (
        <Form name="register" {...formItemLayout} scrollToFirstError onFinish={onFinish}>
            <Form.Item name="email" label="E-mail" rules={emailRules}>
                <Input/>
            </Form.Item>

            <Form.Item name="password" label="Password" rules={passwordRules} hasFeedback>
                <Input.Password/>
            </Form.Item>

            <Form.Item name="confirm" label="Confirm Password" rules={confirmRules} hasFeedback>
                <Input.Password/>
            </Form.Item>

            <Form.Item name="username" label="Username" rules={usernameRules}>
                <Input/>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>

    );
}

export default RegistrationForm;