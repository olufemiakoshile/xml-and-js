const timeout = (ms) => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
};

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
};

const generateData = async () => {
    await timeout(2000);
    return Array.from({ length: 20 }, 
        generateRandomNumber);
};

const convertToFeet = async (meters) => {
    await timeout(2000);
    return meters * 3.2808;
};

const processData = async (data, callback) => {
    const List = data.map(async (value) => 
    await callback(value));
    return await Promise.all(List);
};

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
};

(async () => {
    console.log("Start");
    const meterList = await generateData();
    const heightInFeet = await processData(meterList, convertToFeet);
    for (let i = 0; i < meterList.length; i++) {
        logResult(meterList[i], heightInFeet[i]);
    }
    console.log("Finish");
})();