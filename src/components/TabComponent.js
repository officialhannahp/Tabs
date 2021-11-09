import React, {useState} from 'react'
import Button from './Button';
import Display from './Display';

const TabComponent = props => {
    const [state, setState] = useState({
        selectedTab: 1
    });


    const onClickHandler = (e, value) => {
        // e.preventDefault();
        setState({
            selectedTab: value
        });
    };

    return (
        <div>
            <div>
                {[1,2,3].map((elem, i)=> (
                    <Button 
                        key={i}
                        onClick={ e => onClickHandler(e, elem) }
                        selected= {state.selectedTab === elem}
                    >
                    Tab {elem}
                    </Button>
                ))}

                {/* <Button onClick= { (e) => onClickHandler (e, "Tab 1") }>Tab 1</Button>
            
                <Button onClick= { (e) => onClickHandler (e, "Tab 2") }>Tab 2</Button>
            
                <Button onClick= { (e) => onClickHandler (e, "Tab 3") }>Tab 3</Button> */}
            </div>
            <div>
                <Display>Tab {state.selectedTab} is currntly showing.</Display>
            </div>
            
        </div>
    )
}

export default TabComponent
