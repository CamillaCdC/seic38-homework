function mergeLR(l,r,k=0,a=[]){

  while (r.length>0 || l.length>0){

    if (r.length>0 && l.length>0){

      if (l[0]>r[0]) {
        a[k]=r[0];
        r.shift();

      }else if (l[0]<r[0]){
        a[k]=l[0];
        l.shift();

      }else if (l[0]===r[0]){
        a[k]=l[0];
        k=k+1;
        a[k]=r[0];
        r.shift();
        l.shift();

      }

      k = k+1;

    }else if (r.length>0 && l.length===0){

      for(i=0; i<r.length; i++){
        for(j=i; j<r.length; j++){

          if (r[j]<r[i]){
            [ r[i],r[j] ] = [ r[j],r[i] ]
          }
        }
      }

      for (i=0; i<r.length; i++){
        a[k] = r[i];
        k=k+1;
      }
      r = [];

    }else if (l.length>0 && r.length===0){

      for(i=0; i<l.length; i++){
        for(j=i; j<l.length; j++){

          if (l[j]<l[i]){
            [ l[i],l[j] ] = [ l[j],l[i] ]
          }
        }
      }

      for (i=0; i<l.length; i++){
        a[k] = l[i];
        k=k+1;
      }
      l = [];
    }
  }

  return a;
}


function mergeSort(arr,result=arr,t=0,result2=[]){

  if (result.length===1) {return result[0];}

  if ( (result.length)%2===1 && result.length>2 ) {
    
    if (Array.isArray(result[0])){
      result2.push(result[result.length-1]);
    }else{
      result2.push([result[result.length-1]]);
    }
  }

  while (t<result.length-1){
    l=[];r=[];

    if (Array.isArray(result[t])) {
      s = mergeLR(result[t],result[t+1])
      result2.push(s);
      t = t+2;

    }else{

      if (result[t]>result[t+1]) {
        l.push(result[t+1]);
        r.push(result[t]);

      }else{
        l.push(result[t]);
        r.push(result[t+1]);
      }

      s = mergeLR(l,r);
      result2.push(s);
      t = t+2;

    }
  }

  return mergeSort(arr,result=result2);
}


module.exports = mergeSort;
