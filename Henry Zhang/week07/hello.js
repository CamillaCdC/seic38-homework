
    const total = function (a) {
        let sum = 0;
        for (var i = 2; i < a.length; i++){
            sum += Number(a[i]);
        }

        return sum;
    }
    const result = total(process.argv);
    console.log( result );
