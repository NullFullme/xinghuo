import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '床位编码',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '床位名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '床位序列号',
    align:"center",
    dataIndex: 'berthIndex'
   },
   {
    title: '房间号',
    align:"center",
    dataIndex: 'roomId_dictText'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    field: 'berthIndex',
    label: '床位序列号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'roomId',
    label: '房间号',
    component: 'JSelectRoom',
    componentProps: {
      rowKey: 'id',
      labelKey: 'name',
      isRadioSelection: true, 
    },
    colProps: { span: 8 },
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '床位编码',
    field: 'code',
    component: 'Input',
  },
  {
    label: '床位名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '床位序列号',
    field: 'berthIndex',
    component: 'Input',
  },
  {
    label: '房间号',
    field: 'roomId', 
    component: 'JSelectRoom',
    componentProps: {
      rowKey: 'id',
      labelKey: 'name',
      isRadioSelection: true, 
    },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"qyzt"
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

