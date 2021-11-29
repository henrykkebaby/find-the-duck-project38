class Model{

      constructor(highScore=[]){
            this.highScore = highScore;
      }

      addObserver(callback){
            this.observers = this.observers.concat(callback);
      }

      removeObserver(callback){
            this.observers = this.observers.filter(x=> x !=callback);

      }
      
      notifyObservers(){
      console.log("Notify observer called");
      this.observers.forEach(cb=>{
            setTimeout(()=> {
                  try{
                        cb()
                  }
                  catch(error){
                        Error(error, cb);
                  }
            },0)
      })
      
      }
  
};

export default Model;



   






