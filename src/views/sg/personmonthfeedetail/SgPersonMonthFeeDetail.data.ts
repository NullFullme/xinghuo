import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '月份',
    align:"center",
    dataIndex: 'feeMonth'
   },
  //  {
  //   title: '人员',
  //   align:"center",
  //   dataIndex: 'feePersonId_dictText'
  //  },
   {
    title: '冷水费',
    align:"center",
    dataIndex: 'feeCoolFee'
   },
   {
    title: '热水费',
    align:"center",
    dataIndex: 'feeHotFee'
   },
   {
    title: '电费',
    align:"center",
    dataIndex: 'feePowerFee'
   },
   {
    title: '缴费状态',
    align:"center",
    dataIndex: 'feeStatus_dictText'
   },
   {
    title: '姓名',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '人员编号',
    align:"center",
    dataIndex: 'code'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'sex'
   },
   {
    title: '电话',
    align:"center",
    dataIndex: 'phone'
   },
   {
    title: '出生日期',
    align:"center",
    dataIndex: 'birthday',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '身份证',
    align:"center",
    dataIndex: 'idcard'
   },
   {
    title: '年龄',
    align:"center",
    dataIndex: 'age'
   },
   {
    title: '家庭住址',
    align:"center",
    dataIndex: 'address'
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
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
   {
    title: '所属部门',
    align:"center",
    dataIndex: 'thosedept'
   },
   {
    title: '所属科室',
    align:"center",
    dataIndex: 'thoseoffice'
   },
   {
    title: '所属班组',
    align:"center",
    dataIndex: 'thosegroup'
   },
   {
    title: '入宿时间',
    align:"center",
    dataIndex: 'inRoomDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '退宿时间',
    align:"center",
    dataIndex: 'outRoomDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '床卡费用',
    align:"center",
    dataIndex: 'berthCardCost'
   },
   {
    title: '床卡退还',
    align:"center",
    dataIndex: 'recipientsBerthCard_dictText'
   },
   {
    title: '房卡费用',
    align:"center",
    dataIndex: 'roomCardCost'
   },
   {
    title: '房卡退还',
    align:"center",
    dataIndex: 'recipientsRoomCard_dictText'
   },
   {
    title: '上个月费用',
    align:"center",
    dataIndex: 'lastMonthCost'
   },
   {
    title: '本月费用',
    align:"center",
    dataIndex: 'nowMonthCost'
   },
   {
    title: '费用承担',
    align:"center",
    dataIndex: 'costBearing_dictText'
   },
   {
    title: '总费用',
    align:"center",
    dataIndex: 'allCost'
   },
   {
    title: '入住天数',
    align:"center",
    dataIndex: 'inRoomDays'
   },
   {
    title: '调宿次数',
    align:"center",
    dataIndex: 'changeTime'
   },
   {
    title: '初始入住时间',
    align:"center",
    dataIndex: 'initInRoomDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: '月份',
    field: 'feeMonth',
    component: 'Input',
  },
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
  },
  {
    label: '人员编号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '性别',
    field: 'sex',
    component: 'Input',
  },
  {
    label: '电话',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '身份证',
    field: 'idcard',
    component: 'Input',
  },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '月份',
    field: 'feeMonth',
    component: 'Input',
  },
  {
    label: '人员',
    field: 'feePersonId',
    component: 'Input',
  },
  {
    label: '冷水费',
    field: 'feeCoolFee',
    component: 'InputNumber',
  },
  {
    label: '热水费',
    field: 'feeHotFee',
    component: 'InputNumber',
  },
  {
    label: '电费',
    field: 'feePowerFee',
    component: 'InputNumber',
  },
  {
    label: 'feeStatus',
    field: 'feeStatus',
    component: 'Input',
  },
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
  },
  {
    label: '人员编号',
    field: 'code',
    component: 'Input',
  },
  {
    label: '性别',
    field: 'sex',
    component: 'Input',
  },
  {
    label: '电话',
    field: 'phone',
    component: 'Input',
  },
  {
    label: '出生日期',
    field: 'birthday',
    component: 'DatePicker',
  },
  {
    label: '身份证',
    field: 'idcard',
    component: 'Input',
  },
  {
    label: '年龄',
    field: 'age',
    component: 'InputNumber',
  },
  {
    label: '家庭住址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '所属公司',
    field: 'companyId',
    component: 'Input',
  },
  {
    label: '劳务公司',
    field: 'laborId',
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
    label: '状态',
    field: 'status',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '所属部门',
    field: 'thosedept',
    component: 'Input',
  },
  {
    label: '所属科室',
    field: 'thoseoffice',
    component: 'Input',
  },
  {
    label: '所属班组',
    field: 'thosegroup',
    component: 'Input',
  },
  {
    label: '入宿时间',
    field: 'inRoomDate',
    component: 'DatePicker',
  },
  {
    label: '退宿时间',
    field: 'outRoomDate',
    component: 'DatePicker',
  },
  {
    label: '床卡费用',
    field: 'berthCardCost',
    component: 'InputNumber',
  },
  {
    label: '床卡退还',
    field: 'recipientsBerthCard',
    component: 'Input',
  },
  {
    label: '房卡费用',
    field: 'roomCardCost',
    component: 'InputNumber',
  },
  {
    label: '房卡退还',
    field: 'recipientsRoomCard',
    component: 'Input',
  },
  {
    label: '上个月费用',
    field: 'lastMonthCost',
    component: 'InputNumber',
  },
  {
    label: '本月费用',
    field: 'nowMonthCost',
    component: 'InputNumber',
  },
  {
    label: '费用承担',
    field: 'costBearing',
    component: 'Input',
  },
  {
    label: '总费用',
    field: 'allCost',
    component: 'Input',
  },
  {
    label: '入住天数',
    field: 'inRoomDays',
    component: 'Input',
  },
  {
    label: '调宿次数',
    field: 'changeTime',
    component: 'InputNumber',
  },
  {
    label: '初始入住时间',
    field: 'initInRoomDate',
    component: 'DatePicker',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
