import React, { useMemo } from 'react';
import { Form, Input, Button, Select } from 'antd';
import useLocalization from 'assets/lang';
import { successToast, errorToast } from 'core/shared/toast/toast';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';
import { EditUserFormProps } from '../form';
import { useUpdateUser } from 'pages/user/actions/user.mutation';
import { FormValues } from './edit-form';

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onSuccess }) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: updateUser, isLoading } = useUpdateUser();
  const translate = useLocalization();

  const onFinish = async (values: FormValues) => {
    try {
      await updateUser({ id: user.id, ...values });
      onSuccess();
      successToast(translate('toast_update'));
      navigate(Routes.users);
    } catch (error) {
      errorToast(translate('toast_error'));
    }
  };
    

  const rules = useMemo(
    () => ({
      name: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      email: [
        {
          // add a pattern for email regex
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: translate('email_invalid'),
        },
      ],
      age: [
        {
          required: true,
          message: translate('input_required'),
        },
      ],
      phone: [
        {
          pattern: /^\+994[0-9]{9}$/,
          message: translate('phone_invalid_format'),
        },
      ],
      image: [{ required: true, message: translate('input_required') }],
      address: [
        {
          min: 8,
          message: translate('input_min_length', {
            min: <span style={{ color: 'green' }}>8</span>,
          }),
        },
      ],
      country: [{ required: true, message: translate('select_country') }],
      gender: [{ required: true, message: translate('select_gender') }],
    }),
    [translate]
  );

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={user}
      layout='vertical'
    >
      <Form.Item
        name='name'
        label={translate('name')}
        rules={rules.name}
      >
        <Input placeholder={translate('name_placeholder')} />
      </Form.Item>
      <Form.Item
        name='phone' 
        label={translate('phone')} 
        rules={rules.phone} 
      >
        <Input placeholder={translate('phone_placeholder')} /> 
      </Form.Item>
      <Form.Item
        name='email'
        label={translate('email')}
        rules={rules.email}
      >
        <Input placeholder={translate('email_placeholder')} />
      </Form.Item>
      <Form.Item
        name='age'
        label={translate('age')}
        rules={rules.age}
      >
        <Input type='date' />
      </Form.Item>
      <Form.Item
        name='address'
        label={translate('address')}
        rules={rules.address}
      >
        <Input.TextArea placeholder={translate('address_placeholder')} />
      </Form.Item>
      <Form.Item
        name='country'
        label={translate('country')}
        rules={rules.country}
      >
        <Select placeholder={translate('select_country')}>
          <Option value='azerbaijan'>{translate('azerbaijan')}</Option>
          <Option value='turkey'>{translate('turkey')}</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name='gender'
        label={translate('gender')}
        rules={rules.gender}
      >
        <Select placeholder={translate('select_gender')}>
          <Option value='male'>{translate('male')}</Option>
          <Option value='female'>{translate('female')}</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          {translate('update')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditUserForm;
