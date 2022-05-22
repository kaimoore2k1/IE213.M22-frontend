import { AutoComplete } from "antd";
interface propsType{
    disabled: boolean;
}
const AddressAutocomplate = (props:propsType)=>{
    
    return <AutoComplete disabled={props.disabled}></AutoComplete>
}
export default AddressAutocomplate;