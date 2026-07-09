// default parameter

// parameter ko value de dena

function abcd(a=0,b=0,c=0){
  console.log(a,b,c);
}

abcd(1,2,3);
abcd(4,5,6);
abcd(1);

// koi value nahi bheja to , parameter ke andar value jo set ki hogi ,wo value le lega , agar koi value set nahi ki parameter ke andar toh , wo undefined batadega