import React from "react";
import { Form, Input, Button, Select } from "antd";
import useLocalization from "assets/lang";
import { successToast, errorToast } from "core/shared/toast/toast";
import { useNavigate } from "react-router-dom";
import { Routes } from "router/routes";
import { EditUserFormProps } from "../form";
import { useUpdateUser } from "pages/user/actions/user.mutation";

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onSuccess }) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: updateUser, isLoading } = useUpdateUser();
  const translate = useLocalization();

  const onFinish = async (values: any) => {
    try {
      await updateUser({ id: user.id, ...values });
      onSuccess();
      successToast(translate("toast_update"));
      navigate(Routes.users);
    } catch (error) {
      errorToast(translate("toast_error"));
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={user}
      layout="vertical"
    >
      <Form.Item
        name="name"
        label={translate("name")}
        rules={[{ required: true, message: translate("input_required") }]}
      >
        <Input placeholder={translate("name_placeholder")} />
      </Form.Item>
      <Form.Item
        name="phone" 
        label={translate("phone")} 
        rules={[{ required: true, message: translate("input_required") }]} 
      >
        <Input placeholder={translate("phone_placeholder")} /> 
      </Form.Item>
      <Form.Item
        name="email"
        label={translate("email")}
        rules={[
          {
            required: true,
            type: "email",
            message: translate("email_invalid"),
          },
        ]}
      >
        <Input placeholder={translate("email_placeholder")} />
      </Form.Item>
      <Form.Item
        name="age"
        label={translate("age")}
        rules={[{ required: true, message: translate("age_invalid") }]}
      >
        <Input type="date" />
      </Form.Item>
      <Form.Item
        name="address"
        label={translate("address")}
        rules={[{ required: true, message: translate("address_required") }]}
      >
        <Input.TextArea placeholder={translate("address_placeholder")} />
      </Form.Item>
      <Form.Item
        name="country"
        label={translate("country")}
        rules={[{ required: true, message: translate("select_country") }]}
      >
        <Select placeholder={translate("select_country")}>
          <Option value="azerbaijan">{translate("azerbaijan")}</Option>
          <Option value="turkey">{translate("turkey")}</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="gender"
        label={translate("gender")}
        rules={[{ required: true, message: translate("select_gender") }]}
      >
        <Select placeholder={translate("select_gender")}>
          <Option value="male">{translate("male")}</Option>
          <Option value="female">{translate("female")}</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {translate("update")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditUserForm;
