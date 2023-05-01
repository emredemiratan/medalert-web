import React, { useState } from "react";

import ButtonComponent from "../components/ButtonComponent";
import DropdownComponent from "../components/DropdownComponent";

const CustomComponents = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: "Australia", code: "AU" },
        { name: "Brazil", code: "BR" },
        { name: "China", code: "CN" },
        { name: "Egypt", code: "EG" },
        { name: "France", code: "FR" },
        { name: "Germany", code: "DE" },
        { name: "India", code: "IN" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "United States", code: "US" },
    ];

    return (
        <div className="container-fluid">
            <div className="grid my-3">
                <div className="col">
                    <h5>Buttons</h5>
                </div>
            </div>
            <div className="grid mb-3">
                <div className="col-3">
                    <ButtonComponent
                        label="blue"
                        icon="pi-check"
                        type="blue"
                        onClick={() => console.log("clicked")}
                        disabled={false}
                    />
                </div>
                <div className="col-3">
                    <ButtonComponent
                        label="turquoise"
                        icon="pi-check"
                        type="turquoise"
                        onClick={() => console.log("clicked")}
                        disabled={false}
                    />
                </div>
                <div className="col-3">
                    <ButtonComponent
                        label="gray"
                        icon="pi-check"
                        type="gray"
                        onClick={() => console.log("clicked")}
                        disabled={false}
                    />
                </div>
                <div className="col-3">
                    <ButtonComponent
                        label="lightblue"
                        icon="pi-check"
                        type="lightblue"
                        onClick={() => console.log("clicked")}
                        disabled={false}
                    />
                </div>
            </div>
            <div className="grid mb-3">
                <div className="col">
                    <h5>Dropdown</h5>
                </div>
            </div>
            <div className="grid mb-3">
                <div className="col">
                    <DropdownComponent
                        value={selectedCountry}
                        label="Select a City"
                        onChange={(e) => setSelectedCountry(e.value)}
                        options={countries}
                        optionLabel="name"
                        placeholder="Select a City"
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomComponents;
