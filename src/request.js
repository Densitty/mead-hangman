//Using the Async function
const getPuzzle = async (numberOfWords) => {

    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${numberOfWords}`);
    if (response.status === 200) {
        const data = await response.json();
        //console.log(data)
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }


}

export default getPuzzle;