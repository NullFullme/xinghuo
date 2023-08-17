import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '房间号',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '房间名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '所属公司',
    align:"center", 
    dataIndex: 'companyId_dictText'
   },
   {
    title: '劳务公司',
    align:"center",
    dataIndex: 'laborId_dictText'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'sex_dictText'
   },
   {
    title: '管理属性',
    align:"center",
    dataIndex: 'glsx_dictText'
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
    field: 'code',
    label: '房间编码',
    component: 'Input',
    colProps: { span: 8 },
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '房间号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '房间名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '所属公司',
    field: 'companyId',
    component: 'JSelectDept',
  },
  {
    label: '劳务公司',
    field: 'laborId',
    component: 'JSelectDept', 
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex"
     },
  },
  {
    label: '管理属性',
    field: 'glsx',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"glsx"
     },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"rsdzt"
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
