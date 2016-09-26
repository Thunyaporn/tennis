function Tennies(player){

  this.scoreA = 0;
  this.scoreB = 0;

  if( player === 1){
      this.scoreA += 15;
      return "( " + this.scoreA + " , " + this.scoreB + " )";

  }
  else{
       this.scoreB += 15;
       return  "( " + this.scoreA + " , " + this.scoreB  + " )";
  }

}
