
export const getPerdictedYield = async (lineNumber) => {
    const defaultRequest = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                "lineNumber": lineNumber
            }
        )
    };
    let result;
    const response = await fetch('http://localhost:4000/api/get-test-response', defaultRequest)
    
    result = await response.json();
    return result.message[0].this;
}