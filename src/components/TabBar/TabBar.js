import "./TabBar.scss";
import React from 'react';

const TabBar = ({ tabNames, children, activeTab, setActiveTab }) => {

    const tabClickHandler = (index) => {
        console.log(index)
        setActiveTab(index);
    }
    return (
        <div className="tab-bar">
            <div className="tab-bar__tabs">
                {tabNames.map((tabName, i) => <button onClick={() => tabClickHandler(i)} key={i} className={`tab-bar__button ${activeTab === i ? "tab-bar__button--active" : ""}`}>{tabName}</button>)}
            </div>
            {React.Children.toArray(children).map((element, i) =>
                <div key={i} className={`${i !== activeTab ? "display-none" : ""}`}>
                    {element}
                </div>)}
        </div>
    );
}

export default TabBar;