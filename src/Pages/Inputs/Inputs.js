import InputSelect from '../../components/Inputs/InputSelect/InputSelect';
import InputText from "../../components/Inputs/InputText/InputText";

const Inputs = () => {

    return (
        <div>
            <InputText id="test" label="Test label" placeholder="Test placeholder" />
            <InputSelect id={"test1"} label={"select test"} placeholder={"Select test placeholder"}>
                <option value="test">Test</option>
                <option value="test1">Test1</option>
                <option value="test2">Test2</option>
            </InputSelect>
        </div>
    );
}



export default Inputs;