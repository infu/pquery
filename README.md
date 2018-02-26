# pQuery
Photoshop ExtendScript library for civilized scripting
This library is so far only concept and has only three functions.
It stayed in my forum for a while as an answer, but I decided to put it here
and if people show interest, it can grow.
Feel free to contribute :)

The way it currently works:
![](http://upload.aula.bg/screenshot11d7964-1d0e8fd82.jpg) 


Example move
```
pQuery("proba").move(50,50);
```


Example loop with chained commands
```
for(var i=0; i<20; i++) {
    pQuery("proba").dup().move(200 + i * 40,50 + i * 5);
    }
```

![](http://upload.aula.bg/screenshot2e0b6a2-13f1d536.jpg)

