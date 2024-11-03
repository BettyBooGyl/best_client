import modelVisualization from '../imgs/modelVisualization.jpg'
import model2graph1 from '../imgs/model2graph1.jpg'
import model2graph2 from '../imgs/model2gaph2.jpg'

const AboutModel = () => {

    return (<>
            <div className="flex items-center min:w-full py-20 flex-col">
                <h1 className="text-ndsu-green text-4xl font-bold sans-serif tracking-wide p-1 "> Our Model </h1>
            </div>
            
            <div className="flex items-center min:w-full grid gap-5 grid-cols-2 px-3">
                
                
            <div className="col-1">
                <div className="flex items-center flex-col">
                    <h2 className="text-ndsu-green text-xl font-bold sans-serif tracking-wide p-1"> Training metric </h2>
                </div>
                <img className="w-[500px] pr-3" src={model2graph2} />
               <h2 className="text-ndsu-text text-xl font-bold sans-serif tracking-wide p-1"> Model 1</h2>
                <p className="text-ndsu-text text-sm font-bold sans-serif tracking-wide p-1 w-30">
                    After cleaning and processing gaps in data, we traind our fist neural network model. On 100 epochs we used the mean absolute error as a metric.
                    The model was able to achieve an error rate of less than 12 bushels. 
                    This model was trained on 231 different parameters including enviromental features, 
                    phenotypic data and genomic data. The first model was only trained on one population, population 458, 
                    which had the least missing values.

                </p>
                <div className="flex items-center flex-col">
                    <h2 className="text-ndsu-green text-xl font-bold sans-serif tracking-wide p-1"> Training Loss </h2>
                </div>
                <img className="w-[500px] pr-3" src={model2graph1} />
                </div>   
            <div className="col-2">
                <div className="flex items-center flex-col">
                    <h2 className="text-ndsu-green text-xl font-bold sans-serif tracking-wide p-1"> Model 2 Architecture </h2>
                </div>
                <img className="w-[500px] pr-3" src={modelVisualization} />
                <h2 className="text-ndsu-text text-xl font-bold sans-serif tracking-wide p-1"> Model 2 </h2>
                <p className="text-ndsu-text text-sm font-bold sans-serif tracking-wide p-1 w-30">
                    This model was trained on 12 parameters. The total number of trainable parameters is 1 811 717.
                    It was trained on all populations's phenotypic and enviromental data. 
                    Empty values were removed. Some of the enviromental data was summed, some was avareged. 
                    The validation error was less than 14 bushels. 


                </p>
            </div>
                
            </div>
            
    </>);
};
export default AboutModel;