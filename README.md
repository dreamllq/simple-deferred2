# simple-deferred2

deferred for browser

## 使用方式

```
import Deferred from 'simple-deferred2';

const func = ()=>{
  let deferred = new Deferred();

  setTimeout(()=>{
    deferred.resolve({id: 1});
  }, 1000);

  return deferred.promise;
}

func().then((data)=>{
  console.log(data);
})

// out put: {id: 1}
```
