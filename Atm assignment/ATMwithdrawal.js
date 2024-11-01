function withdrawATM(n){
    // let bills = [0,0,0,0];
    let note100 = 0
    let note20 = 0
    let note9 = 0
    let note1 = 0


    if (n / 100 >= 1)
    {
        note100 = Math.floor(n / 100);
        n = n % (note100 * 100)
    }

    if (n / 20 >= 1)
    {
        note20 = Math.floor(n / 20);
        n = n % (note20 * 20)
    }

    if (n / 9 >= 1)
    {
        note9 = Math.floor(n / 9);
        n = n % (note9 * 9)
    }

    note1 = n;

    console.log([note100, note20, note9, note1]);
}


withdrawATM(1934)
withdrawATM(1004)
withdrawATM(120067)