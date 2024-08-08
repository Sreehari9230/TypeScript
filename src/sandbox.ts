type stringORnum = string | number
type objWithName = { name: string, uid: stringORnum }

const logDeatails = (uid: stringORnum, item: string) => {
    console.log(`${item}has a uid of ${uid}`);

}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);

}
