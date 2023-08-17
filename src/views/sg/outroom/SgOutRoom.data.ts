import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import moment from 'moment';
import {queryOne} from '../person/SgPerson.api';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '申请时间',
    align:"center",
    dataIndex: 'appDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
  {
    title: '退宿时间',
    align:"center",
    dataIndex: 'outRoomDate'
   },
   {
    title: '人员',
    align:"center",
    dataIndex: 'presonId_dictText'
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
    title: '入住天数',
    align:"center",
    dataIndex: 'inRoomDays'
   },
   {
    title: '总费用',
    align:"center",
    dataIndex: 'allCost'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   
   {
    title: '审核时间',
    align:"center",
    dataIndex: 'audDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
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
    label: '申请时间',
    field: 'appDate',
    component: 'DatePicker',
    colProps: { span: 12 },
    defaultValue:moment(new Date(), 'YYYY-MM-DD')
  },
  {
    label: '退宿时间',
    field: 'outRoomDate',
    component: 'DatePicker',
    colProps: { span: 12 },
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '人员',
    field: 'presonId',
    component: 'JSelectPerson',
    colProps: { span: 12 },
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return { 
        rowKey: 'id',
        labelKey: 'name',
        isRadioSelection: true, 
        params:{"status":"rs"}, 
        onChange:e=>{      
          queryOne({id:e[0]}).then(res=>{
            formModel.roomId=res.roomId;
            formModel.berthId=res.berthId; 
            formModel.recipientsRoomCard=res.recipientsRoomCard;
            formModel.recipientsBerthCard=res.recipientsBerthCard;
            formModel.costBearing=res.costBearing;

          })
            
        }
      }
    },
  },
  {
    label: '入住天数',
    field: 'inRoomDays',
    colProps: { span: 12 },
    component: 'InputNumber',
  },
  {
    label: '房间',
    field: 'roomId',
    component: 'JSelectRoom',
    colProps: { span: 12 },
    componentProps: {
      rowKey: 'id',
      labelKey: 'name',
      isRadioSelection: true, 
      disabled: true,
    },
  },
  {
    label: '床位',
    field: 'berthId',
    colProps: { span: 12 },
    component: 'JSelectBerth', 
    componentProps: {
      rowKey: 'id',
      labelKey: 'name',
      isRadioSelection: true, 
      disabled: true,
    },
  },
  {
    label: '领用房卡',
    field: 'recipientsRoomCard',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"shzf", 
     },
    colProps: { span: 12 },
  }, 
  {
    label: '床卡费用',
    field: 'berthCardCost',
    colProps: { span: 12 },
    component: 'InputNumber',
  },
  
  {
    label: '领用床卡',
    field: 'recipientsBerthCard',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode:"shzf",  
     },
    colProps: { span: 12 },
  },  
  {
    label: '房卡费用',
    field: 'roomCardCost',
    colProps: { span: 12 },
    component: 'InputNumber',
  },
  {
    label: '上个月费用',
    field: 'lastMonthCost',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '本月费用',
    field: 'nowMonthCost',
    component: 'InputNumber',
    colProps: { span: 12 },
  },
  {
    label: '费用承担',
    field: 'costBearing',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"cdfs"
     },
    colProps: { span: 12 },
  },
  {
    label: '总费用',
    field: 'allCost',
    colProps: { span: 12 },
    component: 'InputNumber',
  },
  
  
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
  {
	  label: '',
	  field: 'status',
	  component: 'Input',
	  show: false,
    defaultValue:"dsh",
	},
];
