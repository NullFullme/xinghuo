import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '房间号',
    align:"center",
    dataIndex: 'roomId'
   },
   {
    title: '报修人姓名',
    align:"center",
    dataIndex: 'reportPersonName'
   },
   {
    title: '报修人联系方式',
    align:"center",
    dataIndex: 'reportPersonPhone'
   },
   {
    title: '报修时间',
    align:"center",
    dataIndex: 'reportDate'
   },
   {
    title: '报修产品名称',
    align:"center",
    dataIndex: 'reportProduct'
   },
   {
    title: '维修人员姓名',
    align:"center",
    dataIndex: 'repairPersonName'
   },
   {
    title: '维修状态',
    align:"center",
    dataIndex: 'repairStatus'
   },
   {
    title: '完成时间',
    align:"center",
    dataIndex: 'finishDate'
   },
   {
    title: '人工费用',
    align:"center",
    dataIndex: 'personCost'
   },
   {
    title: '产品单价',
    align:"center",
    dataIndex: 'productPrice'
   },
   {
    title: '产品数量',
    align:"center",
    dataIndex: 'productQty'
   },
   {
    title: '税点',
    align:"center",
    dataIndex: 'taxPoint'
   },
   {
    title: '总费用',
    align:"center",
    dataIndex: 'allCost'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '房间号',
    field: 'roomId',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '报修人姓名',
    field: 'reportPersonName',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '报修人联系方式',
    field: 'reportPersonPhone',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '报修时间',
    field: 'reportDate',
    component: 'DatePicker',
    colProps: { span: 12 },
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '报修产品名称',
    field: 'reportProduct',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '维修人员姓名',
    field: 'repairPersonName',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '维修状态',
    field: 'repairStatus',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '完成时间',
    field: 'finishDate',
    component: 'DatePicker',
    colProps: { span: 12 },
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '人工费用',
    field: 'personCost',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '产品单价',
    field: 'productPrice',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '产品数量',
    field: 'productQty',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '税点',
    field: 'taxPoint',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '总费用',
    field: 'allCost',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
    colProps: { span: 12 },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
