const factorialize = n => n ? n * factorialize(n - 1) : 1;

factorialize(5);