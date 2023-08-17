import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import moment from 'moment';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '月份',
    align:"center",
    dataIndex: 'month'
   },
   {
    title: '冷水费',
    align:"center",
    dataIndex: 'coolWater'
   },
   {
    title: '热水费',
    align:"center",
    dataIndex: 'hotWater'
   },
   {
    title: '电费',
    align:"center",
    dataIndex: 'power'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '月份',
    field: 'month',
    component: 'Input',
    colProps: { span: 12 },
    defaultValue:moment(new Date()).format('YYYY-MM'), 
  },
  {
    label: '冷水费',
    field: 'coolWater',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '热水费',
    field: 'hotWater',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '电费',
    field: 'power',
    component: 'InputNumber',
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
