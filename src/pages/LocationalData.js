import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
const LocationalData = () => {
    return (
        <>
            <div className="col-span-1">
                <TableauEmbed sourceUrl="https://public.tableau.com/views/YieldbyLocation/Sheet4?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"/>  
            </div>
            <div className="col-span-1">
                <TableauEmbed sourceUrl="https://public.tableau.com/views/YieldandmoisturefilterbyLine/Sheet3?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                toolbar="hidden" hide-tabs="true"/>  
            </div>
    </>);
};
export default LocationalData;