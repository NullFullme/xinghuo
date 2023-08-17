import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
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
    dataIndex: 'sex_dictText'
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
    dataIndex: 'inRoomDate'
   },
   {
    title: '退宿时间',
    align:"center",
    dataIndex: 'outRoomDate'
   },
   {
    title: '床卡费用',
    align:"center",
    dataIndex: 'berthCardCost'
   },
   {
    title: '床卡退还',
    align:"center",
    dataIndex: 'retreatBrethCard'
   },
   {
    title: '房卡费用',
    align:"center",
    dataIndex: 'roomCardCost'
   },
   {
    title: '房卡退还',
    align:"center",
    dataIndex: 'retreatRoomCard'
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
    dataIndex: 'costBearing'
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
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "姓名",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "人员编号",
      field: 'code',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "电话",
      field: 'phone',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "身份证",
      field: 'idcard',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "所属公司",
      field: 'companyId',
      component: 'JSelectDept',
      colProps: {span: 6},
 	},
	{
      label: "劳务公司",
      field: 'laborId',
      component: 'JSelectDept',
      colProps: {span: 6},
 	},
	{
      label: "房间号",
      field: 'roomId',
      component: 'JSelectUserByDept',
      colProps: {span: 6},
 	},
	{
      label: "状态",
      field: 'status',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"fpzt"
      },
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
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
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex"
     },
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
     component: 'JSelectDept',
  },
  {
    label: '劳务公司',
    field: 'laborId',
     component: 'JSelectDept',
  },
  {
    label: '房间号',
    field: 'roomId',
    component: 'JSelectUserByDept',
    componentProps:{
        labelKey:'realname',
     },
  },
  {
    label: '床位号',
    field: 'berthId',
    component: 'JSelectUserByDept',
    componentProps:{
        labelKey:'realname',
     },
  },
  {
    label: '状态',
    field: 'status',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"fpzt"
     },
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
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '退宿时间',
    field: 'outRoomDate',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
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
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
