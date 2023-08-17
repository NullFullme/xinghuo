import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import moment from 'moment';
import {getInfoBIidCard} from '/@/utils/customUtil';
//列表数据
export const columns: BasicColumn[] = [
  
  {
    title: '身份证',
    align:"center",
    dataIndex: 'idcard'
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
    dataIndex: 'sex_dictText'
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
    title: '年龄',
    align:"center",
    dataIndex: 'age'
   },
   {
    title: '电话',
    align:"center",
    dataIndex: 'phone'
   },
   {
    title: '家庭住址',
    align:"center",
    dataIndex: 'address'
   },
   {
    title: '劳务公司',
    align:"center",
    dataIndex: 'laborId_dictText'
   },
   {
    title: '所属公司',
    align:"center",
    dataIndex: 'companyId_dictText'
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
    title: '费用承担',
    align:"center",
    dataIndex: 'costBearing_dictText'
   },
   {
    title: '领用房卡',
    align:"center",
    dataIndex: 'recipientsBerthCard_dictText'
   },
   {
    title: '领用床卡',
    align:"center",
    dataIndex: 'recipientsRoomCard_dictText'
   },
   {
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '申请时间',
    align:"center",
    dataIndex: 'appDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '入宿时间',
    align:"center",
    dataIndex: 'inRoomDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,16):text)
    },
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
    label: '申请日期',
    field: 'appDate',
    component: 'DatePicker',
    colProps: { span: 12 },
    defaultValue:moment(new Date(), 'YYYY-MM-DD')
  },
  {
    label: '入宿时间',
    field: 'inRoomDate',
    component: 'DatePicker',
    colProps: { span: 12 },
    defaultValue:moment(new Date(), 'YYYY-MM-DD HH:mm'),
    componentProps:{
      showTime:true
    }
    
  },
  {
    label: '身份证',
    field: 'idcard',
    component: 'Input',
    colProps: { span: 12 },
    componentProps:({ schema, tableAction, formActionType, formModel }) => {
      return {  
        onChange:e=>{     
          const {age, sex, birth}= getInfoBIidCard(e.target.value)
          if(!(birth=="")){
            formModel.sex=sex;
            formModel.age=age;
            formModel.birthday=birth;
          }  
          
        }
      }
    
    }
  },
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '人员编号',
    field: 'code',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '性别',
    field: 'sex',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex",
        stringToNumber:true,
        disabled: true,
     },
    colProps: { span: 12 },
  },
  {
    label: '电话',
    field: 'phone',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '出生日期',
    field: 'birthday',
    component: 'DatePicker',
    componentProps: { 
      disabled: true,
    },
    colProps: { span: 12 },
  },
  
  {
    label: '年龄',
    field: 'age',
    component: 'InputNumber',
    colProps: { span: 12 },
    componentProps: { 
      disabled: true,
    },
  },
  {
    label: '家庭住址',
    field: 'address',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '房间号',
    field: 'roomId',
    component: 'JSelectRoom',
    componentProps: ({ schema, tableAction, formActionType, formModel }) => {
      return { 
        rowKey: 'id',
        labelKey: 'name',
        isRadioSelection: true, 
        onChange:e=>{     
          const { updateSchema } = formActionType;
          updateSchema(
            { 
              field: 'berthId',  
              componentProps: { 
                params:{"roomId":e[0]},
                disabled: false,
              },
             
          });
        }
      }
    },
    colProps: { span: 12 },
  },
  {
    label: '床位号',
    field: 'berthId', 
    colProps: { span: 12 },
    component: 'JSelectBerth', 
    componentProps: {
      rowKey: 'id',
      labelKey: 'name',
      isRadioSelection: true,
      params:{"roomId":""},
      disabled: true,
    },
  }, 
  {
    label: '劳务公司',
    field: 'laborId',
    component: 'JSelectDept',
    colProps: { span: 12 },
    componentProps: { 
      isRadioSelection: true,  
    },
  },
  {
    label: '所属公司',
    field: 'companyId',
    component: 'JSelectDept',
    colProps: { span: 12 },
    componentProps: { 
      isRadioSelection: true,  
    },
  },
  {
    label: '所属部门',
    field: 'thosedept',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '所属科室',
    field: 'thoseoffice',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: '所属班组',
    field: 'thosegroup',
    component: 'Input',
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
    label: '领用房卡',
    field: 'recipientsRoomCard',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"shzf"
     },
    colProps: { span: 12 },
  },
  {
    label: '领用床卡',
    field: 'recipientsBerthCard',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"shzf"
     },
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
  {
	  label: '',
	  field: 'personId',
	  component: 'Input',
	  show: false
	},
];
