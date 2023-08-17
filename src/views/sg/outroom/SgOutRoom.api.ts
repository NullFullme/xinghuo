import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/sg/sgOutRoom/list',
  save='/sg/sgOutRoom/add',
  edit='/sg/sgOutRoom/edit',
  deleteOne = '/sg/sgOutRoom/delete',
  deleteBatch = '/sg/sgOutRoom/deleteBatch',
  importExcel = '/sg/sgOutRoom/importExcel',
  exportXls = '/sg/sgOutRoom/exportXls',
  audBatch = '/sg/sgOutRoom/audBatch',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}

/**
 * 批量审核
 * @param params
 */
 export const batchAud = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认审核',
    content: '是否审核选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.put({url: Api.audBatch, data: params}).then(() => {
        handleSuccess();
      });
    }
  });
}
