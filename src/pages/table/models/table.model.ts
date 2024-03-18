import { API } from "core/configs/api.config";
import axiosInstance from "core/configs/axios.config";

export default class TableModel {
    public id: number | null = null;
    public body: string | null = null;
    public title: string | null = null;
    public userId: number | null = null;

    constructor(item: any) {
        this._setId(item);
        this._setBody(item);
        this._setTitle(item);
        this._setUserId(item);
    }

    private _setId({ id }: any) {
        this.id = id;
    }

    private _setBody({ body }: any) {
        this.body = body;
    }

    private _setTitle({ title }: any) {
        this.title = title;
    }

    private _setUserId({ userId }: any) {   
        this.userId = userId;
    }

    /**
     * Delete post by ID
     * @param id Post ID
     */
    async deletePost(id: number) {
        try {
            await axiosInstance.delete(`${API.posts}/${id}`);
            //  success
        } catch (error) {
            //  error
        }
    }
}
