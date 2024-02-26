import { head } from "lodash";


export default function makeTable() {
    const table = [];
    var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var newAlph;

    for (let i = 1; i < 27; i ++) {
        
        var cutout = alph.shift();
        alph.push(cutout);

        newAlph = alph.toString();
        newAlph = newAlph.replace(/,/g, "");

        var alphabet = [];
        alphabet = newAlph.split("");

        table.push(alphabet);
    }
    
    return table;
}


export function encode(string) {
    //Scope Variables
    var string = string;
    var vigtable = makeTable();
    const letterValues = {
        values: {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f: 6,
            g: 7,
            h: 8,
            i: 9,
            j: 10,
            k: 11,
            l: 12,
            m: 13,
            n: 14,
            o: 15,
            p: 16,
            q: 17,
            r: 18,
            s: 19,
            t: 20,
            u: 21,
            v: 22,
            w: 23,
            x: 24,
            y: 25,
            z: 26
        },
        returnValues(array) {
            const numbers = [];
            for (let i = 0; i < array.length; i++) {
                numbers.push(this.values[array[i]]);
            }
            return numbers;
        },
    };

    //string to array
    var stringArray = [];
    stringArray = string.split("");
    // console.log(stringArray);
    // console.log(vigtable);


    //Polyalphabet selections
    const polyBets = [];

    for (let i = 0; i < stringArray.length; i++) {
        var polyBet = vigtable[Math.floor(Math.random() * 26)];


        polyBets.push(polyBet);
    }
    
    // console.log(polyBets);
    // console.log(letterValues);


    //Determine letter values
    var values = letterValues.returnValues(stringArray);
    // console.log(values);


    // Encode
    var cryptArray = [];

    for (let i = 0; i < values.length; i++) {
        let value = values[i];

        cryptArray.push(polyBets[i][value]);
        // console.log(cryptArray);
    }

    var encryption = cryptArray.toString();
    encryption = encryption.replace(/,/g, "");
    // console.log(encryption);

    return encryption;
}