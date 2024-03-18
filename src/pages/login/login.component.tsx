import { Button, Card, Form, Input } from "antd";
import { useLoginStyles } from "./login.style";
import React, { useCallback, useMemo } from "react";
import useLocalization from "assets/lang";
import { FormRule } from "antd";
import { useLogin } from "./actions/login.mutation";
import { ILoginFormValues } from "./login";
const LoginComponent = () => {
  const translate = useLocalization();

  const { mutate, isLoading } = useLogin();

  const { title, page, panel, subtitle } = useLoginStyles();
  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
  };
  const rules: { [key: string]: FormRule[] } = useMemo(
    () => ({
      email: [
        {
          required: true,
          message: translate("input_required"),
        },
        {
          // add a pattern for email regex
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: translate("email_invalid"),
        },
      ],
      password: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
    }),
    [translate]
  );

  const onSubmit = useCallback(
    (values: ILoginFormValues) => {
      mutate(values);
    },
    [mutate]
  );

  return (
    <div
      className={`${page} py-50 px-20 w-100 d-flex justify-center align-center`}
    >
      <div className={panel}>
        <Card>
          <div className="">
            <div className=" mb-35 text-center">
              <h1 className={title}>{translate("login_title")}</h1>
              <p className={subtitle}>{translate("login_subtitle")}</p>
            </div>
          </div>
          <Form
            name="login"
            initialValues={initialValues}
            onFinish={onSubmit}
            layout="vertical"
          >
            <Form.Item rules={rules.email} name="email" label="Email">
              <Input />
            </Form.Item>
            <Form.Item rules={rules.password} name="password" label="Password">
              <Input type="password" />
            </Form.Item>
            <div>
              <Button
                loading={isLoading}
                className="w-100"
                type="primary"
                htmlType="submit"
              >
                {translate("login_sign_in_button")}
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;
