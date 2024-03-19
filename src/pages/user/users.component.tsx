import { useState } from "react";
import { Table, Button, Dropdown, Menu, Modal, Skeleton } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useLocalization from "assets/lang";
import { successToast, errorToast } from "core/shared/toast/toast";
import EditUserForm from "pages/form/edit-form/edit-form.component";
import { useGetUser } from "./actions/users.query";
import { generateGuid } from "core/helpers/generate-guid";
import UserModel from "./models/user.models";
import { useDeleteUser } from "./actions/user.mutation";

const UserComponent = () => {
  const { data, isLoading } = useGetUser();
  const translate = useLocalization();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserModel | null>(null);
  const deleteUserMutation = useDeleteUser();

  const handleDelete = async (id: string) => {
    try {
      await deleteUserMutation.mutateAsync(id);
      successToast(translate("toast_delete"));
    } catch (error) {
      errorToast(translate("toast_error"));
    }
  };

  const handleUpdate = (user: UserModel) => {
    setSelectedUser(user);
    setIsEditModalVisible(true);
  };

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false);
    setSelectedUser(null);
  };

  const handleEditModalSuccess = () => {
    setIsEditModalVisible(false);
    setSelectedUser(null);
  };

  const menuAct = (id: string, user: UserModel) => (
    <Menu>
      <Menu.Item
        key="edit"
        icon={<EditOutlined />}
        onClick={() => handleUpdate(user)}
      >
        {translate("update")}
      </Menu.Item>
      <Menu.Item
        key="delete"
        icon={<DeleteOutlined />}
        onClick={() => handleDelete(id)}
      >
        {translate("delete")}
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "60px",
    },
    {
      title: translate("image"),
      dataIndex: "image",
      render: (image: string) => <img src={image} alt="image"  style={{ width: 50, height: 50 }} />,
    },
    {
      title: translate("name"),
      dataIndex: "name",
    },
    {
      title: translate("email"),
      dataIndex: "email",
    },
    {
      title: translate("age"),
      dataIndex: "age",
    },
    {
      title: translate("address"),
      dataIndex: "address",
    },
    {
      title: translate("country"),
      dataIndex: "country",
    },
    {
      title: translate("gender"),
      dataIndex: "gender",
    },
    {
      title: translate("actions"),
      dataIndex: "actions",
      width: "100px",
      render: (_: any, record: UserModel) => (
        <Dropdown overlay={record.id ? menuAct(record.id, record) : undefined}>
          <Button type="primary">{translate("actions")}</Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <>
          <Table
            dataSource={data}
            columns={columns}
            rowKey={generateGuid}
            loading={isLoading}
            scroll={{ x: true }} 
          />
          <Modal
            visible={isEditModalVisible}
            title={translate("update_user_info")}
            onCancel={handleEditModalCancel}
            footer={null}
          >
            {selectedUser && (
              <EditUserForm
                user={selectedUser}
                onSuccess={handleEditModalSuccess}
              />
            )}
          </Modal>
        </>
      )}
    </div>
  );
};

export default UserComponent;
