const AboutModel = () => {

    return (<>
            <div className="flex flex-col items-center min:w-full py-10">
                <h1 className="text-green text-4xl font-bold sans-serif tracking-wide p-1 "> Our Model </h1>
                <h2> Model 1</h2>
                <p>
                    After cleaning and processing gaps in data, we traind our fist neural network model. On 100 epochs we used the mean absolute error as a metric. The model was able to achieve an errror rate of less than 12 bushels. 
                    This model was trained on 231 different parameters including enviromental features, phenotypic data and genomic data. The first model was only trained on one population, population 458, which had the least missing values.

                </p>
                <h2> Model 2 </h2>
                <p>
                    This model was trained on 12 parameters. It was trained on all populations's phenotypic and enviromental data. Empty values were removed. Some of the enviromental data was summed, some was avareged.
                </p>
            </div>
            
    </>);
};
export default AboutModel;