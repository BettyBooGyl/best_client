import ReactEmbedGist from 'react-embed-gist';
const LandingPage = () => {

    return (<>
            <div className="flex flex-col items-center min:w-full py-10">
                <h1 className="text-green text-4xl font-bold sans-serif tracking-wide p-1 "> Our Yield Perdiction Model V2</h1>
            </div>
            <ReactEmbedGist gist="BettyBooGyl/df8ce288d3e58d957d67f8f5e13c05de" titleClass="gist__title"></ReactEmbedGist>
            
    </>);
};
export default LandingPage;