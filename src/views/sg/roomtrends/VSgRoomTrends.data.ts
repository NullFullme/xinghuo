import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '索引号',
    align:"center",
    dataIndex: 'berthIndex'
   },
   {
    title: '房间号',
    align:"center",
    dataIndex: 'roomId_dictText'
   },
   {
    title: '床位号',
    align:"center",
    dataIndex: 'code'
   }, 
   {
    title: '床位状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '人员',
    align:"center",
    dataIndex: 'personId_dictText'
   }, 
   {
    title: '所属公司',
    align:"center",
    dataIndex: 'roomCompanyId_dictText'
   },
   {
    title: '劳务公司',
    align:"center",
    dataIndex: 'roomLaborId_dictText'
   }, 
   {
    title: '性别',
    align:"center",
    dataIndex: 'roomSex_dictText'
   },
   {
    title: '管理属性',
    align:"center",
    dataIndex: 'roomGlsx_dictText'
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
    label: '归属房间',
    field: 'roomId',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '所属人员',
    field: 'personId',
    component: 'Input',
  },
  {
    label: '房间名称',
    field: 'roomName',
    component: 'Input',
  },
  {
    label: '所属公司',
    field: 'roomCompanyId',
    component: 'Input',
  },
  {
    label: '劳务公司',
    field: 'roomLaborId',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'roomStatus',
    component: 'Input',
  },
  {
    label: '性别',
    field: 'roomSex',
    component: 'Input',
  },
  {
    label: '管理属性',
    field: 'roomGlsx',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
