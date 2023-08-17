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
    title: '房间号',
    align:"center",
    dataIndex: 'roomId_dictText'
   },
   {
    title: '上月热水费',
    align:"center",
    dataIndex: 'lastHotWater'
   },
   {
    title: '本月热水费',
    align:"center",
    dataIndex: 'nowHotWater'
   },
   {
    title: '上月冷水费',
    align:"center",
    dataIndex: 'lastCoolWater'
   },
   {
    title: '本月冷水费',
    align:"center",
    dataIndex: 'nowCoolWater'
   },
   {
    title: '上月电费',
    align:"center",
    dataIndex: 'lastPower'
   },
   {
    title: '本月电费',
    align:"center",
    dataIndex: 'nowPower'
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
    label: '房间号',
    field: 'roomId', 
    component: 'JSelectRoom',
    colProps: { span: 12 },
    componentProps: {
      rowKey: 'id',
      labelKey: 'name',
      isRadioSelection: true, 
    },
  },
  {
    label: '上月热水费',
    field: 'lastHotWater',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '本月热水费',
    field: 'nowHotWater',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '上月冷水费',
    field: 'lastCoolWater',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '本月冷水费',
    field: 'nowCoolWater',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '上月电费',
    field: 'lastPower',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '本月电费',
    field: 'nowPower',
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
