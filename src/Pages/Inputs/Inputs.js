import { useState } from 'react';
import InputNumber from '../../components/Inputs/InputNumber/InputNumber';
import InputSelect from '../../components/Inputs/InputSelect/InputSelect';
import InputText from "../../components/Inputs/InputText/InputText";
import InputRadioButton from '../../components/Inputs/InputRadioButton/InputRadioButton';
import InputSelectMany from '../../components/Inputs/InputSelectMany/InputSelectMany';
import InputDragFile from '../../components/Inputs/InputNumber/InputDragFile/InputDragFile';
import AddButton from '../../components/Buttons/AddButton/AddButton';
import RemoveButton from '../../components/Buttons/RemoveButton/RemoveButton';

const Inputs = () => {

    const [inputNumber, setInputNumber] = useState("");
    const [inputText, setInputText] = useState("");
    const [inputSelect, setInputSelect] = useState("");
    const [inputRadioButton, setInputRadioButton] = useState("")
    const [inputSelectMany, setInputSelectMany] = useState([]);
    const [inputFile, setInputFile] = useState();
    const [addButton, setAddButton] = useState([]);
    return (
        <div style={{ margin: "auto", width: "80%", marginTop: "1rem" }}>
            <InputText value={inputText} setValue={setInputText} id="test" label="Test label" placeholder="Test placeholder" />
            <InputSelect value={inputSelect} setValue={setInputSelect} id={"test1"} label={"select test"} placeholder={"Select test placeholder"}>
                <option value="" disabled>Select your option</option>
                <option value="test">Test</option>
                <option value="test1">Test1</option>
                <option value="test2">Test2</option>
            </InputSelect>
            <InputNumber value={inputNumber} setValue={setInputNumber} label="Label" placeholder="Test" min="-5" max="7" />
            <div>
                <label className='input__label'>Genre</label>
                <InputRadioButton className="small-margin-right" value="test" label="test" id="test" name="testGroup" selectedOption={inputRadioButton} setSelectedOption={setInputRadioButton} />
                <InputRadioButton value="test2" label="test2" id="test2" name="testGroup" selectedOption={inputRadioButton} setSelectedOption={setInputRadioButton} />
            </div>
            <InputSelectMany placeholder="Esto es el placeholder" label="Select many" id="selectmany" options={[{ value: "option1", label: "Option 1" }, { value: "option2", label: "Option 2" }]} optionsSelected={inputSelectMany} setOptionsSelected={setInputSelectMany} />
            <InputDragFile id="Drag" label="Drag and drop" inputFile={inputFile} setInputFile={setInputFile} />
            <AddButton label="Add button" inputArray={addButton} setInputArray={setAddButton} />
            <RemoveButton label="Remove button" inputArray={addButton} setInputArray={setAddButton} />
        </div>
    );
}



export default Inputs;