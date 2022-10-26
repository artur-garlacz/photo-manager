export function generateGridData<T>(data: T[], perChunk = 3) {
    const result = data.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, [] as T[][]);

    return result;
}
