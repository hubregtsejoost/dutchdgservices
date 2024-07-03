import { useState } from "react";

function Converter() {
    // Set starting values at 0
    const [inputAh, setInputAh] = useState(0);
    const [inputVolt, setInputVolt] = useState(0);
    const [result, setResult] = useState(0);
 
    // Simple multiply of both inputs
    const convert = () => {
        const convertedResult =
            inputAh * inputVolt;
        setResult(convertedResult.toFixed(4));
    };

    return (
    <div className='w-full py-[2rem] px-4'>
    <div className='max-w-[1240px] grid mx-auto'>
        <div className="border border-black bg-white w-full shadow-md flex flex-col p-4 my-4 rounded-lg">
            <h1 className="text-3xl font-bold text-center p-3">Converter</h1>
            <p className="text-center p-2">Enter Ah and voltage and click on Calculate to convert to watt-hours (Wh).</p>
            {/* Input field 1, Ah */}
            <input
                type="number" value={inputAh} onChange={(e) => setInputAh(parseFloat(e.target.value))}
                placeholder="Enter mh" className="border border-gray-400 p-3 rounded-md m-5"/>
            {/* Input field 2, Volt */}
            <input type="number" value={inputVolt} onChange={(e) => setInputVolt(parseFloat(e.target.value))}
                placeholder="Enter volt" className="border border-gray-400 p-3 rounded-md m-5"/>
            {/* Render result */}
            <p className="text-center text-xl pt-3" id="result">{Math.round(result)} Wh</p>
            {/* Convert button */}
            <button onClick={convert} className="bg-red-400 text-white hover:bg-red-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3">Convert</button>
        </div>
    </div>
  </div>
  );
}

export default Converter;