import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
import { useState, useContext } from 'react';
import { getPerdictedYield } from '../api/requests'
const LandingPage = () => {
    
    const [ numberOfLine, setNumberOfLine ] = useState("");
    const [perdictedYield, setPerdictedYield] = useState("");
    const [ allLineNumbers, setAllLineNumbers] = useState({});
    
    return (<>
           

    </>);
};
export default LandingPage;