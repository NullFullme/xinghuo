import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import moment from 'moment';
import {queryOne} from '../person/SgPerson.api';
//列表数据
export const columns: BasicColumn[] = [
  
   {
    title: '人员',
    align:"center",
    dataIndex: 'presonId_dictText'
   },
   {
    title: '原房间',
    align:"center",
    dataIndex: 'oldRoomId_dictText'
   },
   {
    title: '原床位',
    align:"center",
    dataIndex: 'oldBerthId_dictText'
   },
   {
    title: '房间',
    align:"center",
    dataIndex: 'roomId_dictText'
   },
   {
    title: '床位',
    align:"center",
    dataIndex: 'berthId_dictText'
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
    title: '调宿时间',
    align:"center",
    dataIndex: 'changeDate',
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
    title: '状态',
    align:"center",
    dataIndex: 'status_dictText'
   },
   {
    title: '备注',
    align:"center",
    dataIndex: 'remark'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
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
    label: '申请时间',
    field: 'appDate',
    component: 'DatePicker',
    colProps: { span: 12 },
    defaultValue:moment(new Date(), 'YYYY-MM-DD')
  },
  {
    label: '调宿时间',
    field: 'changeDate',
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
            formModel.oldRoomId=res.roomId;
            formModel.oldBerthId=res.berthId; 
          })
            
        }
      }
    }, 
  },
  {
    label: '原房间',
    field: 'oldRoomId',
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
    label: '原床位',
    field: 'oldBerthId',
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
    label: '房间',
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
    label: '床位',
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
	  show: false,
	},
  {
	  label: '',
	  field: 'status',
	  component: 'Input',
	  show: false,
    defaultValue:"dsh",
	},
  
  {
	  label: '',
	  field: 'personId',
	  component: 'Input',
	  show: false, 
	},
];
