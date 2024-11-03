import ReactEmbedGist from 'react-embed-gist';
const LandingPage = () => {

    return (<>
            <div className="flex flex-col items-center min:w-full py-10">
                <h1 className="text-green text-4xl font-bold sans-serif tracking-wide p-1 "> Our Yield Perdiction Model V2</h1>
            </div>
            <ReactEmbedGist gist="BettyBooGyl/7bbea9443fd3ef625e2e72fbe468d35c" titleClass="gist__title"></ReactEmbedGist>
            
    </>);
};
export default LandingPage;