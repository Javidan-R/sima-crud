import { Skeleton, Table, Button, Popconfirm } from "antd";
import useLocalization from "assets/lang";
import { generateGuid } from "core/helpers/generate-guid";
import { errorToast, successToast } from "core/shared/toast/toast";
import useTableStyles from "./table.style";
import { useDeletePostMutation, usePosts } from "./actions/table.query";

function TableComponent() {
  const { data, isLoading, refetch } = usePosts();
  const deletePostMutation = useDeletePostMutation();
  const translate = useLocalization();
  const classes = useTableStyles();
  const handleDelete = async (id: number) => {
    try {
      await deletePostMutation.mutateAsync(id);
      successToast(translate("toast_delete"));
      refetch();
    } catch (error) {
      errorToast(translate("toast_error"));
    }
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      width: "60px",
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "address",
      dataIndex: "address ",
      ellipsis: true,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      width: "140px",
      render: (_: any, record: { id: number }) => (
        <Popconfirm
          title="Məlumatı silməyi təsdiq edin"
          onConfirm={() => handleDelete(record.id)}
          okText="Bəli"
          cancelText="Xeyr"
        >
          <Button type="primary" danger className={classes.button}>
            {translate("delete")}
          </Button>
          <Button type="primary" danger className={classes.button}>
            {translate("update")}
          </Button>
        </Popconfirm>
      ),
    },
  ];
  return (
    <div>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Table
          dataSource={data}
          columns={columns}
          rowKey={generateGuid}
        />
      )}
    </div>
  );
}

export default TableComponent;
