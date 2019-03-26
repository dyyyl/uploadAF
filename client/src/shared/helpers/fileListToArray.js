const fileListToArray = list => Object.values(list).reduce((acc, cur) => acc.concat(cur), []);

export default fileListToArray;
