import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '月份',
    align:"center",
    dataIndex: 'month'
   },
   {
    title: '人员',
    align:"center",
    dataIndex: 'personId_dictText'
   },
   {
    title: '身份证号',
    align:"center",
    dataIndex: 'idcard'
   },
   {
    title: '房间号',
    align:"center",
    dataIndex: 'roomId_dictText'
   },
   {
    title: '床位号',
    align:"center",
    dataIndex: 'berthId_dictText'
   },
   {
    title: '入宿日期',
    align:"center",
    dataIndex: 'inRoomDate'
   },
   {
    title: '退宿日期',
    align:"center",
    dataIndex: 'outRoomDate'
   },
   {
    title: '入住天数',
    align:"center",
    dataIndex: 'inRoomDays'
   },
   {
    title: '冷水费',
    align:"center",
    dataIndex: 'coolFee'
   },
   {
    title: '热水费',
    align:"center",
    dataIndex: 'hotFee'
   },
   {
    title: '电费',
    align:"center",
    dataIndex: 'powerFee'
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
    label: '月份',
    field: 'month',
    component: 'Input',
  },
  {
    label: '身份证号',
    field: 'idcard',
    component: 'Input',
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '月份',
    field: 'month',
    component: 'Input',
  },
  {
    label: '人员',
    field: 'personId',
    component: 'Input',
  },
  {
    label: '房间号',
    field: 'roomId',
    component: 'Input',
  },
  {
    label: '床位号',
    field: 'berthId',
    component: 'Input',
  },
  {
    label: '入宿日期',
    field: 'inRoomDate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '退宿日期',
    field: 'outRoomDate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '入住天数',
    field: 'inRoomDays',
    component: 'InputNumber',
  },
  {
    label: '冷水费',
    field: 'coolFee',
    component: 'InputNumber',
  },
  {
    label: '热水费',
    field: 'hotFee',
    component: 'InputNumber',
  },
  {
    label: '电费',
    field: 'powerFee',
    component: 'InputNumber',
  },
  {
    label: '入宿状态',
    field: 'status',
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
