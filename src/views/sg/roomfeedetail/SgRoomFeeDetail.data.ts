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
   {
    title: '热水用量',
    align:"center",
    dataIndex: 'useHotWater'
   },
   {
    title: '冷水用量',
    align:"center",
    dataIndex: 'useCoolWater'
   },
   {
    title: '电费用量',
    align:"center",
    dataIndex: 'userPower'
   },
   {
    title: '入住天数',
    align:"center",
    dataIndex: 'inRoomDays'
   },
   {
    title: '平均热水量',
    align:"center",
    dataIndex: 'averageHotWater'
   },
   {
    title: '平均冷水量',
    align:"center",
    dataIndex: 'averageCoolWater'
   },
   {
    title: '平均电费',
    align:"center",
    dataIndex: 'averagePower'
   },
   {
    title: '热水费',
    align:"center",
    dataIndex: 'hotWaterFee'
   },
   {
    title: '冷水费',
    align:"center",
    dataIndex: 'coolWaterFee'
   },
   {
    title: '电费费用',
    align:"center",
    dataIndex: 'powerFee'
   },
   {
    title: '费用总计',
    align:"center",
    dataIndex: 'feeTotal'
   },
   {
    title: '平均热水费',
    align:"center",
    dataIndex: 'averageHotWaterFee'
   },
   {
    title: '平均冷水费',
    align:"center",
    dataIndex: 'averageCoolWaterFee'
   },
   {
    title: '平均电费费',
    align:"center",
    dataIndex: 'averagePowerFee'
   },
   {
    title: '平均费用总计',
    align:"center",
    dataIndex: 'averageFeeTotal'
   },
   {
    title: '热水单价',
    align:"center",
    dataIndex: 'hotWaterPrice'
   },
   {
    title: '冷水单价',
    align:"center",
    dataIndex: 'coolWaterPrice'
   },
   {
    title: '电费单价',
    align:"center",
    dataIndex: 'powerFeePrice'
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
    label: '房间号',
    field: 'roomId',
    component: 'JSelectRoom',
    componentProps: {
      rowKey: 'id',
      labelKey: 'name',
      isRadioSelection: true, 
    },
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
    label: '房间号',
    field: 'roomId',
    component: 'Input',
  },
  {
    label: '上月热水费',
    field: 'lastHotWater',
    component: 'InputNumber',
  },
  {
    label: '本月热水费',
    field: 'nowHotWater',
    component: 'InputNumber',
  },
  {
    label: '上月冷水费',
    field: 'lastCoolWater',
    component: 'InputNumber',
  },
  {
    label: '本月冷水费',
    field: 'nowCoolWater',
    component: 'InputNumber',
  },
  {
    label: '上月电费',
    field: 'lastPower',
    component: 'InputNumber',
  },
  {
    label: '本月电费',
    field: 'nowPower',
    component: 'InputNumber',
  },
  {
    label: '热水用量',
    field: 'useHotWater',
    component: 'InputNumber',
  },
  {
    label: '冷水用量',
    field: 'useCoolWater',
    component: 'InputNumber',
  },
  {
    label: '电费用量',
    field: 'userPower',
    component: 'InputNumber',
  },
  {
    label: '入住天数',
    field: 'inRoomDays',
    component: 'InputNumber',
  },
  {
    label: '平均热水量',
    field: 'averageHotWater',
    component: 'InputNumber',
  },
  {
    label: '平均冷水量',
    field: 'averageCoolWater',
    component: 'InputNumber',
  },
  {
    label: '平均电费',
    field: 'averagePower',
    component: 'InputNumber',
  },
  {
    label: '热水费',
    field: 'hotWaterFee',
    component: 'InputNumber',
  },
  {
    label: '冷水费',
    field: 'coolWaterFee',
    component: 'InputNumber',
  },
  {
    label: '电费费用',
    field: 'powerFee',
    component: 'InputNumber',
  },
  {
    label: '费用总计',
    field: 'feeTotal',
    component: 'InputNumber',
  },
  {
    label: '平均热水费',
    field: 'averageHotWaterFee',
    component: 'InputNumber',
  },
  {
    label: '平均冷水费',
    field: 'averageCoolWaterFee',
    component: 'InputNumber',
  },
  {
    label: '平均电费费',
    field: 'averagePowerFee',
    component: 'InputNumber',
  },
  {
    label: '平均费用总计',
    field: 'averageFeeTotal',
    component: 'InputNumber',
  },
  {
    label: '热水单价',
    field: 'hotWaterPrice',
    component: 'InputNumber',
  },
  {
    label: '冷水单价',
    field: 'coolWaterPrice',
    component: 'InputNumber',
  },
  {
    label: '电费单价',
    field: 'powerFeePrice',
    component: 'InputNumber',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
