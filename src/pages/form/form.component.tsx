import React, { useCallback, useMemo } from "react";
import { Form, Input, Button, Select, Radio } from "antd";
import useLocalization from "assets/lang";
import { useForm } from "./actions/form.mutation";
import { useFormStyles } from "./form.style";

const FormComponent = () => {
  const [form] = Form.useForm();
  const translate = useLocalization();
  const { mutate, isLoading } = useForm();
  const classes = useFormStyles();

  const initialValues = {
    id: "",
    name: "",
    email: "",
    age: "",
    phone: "",
    image: "",
    address: "",
    country: "",
    gender: "",
  };

  const rules = useMemo(
    () => ({
      name: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
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
      age: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
      phone: [
        {
          required: true,
          message: translate("input_required"),
        },
        {
          pattern: /^\+994[0-9]{9}$/,
          message: translate("phone_invalid_format"),
        },
      ],
      image: [{ required: true, message: translate("input_required") }],
      address: [
        { required: true, message: translate("input_required") },
        {
          min: 8,
          message: translate("input_min_length", {
            min: <span style={{ color: "green" }}>8</span>,
          }),
        },
      ],
      country: [{ required: true, message: translate("select_country") }],
      gender: [{ required: true, message: translate("select_gender") }],
    }),
    [translate]
  );

  const countryOptions = useMemo(
    () => [
      { value: "azerbaijan", label: translate("azerbaijan") },
      { value: "turkey", label: translate("turkey") },
      // Add more countries here
    ],
    [translate]
  );
  const genderOptions = useMemo(
    () => [
      { value: "male", label: translate("male") },
      { value: "female", label: translate("female") },
    ],
    [translate]
  );

  const onSubmit = useCallback(
    (values: IUser) => {
      mutate(values);
    },
    [mutate]
  );

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={onSubmit}
      layout="vertical"
      className={classes.testDiv}
      encType="multipart/form-data"
    >
      <h2> {translate("user_info_form_title")} </h2>
      <div className="row">
        <div className="col-lg-6">
          <Form.Item rules={rules.name} name="name" label={translate("name")}>
            <Input placeholder={translate("name_placeholder")} />
          </Form.Item>
        </div>
        <div className="col-lg-6">
          <Form.Item
            rules={rules.email}
            name="email"
            label={translate("email")}
          >
            <Input placeholder={translate("email_placeholder")} />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Form.Item rules={rules.age} name="age" label={translate("age")}>
            <Input
              type="date"
              style={{ display: "inline-block", width: "100%" }}
            />
          </Form.Item>
        </div>
        <div className="col-lg-6">
          <Form.Item
            rules={rules.phone}
            name="phone"
            label={translate("phone")}
          >
            <Input placeholder={translate("phone_placeholder")} />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Form.Item
            rules={rules.image}
            name="image"
            label={translate("image")}
          >
            <Input type="file" name="imge" />
          </Form.Item>
        </div>
        <div className="col-lg-6">
          <Form.Item
            rules={rules.country}
            name="country"
            label={translate("country")}
          >
            <Select placeholder={translate("select_country")}>
              {countryOptions.map((option) => (
                <Select.Option
                  key={option.value}
                  showSearch
                  value={option.value}
                >
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Form.Item
            rules={rules.gender}
            name="gender"
            label={translate("gender")}
          >
            <Radio.Group options={genderOptions} />
          </Form.Item>
        </div>
        <div className="col-lg-6">
          <Form.Item
            rules={rules.address}
            name="address"
            label={translate("address")}
          >
            <Input.TextArea placeholder={translate("address_placeholder")} />
          </Form.Item>
        </div>
      </div>
      <div className="row mt-20">
        <div className="col-lg-3">
          <Button loading={isLoading} htmlType="reset" className="w-100 ">
            {translate("reset")}
          </Button>
        </div>
        <div className="col-lg-3">
          <Button
            loading={isLoading}
            className="w-100 "
            type="primary"
            htmlType="submit"
          >
            {translate("submit")}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default React.memo(FormComponent);
